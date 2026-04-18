<script lang="ts">
  import { onMount } from 'svelte'

  let canvas: HTMLCanvasElement

  onMount(() => {
    const ctxEl = canvas.getContext('2d')
    if (!ctxEl) {
      return
    }
    const ctx = ctxEl

    function resize(): void {
      const dpr = window.devicePixelRatio || 1
      const w = Math.max(1, Math.floor(window.innerWidth))
      const h = Math.max(1, Math.floor(window.innerHeight))
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, w, h)
    }

    resize()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  })
</script>

<canvas bind:this={canvas} id="sky" aria-label="Sky view"></canvas>
