/**
 * Builds `data/dist/wmm.json` from the World Magnetic Model coefficient file.
 *
 * ## Role
 * The sky view turns a phone's magnetic compass heading into a true one with the magnetic
 * declination; `src/sky/magnetic.ts` evaluates the model from this file.
 *
 * ## Input
 * `data/raw/wmm/**\/WMM.COF`. Run `pnpm download:wmm` first.
 *
 * ## Output
 * `data/dist/wmm.json`:
 * `{ source, model, epoch, validUntil, coefficients: [[n, m, g, h, gDot, hDot], …] }`
 * - `g`, `h`: Schmidt semi-normalised Gauss coefficients in nT at `epoch` (decimal year).
 * - `gDot`, `hDot`: their change in nT per year.
 */

import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

import { findWmmCof, WMM_ZIP_URL } from '../download/wmm.js'
import { repoRoot } from '../lib/paths.js'

/** A model is valid for five years from its epoch. */
const LIFETIME_YEARS = 5

export async function main(): Promise<void> {
  const root = repoRoot()
  const cof = await findWmmCof(path.join(root, 'data', 'raw', 'wmm'))
  if (!cof) throw new Error('WMM.COF not found under data/raw/wmm/. Run `pnpm download:wmm` first.')

  const lines = (await readFile(cof, 'utf8')).split(/\r?\n/)
  const [epochText, model] = (lines[0] ?? '').trim().split(/\s+/)
  const epoch = Number(epochText)
  if (!Number.isFinite(epoch) || !model) throw new Error(`Unexpected header in ${cof}: ${lines[0]}`)

  const coefficients: number[][] = []
  for (const line of lines.slice(1)) {
    if (line.startsWith('9999') || line.trim() === '') break
    const row = line.trim().split(/\s+/).map(Number)
    if (row.length !== 6 || row.some((v) => !Number.isFinite(v))) throw new Error(`Bad coefficient line: ${line}`)
    coefficients.push(row)
  }
  const maxDegree = Math.max(...coefficients.map(([n]) => n ?? 0))
  if (coefficients.length !== (maxDegree * (maxDegree + 3)) / 2) {
    throw new Error(`Expected a full set of coefficients to degree ${maxDegree}, got ${coefficients.length}`)
  }

  const out = path.join(root, 'data', 'dist', 'wmm.json')
  await mkdir(path.dirname(out), { recursive: true })
  const body = { source: WMM_ZIP_URL, model, epoch, validUntil: epoch + LIFETIME_YEARS, coefficients }
  await writeFile(out, `${JSON.stringify(body)}\n`, 'utf8')
  console.log(`[build:wmm] wrote ${out} (${model}, degree ${maxDegree}, ${coefficients.length} rows)`)
}

function isMainModule(): boolean {
  const entry = process.argv[1]
  if (!entry) return false
  return path.resolve(entry) === path.resolve(fileURLToPath(import.meta.url))
}

if (isMainModule()) {
  main().catch((err: unknown) => {
    console.error(err)
    process.exit(1)
  })
}
