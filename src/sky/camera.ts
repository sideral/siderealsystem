/**
 * The view: where the screen is pointing, and how directions land on it.
 *
 * A `Camera` is three unit vectors in the east-north-up frame: the screen's right, the screen's
 * up, and the direction looked along (into the screen, out of the phone's back).
 *
 * The projection is **stereographic**, centred on the view direction: an angle θ off-centre
 * lands at r = 2f·tan(θ/2). It keeps small shapes undistorted at any field of view, and it
 * turns every circle on the sky (the horizon included) into a circle on the screen.
 */

import { DEG, type Mat3, type Vec3, add, cross, dot, mulMat, mulMatVec, normalize, rotX, rotY, rotZ, scale, wrapPi } from './vec'

export interface Camera {
  right: Vec3
  up: Vec3
  forward: Vec3
}

export interface Viewport {
  /** CSS pixels */
  width: number
  height: number
  /** Field of view across the longer side of the screen */
  fovRad: number
}

/** A camera looking at a given azimuth and altitude, with the horizon level. */
export function cameraFromHorizontal(azRad: number, altRad: number): Camera {
  const ca = Math.cos(altRad)
  const forward: Vec3 = [ca * Math.sin(azRad), ca * Math.cos(azRad), Math.sin(altRad)]
  const right: Vec3 = [Math.cos(azRad), -Math.sin(azRad), 0]
  return { right, up: cross(right, forward), forward }
}

/**
 * Phone orientation angles → rotation from the phone's own axes to east-north-up.
 * The phone's axes: x to the right of the screen, y to its top, z out of the screen toward you.
 * Per the W3C Device Orientation spec the rotation is Z(alpha) · X(beta) · Y(gamma).
 * `alpha` is only a compass angle when the browser says it is absolute; see `compassTurn`.
 */
export function deviceRotation(alphaDeg: number, betaDeg: number, gammaDeg: number): Mat3 {
  return mulMat(rotZ(alphaDeg * DEG), mulMat(rotX(betaDeg * DEG), rotY(gammaDeg * DEG)))
}

/**
 * Camera for a phone held up to the sky: it looks out of the phone's back.
 * `screenAngleDeg` is `screen.orientation.angle`, for when the page is shown in landscape.
 */
export function cameraFromDevice(rotation: Mat3, screenAngleDeg = 0): Camera {
  const c = Math.cos(screenAngleDeg * DEG)
  const s = Math.sin(screenAngleDeg * DEG)
  return {
    right: mulMatVec(rotation, [c, -s, 0]),
    up: mulMatVec(rotation, [s, c, 0]),
    forward: mulMatVec(rotation, [0, 0, -1]),
  }
}

/** Turns a camera about the vertical, clockwise seen from above (so azimuth grows by `angle`). */
export function turnCamera(camera: Camera, angle: number): Camera {
  const turn = rotZ(-angle)
  return { right: mulMatVec(turn, camera.right), up: mulMatVec(turn, camera.up), forward: mulMatVec(turn, camera.forward) }
}

export interface CompassTurn {
  /** Turn about the vertical, clockwise seen from above */
  turn: number
  /** 0 to 1: how far the phone's top edge is from vertical, where its heading means little */
  confidence: number
}

/**
 * How far to turn a phone-relative frame so that it agrees with a compass.
 *
 * iOS reports orientation relative to wherever the phone pointed when the page opened, plus a
 * separate compass heading. That heading is the yaw of the same Z·X·Y angles, measured
 * clockwise from north: heading = 360° − alpha, had alpha been north-referenced. It is **not**
 * the direction of the top edge: tip the phone back past upright to look at the sky and the top
 * edge swings round behind you while the heading stays put. Taking it for the top edge put
 * the sky 180° out. Since turning the frame about the vertical only shifts alpha, the turn is
 * simply alpha + heading.
 *
 * Near upright (top edge within about 6° of vertical) yaw and roll blur together and the
 * heading is noisy: this returns null there, and confidence only reaches 1 about 30° away.
 */
export function compassTurn(rotation: Mat3, alphaDeg: number, headingDeg: number): CompassTurn | null {
  const top = mulMatVec(rotation, [0, 1, 0])
  const horizontal = Math.hypot(top[0], top[1])
  if (horizontal < 0.1) return null
  return {
    turn: wrapPi((alphaDeg + headingDeg) * DEG),
    confidence: Math.min(1, (horizontal - 0.1) / 0.4),
  }
}

/** Moves a fraction `t` of the way from one camera to another, for smoothing sensor jitter. */
export function blendCameras(from: Camera, to: Camera, t: number): Camera {
  const forward = normalize(add(scale(from.forward, 1 - t), scale(to.forward, t)))
  const roughUp = add(scale(from.up, 1 - t), scale(to.up, t))
  const up = normalize(add(roughUp, scale(forward, -dot(roughUp, forward))))
  return { right: cross(forward, up), up, forward }
}

/** Pixels per unit of tan(θ/2)·2: the stereographic scale that gives the viewport its field of view. */
export function focalLength(view: Viewport): number {
  return Math.max(view.width, view.height) / 2 / (2 * Math.tan(view.fovRad / 4))
}

/** Directions closer than this to straight behind the camera are not drawn. */
const BEHIND = -0.92

/** East-north-up direction → screen position in CSS pixels, or null if it is behind the view. */
export function project(direction: Vec3, camera: Camera, view: Viewport): { x: number; y: number } | null {
  const z = dot(direction, camera.forward)
  if (z < BEHIND) return null
  const k = (2 * focalLength(view)) / (1 + z)
  return {
    x: view.width / 2 + k * dot(direction, camera.right),
    y: view.height / 2 - k * dot(direction, camera.up),
  }
}

/** Screen position → east-north-up direction. The inverse of `project`. */
export function unproject(x: number, y: number, camera: Camera, view: Viewport): Vec3 {
  const f2 = 2 * focalLength(view)
  const px = (x - view.width / 2) / f2
  const py = (view.height / 2 - y) / f2
  const p2 = px * px + py * py
  const k = 2 / (1 + p2)
  return normalize(
    add(add(scale(camera.right, k * px), scale(camera.up, k * py)), scale(camera.forward, (1 - p2) / (1 + p2))),
  )
}

export type HorizonShape =
  | { kind: 'circle'; x: number; y: number; radius: number; skyInside: boolean }
  /** A straight horizon through (x, y); (nx, ny) is the screen direction that points to the sky side */
  | { kind: 'line'; x: number; y: number; nx: number; ny: number }

/**
 * Where the horizon falls on the screen. Under a stereographic projection it is a circle of
 * radius 2f/|u_z| centred 2f·(u_x, u_y)/u_z from the middle, where u is the zenith direction
 * in camera axes. Looking straight at the horizon (u_z = 0) the circle opens into a line.
 */
export function horizonOnScreen(camera: Camera, view: Viewport): HorizonShape {
  const ux = camera.right[2]
  const uy = camera.up[2]
  const uz = camera.forward[2]
  const f2 = 2 * focalLength(view)
  const cx = view.width / 2
  const cy = view.height / 2
  if (Math.abs(uz) < 1e-3) {
    const length = Math.hypot(ux, uy)
    const nx = ux / length
    const ny = -uy / length
    // The line sits where 2(u·p) + u_z(1 − p²) = 0; this close to level, that is u·p ≈ −u_z/2
    const offset = (-uz / 2 / length) * f2
    return { kind: 'line', x: cx + nx * offset, y: cy + ny * offset, nx, ny }
  }
  return { kind: 'circle', x: cx + (f2 * ux) / uz, y: cy - (f2 * uy) / uz, radius: f2 / Math.abs(uz), skyInside: uz > 0 }
}

/** Index of the direction nearest to `target`, if it is within `maxAngleRad`; otherwise -1. */
export function pickNearest(directions: readonly Vec3[], target: Vec3, maxAngleRad: number): number {
  let best = -1
  let bestDot = Math.cos(maxAngleRad)
  directions.forEach((direction, index) => {
    const d = dot(direction, target)
    if (d > bestDot) {
      bestDot = d
      best = index
    }
  })
  return best
}

/** Compass point for an azimuth: "N", "NNE", … */
export function compassPoint(azRad: number): string {
  const points = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
  const index = Math.round((((azRad / DEG) % 360) + 360) % 360 / 22.5) % 16
  return points[index] ?? 'N'
}
