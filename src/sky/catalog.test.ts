import { describe, expect, it } from 'vitest'
import { STARS } from '../closeup/stars'
import { POSITIONS, SKY_STARS } from './catalog'

describe('sky catalogue', () => {
  it('has a position for every close-up star, and no leftovers', () => {
    expect(Object.keys(POSITIONS).sort()).toEqual(STARS.map((s) => s.id).sort())
    expect(SKY_STARS).toHaveLength(STARS.length)
  })

  it('keeps positions and magnitudes in range', () => {
    for (const { position, j2000 } of SKY_STARS) {
      expect(position.raDeg).toBeGreaterThanOrEqual(0)
      expect(position.raDeg).toBeLessThan(360)
      expect(Math.abs(position.decDeg)).toBeLessThanOrEqual(90)
      expect(position.magV).toBeGreaterThan(-2)
      expect(position.magV).toBeLessThan(6.6) // naked-eye limit
      expect(Math.hypot(...j2000)).toBeCloseTo(1, 12)
    }
  })

  it('has Sirius where it should be, as the brightest', () => {
    const sirius = POSITIONS['sirius']
    expect(sirius?.raDeg).toBeCloseTo(101.287, 2) // 6h 45m 09s
    expect(sirius?.decDeg).toBeCloseTo(-16.716, 2) // −16° 43′
    expect(Math.min(...SKY_STARS.map((s) => s.position.magV))).toBe(sirius?.magV)
  })
})
