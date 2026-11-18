/**
 * Builds `data/dist/closeup-stars.json`: where in the sky each close-up star is, and how bright.
 *
 * ## Role
 * The close-up stars (`src/closeup/stars/`) are hand-written stories. Their **positions and
 * magnitudes** are not hand-written: they come from the Yale Bright Star Catalogue, looked up by
 * HR number, so the sky view can place them.
 *
 * ## Input
 * `data/raw/bsc/catalog.dat` (CDS V/50, 197-byte fixed-width lines). Run `pnpm download:bsc` first.
 *
 * ## Output
 * `data/dist/closeup-stars.json`:
 * `{ source, epoch, stars: { [id]: { hr, raDeg, decDeg, magV } } }`
 * - `raDeg`, `decDeg`: equinox and epoch J2000.0, in degrees. Proper motion is not applied.
 * - `magV`: visual magnitude. Close pairs that the eye sees as one star are summed.
 *
 * ## Adding a star
 * Add a line to `STARS` below with the star's id (the same id as in `src/closeup/stars/`), its
 * HR number, and the name the catalogue should show for it; `src/sky/catalog.test.ts` fails if
 * the two lists drift apart.
 */

import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

import { repoRoot } from '../lib/paths.js'

interface Entry {
  id: string
  /** HR number of the star whose position is used */
  hr: number
  /** Text that must appear in the catalogue's name or variable-star column: a typo guard */
  expect: string
  /** HR numbers of close companions whose light the eye adds to the main star */
  blendWith?: number[]
  /** Use this magnitude instead of the catalogue's, with the reason */
  magV?: { value: number; why: string }
}

const STARS: Entry[] = [
  { id: 'sirius', hr: 2491, expect: 'Alp CMa' },
  { id: 'polaris', hr: 424, expect: 'Alp UMi' },
  { id: 'betelgeuse', hr: 2061, expect: 'Alp Ori' },
  { id: 'vega', hr: 7001, expect: 'Alp Lyr' },
  {
    id: 'eta-carinae',
    hr: 4210,
    expect: 'Eta Car',
    magV: { value: 4.3, why: 'the catalogue has 6.21; the star has brightened steadily since' },
  },
  { id: 'algol', hr: 936, expect: 'Bet Per' },
  { id: 'mira', hr: 681, expect: 'Omi Cet' },
  { id: 'alpha-centauri', hr: 5459, expect: 'Alp1Cen', blendWith: [5460] },
  { id: 'rigel', hr: 1713, expect: 'Bet Ori' },
  { id: 'albireo', hr: 7417, expect: 'Bet1Cyg', blendWith: [7418] },
  { id: 'canopus', hr: 2326, expect: 'Alp Car' },
  { id: 'arcturus', hr: 5340, expect: 'Alp Boo' },
  { id: 'capella', hr: 1708, expect: 'Alp Aur' },
  { id: 'procyon', hr: 2943, expect: 'Alp CMi' },
  { id: 'achernar', hr: 472, expect: 'Alp Eri' },
  { id: 'altair', hr: 7557, expect: 'Alp Aql' },
  { id: 'aldebaran', hr: 1457, expect: 'Alp Tau' },
  { id: 'antares', hr: 6134, expect: 'Alp Sco' },
  { id: 'spica', hr: 5056, expect: 'Alp Vir' },
  { id: 'pollux', hr: 2990, expect: 'Bet Gem' },
  { id: 'fomalhaut', hr: 8728, expect: 'Alp PsA' },
  { id: 'deneb', hr: 7924, expect: 'Alp Cyg' },
  { id: 'regulus', hr: 3982, expect: 'Alp Leo' },
  { id: 'castor', hr: 2891, expect: 'Alp Gem', blendWith: [2890] },
  { id: 'acrux', hr: 4730, expect: 'Alp1Cru', blendWith: [4731] },
  { id: 'gacrux', hr: 4763, expect: 'Gam Cru' },
  { id: 'adhara', hr: 2618, expect: 'Eps CMa' },
  { id: 'alnilam', hr: 1903, expect: 'Eps Ori' },
  { id: 'mizar', hr: 5054, expect: 'Zet UMa', blendWith: [5055] },
  { id: 'thuban', hr: 5291, expect: 'Alp Dra' },
  { id: 'alcyone', hr: 1165, expect: 'Eta Tau' },
  { id: 'eltanin', hr: 6705, expect: 'Gam Dra' },
  { id: 'sigma-octantis', hr: 7228, expect: 'Sig Oct' },
  { id: 'delta-cephei', hr: 8571, expect: 'Del Cep' },
  { id: 'beta-lyrae', hr: 7106, expect: 'Bet Lyr' },
  { id: 'epsilon-aurigae', hr: 1605, expect: 'Eps Aur' },
  { id: 'r-coronae-borealis', hr: 5880, expect: 'R CrB' },
  { id: 'garnet-star', hr: 8316, expect: 'Mu  Cep' },
  { id: 'rho-cassiopeiae', hr: 9045, expect: 'Rho Cas' },
  { id: 'p-cygni', hr: 7763, expect: '34    Cyg' },
  { id: 'gamma-cassiopeiae', hr: 264, expect: 'Gam Cas' },
  { id: 'zeta-ophiuchi', hr: 6175, expect: 'Zet Oph' },
  { id: 'naos', hr: 3165, expect: 'Zet Pup' },
  { id: 'gamma-velorum', hr: 3207, expect: 'Gam2Vel', blendWith: [3206] },
  { id: 'epsilon-eridani', hr: 1084, expect: 'Eps Eri' },
  { id: 'tau-ceti', hr: 509, expect: 'Tau Cet' },
  { id: '61-cygni', hr: 8085, expect: '61    Cyg', blendWith: [8086] },
  { id: '40-eridani', hr: 1325, expect: 'Omi2Eri' },
  { id: 'beta-pictoris', hr: 2020, expect: 'Bet Pic' },
  { id: '51-pegasi', hr: 8729, expect: '51    Peg' },
  { id: 'hadar', hr: 5267, expect: 'Bet Cen' },
  { id: 'mimosa', hr: 4853, expect: 'Bet Cru' },
  { id: 'shaula', hr: 6527, expect: 'Lam Sco' },
  { id: 'bellatrix', hr: 1790, expect: 'Gam Ori' },
  { id: 'elnath', hr: 1791, expect: 'Bet Tau' },
  { id: 'alnitak', hr: 1948, expect: 'Zet Ori', blendWith: [1949] },
  { id: 'mintaka', hr: 1852, expect: 'Del Ori' },
  { id: 'alioth', hr: 4905, expect: 'Eps UMa' },
  { id: 'dubhe', hr: 4301, expect: 'Alp UMa' },
  { id: 'alkaid', hr: 5191, expect: 'Eta UMa' },
  { id: 'kochab', hr: 5563, expect: 'Bet UMi' },
  { id: 'alphard', hr: 3748, expect: 'Alp Hya' },
  { id: 'alpheratz', hr: 15, expect: 'Alp And' },
  { id: 'hamal', hr: 617, expect: 'Alp Ari' },
  { id: 'denebola', hr: 4534, expect: 'Bet Leo' },
  { id: 'rasalhague', hr: 6556, expect: 'Alp Oph' },
  { id: 'nunki', hr: 7121, expect: 'Sig Sgr' },
  { id: 'sadr', hr: 7796, expect: 'Gam Cyg' },
  { id: 'mirfak', hr: 1017, expect: 'Alp Per' },
  { id: 'wezen', hr: 2693, expect: 'Del CMa' },
  { id: 'peacock', hr: 7790, expect: 'Alp Pav' },
  { id: 'alderamin', hr: 8162, expect: 'Alp Cep' },
  { id: 'zubeneschamali', hr: 5685, expect: 'Bet Lib' },
  { id: 'sualocin', hr: 7906, expect: 'Alp Del' },
  { id: 'almach', hr: 603, expect: 'Gam1And', blendWith: [604] },
  { id: 'algieba', hr: 4057, expect: 'Gam1Leo', blendWith: [4058] },
  { id: 'rasalgethi', hr: 6406, expect: 'Alp1Her', blendWith: [6407] },
  { id: 'alphecca', hr: 5793, expect: 'Alp CrB' },
  { id: 'porrima', hr: 4825, expect: 'Gam Vir', blendWith: [4826] },
  { id: 'cor-caroli', hr: 4915, expect: 'Alp2CVn', blendWith: [4914] },
  { id: 'izar', hr: 5506, expect: 'Eps Boo', blendWith: [5505] },
  { id: 'epsilon-lyrae', hr: 7051, expect: 'Eps1Lyr', blendWith: [7052, 7053, 7054] },
  { id: 'xi-ursae-majoris', hr: 4375, expect: 'Xi  UMa', blendWith: [4374] },
  { id: 'dschubba', hr: 5953, expect: 'Del Sco', magV: { value: 1.9, why: 'brighter since its outburst began in 2000' } },
  { id: 'la-superba', hr: 4846, expect: 'Y CVn' },
  { id: 'chi-cygni', hr: 7564, expect: 'Chi Cyg' },
  { id: 'eta-aquilae', hr: 7570, expect: 'Eta Aql' },
  { id: 'vv-cephei', hr: 8383, expect: 'VV Cep' },
  { id: 'theta1-orionis-c', hr: 1895, expect: 'The1Ori' },
  { id: 'ae-aurigae', hr: 1712, expect: 'AE Aur' },
  { id: 'errai', hr: 8974, expect: 'Gam Cep' },
  { id: 'epsilon-indi', hr: 8387, expect: 'Eps Ind' },
  { id: 'eta-cassiopeiae', hr: 219, expect: 'Eta Cas' },
  { id: 'delta-pavonis', hr: 7665, expect: 'Del Pav' },
  { id: 'beta-hydri', hr: 98, expect: 'Bet Hyi' },
  { id: '18-scorpii', hr: 6060, expect: '18    Sco' },
  { id: 'zeta-reticuli', hr: 1010, expect: 'Zet2Ret', blendWith: [1006] },
  { id: 'upsilon-andromedae', hr: 458, expect: 'Ups And' },
  { id: '55-cancri', hr: 3522, expect: 'Rho1Cnc' },
  { id: 'hr-8799', hr: 8799, expect: 'Var' },
  { id: 'mirach', hr: 337, expect: 'Bet And' },
  { id: 'menkalinan', hr: 2088, expect: 'Bet Aur' },
  { id: 'caph', hr: 21, expect: 'Bet Cas' },
  { id: 'enif', hr: 8308, expect: 'Eps Peg' },
  { id: 'mirzam', hr: 2294, expect: 'Bet CMa' },
  { id: 'ain', hr: 1409, expect: 'Eps Tau' },
  { id: 'meissa', hr: 1879, expect: 'Lam Ori', blendWith: [1880] },
  { id: 'rho-ophiuchi', hr: 6112, expect: 'Rho Oph', blendWith: [6113] },
  { id: 'iota-orionis', hr: 1899, expect: 'Iot Ori' },
  { id: 'delta-velorum', hr: 3485, expect: 'Del Vel' },
  { id: 'epsilon-coronae-australis', hr: 7152, expect: 'Eps CrA' },
  { id: 'zeta-andromedae', hr: 215, expect: 'Zet And' },
  { id: 'beta-monocerotis', hr: 2356, expect: 'Bet Mon', blendWith: [2357, 2358] },
  { id: 'r-doradus', hr: 1492, expect: 'R Dor' },
  { id: 'r-scuti', hr: 7066, expect: 'R Sct' },
  { id: 'r-aquarii', hr: 8992, expect: 'R Aqr' },
  { id: 'u-hydrae', hr: 4163, expect: 'U Hya' },
  { id: 'zeta1-scorpii', hr: 6262, expect: 'Zet1Sco' },
  { id: 'tau-bootis', hr: 5185, expect: 'Tau Boo' },
  { id: 'hd-219134', hr: 8832, expect: '14458' },
]

interface BscRow {
  name: string
  variableName: string
  raDeg: number
  decDeg: number
  magV: number
}

/** Columns from the CDS V/50 ReadMe (1-based, inclusive). */
function parseBscLine(line: string): BscRow | null {
  const field = (from: number, to: number): string => line.slice(from - 1, to)
  const raHours = Number(field(76, 77)) + Number(field(78, 79)) / 60 + Number(field(80, 83)) / 3600
  const decSign = field(84, 84) === '-' ? -1 : 1
  const decDeg = decSign * (Number(field(85, 86)) + Number(field(87, 88)) / 60 + Number(field(89, 90)) / 3600)
  const magText = field(103, 107).trim()
  if (field(76, 83).trim() === '' || magText === '') return null // the catalogue's few non-stellar rows
  return { name: field(5, 14), variableName: field(52, 60), raDeg: raHours * 15, decDeg, magV: Number(magText) }
}

/** Magnitude of several stars seen as one: add their light, not their magnitudes. */
function blendMagnitudes(mags: number[]): number {
  const flux = mags.reduce((sum, m) => sum + 10 ** (-0.4 * m), 0)
  return -2.5 * Math.log10(flux)
}

const round = (value: number, digits: number): number => Number(value.toFixed(digits))

export async function main(): Promise<void> {
  const root = repoRoot()
  const inFile = path.join(root, 'data', 'raw', 'bsc', 'catalog.dat')
  const outFile = path.join(root, 'data', 'dist', 'closeup-stars.json')

  const rows = new Map<number, BscRow>()
  for (const line of (await readFile(inFile, 'latin1')).split('\n')) {
    const row = parseBscLine(line)
    if (row) rows.set(Number(line.slice(0, 4)), row)
  }

  const get = (hr: number, id: string): BscRow => {
    const row = rows.get(hr)
    if (!row) throw new Error(`${id}: HR ${hr} is not in the catalogue`)
    return row
  }

  const stars: Record<string, { hr: number; raDeg: number; decDeg: number; magV: number }> = {}
  for (const entry of STARS) {
    const row = get(entry.hr, entry.id)
    if (!row.name.includes(entry.expect) && !row.variableName.includes(entry.expect)) {
      throw new Error(`${entry.id}: HR ${entry.hr} is "${row.name.trim()}", expected "${entry.expect}"`)
    }
    const blended = blendMagnitudes([row.magV, ...(entry.blendWith ?? []).map((hr) => get(hr, entry.id).magV)])
    stars[entry.id] = {
      hr: entry.hr,
      raDeg: round(row.raDeg, 5),
      decDeg: round(row.decDeg, 5),
      magV: round(entry.magV?.value ?? blended, 2),
    }
  }

  const output = {
    source: 'Yale Bright Star Catalogue, 5th revised ed. (Hoffleit & Warren 1991), CDS V/50',
    epoch: 'J2000.0',
    stars,
  }
  await mkdir(path.dirname(outFile), { recursive: true })
  await writeFile(outFile, `${JSON.stringify(output, null, 2)}\n`)
  console.log(`[build:closeup-stars] wrote ${Object.keys(stars).length} stars to ${outFile}`)
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error: unknown) => {
    console.error(error)
    process.exitCode = 1
  })
}
