/**
 * Downloads the **World Magnetic Model 2025** (WMM2025) coefficient file from NOAA NCEI into `data/raw/wmm/`.
 *
 * ## Role
 * A phone compass points to **magnetic** north; stars sit around **true** north. The sky view adds the
 * magnetic declination for the observer's place and date, computed from these coefficients.
 *
 * ## Upstream
 * NOAA NCEI, https://www.ncei.noaa.gov/products/world-magnetic-model — `WMM2025COF.zip`, which holds
 * `WMM.COF` (Gauss coefficients and their yearly change, epoch 2025.0, valid 2025–2030) and the official
 * test values.
 *
 * ## Output layout
 * - `data/raw/wmm/WMM2025COF/WMM.COF` (and the other files in the zip)
 * - `data/raw/wmm/README.md` — local provenance.
 *
 * ## Skip-if-present
 * If `WMM.COF` is present and not HTML → skip.
 *
 * ## Operational
 * `pnpm download:wmm` or `tsx scripts/download/wmm.ts`. **`data/raw/` is gitignored.**
 *
 * ## License
 * Work of the US Government: public domain.
 */

import { readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import AdmZip from 'adm-zip'

import { ensureDir } from '../lib/fs-utils.js'
import { DEFAULT_DOWNLOAD_USER_AGENT, downloadUrlToFile } from '../lib/http.js'
import { createScopedLog } from '../lib/log.js'
import { repoRoot } from '../lib/paths.js'
import { fileExistsNonEmptyAndNotHtml } from '../lib/validate.js'

export const WMM_ZIP_URL = 'https://www.ncei.noaa.gov/sites/default/files/2024-12/WMM2025COF.zip'

const DOWNLOAD_TIMEOUT_MS = 120_000

/** Where the coefficient file lands, wherever the zip puts it. */
export async function findWmmCof(outRoot: string): Promise<string | null> {
  const entries = await readdir(outRoot, { recursive: true }).catch(() => [] as string[])
  const hit = entries.find((entry) => path.basename(entry) === 'WMM.COF')
  return hit ? path.join(outRoot, hit) : null
}

export async function main(): Promise<void> {
  const log = createScopedLog('wmm')
  const outRoot = path.join(repoRoot(), 'data', 'raw', 'wmm')
  log.info(`output root: ${outRoot}`)

  const existing = await findWmmCof(outRoot)
  if (existing && (await fileExistsNonEmptyAndNotHtml(existing))) {
    log.info(`skip: already present (${existing})`)
    return
  }

  await ensureDir(outRoot)
  const zipPath = path.join(outRoot, 'WMM2025COF.zip')
  await downloadUrlToFile(WMM_ZIP_URL, zipPath, { log, timeoutMs: DOWNLOAD_TIMEOUT_MS, userAgent: DEFAULT_DOWNLOAD_USER_AGENT })
  new AdmZip(zipPath).extractAllTo(outRoot, true)

  const cof = await findWmmCof(outRoot)
  if (!cof) throw new Error(`WMM.COF not found in ${zipPath}`)
  log.info(`coefficients at ${cof}`)

  const readme = `# World Magnetic Model 2025 (raw)

## Source
- **Product page:** https://www.ncei.noaa.gov/products/world-magnetic-model
- **Archive:** ${WMM_ZIP_URL}
- **Downloaded:** ${new Date().toISOString().slice(0, 10)}

## Layout
\`${path.relative(outRoot, cof)}\`: degree-12 Gauss coefficients (nT) and secular variation (nT/yr), epoch 2025.0,
valid 2025.0–2030.0. Other files from the zip sit beside it.

## License
NOAA NCEI / British Geological Survey, work of the US Government: public domain.
`
  await writeFile(path.join(outRoot, 'README.md'), readme, 'utf8')
  log.info('done.')
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
