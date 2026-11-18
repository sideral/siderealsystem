/**
 * The stars the sky view shows: each close-up star, joined with its catalogue position.
 * Positions come from `data/dist/closeup-stars.json`, built by `pnpm build:data`.
 */

import catalogue from '../../data/dist/closeup-stars.json'
import type { CloseupStar } from '../closeup/star'
import { STARS } from '../closeup/stars'
import { DEG, type Vec3, radecToUnitVector } from './vec'

export interface CataloguePosition {
  /** Bright Star Catalogue number */
  hr: number
  /** J2000.0, degrees */
  raDeg: number
  decDeg: number
  /** Visual magnitude: smaller is brighter */
  magV: number
}

export interface SkyStar {
  star: CloseupStar
  position: CataloguePosition
  /** Unit vector in the J2000 equatorial frame */
  j2000: Vec3
}

export const POSITIONS: Readonly<Record<string, CataloguePosition>> = catalogue.stars

export const SKY_STARS: readonly SkyStar[] = STARS.map((star) => {
  const position = POSITIONS[star.id]
  if (!position) throw new Error(`No catalogue position for "${star.id}": add it to scripts/build/closeup-stars.ts`)
  return { star, position, j2000: radecToUnitVector(position.raDeg * DEG, position.decDeg * DEG) }
})
