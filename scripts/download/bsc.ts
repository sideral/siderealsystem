/**
 * Downloads the **Yale Bright Star Catalogue, 5th revised preliminary** machine-readable table from CDS (**V/50**)
 * into `data/raw/bsc/`.
 *
 * ## Role
 * **HR numbers**, **Bayer–Flamsteed** style designations, **spectral types**, and cross-identifications for bright
 * stars (V ≲ 6.5). A future merge step will join these rows to Hipparcos on HR / catalog keys (join logic out of scope).
 *
 * ## Upstream
 * CDS catalog **V/50** — \`catalog.gz\` (gzip). Harvard’s classic \`bsc5.dat\` is not used here because CDS is more
 * reliable on automated HTTPS; the CDS **\`catalog\` file is 197-byte fixed-width ASCII** per the V/50 ReadMe (not
 * identical to the historic Harvard 166-byte \`bsc5\` layout).
 *
 * ## Output layout
 * - `data/raw/bsc/catalog.dat` — uncompressed ASCII (9110 records × 197 bytes/line).
 * - `data/raw/bsc/README.md` — local provenance.
 *
 * ## Skip-if-present
 * If `catalog.dat` is sane → skip.
 *
 * ## Operational
 * `pnpm download:bsc` or `tsx scripts/download/bsc.ts`. **`data/raw/` is gitignored.**
 *
 * @see {@link https://cdsarc.cds.unistra.fr/ftp/cats/V/50/ CDS V/50}
 * @see {@link http://tdc-www.harvard.edu/catalogs/bsc5.html Yale BSC page (alternate distribution)}
 */

import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

import { DEFAULT_DOWNLOAD_USER_AGENT, downloadUrlToFile } from '../lib/http.js'
import { createScopedLog } from '../lib/log.js'
import { repoRoot } from '../lib/paths.js'
import { fileExistsNonEmptyAndNotHtml } from '../lib/validate.js'

const CDSARC_V50_BASE = 'https://cdsarc.cds.unistra.fr/ftp/cats/V/50'
const BSC_CATALOG_GZ_URL = `${CDSARC_V50_BASE}/catalog.gz`

const DOWNLOAD_TIMEOUT_MS = 120_000

export async function main(): Promise<void> {
  const log = createScopedLog('bsc')
  const root = repoRoot()
  const outDir = path.join(root, 'data', 'raw', 'bsc')
  const outFile = path.join(outDir, 'catalog.dat')

  log.info(`output directory: ${outDir}`)

  if (await fileExistsNonEmptyAndNotHtml(outFile)) {
    log.info(`skip: already present (${outFile})`)
    return
  }

  log.info('fetching Yale Bright Star Catalogue (CDS V/50, gzip)…')
  await downloadUrlToFile(BSC_CATALOG_GZ_URL, outFile, {
    log,
    timeoutMs: DOWNLOAD_TIMEOUT_MS,
    userAgent: DEFAULT_DOWNLOAD_USER_AGENT,
    gunzipAfterDownload: true,
  })

  const readme = path.join(outDir, 'README.md')
  const text = `# Yale Bright Star Catalogue (raw, CDS V/50)

## Source
- **Catalog:** CDS **V/50** — Bright Star Catalogue, 5th Revised Ed. (preliminary machine version) (Hoffleit+, 1991)
- **File:** \`catalog.gz\` → decompressed \`catalog.dat\` (${BSC_CATALOG_GZ_URL})
- **Format:** 197-byte fixed-width ASCII rows (9110 records) — see CDS \`ReadMe\` for byte layout.

## Note on Harvard \`bsc5.dat\`
The classic Harvard ASCII distribution was not used here (HTTPS timeouts in automation); CDS V/50 is the same underlying Yale BSC content in a documented CDS layout.

## License
See CDS / Yale / NASA ADC terms in the V/50 ReadMe; cite Hoffleit & Warren when publishing derived tables.
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
