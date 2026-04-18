import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

/** Repository root (directory containing `package.json`). */
export function repoRoot(): string {
  const here = dirname(fileURLToPath(import.meta.url))
  return join(here, '..', '..')
}
