import './style.css'

const logo = document.querySelector<HTMLAnchorElement>('#logo')
if (logo) {
  logo.href = '#'
}

const skyEl = document.querySelector<HTMLCanvasElement>('#sky')
if (!skyEl) {
  throw new Error('missing #sky canvas')
}
const sky = skyEl

const ctxEl = sky.getContext('2d')
if (!ctxEl) {
  throw new Error('could not get 2d context')
}
const ctx = ctxEl

function resize(): void {
  const dpr = window.devicePixelRatio || 1
  const w = Math.max(1, Math.floor(window.innerWidth))
  const h = Math.max(1, Math.floor(window.innerHeight))
  sky.width = Math.floor(w * dpr)
  sky.height = Math.floor(h * dpr)
  sky.style.width = `${w}px`
  sky.style.height = `${h}px`
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, w, h)
}

resize()
window.addEventListener('resize', resize)
