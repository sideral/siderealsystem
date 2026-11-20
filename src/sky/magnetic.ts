/**
 * Magnetic declination from the World Magnetic Model: how far magnetic north lies from true
 * north at a place and date, positive when it lies to the east.
 *
 * A phone compass points to magnetic north, the sky turns about true north, and between them
 * the angle can reach tens of degrees. The model is a spherical-harmonic expansion of the
 * Earth's main field to degree 12; the coefficients come from `data/dist/wmm.json`
 * (`pnpm build:wmm`). Method and constants: NOAA/BGS, "The US/UK World Magnetic Model for
 * 2025–2030", technical report, equations 7–19.
 */

import wmm from '../../data/dist/wmm.json'

import { DEG } from './vec'

interface Model {
  epoch: number
  validUntil: number
  /** [n, m, g, h, gDot, hDot] */
  coefficients: number[][]
}

const MODEL: Model = wmm
const DEGREE = Math.max(...MODEL.coefficients.map(([n]) => n ?? 0))

/** WGS 84 ellipsoid, km */
const WGS84_A = 6378.137
const WGS84_F = 1 / 298.257223563
const WGS84_E2 = WGS84_F * (2 - WGS84_F)
/** Geomagnetic reference radius, km */
const REFERENCE_RADIUS = 6371.2

/** Decimal year, as the model counts time. */
export function decimalYear(date: Date): number {
  const year = date.getUTCFullYear()
  const start = Date.UTC(year, 0, 1)
  return year + (date.getTime() - start) / (Date.UTC(year + 1, 0, 1) - start)
}

/**
 * Magnetic declination in radians, east positive, for a geodetic latitude and longitude
 * (radians), a height above the ellipsoid (km) and a date given as a decimal year.
 * Outside the model's five years it is used anyway: the field drifts slowly, so a stale
 * answer still beats none. Within a few metres of a pole, where declination means nothing,
 * returns 0.
 */
export function magneticDeclination(latRad: number, lonRad: number, heightKm = 0, year = decimalYear(new Date())): number {
  // Geodetic → geocentric spherical
  const sinLat = Math.sin(latRad)
  const primeVertical = WGS84_A / Math.sqrt(1 - WGS84_E2 * sinLat * sinLat)
  const p = (primeVertical + heightKm) * Math.cos(latRad)
  const z = (primeVertical * (1 - WGS84_E2) + heightKm) * sinLat
  const r = Math.hypot(p, z)
  const latC = Math.asin(z / r)
  const x = Math.sin(latC)
  const s = Math.cos(latC)
  if (s < 1e-9) return 0

  // Schmidt semi-normalised associated Legendre functions of sin(latC), and their
  // derivatives with respect to latC
  const P: number[][] = [[1]]
  const dP: number[][] = [[0]]
  for (let n = 1; n <= DEGREE; n++) {
    P[n] = []
    dP[n] = []
    for (let m = 0; m <= n; m++) {
      if (m === n) {
        const k = n === 1 ? 1 : Math.sqrt((2 * n - 1) / (2 * n))
        const prev = P[n - 1]![n - 1]!
        const dPrev = dP[n - 1]![n - 1]!
        P[n]![m] = k * s * prev
        dP[n]![m] = k * (s * dPrev - x * prev)
      } else {
        const k = Math.sqrt(n * n - m * m)
        const back = n - 2 >= m ? Math.sqrt((n - 1) * (n - 1) - m * m) : 0
        const p1 = P[n - 1]![m]!
        const p2 = back ? P[n - 2]![m]! : 0
        const d2 = back ? dP[n - 2]![m]! : 0
        P[n]![m] = ((2 * n - 1) * x * p1 - back * p2) / k
        dP[n]![m] = ((2 * n - 1) * (s * p1 + x * dP[n - 1]![m]!) - back * d2) / k
      }
    }
  }

  // North (X') and east (Y') components in the geocentric frame; the vertical one is needed
  // to tip X' back to the ellipsoid's north
  const dt = year - MODEL.epoch
  let north = 0
  let east = 0
  let down = 0
  for (const [n = 0, m = 0, g0 = 0, h0 = 0, gDot = 0, hDot = 0] of MODEL.coefficients) {
    const g = g0 + dt * gDot
    const h = h0 + dt * hDot
    const scale = (REFERENCE_RADIUS / r) ** (n + 2)
    const cos = Math.cos(m * lonRad)
    const sin = Math.sin(m * lonRad)
    north -= scale * (g * cos + h * sin) * dP[n]![m]!
    east += (scale * m * (g * sin - h * cos) * P[n]![m]!) / s
    down -= scale * (n + 1) * (g * cos + h * sin) * P[n]![m]!
  }
  const tilt = latC - latRad
  const northGeodetic = north * Math.cos(tilt) - down * Math.sin(tilt)
  return Math.atan2(east, northGeodetic)
}

/** Magnetic declination in degrees, for display. */
export const declinationDeg = (latRad: number, lonRad: number, date = new Date()): number =>
  magneticDeclination(latRad, lonRad, 0, decimalYear(date)) / DEG
