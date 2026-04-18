/**
 * Downloads the **IAU Catalog of Star Names (CSN)** machine-readable tables from CDS catalog **IV/27A** into
 * `data/raw/iau-star-names/`.
 *
 * ## Role
 * Official **IAU Working Group on Star Names (WGSN)** published data: approved **proper names** and related
 * columns for cross-identification. A **future** merge step will join to Hipparcos / other ids (out of scope).
 *
 * ## Upstream
 * CDS **IV/27A** flat files (HTTPS directory). Do **not** scrape the VizieR HTML UI — only these static files:
 * \`ReadMe\`, \`catalog.dat\`, \`addendum.dat\`, \`refs.dat\`, \`table1.dat\`, \`table2.dat\`, \`table3.dat\`.
 *
 * ## Output layout
 * Same filenames under `data/raw/iau-star-names/` plus `README.md` (local provenance).
 *
 * ## Skip-if-present
 * If **every** pinned file exists and each passes the non-empty / not-HTML sanity check → skip all HTTP.
 *
 * ## Operational
 * `pnpm download:iau-star-names` or `tsx scripts/download/iau-star-names.ts`.
 *
 * @see {@link https://cdsarc.cds.unistra.fr/ftp/cats/IV/27A/ CDS IV/27A}
 */

import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

import { DEFAULT_DOWNLOAD_USER_AGENT, downloadUrlToFile } from '../lib/http.js'
import { createScopedLog } from '../lib/log.js'
import { repoRoot } from '../lib/paths.js'
import { fileExistsNonEmptyAndNotHtml } from '../lib/validate.js'

const CDSARC_IAU_NAMES_BASE = 'https://cdsarc.cds.unistra.fr/ftp/cats/IV/27A'

const IAU_STAR_NAMES_FILES = [
  'ReadMe',
  'catalog.dat',
  'addendum.dat',
  'refs.dat',
  'table1.dat',
  'table2.dat',
  'table3.dat',
] as const

const DOWNLOAD_TIMEOUT_MS = 120_000

export async function main(): Promise<void> {
  const log = createScopedLog('iau-star-names')
  const root = repoRoot()
  const outDir = path.join(root, 'data', 'raw', 'iau-star-names')

  log.info(`output directory: ${outDir}`)

  const allPresent = await Promise.all(
    IAU_STAR_NAMES_FILES.map(async (name) =>
      fileExistsNonEmptyAndNotHtml(path.join(outDir, name)),
    ),
  )
  if (allPresent.every(Boolean)) {
    log.info(`skip: all ${IAU_STAR_NAMES_FILES.length} files already present under ${outDir}`)
    return
  }

  for (const name of IAU_STAR_NAMES_FILES) {
    const dest = path.join(outDir, name)
    if (await fileExistsNonEmptyAndNotHtml(dest)) {
      log.info(`skip file (present): ${name}`)
      continue
    }
    const url = `${CDSARC_IAU_NAMES_BASE}/${name}`
    log.info(`fetching ${name}…`)
    await downloadUrlToFile(url, dest, {
      log,
      timeoutMs: DOWNLOAD_TIMEOUT_MS,
      userAgent: DEFAULT_DOWNLOAD_USER_AGENT,
    })
  }

  const readme = path.join(outDir, 'README.md')
  const text = `# IAU Catalog of Star Names — CDS IV/27A (raw)

## Source
- **Catalog:** CDS **IV/27A** — IAU Catalog of Star Names (machine-readable tables)
- **Base URL:** ${CDSARC_IAU_NAMES_BASE}/
- **Files:** ${IAU_STAR_NAMES_FILES.map((f) => `\`${f}\``).join(', ')}

## License / citation
Follow CDS rules and IAU WGSN guidance; cite the catalog and ReadMe when publishing derived data.
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
