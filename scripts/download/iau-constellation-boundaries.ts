/**
 * Downloads **Roman (1987)** constellation-boundary segment data from CDS catalog **VI/42** into
 * `data/raw/iau-constellation-boundaries/`.
 *
 * ## Role
 * **Edge segments** for assigning an object to one of the **88** IAU constellations (point-in-polygon style tests
 * against RA/Dec segments). Equinox in this table is **B1875** as published in VI/42 \`data.dat\`; a **future**
 * pipeline must precess or transform coordinates consistently with this file (out of scope here).
 *
 * ## Upstream
 * CDS **VI/42** — \`data.dat\` plus documentation \`ReadMe\`.
 *
 * ## Output layout
 * - `data/raw/iau-constellation-boundaries/data.dat`
 * - `data/raw/iau-constellation-boundaries/ReadMe`
 * - `data/raw/iau-constellation-boundaries/README.md` — local provenance
 *
 * ## Skip-if-present
 * If both \`data.dat\` and \`ReadMe\` are sane → skip.
 *
 * ## Operational
 * `pnpm download:iau-constellation-boundaries` or `tsx scripts/download/iau-constellation-boundaries.ts`.
 *
 * @see {@link https://cdsarc.cds.unistra.fr/ftp/cats/VI/42/ CDS VI/42}
 * @see {@link https://cdsarc.cds.unistra.fr/ftp/cats/VI/49/ CDS VI/49} (J2000 chart polygons — not downloaded here)
 */

import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

import { DEFAULT_DOWNLOAD_USER_AGENT, downloadUrlToFile } from '../lib/http.js'
import { createScopedLog } from '../lib/log.js'
import { repoRoot } from '../lib/paths.js'
import { fileExistsNonEmptyAndNotHtml } from '../lib/validate.js'

const CDSARC_VI42_BASE = 'https://cdsarc.cds.unistra.fr/ftp/cats/VI/42'
const VI42_DATA_DAT = `${CDSARC_VI42_BASE}/data.dat`
const VI42_README = `${CDSARC_VI42_BASE}/ReadMe`

const DOWNLOAD_TIMEOUT_MS = 120_000

export async function main(): Promise<void> {
  const log = createScopedLog('iau-constellation-boundaries')
  const root = repoRoot()
  const outDir = path.join(root, 'data', 'raw', 'iau-constellation-boundaries')
  const dataFile = path.join(outDir, 'data.dat')
  const readMe = path.join(outDir, 'ReadMe')

  log.info(`output directory: ${outDir}`)

  if ((await fileExistsNonEmptyAndNotHtml(dataFile)) && (await fileExistsNonEmptyAndNotHtml(readMe))) {
    log.info(`skip: already present (${dataFile}, ${readMe})`)
    return
  }

  if (!(await fileExistsNonEmptyAndNotHtml(readMe))) {
    log.info('fetching ReadMe…')
    await downloadUrlToFile(VI42_README, readMe, {
      log,
      timeoutMs: DOWNLOAD_TIMEOUT_MS,
      userAgent: DEFAULT_DOWNLOAD_USER_AGENT,
    })
  } else {
    log.info('skip file (present): ReadMe')
  }

  if (!(await fileExistsNonEmptyAndNotHtml(dataFile))) {
    log.info('fetching data.dat…')
    await downloadUrlToFile(VI42_DATA_DAT, dataFile, {
      log,
      timeoutMs: DOWNLOAD_TIMEOUT_MS,
      userAgent: DEFAULT_DOWNLOAD_USER_AGENT,
    })
  } else {
    log.info('skip file (present): data.dat')
  }

  const readme = path.join(outDir, 'README.md')
  const text = `# IAU constellation boundaries — CDS VI/42 (Roman 1987) raw

## Source
- **Catalog:** CDS **VI/42** — Identification of a Constellation From Position (Roman 1987)
- **Files:** \`ReadMe\`, \`data.dat\` from ${CDSARC_VI42_BASE}/

## Epoch / frame
The segment file uses **equator and equinox B1875** per the VI/42 ReadMe. Future app code must agree on precession / polygon tests.

## References
Roman, N.G., 1987, PASP, 99, 695
`
  await writeFile(readme, text, 'utf8')
  log.info(`wrote ${readme}`)
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
