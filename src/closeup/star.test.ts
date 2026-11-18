import { describe, expect, it } from 'vitest'
import { orbitPosition } from './frame'
import {
  type Companion,
  DEFAULT_RADIUS,
  describeDistance,
  MAX_COMPANIONS,
  MAX_WAVES,
  type StarLook,
  viewDistanceKm,
} from './star'
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

/** Every colour a look names, wherever it sits. */
function colours(look: StarLook): string[] {
  const nebula = look.nebula
  const found: (string | undefined)[] = [
    look.color,
    look.limbColor,
    look.equatorColor,
    look.pulse?.dimColor,
    look.patches?.color,
    look.envelope?.color,
    look.ring?.color,
  ]
  if (nebula && nebula.kind !== 'homunculus') found.push(nebula.color)
  if (nebula?.kind === 'cloud') found.push(nebula.outerColor)
  if (nebula?.kind === 'bowshock') found.push(nebula.tail?.color)
  for (const c of look.companions ?? []) found.push(c.color, c.disc?.color, c.stream?.color, c.jets?.color, c.shock?.color)
  return found.filter((c): c is string => c !== undefined)
}

/** Whether a companion carries something that ties it to the main star. */
const hasExtras = (c: Companion): boolean => Boolean(c.tide ?? c.disc ?? c.stream ?? c.jets ?? c.shock)

describe('STARS', () => {
  it('has unique URL-safe ids', () => {
    const ids = STARS.map((s) => s.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const id of ids) expect(id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  })

  it.each(STARS.map((s) => [s.name, s] as const))('%s has valid colours and a story', (_, star) => {
    for (const c of colours(star.look)) expect(c).toMatch(/^#[0-9a-f]{6}$/)

    const beats = star.story('about 1 million km')
    expect(beats.length).toBeGreaterThanOrEqual(10)
    for (const beat of beats) {
      expect(beat.trim()).toBe(beat)
      expect(beat).toMatch(/[.!?”]$/)
      expect(beat.length).toBeLessThanOrEqual(160)
    }
  })

  it.each(STARS.map((s) => [s.name, s.look] as const))('%s can be drawn', (_, look) => {
    const companions = look.companions ?? []
    expect(companions.length).toBeLessThanOrEqual(MAX_COMPANIONS)
    expect(look.waves?.length ?? 0).toBeLessThanOrEqual(MAX_WAVES)
    expect(look.spots?.count ?? 0).toBeLessThanOrEqual(12)
    if (look.activity?.flares) expect(look.spots).toBeDefined()
    if (look.tide) expect(companions.length).toBeGreaterThan(0)
    for (const wave of look.waves ?? []) {
      expect(Number.isInteger(wave.l) && Number.isInteger(wave.m)).toBe(true)
      expect(wave.m).toBeGreaterThanOrEqual(0)
      expect(wave.l).toBeGreaterThanOrEqual(wave.m)
    }
    // Only the first companion can be tied to the star by a stream, a disc and so on
    for (const companion of companions.slice(1)) expect(hasExtras(companion)).toBe(false)
  })

  // A phone held upright is one short side wide: anything past 0.5 from the centre is off-screen.
  it.each(STARS.map((s) => [s.name, s.look] as const))('%s keeps its companions on a phone screen', (_, look) => {
    const radius = look.radius ?? DEFAULT_RADIUS
    for (const companion of look.companions ?? []) {
      if ('at' in companion.place) {
        const [x, y] = companion.place.at
        expect(Math.abs(x)).toBeLessThanOrEqual(0.46)
        expect(y).toBeLessThanOrEqual(0.42) // below the title
        expect(y).toBeGreaterThanOrEqual(-0.4)
      } else {
        const orbit = companion.place.orbit
        expect(orbit.eccentricity ?? 0).toBeLessThan(1)
        for (let i = 0; i < 64; i++) {
          const [x, y] = orbitPosition(orbit, (orbit.seconds * i) / 64)
          expect(Math.abs(x * radius)).toBeLessThanOrEqual(0.47)
          expect(Math.abs(y * radius)).toBeLessThanOrEqual(0.47)
        }
      }
    }
  })
})
