/**
 * Orchestrates all catalog **download** scripts in a fixed order. Each module is responsible for its own
 * skip-if-present logic and logging.
 *
 * ## Usage
 * - `pnpm download:data`
 * - `tsx scripts/download/all.ts`
 *
 * ## Order
 * 1. Hipparcos (I/239) — 2. Yale BSC (V/50) — 3. IAU star names (IV/27A) — 4. Constellation boundaries (VI/42) —
 *    5. OpenNGC (GitHub zip).
 *
 * On failure, logs the failing step and exits with code **1**.
 */

import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

import { createScopedLog } from '../lib/log.js'
import { main as runBsc } from './bsc.js'
import { main as runHipparcos } from './hipparcos.js'
import { main as runIauBoundaries } from './iau-constellation-boundaries.js'
import { main as runIauNames } from './iau-star-names.js'
import { main as runOpenngc } from './openngc.js'

const steps = [
  { name: 'hipparcos', run: runHipparcos },
  { name: 'bsc', run: runBsc },
  { name: 'iau-star-names', run: runIauNames },
  { name: 'iau-constellation-boundaries', run: runIauBoundaries },
  { name: 'openngc', run: runOpenngc },
] as const

export async function main(): Promise<void> {
  const log = createScopedLog('all')
  const total = steps.length
  let i = 0
  for (const step of steps) {
    i += 1
    log.info(`--- step ${i}/${total}: ${step.name} ---`)
    await step.run()
  }
  log.info('all download steps finished.')
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
