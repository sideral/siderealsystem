<script lang="ts">
  /**
   * A star as seen up close through a dimming filter, drawn by one fragment shader.
   * Every visual feature maps to a physical input in `StarLook`. This component only owns the
   * canvas: `frameUniforms` works out the numbers for each frame and `shader.ts` draws them.
   */
  import { onMount } from 'svelte'
  import { frameUniforms } from './frame'
  import { FRAG, VERT } from './shader'
  import type { StarLook } from './star'

  let {
    look,
    centerY = 0.5,
    label,
  }: {
    look: StarLook
    /** Disc centre, as a fraction of viewport height from the top */
    centerY?: number
    label: string
  } = $props()

  let canvas: HTMLCanvasElement

  function compile(gl: WebGLRenderingContext): WebGLProgram | null {
    const program = gl.createProgram()
    for (const [type, source] of [
      [gl.VERTEX_SHADER, VERT],
      [gl.FRAGMENT_SHADER, FRAG],
    ] as const) {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('StarDisc shader failed to compile:', gl.getShaderInfoLog(shader))
        return null
      }
      gl.attachShader(program, shader)
    }
    gl.linkProgram(program)
    return gl.getProgramParameter(program, gl.LINK_STATUS) ? program : null
  }

  onMount(() => {
    const gl = canvas.getContext('webgl')
    const program = gl && compile(gl)
    if (!gl || !program) return // no WebGL: the page stays black behind the text
    gl.useProgram(program)

    // One oversized triangle covers the viewport
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const aPos = gl.getAttribLocation(program, 'aPos')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const locations: Record<string, WebGLUniformLocation | null> = {}
    const at = (name: string) => (locations[name] ??= gl.getUniformLocation(program, name))

    /** A float, one vec2 or vec3, or one or more vec4s: every uniform the shader has is one of these. */
    function set(name: string, value: number | number[]): void {
      if (typeof value === 'number') gl!.uniform1f(at(name), value)
      else if (value.length === 2) gl!.uniform2fv(at(name), value)
      else if (value.length === 3) gl!.uniform3fv(at(name), value)
      else gl!.uniform4fv(at(name), value)
    }

    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let raf = 0
    function frame(now: number): void {
      if (!gl) return
      const dpr = window.devicePixelRatio || 1
      const w = Math.floor(window.innerWidth * dpr)
      const h = Math.floor(window.innerHeight * dpr)
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
        gl.viewport(0, 0, w, h)
      }

      set('uRes', [w, h])
      set('uOrigin', [0, 0])
      set('uCenterY', centerY)
      const uniforms = frameUniforms(look, still ? 0 : now / 1000)
      for (const name in uniforms) set(name, uniforms[name])

      gl.drawArrays(gl.TRIANGLES, 0, 3)
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  })
</script>

<canvas bind:this={canvas} aria-label={label}></canvas>

<style>
  canvas {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
</style>
