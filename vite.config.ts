import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vitest/config'

/**
 * `pnpm dev:phone` (mode "phone") serves over https on the local network, so a phone can open
 * the dev server. Phones only hand out motion and location data to secure pages.
 * The certificate is self-signed, made once with openssl and kept out of git; the phone's
 * browser will warn about it the first time.
 */
function devCertificate(): { key: Buffer; cert: Buffer } {
  const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'node_modules', '.cache', 'sidereal-dev-cert')
  const key = path.join(dir, 'key.pem')
  const cert = path.join(dir, 'cert.pem')
  if (!existsSync(key) || !existsSync(cert)) {
    mkdirSync(dir, { recursive: true })
    execFileSync(
      'openssl',
      ['req', '-x509', '-newkey', 'rsa:2048', '-nodes', '-days', '365', '-subj', '/CN=sidereal-dev', '-keyout', key, '-out', cert],
      { stdio: 'ignore' },
    )
  }
  return { key: readFileSync(key), cert: readFileSync(cert) }
}

export default defineConfig(({ mode }) => ({
  plugins: [svelte()],
  server: {
    // An ngrok tunnel gives the phone https without the self-signed certificate warning.
    allowedHosts: ['.ngrok-free.app', '.ngrok-free.dev', '.ngrok.app'],
    ...(mode === 'phone' ? { host: true, https: devCertificate() } : {}),
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
}))
