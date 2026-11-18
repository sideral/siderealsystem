/**
 * Turns a `StarLook` and a moment in time into the numbers the shader draws from.
 * Everything that moves is worked out here, in plain TypeScript: the pulse, orbits, eclipses,
 * dust that gathers and clears. The shader only draws.
 */
import {
  type Companion,
  DEFAULT_RADIUS,
  type Dust,
  MAX_COMPANIONS,
  MAX_WAVES,
  type Nebula,
  type Orbit,
  type Pulse,
  type StarLook,
  type SurfaceTexture,
} from './star'

/** Uniform values by name: a float, or the components of one or more vectors. */
export type Uniforms = Record<string, number | number[]>

type Vec3 = [number, number, number]

const TAU = 2 * Math.PI
const rad = (deg: number): number => (deg * Math.PI) / 180
const smoothstep = (a: number, b: number, x: number): number => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)))
  return t * t * (3 - 2 * t)
}

/** The faint mottling of a hot star whose outer layers don't convect. */
const SMOOTH: SurfaceTexture = { amplitude: 0.05, scale: 5, speed: 0.015 }

const PATCH_SHAPES = { caps: 0, belt: 1, clouds: 2 } as const
const NEBULA_KINDS = { homunculus: 1, cloud: 2, shells: 3, bowshock: 4 } as const

export function hexToRgb(hex: string): Vec3 {
  const v = parseInt(hex.slice(1), 16)
  return [((v >> 16) & 255) / 255, ((v >> 8) & 255) / 255, (v & 255) / 255]
}

/**
 * Where a star is in its pulse, from -1 (faintest) to 1 (brightest).
 * A skewed pulse climbs quickly and falls slowly; an irregular one never quite repeats.
 */
export function pulseBeat(pulse: Pulse | undefined, t: number): number {
  if (!pulse) return 0
  const phase = (TAU * t) / pulse.seconds
  const beat = Math.sin(phase + (pulse.skew ?? 0) * Math.sin(phase))
  const k = pulse.irregular ?? 0
  const drift = 0.6 * Math.sin(0.382 * phase + 1.7) + 0.4 * Math.sin(0.177 * phase + 4.1)
  return (1 - k) * beat + k * drift
}

/**
 * Position on an orbit at time `t`, in star radii from the main star: x to the right, y up,
 * z toward the viewer. The near half of an orbit passes below the star's centre.
 */
export function orbitPosition(orbit: Orbit, t: number): Vec3 {
  const e = orbit.eccentricity ?? 0
  const mean = TAU * (t / orbit.seconds + (orbit.phase ?? 0))
  // Kepler's equation, E - e sin E = M, by Newton's method
  let E = mean
  for (let i = 0; i < 8; i++) E -= (E - e * Math.sin(E) - mean) / (1 - e * Math.cos(E))

  // In the orbit's own plane, with closest approach along +x
  const px = orbit.distance * (Math.cos(E) - e)
  const py = orbit.distance * Math.sqrt(1 - e * e) * Math.sin(E)
  const w = rad(orbit.periapsisDeg ?? 0)
  const ox = px * Math.cos(w) - py * Math.sin(w)
  const oy = px * Math.sin(w) + py * Math.cos(w)

  // Tip the plane toward the viewer, then turn it on the screen
  const i = rad(orbit.inclinationDeg)
  const x = ox
  const y = -oy * Math.cos(i)
  const node = rad(orbit.nodeDeg ?? 0)
  return [x * Math.cos(node) - y * Math.sin(node), x * Math.sin(node) + y * Math.cos(node), oy * Math.sin(i)]
}

/** Area shared by two circles of radius `r1` and `r2` whose centres are `d` apart. */
export function overlapArea(r1: number, r2: number, d: number): number {
  if (d >= r1 + r2) return 0
  const small = Math.min(r1, r2)
  if (d <= Math.abs(r1 - r2)) return Math.PI * small * small
  const a1 = Math.acos((d * d + r1 * r1 - r2 * r2) / (2 * d * r1))
  const a2 = Math.acos((d * d + r2 * r2 - r1 * r1) / (2 * d * r2))
  const kite = 0.5 * Math.sqrt((-d + r1 + r2) * (d + r1 - r2) * (d - r1 + r2) * (d + r1 + r2))
  return r1 * r1 * a1 + r2 * r2 * a2 - kite
}

/**
 * How much of its full cover the dust has now, 0 to 1. Dust on a cycle stays away for a
 * while, gathers quickly, lingers, and clears slowly. A still frame (t = 0) shows it thick.
 */
export function dustCover(dust: Dust, t: number): number {
  if (!dust.seconds) return 1
  const phase = (((t / dust.seconds + 0.5) % 1) + 1) % 1
  return smoothstep(0.3, 0.42, phase) * (1 - smoothstep(0.65, 1, phase))
}

function nebulaUniforms(nebula: Nebula | undefined): Uniforms {
  const none: Uniforms = { uNeb: [0, 0, 0, 0], uNebB: [0, 0, 0, 0], uNebColor: [0, 0, 0], uNebColor2: [0, 0, 0] }
  if (!nebula) return none
  const kind = NEBULA_KINDS[nebula.kind]
  switch (nebula.kind) {
    case 'homunculus':
      return { ...none, uNeb: [kind, 1, 0, 0] }
    case 'cloud':
      return {
        uNeb: [kind, nebula.brightness, rad(nebula.angleDeg ?? 0), nebula.scale],
        uNebB: [nebula.streak ?? 0, nebula.lanes ?? 0, nebula.falloff ?? 0, nebula.hollow ?? 0],
        uNebColor: hexToRgb(nebula.color),
        uNebColor2: hexToRgb(nebula.outerColor),
      }
    case 'shells':
      return {
        ...none,
        uNeb: [kind, nebula.brightness, 0, nebula.spacing],
        uNebB: [nebula.speed, 0, 0, 0],
        uNebColor: hexToRgb(nebula.color),
      }
    case 'bowshock':
      return {
        uNeb: [kind, nebula.brightness, rad(nebula.angleDeg), nebula.standoff],
        uNebB: [nebula.tail?.brightness ?? 0, 0, 0, 0],
        uNebColor: hexToRgb(nebula.color),
        uNebColor2: nebula.tail ? hexToRgb(nebula.tail.color) : [0, 0, 0],
      }
  }
}

/** Where a companion is now, in star radii (z > 0 is in front of the star). */
export function companionPosition(companion: Companion, t: number, baseRadius: number): Vec3 {
  if ('orbit' in companion.place) return orbitPosition(companion.place.orbit, t)
  const [x, y] = companion.place.at
  return [x / baseRadius, y / baseRadius, -1 / baseRadius]
}

/** Everything the shader needs to draw `look` at time `t` (seconds), apart from the view itself. */
export function frameUniforms(look: StarLook, t: number): Uniforms {
  const baseRadius = look.radius ?? DEFAULT_RADIUS
  const beat = pulseBeat(look.pulse, t)
  const swell = 1 + (look.pulse?.radius ?? 0) * beat
  const bright = 1 + (look.pulse?.brightness ?? 0) * beat

  // A star that cools as it fades changes colour with its pulse
  let color = hexToRgb(look.color)
  let limbColor = hexToRgb(look.limbColor)
  if (look.pulse?.dimColor) {
    const dim = hexToRgb(look.pulse.dimColor)
    const k = (1 - beat) / 2
    const base = color
    color = color.map((c, i) => c + (dim[i] - c) * k) as Vec3
    limbColor = limbColor.map((c, i) => c + (Math.min(1, (c * dim[i]) / Math.max(base[i], 1e-3)) - c) * k) as Vec3
  }

  // Spin axis: its roll on the screen, and how far the pole leans toward the viewer
  const roll = -rad(look.axis?.rollDeg ?? 0) // the shader turns the view clockwise
  const inclination = rad(look.axis?.inclinationDeg ?? 90)
  const lean = Math.PI / 2 - inclination
  // A flattened star seen at an angle looks rounder: its short axis appears longer
  const flattening = look.flattening ?? 0
  const seenFlattening = 1 - Math.hypot((1 - flattening) * Math.sin(inclination), Math.cos(inclination))

  const gravityDarkening = look.gravityDarkening ?? 0
  const equatorTint = look.equatorColor
    ? hexToRgb(look.equatorColor).map((c, i) => c / Math.max(color[i], 1e-3))
    : [1, 1 - 0.04 * gravityDarkening, 1 - 0.1 * gravityDarkening]

  const texture = look.texture ?? SMOOTH
  const spots = look.spots
  const cycle = spots?.cycleSeconds ? 0.1 + 0.9 * (0.5 + 0.5 * Math.cos((TAU * t) / spots.cycleSeconds)) : 1
  const patches = look.patches
  const patchSize = patches
    ? patches.shape === 'caps'
      ? Math.cos(rad(patches.sizeDeg))
      : Math.sin(rad(patches.sizeDeg))
    : 0
  const patchTilt = rad(patches?.tiltDeg ?? 0)

  const waves: number[] = []
  for (let i = 0; i < MAX_WAVES; i++) {
    const wave = look.waves?.[i]
    waves.push(...(wave ? [wave.l, wave.m, wave.amplitude, (TAU * t) / wave.seconds] : [0, 0, 0, 0]))
  }

  const envelope = look.envelope
  const dust = look.dust
  const cover = dust ? dust.cover * dustCover(dust, t) : 0
  const ring = look.ring

  // Light lost to eclipses and dust dims the glare too
  let glare = look.glare ?? 1
  if (dust) glare *= 1 - 0.8 * dust.darkness * cover * (dust.patch ? 0.4 : 1)

  const compPos: number[] = []
  const compColor: number[] = []
  const compLook: number[] = []
  let first: Vec3 = [0, 0, 0]
  for (let i = 0; i < MAX_COMPANIONS; i++) {
    const companion = look.companions?.[i]
    if (!companion) {
      compPos.push(0, 0, 0, 0)
      compColor.push(0, 0, 0, 0)
      compLook.push(0, 0, 0, 0)
      continue
    }
    const position = companionPosition(companion, t, baseRadius)
    if (i === 0) first = position
    const [x, y, z] = position
    const shared = overlapArea(1, companion.radius, Math.hypot(x, y))
    let companionGlare = companion.glare
    if (z > 0) glare *= 1 - shared / Math.PI
    else companionGlare *= 1 - shared / (Math.PI * companion.radius * companion.radius)

    const node = 'orbit' in companion.place ? rad(companion.place.orbit.nodeDeg ?? 0) : 0
    compPos.push(x * baseRadius, y * baseRadius, z * baseRadius, companion.radius * baseRadius)
    compColor.push(...hexToRgb(companion.color), companion.brightness)
    compLook.push(companionGlare, companion.lit ?? 0, companion.flattening ?? 0, node)
  }

  // Extras that tie the first companion to the star
  const partner = look.companions?.[0]
  const separation = Math.hypot(...first)
  const onScreen = Math.hypot(first[0], first[1])
  // Seen end-on, a star stretched toward its partner looks round
  const sideways = separation > 0 ? onScreen / separation : 0
  const toward = onScreen > 0 ? [first[0] / onScreen, first[1] / onScreen] : [1, 0]
  const partnerNode = partner && 'orbit' in partner.place ? rad(partner.place.orbit.nodeDeg ?? 0) : 0
  const disc = partner?.disc
  const stream = partner?.stream
  const jets = partner?.jets
  const shock = partner?.shock

  return {
    uTime: t,
    uRadius: baseRadius * swell,
    uColor: color,
    uLimbColor: limbColor,
    uEquatorTint: equatorTint,
    uLight: [look.limbDarkening, look.whiten ?? 0.3, bright, glare],
    uSpin: (TAU * t) / (look.spinSeconds ?? 90),
    uAxis: [Math.cos(roll), Math.sin(roll), Math.cos(lean), Math.sin(lean)],
    uShape: [seenFlattening, gravityDarkening, look.fuzz ?? 0, look.wobble ?? 0],
    uTide: [toward[0], toward[1], (look.tide ?? 0) * sideways],
    uTexture: [texture.amplitude, texture.scale, texture.speed, texture.cells ?? 0],
    uSpots: spots ? [spots.darkness * cycle, spots.size, spots.seed, Math.min(spots.count ?? 6, 12)] : [0, 0, 0, 0],
    uSpotsB: [
      spots?.beltDeg ? Math.sin(rad(spots.beltDeg)) : 0,
      (spots?.faculae ?? 0) * cycle,
      look.activity?.flares ?? 0,
      look.activity?.prominences ?? 0,
    ],
    uPatch: patches
      ? [patches.strength, PATCH_SHAPES[patches.shape], patchSize, patches.seed + (patches.drift ?? 0) * t]
      : [0, 0, 0, 0],
    uPatchColor: patches ? hexToRgb(patches.color) : [0, 0, 0],
    uPatchAxis: [Math.sin(patchTilt), Math.cos(patchTilt), 0],
    uWave: waves,
    uEnv: envelope ? [envelope.strength, envelope.reach, envelope.streaks ?? 0, envelope.clumps ?? 0] : [0, 1, 0, 0],
    uEnvColor: envelope ? [...hexToRgb(envelope.color), envelope.speed ?? 0.1] : [0, 0, 0, 0],
    uDust: dust ? [dust.darkness, dust.scale, cover, dust.seed ?? 0] : [0, 0, 0, 0],
    uDustAt: dust?.patch ? [...dust.patch.at, dust.patch.radius] : [0, 0, 0],
    uRing: ring ? [ring.inner, ring.outer, ring.tilt, ring.brightness] : [0, 0, 0, 0],
    uRingB: ring ? [ring.offset ?? 0, ring.sharp ?? 0, ring.arm ?? 0, rad(ring.warpDeg ?? 0)] : [0, 0, 0, 0],
    uRingColor: ring ? hexToRgb(ring.color) : [0, 0, 0],
    ...nebulaUniforms(look.nebula),
    uCompPos: compPos,
    uCompColor: compColor,
    uCompLook: compLook,
    uCompTide: (partner?.tide ?? 0) * sideways,
    uPartDisc: disc ? [disc.outer, disc.tilt, disc.brightness, partnerNode] : [0, 0, 0, 0],
    uPartDiscColor: disc ? hexToRgb(disc.color) : [0, 0, 0],
    uStream: stream ? [...hexToRgb(stream.color), stream.brightness] : [0, 0, 0, 0],
    uJet: jets ? [-Math.sin(partnerNode), Math.cos(partnerNode), jets.brightness, jets.length * baseRadius] : [0, 1, 0, 0],
    uJetColor: jets ? hexToRgb(jets.color) : [0, 0, 0],
    uShock: shock ? [...hexToRgb(shock.color), shock.brightness] : [0, 0, 0, 0],
    uShockGap: shock && partner ? shock.gap * partner.radius * baseRadius : 0,
  }
}
