import { mount } from 'svelte'
import App from './App.svelte'
import './style.css'

const target = document.getElementById('app')
if (!target) {
  throw new Error('missing #app')
}

mount(App, { target })

/** How long the loader spins at full size before leaving, so even a fast load shows the whole flourish. */
const LOADER_MIN_MS = 1300

// Retire the loader (index.html) once the sky has had a frame to draw itself
const loader = document.getElementById('loader')
if (loader) {
  requestAnimationFrame(() => {
    const wait = Math.max(0, LOADER_MIN_MS - performance.now())
    setTimeout(() => {
      loader.classList.add('done')
      loader.addEventListener('animationend', () => loader.remove())
    }, wait)
  })
}
