import { describe, expect, it } from 'vitest'
import { describeDistance, viewDistanceKm } from './star'
import { STARS } from './stars'

describe('viewDistanceKm', () => {
  it('scales with the star and shrinks as the disc fills more of the view', () => {
    expect(viewDistanceKm(2)).toBeCloseTo(2 * viewDistanceKm(1), 6)
    expect(viewDistanceKm(1, 0.4)).toBeLessThan(viewDistanceKm(1, 0.2))
  })

  it('puts the Sun-sized default view a few million km out', () => {
    expect(viewDistanceKm(1)).toBeGreaterThan(2e6)
    expect(viewDistanceKm(1)).toBeLessThan(3e6)
  })
})

describe('describeDistance', () => {
  it('rounds to two significant figures in millions or billions', () => {
    expect(describeDistance(4.14e6)).toBe('about 4.1 million km')
    expect(describeDistance(1.454e8)).toBe('about 150 million km')
    expect(describeDistance(2.96e6)).toBe('about 3 million km')
    expect(describeDistance(1.852e9)).toBe('about 1.9 billion km')
  })
})

describe('STARS', () => {
  it('has unique URL-safe ids', () => {
    const ids = STARS.map((s) => s.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const id of ids) expect(id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  })

  it.each(STARS.map((s) => [s.name, s] as const))('%s has valid colours and a story', (_, star) => {
    const colours = [
      star.look.color,
      star.look.limbColor,
      star.look.companion?.color,
      star.look.ring?.color,
    ]
    for (const c of colours) if (c) expect(c).toMatch(/^#[0-9a-f]{6}$/)

    const beats = star.story('about 1 million km')
    expect(beats.length).toBeGreaterThanOrEqual(10)
    for (const beat of beats) {
      expect(beat.trim()).toBe(beat)
      expect(beat).toMatch(/[.!?”]$/)
      expect(beat.length).toBeLessThanOrEqual(160)
    }
  })
})
