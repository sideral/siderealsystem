import { createWriteStream } from 'node:fs'
import { createReadStream } from 'node:fs'
import { rename } from 'node:fs/promises'
import { dirname } from 'node:path'
import { pipeline } from 'node:stream/promises'
import { createGunzip } from 'node:zlib'
import { Readable } from 'node:stream'

import { ensureDir, tryUnlink } from './fs-utils.js'
import type { ScopedLog } from './log.js'
import { createProgressThrottler } from './log.js'

export const DEFAULT_DOWNLOAD_USER_AGENT =
  'siderealsystem/0.1 (data download scripts; +repo contact in README)'

function isProbablyHtmlChunk(value: Uint8Array): boolean {
  const s = Buffer.from(value.subarray(0, Math.min(64, value.byteLength))).toString('utf8').trimStart()
  return s.startsWith('<!') || s.startsWith('<html')
}

export type DownloadOptions = {
  log: ScopedLog
  timeoutMs: number
  userAgent?: string
  /** When true, `url` is gzip-compressed; file on disk at `destPath` is stored uncompressed. */
  gunzipAfterDownload?: boolean
}

/**
 * Download `url` to `destPath` with optional throttled progress (uses `Content-Length` when present).
 * If `gunzipAfterDownload`, writes a `.gz` temp file then decompresses to `destPath`.
 */
export async function downloadUrlToFile(
  url: string,
  destPath: string,
  options: DownloadOptions,
): Promise<{ bytesOnWire: number; bytesWritten: number; contentLength: number | null }> {
  const ua = options.userAgent ?? DEFAULT_DOWNLOAD_USER_AGENT
  options.log.info(`GET ${url}`)
  const controller = new AbortController()
  const t = setTimeout(() => controller.abort(), options.timeoutMs)
  let res: Response
  try {
    res = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'User-Agent': ua, Accept: '*/*' },
    })
  } finally {
    clearTimeout(t)
  }
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText} for ${url}`)
  }
  const contentLengthHeader = res.headers.get('content-length')
  const contentLength =
    contentLengthHeader != null && contentLengthHeader !== '' ? Number(contentLengthHeader) : null
  const body = res.body
  if (!body) {
    throw new Error('Response has no body')
  }

  await ensureDir(dirname(destPath))
  const onDiskPath = options.gunzipAfterDownload ? `${destPath}.downloading.gz` : `${destPath}.downloading`

  await tryUnlink(onDiskPath)
  const throttled = createProgressThrottler({
    log: options.log,
    everyBytes: 8 * 1024 * 1024,
    minIntervalMs: 2000,
  })

  const reader = body.getReader()
  const out = createWriteStream(onDiskPath)
  let bytesOnWire = 0
  let sawFirstChunk = false

  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      if (value.byteLength === 0) continue
      if (!sawFirstChunk) {
        sawFirstChunk = true
        if (!options.gunzipAfterDownload && isProbablyHtmlChunk(value)) {
          throw new Error(`Download appears to be HTML (not catalog data) for ${url}`)
        }
      }
      bytesOnWire += value.byteLength
      throttled(bytesOnWire, Number.isFinite(contentLength as number) ? (contentLength as number) : null)
      await new Promise<void>((resolve, reject) => {
        out.write(value, (err: Error | null | undefined) => (err ? reject(err) : resolve()))
      })
    }
  } finally {
    reader.releaseLock()
    await new Promise<void>((resolve, reject) => {
      out.end((err?: Error | null) => (err ? reject(err) : resolve()))
    })
  }

  options.log.info(`download complete (${bytesOnWire} bytes on wire)`)

  if (options.gunzipAfterDownload) {
    options.log.info('decompressing gzip…')
    await tryUnlink(destPath)
    const inp = createReadStream(onDiskPath)
    const gunzip = createGunzip()
    const finalOut = createWriteStream(`${destPath}.downloading`)
    await pipeline(inp, gunzip, finalOut)
    await tryUnlink(onDiskPath)
    await rename(`${destPath}.downloading`, destPath)
    const st = await import('node:fs/promises').then((fs) => fs.stat(destPath))
    options.log.info(`wrote uncompressed ${destPath} (${st.size} bytes)`)
    return { bytesOnWire, bytesWritten: st.size, contentLength }
  }

  await rename(onDiskPath, destPath)
  const st = await import('node:fs/promises').then((fs) => fs.stat(destPath))
  return { bytesOnWire, bytesWritten: st.size, contentLength }
}

/**
 * Pipe a Node readable to `destPath` (e.g. zip entry stream) with atomic rename from `.downloading`.
 */
export async function nodeStreamToFile(
  source: Readable,
  destPath: string,
  log: ScopedLog,
): Promise<number> {
  await ensureDir(dirname(destPath))
  const tmp = `${destPath}.downloading`
  await tryUnlink(tmp)
  const out = createWriteStream(tmp)
  await pipeline(source, out)
  await rename(tmp, destPath)
  const st = await import('node:fs/promises').then((fs) => fs.stat(destPath))
  log.info(`wrote ${destPath} (${st.size} bytes)`)
  return st.size
}
