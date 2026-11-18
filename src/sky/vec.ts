/**
 * Small vector and matrix helpers for the sky maths.
 *
 * Conventions used everywhere in `src/sky/`:
 * - Directions are unit vectors, `[x, y, z]`.
 * - Matrices are 3×3, stored as three rows, and multiply column vectors: `v' = M · v`.
 * - All frames are right-handed. Angles are radians unless a name ends in `Deg`.
 */

export type Vec3 = readonly [number, number, number]
export type Mat3 = readonly [Vec3, Vec3, Vec3]

export const DEG = Math.PI / 180
export const TAU = 2 * Math.PI

export const dot = (a: Vec3, b: Vec3): number => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]

export const cross = (a: Vec3, b: Vec3): Vec3 => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
]

export const scale = (a: Vec3, k: number): Vec3 => [a[0] * k, a[1] * k, a[2] * k]

export const add = (a: Vec3, b: Vec3): Vec3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]]

export function normalize(a: Vec3): Vec3 {
  const length = Math.hypot(a[0], a[1], a[2])
  return length === 0 ? a : scale(a, 1 / length)
}

export const mulMatVec = (m: Mat3, v: Vec3): Vec3 => [dot(m[0], v), dot(m[1], v), dot(m[2], v)]

export function transpose(m: Mat3): Mat3 {
  return [
    [m[0][0], m[1][0], m[2][0]],
    [m[0][1], m[1][1], m[2][1]],
    [m[0][2], m[1][2], m[2][2]],
  ]
}

export function mulMat(a: Mat3, b: Mat3): Mat3 {
  const bt = transpose(b)
  const row = (r: Vec3): Vec3 => [dot(r, bt[0]), dot(r, bt[1]), dot(r, bt[2])]
  return [row(a[0]), row(a[1]), row(a[2])]
}

/** Rotations that turn a vector counter-clockwise by `angle` when looking down the axis toward the origin. */
export function rotX(angle: number): Mat3 {
  const c = Math.cos(angle)
  const s = Math.sin(angle)
  return [
    [1, 0, 0],
    [0, c, -s],
    [0, s, c],
  ]
}

export function rotY(angle: number): Mat3 {
  const c = Math.cos(angle)
  const s = Math.sin(angle)
  return [
    [c, 0, s],
    [0, 1, 0],
    [-s, 0, c],
  ]
}

export function rotZ(angle: number): Mat3 {
  const c = Math.cos(angle)
  const s = Math.sin(angle)
  return [
    [c, -s, 0],
    [s, c, 0],
    [0, 0, 1],
  ]
}

/** Wraps an angle into [0, 2π). */
export const wrapTau = (angle: number): number => ((angle % TAU) + TAU) % TAU

/** Wraps an angle into (-π, π]. */
export function wrapPi(angle: number): number {
  const wrapped = wrapTau(angle)
  return wrapped > Math.PI ? wrapped - TAU : wrapped
}

/**
 * Catalogue position → unit vector in the equatorial frame:
 * x toward the vernal equinox (RA 0h, Dec 0), y toward RA 6h on the equator, z toward the north celestial pole.
 */
export function radecToUnitVector(raRad: number, decRad: number): Vec3 {
  const c = Math.cos(decRad)
  return [c * Math.cos(raRad), c * Math.sin(raRad), Math.sin(decRad)]
}

/** The inverse of `radecToUnitVector`; RA comes back in [0, 2π). */
export function unitVectorToRadec(v: Vec3): { raRad: number; decRad: number } {
  return { raRad: wrapTau(Math.atan2(v[1], v[0])), decRad: Math.asin(Math.max(-1, Math.min(1, v[2]))) }
}
