/**
 * Downloads the **Hipparcos main catalog** (`hip_main`) from CDS (catalog **I/239**) into `data/raw/hipparcos/`.
 *
 * ## Role
 * Primary **astrometry and photometry** for the future static sky map: ICRS positions, magnitudes, B−V, **HIP**
 * identifiers, and cross-ids where present. A later merge step (out of scope for this repo pass) will subset
 * and join this table with Yale BSC / IAU names.
 *
 * ## Upstream
 * CDSarc HTTPS mirror, catalog **I/239**. The service currently ships **`hip_main.dat` uncompressed** (~51 MiB);
 * gzip-on-the-fly via `.gz` is not used here (404 on `hip_main.dat.gz` at time of writing).
 *
 * ## Output layout
 * - `data/raw/hipparcos/hip_main.dat` — ASCII table (see CDS `ReadMe` in the same folder when you add a manual copy).
 * - `data/raw/hipparcos/README.md` — local provenance (gitignored with `data/raw/`).
 *
 * ## Skip-if-present
 * If `hip_main.dat` exists, is non-empty, and does not look like an HTML error page → exit without network.
 *
 * ## Operational
 * Run: `pnpm download:hipparcos` or `tsx scripts/download/hipparcos.ts`. Requires network on first fetch.
 * **`data/raw/` is gitignored.** Full attribution lives in root **`README.md` → Data sources and credits**.
 *
 * @see {@link https://www.cosmos.esa.int/web/hipparcos ESA Hipparcos}
 * @see {@link https://cdsarc.cds.unistra.fr/ftp/cats/I/239/ CDS I/239}
 */

import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

import { DEFAULT_DOWNLOAD_USER_AGENT, downloadUrlToFile } from '../lib/http.js'
import { createScopedLog } from '../lib/log.js'
import { repoRoot } from '../lib/paths.js'
import { fileExistsNonEmptyAndNotHtml } from '../lib/validate.js'

const CDSARC_HIPPARCOS_BASE = 'https://cdsarc.cds.unistra.fr/ftp/cats/I/239'
const HIPPARCOS_HIP_MAIN_DAT = `${CDSARC_HIPPARCOS_BASE}/hip_main.dat`

const DOWNLOAD_TIMEOUT_MS = 600_000

export async function main(): Promise<void> {
  const log = createScopedLog('hipparcos')
  const root = repoRoot()
  const outDir = path.join(root, 'data', 'raw', 'hipparcos')
  const outFile = path.join(outDir, 'hip_main.dat')

  log.info(`output directory: ${outDir}`)

  if (await fileExistsNonEmptyAndNotHtml(outFile)) {
    log.info(`skip: already present (${outFile})`)
    return
  }

  log.info('fetching Hipparcos main catalog (large file, may take several minutes)…')
  await downloadUrlToFile(HIPPARCOS_HIP_MAIN_DAT, outFile, {
    log,
    timeoutMs: DOWNLOAD_TIMEOUT_MS,
    userAgent: DEFAULT_DOWNLOAD_USER_AGENT,
  })

  const readme = path.join(outDir, 'README.md')
  const text = `# Hipparcos main catalog (raw)

## Source
- **Catalog:** CDS **I/239** — The Hipparcos and Tycho Catalogues (ESA 1997)
- **File:** \`hip_main.dat\` from ${CDSARC_HIPPARCOS_BASE}/
- **Retrieved by:** \`scripts/download/hipparcos.ts\`

## License
Confirm current ESA / CDS terms before redistribution. Typical summary: **CC BY 4.0** for ESA Hipparcos archive material — verify at https://www.cosmos.esa.int/web/hipparcos and CDS pages.

## Columns
See the CDS \`ReadMe\` for byte-by-byte description of \`hip_main.dat\`.
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
