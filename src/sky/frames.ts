/**
 * From the catalogue to the observer's sky.
 *
 * Two frames, both right-handed:
 * - **Equatorial**: x to the vernal equinox, y to RA 6h on the equator, z to the north celestial pole.
 * - **Horizontal** (east-north-up): x east, y north, z to the zenith. This is also the frame the
 *   phone's orientation sensor reports in, which is why it is used here.
 *
 * Azimuth is measured from north through east (N = 0°, E = 90°). Altitude is up from the horizon.
 *
 * Left out, all far below a phone compass's accuracy: nutation, aberration, refraction
 * (up to half a degree, but only at the horizon) and proper motion since J2000.
 */

import { centuriesSinceJ2000, localSiderealTimeRadians } from './time'
import { DEG, type Mat3, type Vec3, mulMat, mulMatVec, radecToUnitVector, rotZ, wrapTau } from './vec'

export interface Observer {
  /** Latitude, positive north */
  latRad: number
  /** Longitude, positive east */
  lonRad: number
}

export interface Horizontal {
  altRad: number
  /** From north through east, in [0, 2π) */
  azRad: number
}

const ARCSEC = DEG / 3600

/**
 * Precession: the slow wobble of Earth's axis moves the equatorial frame itself, about 50″ a year.
 * Returns the rotation that takes a J2000.0 direction to the equator and equinox of the date.
 * Angles from Meeus, Astronomical Algorithms, eq. 21.3 (IAU 1976).
 */
export function precessionFromJ2000(jd: number): Mat3 {
  const t = centuriesSinceJ2000(jd)
  const zeta = (2306.2181 * t + 0.30188 * t * t + 0.017998 * t * t * t) * ARCSEC
  const z = (2306.2181 * t + 1.09468 * t * t + 0.018203 * t * t * t) * ARCSEC
  const theta = (2004.3109 * t - 0.42665 * t * t - 0.041833 * t * t * t) * ARCSEC
  const c = Math.cos(theta)
  const s = Math.sin(theta)
  // Tilt the pole by theta toward the old equinox direction, between two turns about the pole
  const tilt: Mat3 = [
    [c, 0, -s],
    [0, 1, 0],
    [s, 0, c],
  ]
  return mulMat(rotZ(z), mulMat(tilt, rotZ(zeta)))
}

/**
 * Rotation from the equatorial frame of the date to the observer's east-north-up frame.
 * `lstRad` is local sidereal time; a star's hour angle is `lst − RA`.
 */
export function equatorialToHorizontal(lstRad: number, latRad: number): Mat3 {
  const ct = Math.cos(lstRad)
  const st = Math.sin(lstRad)
  const cp = Math.cos(latRad)
  const sp = Math.sin(latRad)
  return [
    [-st, ct, 0], // east
    [-sp * ct, -sp * st, cp], // north
    [cp * ct, cp * st, sp], // up
  ]
}

/** The whole chain for one instant: J2000 catalogue direction → east-north-up direction. */
export function skyMatrix(jd: number, observer: Observer): Mat3 {
  const lst = localSiderealTimeRadians(jd, observer.lonRad)
  return mulMat(equatorialToHorizontal(lst, observer.latRad), precessionFromJ2000(jd))
}

export function horizontalFromVector(v: Vec3): Horizontal {
  return { altRad: Math.asin(Math.max(-1, Math.min(1, v[2]))), azRad: wrapTau(Math.atan2(v[0], v[1])) }
}

export function vectorFromHorizontal(altRad: number, azRad: number): Vec3 {
  const c = Math.cos(altRad)
  return [c * Math.sin(azRad), c * Math.cos(azRad), Math.sin(altRad)]
}

/** Altitude and azimuth of a J2000 catalogue position, for an observer at an instant. */
export function horizontalFromEquatorial(
  position: { raRad: number; decRad: number },
  observer: Observer,
  jd: number,
): Horizontal {
  return horizontalFromVector(mulMatVec(skyMatrix(jd, observer), radecToUnitVector(position.raRad, position.decRad)))
}
