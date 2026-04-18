import { open, stat } from 'node:fs/promises'

function isProbablyHtml(buf: Uint8Array): boolean {
  const s = Buffer.from(buf.subarray(0, Math.min(128, buf.byteLength))).toString('utf8').trimStart()
  return s.startsWith('<!') || s.startsWith('<html')
}

/** True if path exists, size &gt; 0, and first bytes are not an HTML error page. */
export async function fileExistsNonEmptyAndNotHtml(path: string): Promise<boolean> {
  try {
    const st = await stat(path)
    if (!st.isFile() || st.size === 0) return false
    const fh = await open(path, 'r')
    try {
      const buf = new Uint8Array(256)
      const { bytesRead } = await fh.read(buf, 0, 256, 0)
      if (bytesRead === 0) return false
      return !isProbablyHtml(buf.subarray(0, bytesRead))
    } finally {
      await fh.close()
    }
  } catch {
    return false
  }
}
