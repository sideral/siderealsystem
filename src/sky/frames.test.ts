import { describe, expect, it } from 'vitest'
import { POSITIONS } from './catalog'
import {
  equatorialToHorizontal,
  horizontalFromEquatorial,
  horizontalFromVector,
  precessionFromJ2000,
  vectorFromHorizontal,
} from './frames'
import { julianDate } from './time'
import { DEG, mulMatVec, radecToUnitVector, unitVectorToRadec } from './vec'

describe('radecToUnitVector', () => {
  it('returns unit vectors along the frame axes', () => {
    expect(radecToUnitVector(0, 0)).toEqual([1, 0, 0])
    const [x, y, z] = radecToUnitVector(90 * DEG, 0)
    expect([x, y, z].map((n) => Number(n.toFixed(12)))).toEqual([0, 1, 0])
    expect(radecToUnitVector(1.234, 90 * DEG)[2]).toBe(1)
  })

  it('round-trips through unitVectorToRadec', () => {
    const { raRad, decRad } = unitVectorToRadec(radecToUnitVector(4.2, -0.7))
    expect(raRad).toBeCloseTo(4.2, 12)
    expect(decRad).toBeCloseTo(-0.7, 12)
  })
})

describe('precessionFromJ2000', () => {
  it('is the identity at J2000.0', () => {
    const v = mulMatVec(precessionFromJ2000(2451545.0), radecToUnitVector(1, 0.5))
    expect(unitVectorToRadec(v).raRad).toBeCloseTo(1, 12)
  })

  it('matches Meeus example 21.b: Theta Persei precessed to 2028 November 13.19', () => {
    const start = radecToUnitVector(41.054063 * DEG, 49.22775 * DEG)
    const { raRad, decRad } = unitVectorToRadec(mulMatVec(precessionFromJ2000(2462088.69), start))
    expect(raRad / DEG).toBeCloseTo(41.547214, 5)
    expect(decRad / DEG).toBeCloseTo(49.348483, 5)
  })
})

describe('equatorialToHorizontal', () => {
  it('matches Meeus example 13.b: Venus from Washington, 1987 April 10, 19h21m UT', () => {
    const lst = (8 + 34 / 60 + 56.853 / 3600) * 15 * DEG - (77 + 3 / 60 + 56 / 3600) * DEG
    const lat = (38 + 55 / 60 + 17 / 3600) * DEG
    const venus = radecToUnitVector((23 + 9 / 60 + 16.641 / 3600) * 15 * DEG, -(6 + 43 / 60 + 11.61 / 3600) * DEG)
    const { altRad, azRad } = horizontalFromVector(mulMatVec(equatorialToHorizontal(lst, lat), venus))
    expect(altRad / DEG).toBeCloseTo(15.1249, 3)
    // Meeus measures azimuth from the south: 68.0337° west of south
    expect(azRad / DEG).toBeCloseTo(180 + 68.0337, 3)
  })

  it('puts the celestial pole due north at an altitude equal to the latitude', () => {
    const { altRad, azRad } = horizontalFromVector(mulMatVec(equatorialToHorizontal(2.5, 52 * DEG), [0, 0, 1]))
    expect(altRad / DEG).toBeCloseTo(52, 10)
    expect(Math.sin(azRad)).toBeCloseTo(0, 10)
  })
})

describe('vectorFromHorizontal', () => {
  it('follows east-north-up with azimuth from north through east', () => {
    expect(vectorFromHorizontal(0, 90 * DEG).map((n) => Number(n.toFixed(12)))).toEqual([1, 0, 0])
    expect(vectorFromHorizontal(0, 0).map((n) => Number(n.toFixed(12)))).toEqual([0, 1, 0])
    const { altRad, azRad } = horizontalFromVector(vectorFromHorizontal(0.3, 4))
    expect(altRad).toBeCloseTo(0.3, 12)
    expect(azRad).toBeCloseTo(4, 12)
  })
})

/**
 * Reference values from astropy 6.1 (ICRS → AltAz, no refraction), for the catalogue positions
 * in data/dist. astropy also applies nutation and aberration, which this code leaves out, so
 * agreement is to about an arcminute, not arcseconds.
 */
const REFERENCE: [utc: string, latDeg: number, lonDeg: number, id: string, altDeg: number, azDeg: number][] = [
  ['2020-03-15T20:30:00Z', 41.9, 12.5, 'sirius', 24.1751, 214.2095],
  ['2020-03-15T20:30:00Z', 41.9, 12.5, 'vega', -3.4201, 26.2439],
  ['2020-03-15T20:30:00Z', 41.9, 12.5, 'polaris', 41.8969, 359.1289],
  ['2020-03-15T20:30:00Z', 41.9, 12.5, 'sigma-octantis', -43.0213, 180.1919],
  ['2020-03-15T20:30:00Z', 41.9, 12.5, 'acrux', -23.2318, 156.9227],
  ['2026-11-17T22:00:00Z', -33.87, 151.21, 'sirius', 20.1777, 262.9376],
  ['2026-11-17T22:00:00Z', -33.87, 151.21, 'vega', -28.4085, 60.3231],
  ['2026-11-17T22:00:00Z', -33.87, 151.21, 'polaris', -34.2762, 359.4319],
  ['2026-11-17T22:00:00Z', -33.87, 151.21, 'sigma-octantis', 32.9301, 179.2021],
  ['2026-11-17T22:00:00Z', -33.87, 151.21, 'acrux', 60.1115, 172.0231],
  ['2031-07-01T03:15:00Z', 64.13, -21.9, 'sirius', -39.8239, 30.7442],
  ['2031-07-01T03:15:00Z', 64.13, -21.9, 'vega', 60.306, 224.2465],
  ['2031-07-01T03:15:00Z', 64.13, -21.9, 'polaris', 63.9895, 1.3618],
  ['2031-07-01T03:15:00Z', 64.13, -21.9, 'sigma-octantis', -62.9991, 179.2058],
  ['2031-07-01T03:15:00Z', 64.13, -21.9, 'acrux', -63.9013, 243.6595],
]

describe('horizontalFromEquatorial', () => {
  it.each(REFERENCE)('%s at %d°, %d°: %s agrees with astropy', (utc, latDeg, lonDeg, id, altDeg, azDeg) => {
    const position = POSITIONS[id]
    if (!position) throw new Error(`missing ${id}`)
    const { altRad, azRad } = horizontalFromEquatorial(
      { raRad: position.raDeg * DEG, decRad: position.decDeg * DEG },
      { latRad: latDeg * DEG, lonRad: lonDeg * DEG },
      julianDate(new Date(utc)),
    )
    const tolerance = 0.02 // degrees on the sky
    expect(Math.abs(altRad / DEG - altDeg)).toBeLessThan(tolerance)
    const azError = Math.abs(((azRad / DEG - azDeg + 540) % 360) - 180)
    expect(azError * Math.cos(altRad)).toBeLessThan(tolerance)
  })
})
