import type { CloseupStar } from '../star'
import { eridani40 } from './40-eridani'
import { pegasi51 } from './51-pegasi'
import { cygni61 } from './61-cygni'
import { achernar } from './achernar'
import { acrux } from './acrux'
import { adhara } from './adhara'
import { albireo } from './albireo'
import { alcyone } from './alcyone'
import { aldebaran } from './aldebaran'
import { algol } from './algol'
import { alnilam } from './alnilam'
import { alphaCentauri } from './alpha-centauri'
import { altair } from './altair'
import { antares } from './antares'
import { arcturus } from './arcturus'
import { betaLyrae } from './beta-lyrae'
import { betaPictoris } from './beta-pictoris'
import { betelgeuse } from './betelgeuse'
import { canopus } from './canopus'
import { capella } from './capella'
import { castor } from './castor'
import { deltaCephei } from './delta-cephei'
import { deneb } from './deneb'
import { eltanin } from './eltanin'
import { epsilonAurigae } from './epsilon-aurigae'
import { epsilonEridani } from './epsilon-eridani'
import { etaCarinae } from './eta-carinae'
import { fomalhaut } from './fomalhaut'
import { gacrux } from './gacrux'
import { gammaCassiopeiae } from './gamma-cassiopeiae'
import { gammaVelorum } from './gamma-velorum'
import { garnetStar } from './garnet-star'
import { mira } from './mira'
import { mizar } from './mizar'
import { naos } from './naos'
import { pCygni } from './p-cygni'
import { polaris } from './polaris'
import { pollux } from './pollux'
import { procyon } from './procyon'
import { rCoronaeBorealis } from './r-coronae-borealis'
import { regulus } from './regulus'
import { rhoCassiopeiae } from './rho-cassiopeiae'
import { rigel } from './rigel'
import { sigmaOctantis } from './sigma-octantis'
import { sirius } from './sirius'
import { spica } from './spica'
import { tauCeti } from './tau-ceti'
import { thuban } from './thuban'
import { vega } from './vega'
import { zetaOphiuchi } from './zeta-ophiuchi'

/** The slider's stars, in the order they are shown. The first is the one the page opens on. */
export const STARS: readonly [CloseupStar, ...CloseupStar[]] = [
  // The first ten
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
  // The brightest of the rest
  canopus,
  arcturus,
  capella,
  procyon,
  achernar,
  altair,
  aldebaran,
  antares,
  spica,
  pollux,
  fomalhaut,
  deneb,
  regulus,
  castor,
  acrux,
  gacrux,
  adhara,
  // Fainter stars with a story
  alnilam,
  mizar,
  thuban,
  alcyone,
  eltanin,
  sigmaOctantis,
  // Stars that change
  deltaCephei,
  betaLyrae,
  epsilonAurigae,
  rCoronaeBorealis,
  // Giants and extremes
  garnetStar,
  rhoCassiopeiae,
  pCygni,
  gammaCassiopeiae,
  zetaOphiuchi,
  naos,
  gammaVelorum,
  // The Sun's neighbours
  epsilonEridani,
  tauCeti,
  cygni61,
  eridani40,
  betaPictoris,
  pegasi51,
]
