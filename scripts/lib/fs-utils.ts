import { mkdir, unlink } from 'node:fs/promises'

export async function ensureDir(dir: string): Promise<void> {
  await mkdir(dir, { recursive: true })
}

export async function tryUnlink(path: string): Promise<void> {
  try {
    await unlink(path)
  } catch {
    // ignore
  }
}
