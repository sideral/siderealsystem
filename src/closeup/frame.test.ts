import { describe, expect, it } from 'vitest'
import { dustCover, frameUniforms, hexToRgb, orbitPosition, overlapArea, pulseBeat } from './frame'
import type { StarLook } from './star'

const PLAIN: StarLook = { color: '#ffffff', limbColor: '#cccccc', limbDarkening: 0.5 }

/** One component of a vector uniform. */
function component(look: StarLook, t: number, name: string, index: number): number {
  const value = frameUniforms(look, t)[name]
  if (typeof value === 'number') throw new Error(`${name} is not a vector`)
  return value[index]
}

describe('hexToRgb', () => {
  it('reads sRGB hex as fractions', () => {
    expect(hexToRgb('#ff8000')).toEqual([1, 128 / 255, 0])
  })
})

describe('pulseBeat', () => {
  it('is zero for a star that does not pulse', () => {
    expect(pulseBeat(undefined, 3)).toBe(0)
  })

  it('swings between faintest and brightest once per cycle', () => {
    const pulse = { seconds: 8, radius: 0.1, brightness: 0.2 }
    expect(pulseBeat(pulse, 2)).toBeCloseTo(1, 6)
    expect(pulseBeat(pulse, 6)).toBeCloseTo(-1, 6)
    expect(pulseBeat(pulse, 10)).toBeCloseTo(1, 6)
  })

  it('rises faster than it falls when skewed, like a Cepheid', () => {
    const pulse = { seconds: 10, radius: 0, brightness: 0.3, skew: 0.75 }
    const samples = Array.from({ length: 1000 }, (_, i) => pulseBeat(pulse, i / 100))
    const brightest = samples.indexOf(Math.max(...samples))
    const faintest = samples.indexOf(Math.min(...samples))
    const rise = (brightest - faintest + 1000) % 1000
    expect(rise).toBeLessThan(400) // under 40% of the cycle spent rising
    expect(Math.max(...samples)).toBeCloseTo(1, 3)
    expect(Math.min(...samples)).toBeCloseTo(-1, 3)
  })

  it('stays within range when irregular, and does not repeat exactly', () => {
    const pulse = { seconds: 5, radius: 0, brightness: 0.3, irregular: 0.5 }
    for (let t = 0; t < 200; t += 0.37) expect(Math.abs(pulseBeat(pulse, t))).toBeLessThanOrEqual(1)
    expect(pulseBeat(pulse, 1.25)).not.toBeCloseTo(pulseBeat(pulse, 6.25), 3)
  })
})

describe('orbitPosition', () => {
  it('starts a circular orbit at the right and brings it round the front, below the centre', () => {
    const orbit = { distance: 4, seconds: 20, inclinationDeg: 80 }
    const [x0, y0, z0] = orbitPosition(orbit, 0)
    expect(x0).toBeCloseTo(4, 6)
    expect(y0).toBeCloseTo(0, 6)
    expect(z0).toBeCloseTo(0, 6)

    const [x1, y1, z1] = orbitPosition(orbit, 5)
    expect(x1).toBeCloseTo(0, 6)
    expect(y1).toBeCloseTo(-4 * Math.cos((80 * Math.PI) / 180), 6)
    expect(z1).toBeGreaterThan(0)
  })

  it('swings an eccentric orbit from its closest to its farthest point in half a lap', () => {
    const orbit = { distance: 3, seconds: 12, inclinationDeg: 0, eccentricity: 0.6 }
    expect(Math.hypot(...orbitPosition(orbit, 0))).toBeCloseTo(3 * 0.4, 6)
    expect(Math.hypot(...orbitPosition(orbit, 6))).toBeCloseTo(3 * 1.6, 6)
    expect(orbitPosition(orbit, 12)[0]).toBeCloseTo(orbitPosition(orbit, 0)[0], 6)
  })

  it('moves fastest at closest approach', () => {
    const orbit = { distance: 3, seconds: 12, inclinationDeg: 0, eccentricity: 0.6 }
    const step = (t: number) => {
      const a = orbitPosition(orbit, t)
      const b = orbitPosition(orbit, t + 0.01)
      return Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2])
    }
    expect(step(0)).toBeGreaterThan(3 * step(6))
  })

  it('turns the orbit anticlockwise on the screen by its node angle, and starts it at its phase', () => {
    const [x, y] = orbitPosition({ distance: 2, seconds: 10, inclinationDeg: 90, nodeDeg: 90 }, 0)
    expect(x).toBeCloseTo(0, 6)
    expect(y).toBeCloseTo(2, 6)
    expect(orbitPosition({ distance: 2, seconds: 10, inclinationDeg: 90, phase: 0.5 }, 0)[0]).toBeCloseTo(-2, 6)
  })
})

describe('overlapArea', () => {
  it('is nothing for circles apart and the whole small circle when it is inside the big one', () => {
    expect(overlapArea(1, 0.5, 2)).toBe(0)
    expect(overlapArea(1, 0.5, 0.2)).toBeCloseTo(Math.PI * 0.25, 9)
    expect(overlapArea(0.5, 1, 0.2)).toBeCloseTo(Math.PI * 0.25, 9)
  })

  it('matches the lens formula for two unit circles one radius apart', () => {
    expect(overlapArea(1, 1, 1)).toBeCloseTo((2 * Math.PI) / 3 - Math.sqrt(3) / 2, 9)
  })
})

describe('dustCover', () => {
  it('is always full for dust that stays', () => {
    expect(dustCover({ darkness: 1, scale: 1, cover: 1 }, 123)).toBe(1)
  })

  it('clears completely and gathers completely within one cycle', () => {
    const dust = { darkness: 1, scale: 1, cover: 1, seconds: 40 }
    const samples = Array.from({ length: 400 }, (_, i) => dustCover(dust, i / 10))
    expect(Math.min(...samples)).toBe(0)
    expect(Math.max(...samples)).toBe(1)
    for (const s of samples) expect(s).toBeGreaterThanOrEqual(0)
  })

  it('shows the dust in a still frame', () => {
    expect(dustCover({ darkness: 1, scale: 1, cover: 1, seconds: 40 }, 0)).toBeGreaterThan(0.9)
  })
})

describe('frameUniforms', () => {
  it('swells and brightens the disc with the pulse', () => {
    const look: StarLook = { ...PLAIN, radius: 0.2, pulse: { seconds: 8, radius: 0.1, brightness: 0.2 } }
    expect(frameUniforms(look, 2).uRadius).toBeCloseTo(0.22, 6)
    expect(component(look, 2, 'uLight', 2)).toBeCloseTo(1.2, 6)
    expect(frameUniforms(look, 6).uRadius).toBeCloseTo(0.18, 6)
  })

  it('shifts the colour toward the dim colour at minimum light', () => {
    const look: StarLook = {
      ...PLAIN,
      pulse: { seconds: 8, radius: 0, brightness: 0.2, dimColor: '#ff0000' },
    }
    expect(frameUniforms(look, 2).uColor).toEqual([1, 1, 1])
    const dim = frameUniforms(look, 6).uColor as number[]
    expect(dim[0]).toBeCloseTo(1, 6)
    expect(dim[1]).toBeCloseTo(0, 6)
  })

  it('shows a flattened star as round when seen pole-on', () => {
    const side: StarLook = { ...PLAIN, flattening: 0.2 }
    const pole: StarLook = { ...PLAIN, flattening: 0.2, axis: { inclinationDeg: 0 } }
    expect(component(side, 0, 'uShape', 0)).toBeCloseTo(0.2, 6)
    expect(component(pole, 0, 'uShape', 0)).toBeCloseTo(0, 6)
  })

  it('dims the glare while a companion crosses in front, and hides the glow of one behind', () => {
    const look: StarLook = {
      ...PLAIN,
      radius: 0.07,
      companions: [
        { color: '#ffd3a6', radius: 0.8, brightness: 0.4, glare: 0.5, place: { orbit: { distance: 4, seconds: 20, inclinationDeg: 90 } } },
      ],
    }
    expect(component(look, 0, 'uLight', 3)).toBeCloseTo(1, 6) // beside the star
    expect(component(look, 5, 'uLight', 3)).toBeCloseTo(1 - 0.64, 6) // in front: covers 0.8² of the disc
    expect(component(look, 5, 'uCompLook', 0)).toBeCloseTo(0.5, 6)
    expect(component(look, 15, 'uLight', 3)).toBeCloseTo(1, 6) // behind
    expect(component(look, 15, 'uCompLook', 0)).toBeCloseTo(0, 6)
  })

  it('places a fixed companion behind the star, in short-side units', () => {
    const look: StarLook = {
      ...PLAIN,
      radius: 0.2,
      companions: [{ color: '#ffffff', radius: 0.011, brightness: 1, glare: 0.4, place: { at: [0.3, 0.25] } }],
    }
    const position = (frameUniforms(look, 7).uCompPos as number[]).slice(0, 4)
    expect(position[0]).toBeCloseTo(0.3, 6)
    expect(position[1]).toBeCloseTo(0.25, 6)
    expect(position[2]).toBeLessThan(0)
    expect(position[3]).toBeCloseTo(0.011 * 0.2, 9)
  })

  it('fades spots out and back over their cycle', () => {
    const look: StarLook = { ...PLAIN, spots: { darkness: 0.8, size: 0.05, seed: 1, cycleSeconds: 40 } }
    expect(component(look, 0, 'uSpots', 0)).toBeCloseTo(0.8, 6)
    expect(component(look, 20, 'uSpots', 0)).toBeCloseTo(0.08, 6)
  })

  it('thins the glare as dust gathers', () => {
    const look: StarLook = { ...PLAIN, dust: { darkness: 1, scale: 1.5, cover: 1, seconds: 40 } }
    expect(component(look, 0, 'uLight', 3)).toBeLessThan(0.3) // dust thick at t = 0
    expect(component(look, 20, 'uLight', 3)).toBeCloseTo(1, 6) // and clear half a cycle later
  })
})
