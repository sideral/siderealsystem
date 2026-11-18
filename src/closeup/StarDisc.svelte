<script lang="ts">
  /**
   * A star as seen up close through a dimming filter, drawn by one fragment shader.
   * Every visual feature maps to a physical input in `StarLook`: colour (temperature),
   * limb darkening, surface texture (convection), spots, flattening and gravity darkening
   * (fast spin), pulsation, a soft or lumpy edge (loose outer layers), a companion star,
   * a ring of gas or dust, and a dust nebula. The halo is optical glare, not part of the star.
   */
  import { onMount } from 'svelte'
  import { DEFAULT_RADIUS, type StarLook } from './star'

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

  /** The faint mottling of a hot star whose outer layers don't convect. */
  const SMOOTH = { amplitude: 0.05, scale: 5, speed: 0.015 }

  const VERT = `attribute vec2 aPos; void main(){ gl_Position = vec4(aPos, 0.0, 1.0); }`

  const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform float uCenterY;
uniform float uRadius;      // disc radius (pulse applied), fraction of the short side
uniform vec3 uColor;        // centre of the disc
uniform vec3 uLimbColor;    // edge of the disc
uniform float uLimb;        // limb-darkening coefficient
uniform float uWhiten;      // how far the centre saturates toward white
uniform float uBright;      // overall brightness (pulse applied)
uniform float uSpin;        // rotation, rad/s
uniform vec3 uTexture;      // amplitude, scale, speed
uniform vec3 uSpots;        // darkness, size, seed
uniform float uFlat;        // flattening
uniform float uGravDark;    // gravity darkening
uniform float uFuzz;        // edge softness, in disc radii
uniform float uWobble;      // outline irregularity
uniform float uGlare;
uniform vec3 uCompPos;      // companion centre from the star's centre; z > 0 means in front
uniform float uCompRadius;  // 0 = no companion
uniform vec3 uCompColor;
uniform float uCompBright;
uniform float uCompGlare;
uniform float uNebula;
uniform vec4 uRing;         // inner, outer (star radii), tilt (0 edge-on, 1 face-on), brightness
uniform vec3 uRingColor;

float hash(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float noise(vec3 x){
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * noise(p); p *= 2.03; a *= 0.5; } return s; }

// A few round starspots at fixed places on the surface, each a dark core with a soft rim
float starspots(vec3 q, float size, float seed){
  float dark = 0.0;
  for (int i = 0; i < 6; i++) {
    float k = float(i) * 7.31 + seed;
    vec3 c = vec3(hash(vec3(k, 1.3, 2.1)), hash(vec3(k, 5.7, 0.4)), hash(vec3(k, 9.2, 3.3))) * 2.0 - 1.0;
    c.y *= 0.5;                                          // keep them away from the poles
    float s = size * (0.55 + 0.9 * hash(vec3(k, 4.4, 8.8)));
    float d = distance(q, normalize(c));
    dark = max(dark, 0.55 * smoothstep(s, 0.6 * s, d) + 0.45 * smoothstep(0.6 * s, 0.35 * s, d));
  }
  return dark;
}

// Light scattered around a bright source, falling off with distance d
float halo(float d){ return 0.30 * exp(-d * 10.0) + 0.10 / (1.0 + 26.0 * d * d); }

void main(){
  float shortSide = min(uRes.x, uRes.y);
  vec2 p = (gl_FragCoord.xy - vec2(0.5, 1.0 - uCenterY) * uRes) / shortSide;

  // Outline: lumpy where the outer layers are loose, flattened where the star spins fast
  float ang = atan(p.y, p.x);
  float lump = 1.0 + 2.0 * uWobble * (fbm(vec3(cos(ang), sin(ang), uTime * 0.03) * 1.6) - 0.5);
  float R = uRadius * lump;
  vec2 pe = vec2(p.x, p.y / (1.0 - uFlat));
  float r = length(pe) / R;

  // Photosphere. mu = cos(angle between the surface normal and the line of sight)
  float mu = sqrt(max(0.0, 1.0 - r * r));
  vec3 n = vec3(pe / R, mu);
  float a = uTime * uSpin;
  vec3 q = vec3(n.x * cos(a) + n.z * sin(a), n.y, -n.x * sin(a) + n.z * cos(a));

  float cells = fbm(q * uTexture.y + vec3(0.0, 0.0, uTime * uTexture.z)) - 0.5;
  float spots = uSpots.x > 0.0 ? uSpots.x * starspots(q, uSpots.y, uSpots.z) : 0.0;
  float intensity = (1.0 - uLimb * (1.0 - mu)) * (1.0 + uTexture.x * cells) * (1.0 - 0.75 * spots);
  intensity *= mix(1.0 - uGravDark, 1.0, n.y * n.y) * uBright;       // poles of a fast spinner are brighter
  vec3 disc = mix(uLimbColor, uColor, mu) * intensity;
  disc *= mix(vec3(1.0), vec3(1.0, 0.82, 0.62), clamp(-2.0 * cells * uTexture.x - 0.05, 0.0, 1.0)); // cool lanes are redder
  disc *= mix(vec3(1.0), vec3(1.0, 0.96, 0.90), uGravDark * (1.0 - n.y * n.y));                     // and so is a cool equator
  disc = mix(disc, vec3(1.0), uWhiten * mu * mu * clamp(uBright, 0.0, 1.0));                        // centre saturates

  float px = max(1.5 / (R * shortSide), uFuzz);
  float inside = 1.0 - smoothstep(1.0 - px, 1.0 + px, r);
  vec3 glare = uColor * uGlare * uBright * halo(max(r - 1.0, 0.0));

  // Companion star: a second, simpler disc, or a point with a glow when it is far away
  vec3 cdisc = vec3(0.0), cglare = vec3(0.0);
  float cinside = 0.0;
  if (uCompRadius > 0.0) {
    vec2 pc = p - uCompPos.xy;
    float rc = length(pc) / uCompRadius;
    float muc = sqrt(max(0.0, 1.0 - rc * rc));
    cdisc = mix(uCompColor * 0.75, uCompColor, muc) * (1.0 - 0.6 * (1.0 - muc)) * uCompBright;
    cdisc = mix(cdisc, vec3(1.0), 0.3 * muc * muc * clamp(uCompBright, 0.0, 1.0));
    float cpx = 1.5 / (uCompRadius * shortSide);
    cinside = 1.0 - smoothstep(1.0 - cpx, 1.0 + cpx, rc);
    float dc = max(length(pc) - uCompRadius, 0.0) / ${DEFAULT_RADIUS.toFixed(2)};
    cglare = uCompColor * uCompGlare * (halo(dc) + 0.9 * exp(-dc * 45.0));
  }

  // Dust nebula: two hollow lobes along a tilted axis, plus a thin skirt between them
  vec3 nebula = vec3(0.0);
  if (uNebula > 0.0) {
    vec2 axis = normalize(vec2(0.62, 0.78));
    float along = dot(p, axis), across = dot(p, vec2(-axis.y, axis.x));
    float rl = length(vec2(abs(along) - 0.165, across * 1.12)) / 0.155;
    float shell = smoothstep(1.0, 0.82, rl) * (0.35 + 0.65 * pow(clamp(rl, 0.0, 1.0), 3.0)); // bright rims: the lobes are hollow
    float coarse = fbm(vec3(p * 14.0, uTime * 0.01)), fine = fbm(vec3(p * 40.0, 3.0));
    float skirt = exp(-abs(along) * 38.0) * smoothstep(0.24, 0.02, abs(across)) * 0.35 * (0.5 + coarse);
    vec3 dust = mix(vec3(0.55, 0.22, 0.10), vec3(1.0, 0.72, 0.48), coarse);
    nebula = dust * (shell * (0.55 + 0.9 * coarse) * (0.75 + 0.5 * fine) * 0.8 + skirt) * uNebula;
  }

  // Disc of gas or dust in the star's equatorial plane, seen at a tilt
  vec3 ring = vec3(0.0);
  float ringFront = 0.0;
  if (uRing.w > 0.0) {
    vec2 rp = vec2(p.x, p.y / max(uRing.z, 0.02)) / uRadius;
    float rr = length(rp);
    float band = smoothstep(uRing.x, uRing.x * 1.2, rr) * (1.0 - smoothstep(uRing.y * 0.6, uRing.y, rr));
    ring = uRingColor * uRing.w * band * (0.7 + 0.6 * fbm(vec3(rp * 1.5, uTime * 0.02)));
    ringFront = step(p.y, 0.0); // the near half passes in front of the star
  }

  vec3 col = nebula + glare + cglare + ring;
  if (uCompPos.z > 0.0) {
    col = mix(col, disc, inside);
    col = mix(col, cdisc, cinside);
  } else {
    col = mix(col, cdisc, cinside);
    col = mix(col, disc, inside);
  }
  col += 0.45 * ring * ringFront * inside; // thin gas barely shows against the star itself
  gl_FragColor = vec4(col, 1.0);
}`

  function hexToRgb(hex: string): [number, number, number] {
    const v = parseInt(hex.slice(1), 16)
    return [((v >> 16) & 255) / 255, ((v >> 8) & 255) / 255, (v & 255) / 255]
  }

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
    const f = (name: string, value: number) => gl.uniform1f(at(name), value)
    const v3 = (name: string, value: readonly number[]) => gl.uniform3fv(at(name), value)

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

      const t = still ? 0 : now / 1000
      const baseRadius = look.radius ?? DEFAULT_RADIUS
      const texture = look.texture ?? SMOOTH
      const phase = look.pulse ? (2 * Math.PI * t) / look.pulse.seconds : 0
      const swell = look.pulse ? 1 + look.pulse.radius * Math.sin(phase) : 1
      const bright = look.pulse ? 1 + look.pulse.brightness * Math.sin(phase) : 1

      gl.uniform2f(at('uRes'), w, h)
      f('uTime', t)
      f('uCenterY', centerY)
      f('uRadius', baseRadius * swell)
      v3('uColor', hexToRgb(look.color))
      v3('uLimbColor', hexToRgb(look.limbColor))
      f('uLimb', look.limbDarkening)
      f('uWhiten', look.whiten ?? 0.3)
      f('uBright', bright)
      f('uSpin', (2 * Math.PI) / (look.spinSeconds ?? 90))
      v3('uTexture', [texture.amplitude, texture.scale, texture.speed])
      v3('uSpots', look.spots ? [look.spots.darkness, look.spots.size, look.spots.seed] : [0, 0, 0])
      f('uFlat', look.flattening ?? 0)
      f('uGravDark', look.gravityDarkening ?? 0)
      f('uFuzz', look.fuzz ?? 0)
      f('uWobble', look.wobble ?? 0)
      f('uGlare', look.glare ?? 1)
      f('uNebula', look.nebula ? 1 : 0)

      const ring = look.ring
      gl.uniform4f(at('uRing'), ring?.inner ?? 0, ring?.outer ?? 0, ring?.tilt ?? 0, ring?.brightness ?? 0)
      if (ring) v3('uRingColor', hexToRgb(ring.color))

      const companion = look.companion
      if (companion) {
        let position: [number, number, number]
        if ('orbit' in companion.place) {
          // Circular orbit seen nearly edge-on: x across the screen, z toward the viewer
          const { distance, seconds, inclinationDeg } = companion.place.orbit
          const theta = (2 * Math.PI * t) / seconds
          const a = distance * baseRadius
          const tilt = Math.cos((inclinationDeg * Math.PI) / 180)
          position = [a * Math.cos(theta), -a * Math.sin(theta) * tilt, a * Math.sin(theta)]
        } else {
          position = [...companion.place.at, -1]
        }
        v3('uCompPos', position)
        f('uCompRadius', companion.radius * baseRadius)
        v3('uCompColor', hexToRgb(companion.color))
        f('uCompBright', companion.brightness)
        f('uCompGlare', companion.glare)
      } else {
        f('uCompRadius', 0)
      }

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
