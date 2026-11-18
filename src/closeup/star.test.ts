import { describe, expect, it } from 'vitest'
import { orbitPosition } from './frame'
import { paginate } from './paginate'
import { type Companion, DEFAULT_RADIUS, MAX_COMPANIONS, MAX_WAVES, type StarLook } from './star'
import { STARS } from './stars'

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

/** Whether `text` names the star as a whole name ("Deneb" is not found inside "Denebola"). */
function mentions(text: string, name: string): boolean {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp(`(?<![A-Za-z0-9])${escaped}(?![A-Za-z0-9¹])`).test(text)
}

/** Whether a companion carries something that ties it to the main star. */
const hasExtras = (c: Companion): boolean => Boolean(c.tide ?? c.disc ?? c.stream ?? c.jets ?? c.shock)

/**
 * Characters on one line of narration on a narrow (360px) phone: the text is 92% of the screen wide,
 * and Ubuntu Mono advances half its 14.5px font size per character.
 */
const NARROW_PHONE_COLUMNS = 45

/** Whether `text` fits the two lines of a narration page when wrapped at spaces to `columns`. */
function fitsPage(text: string, columns: number): boolean {
  let lines = 1
  let used = 0
  for (const word of text.split(' ')) {
    if (used > 0 && used + 1 + word.length > columns) {
      lines += 1
      used = 0
    }
    used += (used > 0 ? 1 : 0) + word.length
  }
  return lines <= 2
}

describe('STARS', () => {
  it('has unique URL-safe ids', () => {
    const ids = STARS.map((s) => s.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const id of ids) expect(id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  })

  it.each(STARS.map((s) => [s.name, s] as const))('%s has valid colours and a story', (_, star) => {
    for (const c of colours(star.look)) expect(c).toMatch(/^#[0-9a-f]{6}$/)

    const beats = star.story
    expect(beats.length).toBeGreaterThanOrEqual(8)
    for (const beat of beats) {
      expect(beat.trim()).toBe(beat)
      expect(beat).toMatch(/[.!?”]$/)
      expect(beat.length).toBeLessThanOrEqual(160)
      // Distances are told in light-years and comparisons, never in kilometres
      expect(beat).not.toMatch(/\bkm\b/)
    }
  })

  it.each(STARS.map((s) => [s.name, s] as const))('%s opens with its name and closes with similar stars', (_, star) => {
    const beats = star.story
    expect(beats[0].startsWith(star.name) || beats[0].startsWith(`The ${star.name}`)).toBe(true)

    // The last beat points to at least two other stars that have a close-up of their own
    const last = beats[beats.length - 1]
    const named = STARS.filter((other) => other.id !== star.id && mentions(last, other.name))
    expect(named.length).toBeGreaterThanOrEqual(2)
  })

  it.each(STARS.map((s) => [s.name, s] as const))('%s keeps every sentence on one page of a narrow phone', (_, star) => {
    // A sentence too long for a page is cut between words, which strands its last words on the next
    const pages = paginate(star.story, (text) => fitsPage(text, NARROW_PHONE_COLUMNS))
    for (const page of pages) expect(page.text).toMatch(/[.!?”]$/)
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
