/**
 * Browser glue for the sky view: the phone's orientation sensor, its compass, and location.
 * Everything here touches browser APIs; the maths it feeds lives in `camera.ts`.
 *
 * Both sensors need a secure page (https or localhost). iOS also needs the user to tap
 * something before it will ask for motion access.
 */

import { type CompassTurn, compassTurn, deviceRotation } from './camera'
import type { Observer } from './frames'
import { DEG, type Mat3 } from './vec'

/** iOS Safari adds a permission prompt and a compass heading to the standard event. */
interface OrientationEventWithCompass extends DeviceOrientationEvent {
  webkitCompassHeading?: number
}
interface OrientationEventClass {
  requestPermission?: () => Promise<'granted' | 'denied'>
}

export interface OrientationReading {
  /** Phone axes → east-north-up, except that "north" may be arbitrary: see `turn` */
  rotation: Mat3
  /**
   * How far to turn `rotation` about the vertical to line it up with the compass, and how much
   * to trust that. Null when this reading says nothing about north (no compass, or the phone
   * is at an angle where a heading means nothing): keep using the last known value.
   */
  compass: CompassTurn | null
}

/** True on devices that are likely to have an orientation sensor worth asking for. */
export function hasOrientationSensor(): boolean {
  return 'DeviceOrientationEvent' in window && window.matchMedia('(pointer: coarse)').matches
}

/** True where motion access has to be asked for, and only from a touch or click handler (iOS). */
export function orientationNeedsTouch(): boolean {
  if (!('DeviceOrientationEvent' in window)) return false
  return typeof (DeviceOrientationEvent as unknown as OrientationEventClass).requestPermission === 'function'
}

/** Asks for motion access where the browser requires it (iOS). Call from a tap or click handler. */
export async function requestOrientationAccess(): Promise<'granted' | 'denied' | 'unsupported'> {
  if (!('DeviceOrientationEvent' in window)) return 'unsupported'
  const request = (DeviceOrientationEvent as unknown as OrientationEventClass).requestPermission
  if (typeof request !== 'function') return 'granted' // Android and desktop do not ask
  try {
    return await request()
  } catch {
    return 'denied'
  }
}

/**
 * Starts listening to the orientation sensor. Returns a function that stops it.
 *
 * Android fires `deviceorientationabsolute`, whose angles are already compass-referenced.
 * iOS fires `deviceorientation` with angles relative to where the phone started, plus
 * `webkitCompassHeading`; the two are reconciled by `compassTurn`.
 */
export function watchOrientation(onReading: (reading: OrientationReading) => void): () => void {
  let sawAbsolute = false

  const handle = (event: Event): void => {
    const e = event as OrientationEventWithCompass
    if (e.alpha === null || e.beta === null || e.gamma === null) return
    const absolute = event.type === 'deviceorientationabsolute' || e.absolute
    if (absolute) sawAbsolute = true
    else if (sawAbsolute) return // prefer the compass-referenced stream once it exists

    const rotation = deviceRotation(e.alpha, e.beta, e.gamma)
    let compass: CompassTurn | null = null
    if (absolute) compass = { turn: 0, confidence: 1 }
    else if (typeof e.webkitCompassHeading === 'number' && e.webkitCompassHeading >= 0)
      compass = compassTurn(rotation, e.alpha, e.webkitCompassHeading)
    onReading({ rotation, compass })
  }

  window.addEventListener('deviceorientationabsolute', handle)
  window.addEventListener('deviceorientation', handle)
  return () => {
    window.removeEventListener('deviceorientationabsolute', handle)
    window.removeEventListener('deviceorientation', handle)
  }
}

/** How the page is rotated on the screen, in degrees (0 in portrait on a phone). */
export function screenAngleDeg(): number {
  const legacy = (window as unknown as { orientation?: number }).orientation
  return window.screen.orientation?.angle ?? legacy ?? 0
}

/** Asks the browser where the user is. Rejects if refused, unavailable or slow. */
export function locate(): Promise<Observer> {
  return new Promise((resolve, reject) => {
    if (!('geolocation' in navigator)) {
      reject(new Error('This browser cannot report a location.'))
      return
    }
    navigator.geolocation.getCurrentPosition(
      (position) => resolve({ latRad: position.coords.latitude * DEG, lonRad: position.coords.longitude * DEG }),
      (error) => reject(new Error(error.message)),
      { enableHighAccuracy: false, timeout: 15_000, maximumAge: 600_000 }, // a few km is plenty for the sky
    )
  })
}

const STORAGE_KEY = 'sidereal:observer'

/** The last location the user shared, kept on this device only. */
export function loadObserver(): Observer | null {
  try {
    const saved: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? 'null')
    if (typeof saved !== 'object' || saved === null) return null
    const { latDeg, lonDeg } = saved as { latDeg?: unknown; lonDeg?: unknown }
    if (typeof latDeg !== 'number' || typeof lonDeg !== 'number') return null
    if (Math.abs(latDeg) > 90 || Math.abs(lonDeg) > 180) return null
    return { latRad: latDeg * DEG, lonRad: lonDeg * DEG }
  } catch {
    return null // storage blocked or corrupt: carry on without it
  }
}

export function saveObserver(observer: Observer): void {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ latDeg: observer.latRad / DEG, lonDeg: observer.lonRad / DEG }),
    )
  } catch {
    // storage blocked: the location simply is not remembered
  }
}

/**
 * A stand-in until the real location is known: longitude from the clock's time zone
 * (15° per hour), latitude 40° N. Good enough to put roughly the right stars up for much of
 * the northern hemisphere, and labelled as approximate in the UI.
 */
export function guessObserver(now = new Date()): Observer {
  return { latRad: 40 * DEG, lonRad: (-now.getTimezoneOffset() / 4) * DEG }
}

/** Keeps the screen on while stargazing, where the browser allows it. Returns a release function. */
export function keepScreenOn(): () => void {
  let lock: WakeLockSentinel | null = null
  let released = false
  const acquire = (): void => {
    if (released || document.visibilityState !== 'visible' || !('wakeLock' in navigator)) return
    navigator.wakeLock.request('screen').then(
      (sentinel) => {
        lock = sentinel
        if (released) void sentinel.release()
      },
      () => {}, // refused (low battery, unsupported): not worth telling the user
    )
  }
  acquire()
  document.addEventListener('visibilitychange', acquire) // the lock is dropped whenever the page is hidden
  return () => {
    released = true
    document.removeEventListener('visibilitychange', acquire)
    void lock?.release()
  }
}
