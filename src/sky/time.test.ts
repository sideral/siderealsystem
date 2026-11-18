import { describe, expect, it } from 'vitest'
import { greenwichSiderealTimeRadians, julianDate, localSiderealTimeRadians } from './time'
import { DEG } from './vec'

const hms = (h: number, m: number, s: number): number => (h + m / 60 + s / 3600) * 15 * DEG

describe('julianDate', () => {
  it('gives 2451545.0 at J2000.0', () => {
    expect(julianDate(new Date('2000-01-01T12:00:00Z'))).toBe(2451545.0)
  })

  it('matches Meeus example 7.a: the launch of Sputnik, 1957 October 4.81', () => {
    expect(julianDate(new Date('1957-10-04T19:26:24Z'))).toBeCloseTo(2436116.31, 6)
  })
})

describe('greenwichSiderealTimeRadians', () => {
  it('matches Meeus example 12.a: 1987 April 10, 0h UT', () => {
    const gst = greenwichSiderealTimeRadians(julianDate(new Date('1987-04-10T00:00:00Z')))
    expect(gst).toBeCloseTo(hms(13, 10, 46.3668), 7)
  })

  it('matches Meeus example 12.b: 1987 April 10, 19h21m00s UT', () => {
    const gst = greenwichSiderealTimeRadians(julianDate(new Date('1987-04-10T19:21:00Z')))
    expect(gst).toBeCloseTo(hms(8, 34, 57.0896), 7)
  })
})

describe('localSiderealTimeRadians', () => {
  it('runs ahead of Greenwich to the east and behind it to the west', () => {
    const jd = julianDate(new Date('1987-04-10T00:00:00Z'))
    const gst = greenwichSiderealTimeRadians(jd)
    expect(localSiderealTimeRadians(jd, 15 * DEG)).toBeCloseTo(gst + 15 * DEG, 12)
    expect(localSiderealTimeRadians(jd, -90 * DEG)).toBeCloseTo(gst - 90 * DEG, 12)
  })
})
