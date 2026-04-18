export type ScopedLog = {
  info: (message: string) => void
  progress: (message: string) => void
}

/** Prefix every line for grep-friendly CI / local logs. */
export function createScopedLog(scope: string): ScopedLog {
  const p = `[download:${scope}]`
  return {
    info: (message: string) => {
      console.log(`${p} ${message}`)
    },
    progress: (message: string) => {
      console.log(`${p} ${message}`)
    },
  }
}

/** Throttle progress callbacks by byte delta and wall time. */
export function createProgressThrottler(opts: {
  log: ScopedLog
  everyBytes: number
  minIntervalMs: number
}): (received: number, total: number | null) => void {
  let lastBytes = 0
  let lastTime = 0
  return (received: number, total: number | null) => {
    const now = Date.now()
    if (received - lastBytes < opts.everyBytes && now - lastTime < opts.minIntervalMs) {
      return
    }
    lastBytes = received
    lastTime = now
    if (total != null && total > 0) {
      const pct = ((received / total) * 100).toFixed(1)
      opts.log.progress(`received ${received} / ${total} bytes (${pct}%)`)
    } else {
      opts.log.progress(`received ${received} bytes`)
    }
  }
}
