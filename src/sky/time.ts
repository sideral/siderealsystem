/**
 * Time for the sky: Julian Date and sidereal time.
 *
 * Sidereal time is the sky's own clock: the right ascension that is on the meridian right now.
 * It runs about 4 minutes a day fast against civil time, because Earth has to turn a little
 * more than once to bring the Sun back, and exactly once to bring the stars back.
 *
 * Approximations: UTC is used as if it were UT1 (they differ by under a second), and this is
 * *mean* sidereal time (no nutation, about 1 second of time at most). Both are far below what
 * a phone compass can resolve.
 */

import { DEG, wrapTau } from './vec'

/** Julian Date of J2000.0: 2000 January 1, 12:00 TT. */
export const J2000 = 2451545.0

const UNIX_EPOCH_JD = 2440587.5 // 1970 January 1, 00:00 UTC
const MS_PER_DAY = 86_400_000

/** Julian Date (days, with fraction) of an instant. */
export function julianDate(utc: Date): number {
  return utc.getTime() / MS_PER_DAY + UNIX_EPOCH_JD
}

/** Julian centuries since J2000.0. */
export const centuriesSinceJ2000 = (jd: number): number => (jd - J2000) / 36525

/** Greenwich mean sidereal time, as an angle in [0, 2π). Meeus, Astronomical Algorithms, eq. 12.4. */
export function greenwichSiderealTimeRadians(jd: number): number {
  const t = centuriesSinceJ2000(jd)
  const degrees = 280.46061837 + 360.98564736629 * (jd - J2000) + 0.000387933 * t * t - (t * t * t) / 38_710_000
  return wrapTau(degrees * DEG)
}

/** Local mean sidereal time, as an angle in [0, 2π). Longitude is positive east of Greenwich. */
export function localSiderealTimeRadians(jd: number, lonRad: number): number {
  return wrapTau(greenwichSiderealTimeRadians(jd) + lonRad)
}
