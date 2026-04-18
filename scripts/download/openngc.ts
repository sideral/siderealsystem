/**
 * Downloads **[OpenNGC](https://github.com/mattiaverga/OpenNGC)** as a **pinned release zip** from GitHub and
 * extracts it under `data/raw/openngc/<tag>/`.
 *
 * ## Role
 * Optional **DSO** layer (NGC/IC objects, positions, types, …) for a future \`dsos.json\` build step (not implemented
 * in this download-only pass).
 *
 * ## Upstream
 * GitHub **archive zip** for a fixed tag (no floating \`master\`). Inner directory inside the zip follows the pattern
 * \`OpenNGC-<date>\` (same as tag without leading \`v\`).
 *
 * ## Output layout
 * \`data/raw/openngc/<OPENNGC_TAG>/OpenNGC-<…>/\` — full upstream tree including \`database_files/NGC.csv\`,
 * \`LICENSES/\`, \`README.md\`, etc.
 *
 * ## Skip-if-present
 * If \`database_files/NGC.csv\` exists under the expected inner folder → skip download and extraction.
 *
 * ## Operational
 * `pnpm download:openngc` or `tsx scripts/download/openngc.ts`. Uses **adm-zip** (\`devDependency\`) for extraction.
 *
 * ## License (summary)
 * OpenNGC ships **CC BY-SA 4.0** text under \`LICENSES/\`; full wording in root **README → Data sources and credits**.
 */

import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import AdmZip from 'adm-zip'

import { DEFAULT_DOWNLOAD_USER_AGENT, downloadUrlToFile } from '../lib/http.js'
import { createScopedLog } from '../lib/log.js'
import { repoRoot } from '../lib/paths.js'
import { ensureDir } from '../lib/fs-utils.js'
import { fileExistsNonEmptyAndNotHtml } from '../lib/validate.js'

const OPENNGC_TAG = 'v20260307'
const OPENNGC_ARCHIVE_ZIP_URL = `https://github.com/mattiaverga/OpenNGC/archive/refs/tags/${OPENNGC_TAG}.zip`
/** Root folder name inside the GitHub-generated zip (tag without leading `v`). */
const OPENNGC_INNER_ROOT = `OpenNGC-${OPENNGC_TAG.replace(/^v/, '')}`

const DOWNLOAD_TIMEOUT_MS = 300_000

export async function main(): Promise<void> {
  const log = createScopedLog('openngc')
  const root = repoRoot()
  const outRoot = path.join(root, 'data', 'raw', 'openngc', OPENNGC_TAG)
  const markerCsv = path.join(outRoot, OPENNGC_INNER_ROOT, 'database_files', 'NGC.csv')

  log.info(`output root: ${outRoot}`)

  if (await fileExistsNonEmptyAndNotHtml(markerCsv)) {
    log.info(`skip: already present (${markerCsv})`)
    return
  }

  await ensureDir(outRoot)
  const zipPath = path.join(outRoot, `OpenNGC-${OPENNGC_TAG}.zip`)

  log.info(`downloading ${OPENNGC_ARCHIVE_ZIP_URL}`)
  await downloadUrlToFile(OPENNGC_ARCHIVE_ZIP_URL, zipPath, {
    log,
    timeoutMs: DOWNLOAD_TIMEOUT_MS,
    userAgent: DEFAULT_DOWNLOAD_USER_AGENT,
  })

  log.info('extracting zip (may take a moment)…')
  const zip = new AdmZip(zipPath)
  zip.extractAllTo(outRoot, true)
  log.info(`extracted to ${outRoot}`)

  const readme = path.join(outRoot, 'README.md')
  const text = `# OpenNGC (raw) — tag ${OPENNGC_TAG}

## Source
- **Repository:** https://github.com/mattiaverga/OpenNGC
- **Pinned tag:** \`${OPENNGC_TAG}\`
- **Archive:** ${OPENNGC_ARCHIVE_ZIP_URL}

## Layout
Extracted under \`${OPENNGC_INNER_ROOT}/\` with \`database_files/NGC.csv\` and other upstream files.

## License
See \`LICENSES/CC-BY-SA-4.0.txt\` inside the extracted tree and the root project README credits section.
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
