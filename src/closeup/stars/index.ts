import type { CloseupStar } from '../star'
import { albireo } from './albireo'
import { algol } from './algol'
import { alphaCentauri } from './alpha-centauri'
import { betelgeuse } from './betelgeuse'
import { etaCarinae } from './eta-carinae'
import { mira } from './mira'
import { polaris } from './polaris'
import { rigel } from './rigel'
import { sirius } from './sirius'
import { vega } from './vega'

/** The close-up stars, in slider order. Never empty. */
export const STARS: readonly [CloseupStar, ...CloseupStar[]] = [
  sirius,
  polaris,
  betelgeuse,
  vega,
  etaCarinae,
  algol,
  mira,
  alphaCentauri,
  rigel,
  albireo,
]
