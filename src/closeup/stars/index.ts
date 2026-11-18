import type { CloseupStar } from '../star'
import { scorpii18 } from './18-scorpii'
import { eridani40 } from './40-eridani'
import { pegasi51 } from './51-pegasi'
import { cancri55 } from './55-cancri'
import { cygni61 } from './61-cygni'
import { achernar } from './achernar'
import { acrux } from './acrux'
import { adhara } from './adhara'
import { aeAurigae } from './ae-aurigae'
import { albireo } from './albireo'
import { alcyone } from './alcyone'
import { aldebaran } from './aldebaran'
import { alderamin } from './alderamin'
import { algieba } from './algieba'
import { algol } from './algol'
import { alioth } from './alioth'
import { alkaid } from './alkaid'
import { almach } from './almach'
import { alnilam } from './alnilam'
import { alnitak } from './alnitak'
import { alphaCentauri } from './alpha-centauri'
import { alphard } from './alphard'
import { alphecca } from './alphecca'
import { alpheratz } from './alpheratz'
import { altair } from './altair'
import { antares } from './antares'
import { arcturus } from './arcturus'
import { bellatrix } from './bellatrix'
import { betaHydri } from './beta-hydri'
import { betaLyrae } from './beta-lyrae'
import { betaPictoris } from './beta-pictoris'
import { betelgeuse } from './betelgeuse'
import { canopus } from './canopus'
import { capella } from './capella'
import { castor } from './castor'
import { chiCygni } from './chi-cygni'
import { corCaroli } from './cor-caroli'
import { deltaCephei } from './delta-cephei'
import { deltaPavonis } from './delta-pavonis'
import { deneb } from './deneb'
import { denebola } from './denebola'
import { dschubba } from './dschubba'
import { dubhe } from './dubhe'
import { elnath } from './elnath'
import { eltanin } from './eltanin'
import { epsilonAurigae } from './epsilon-aurigae'
import { epsilonEridani } from './epsilon-eridani'
import { epsilonIndi } from './epsilon-indi'
import { epsilonLyrae } from './epsilon-lyrae'
import { errai } from './errai'
import { etaAquilae } from './eta-aquilae'
import { etaCarinae } from './eta-carinae'
import { etaCassiopeiae } from './eta-cassiopeiae'
import { fomalhaut } from './fomalhaut'
import { gacrux } from './gacrux'
import { gammaCassiopeiae } from './gamma-cassiopeiae'
import { gammaVelorum } from './gamma-velorum'
import { garnetStar } from './garnet-star'
import { hadar } from './hadar'
import { hamal } from './hamal'
import { hr8799 } from './hr-8799'
import { izar } from './izar'
import { kochab } from './kochab'
import { laSuperba } from './la-superba'
import { mimosa } from './mimosa'
import { mintaka } from './mintaka'
import { mira } from './mira'
import { mirfak } from './mirfak'
import { mizar } from './mizar'
import { naos } from './naos'
import { nunki } from './nunki'
import { pCygni } from './p-cygni'
import { peacock } from './peacock'
import { polaris } from './polaris'
import { pollux } from './pollux'
import { porrima } from './porrima'
import { procyon } from './procyon'
import { rCoronaeBorealis } from './r-coronae-borealis'
import { rasalgethi } from './rasalgethi'
import { rasalhague } from './rasalhague'
import { regulus } from './regulus'
import { rhoCassiopeiae } from './rho-cassiopeiae'
import { rigel } from './rigel'
import { sadr } from './sadr'
import { shaula } from './shaula'
import { sigmaOctantis } from './sigma-octantis'
import { sirius } from './sirius'
import { spica } from './spica'
import { sualocin } from './sualocin'
import { tauCeti } from './tau-ceti'
import { theta1OrionisC } from './theta1-orionis-c'
import { thuban } from './thuban'
import { upsilonAndromedae } from './upsilon-andromedae'
import { vega } from './vega'
import { vvCephei } from './vv-cephei'
import { wezen } from './wezen'
import { xiUrsaeMajoris } from './xi-ursae-majoris'
import { zetaOphiuchi } from './zeta-ophiuchi'
import { zetaReticuli } from './zeta-reticuli'
import { zubeneschamali } from './zubeneschamali'

/** Every star with a close-up. The sky view shows exactly these; the grouping is only for reading. */
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
  // More bright stars
  hadar,
  mimosa,
  shaula,
  bellatrix,
  elnath,
  alnitak,
  mintaka,
  alioth,
  dubhe,
  alkaid,
  kochab,
  alphard,
  alpheratz,
  hamal,
  denebola,
  rasalhague,
  nunki,
  sadr,
  mirfak,
  wezen,
  peacock,
  alderamin,
  zubeneschamali,
  sualocin,
  // Double and multiple stars
  almach,
  algieba,
  rasalgethi,
  alphecca,
  porrima,
  corCaroli,
  izar,
  epsilonLyrae,
  xiUrsaeMajoris,
  // More stars that change
  dschubba,
  laSuperba,
  chiCygni,
  etaAquilae,
  vvCephei,
  // Hot young stars of Orion
  theta1OrionisC,
  aeAurigae,
  // More neighbours, Sun-like stars and stars with planets
  errai,
  epsilonIndi,
  etaCassiopeiae,
  deltaPavonis,
  betaHydri,
  scorpii18,
  zetaReticuli,
  upsilonAndromedae,
  cancri55,
  hr8799,
]
