<script lang="ts">
  /**
   * The sky as it is right now, from where you are: the catalogue's stars drawn small and in
   * place. On a phone the view follows the phone (orientation sensor + compass), so a star on
   * screen is behind the phone in the real sky, above or below the horizon. Without sensors,
   * drag to look around. Tap a star to open its close-up.
   *
   * There is no interface here on purpose: only the stars, the ground, the horizon line and the
   * four compass points on it. Location is asked for on load, and
   * motion access on the first touch (iOS only grants it from a touch). If either is refused
   * the view quietly falls back: an approximate place, and dragging instead of pointing.
   */
  import { onMount } from 'svelte'
  import {
    type Camera,
    type Viewport,
    blendCameras,
    cameraFromDevice,
    cameraFromHorizontal,
    focalLength,
    horizonOnScreen,
    pickNearest,
    project,
    turnCamera,
    unproject,
  } from './camera'
  import { SKY_STARS } from './catalog'
  import { magneticDeclination } from './magnetic'
  import { type Observer, horizontalFromVector, skyMatrix } from './frames'
  import {
    guessObserver,
    hasOrientationSensor,
    keepScreenOn,
    loadObserver,
    locate,
    orientationNeedsTouch,
    requestOrientationAccess,
    saveObserver,
    screenAngleDeg,
    watchOrientation,
  } from './sensors'
  import { julianDate } from './time'
  import { DEG, type Mat3, type Vec3, mulMatVec, wrapPi } from './vec'

  let { active = true, onpick }: { active?: boolean; onpick: (id: string) => void } = $props()

  const DEFAULT_FOV_DEG = 90 // across the longer side of the screen
  const MIN_FOV_DEG = 25
  const MAX_FOV_DEG = 130
  const PICK_RADIUS_PX = 34 // how close a tap must land to a star
  const TAP_MOVE_PX = 8
  const TAP_MS = 500
  const SENSOR_SMOOTHING = 0.3 // fraction of the way to the newest reading, per frame
  const COMPASS_SMOOTHING = 0.04
  const GROUND_DIM = 0.6 // stars below the horizon are drawn through the ground, a little fainter

  let canvas: HTMLCanvasElement

  // --- The view, read every frame (plain variables: nothing here is shown as text) -----------
  let mode: 'drag' | 'compass' = 'drag'
  let observer: Observer = guessObserver()
  let compassKnown = false
  let az = Math.PI // drag mode: where the view points
  let alt = 30 * DEG
  let fovDeg = DEFAULT_FOV_DEG
  let deviceToSky: Mat3 | null = null // compass mode: latest sensor reading
  let compass = 0 // turn that lines the sensor frame up with magnetic north
  let declination = 0 // and from magnetic north on to true north, for where the observer is
  let manualTurn = 0 // the user's own correction on top, by dragging sideways
  let camera: Camera = cameraFromHorizontal(az, alt)
  let view: Viewport = { width: 1, height: 1, fovRad: fovDeg * DEG }
  let directions: Vec3[] = [] // where each star is now, east-north-up

  let stopWatching: (() => void) | undefined
  let releaseScreen: (() => void) | undefined

  function setObserver(next: Observer): void {
    observer = next
    declination = magneticDeclination(next.latRad, next.lonRad)
  }
  setObserver(observer)

  function starDirections(now: Date): Vec3[] {
    const toSky = skyMatrix(julianDate(now), observer)
    return SKY_STARS.map((s) => mulMatVec(toSky, s.j2000))
  }

  /** Open on the brightest star that is up, so the first screen is not empty sky. */
  function lookAtBrightest(): void {
    let best = -1
    starDirections(new Date()).forEach((direction, index) => {
      const brighter = best < 0 || SKY_STARS[index]!.position.magV < SKY_STARS[best]!.position.magV
      if (direction[2] > 0.17 && brighter) best = index // at least 10° up
    })
    if (best < 0) return
    const target = horizontalFromVector(starDirections(new Date())[best]!)
    az = target.azRad
    alt = target.altRad
  }

  // --- Location ------------------------------------------------------------------------------
  async function useLocation(): Promise<void> {
    if (!window.isSecureContext) return // browsers only share location with https pages
    try {
      setObserver(await locate())
      saveObserver(observer)
      if (mode === 'drag') lookAtBrightest()
    } catch {
      // refused or unavailable: keep the saved or approximate place
    }
  }

  // --- Phone orientation ---------------------------------------------------------------------
  let asking = false

  async function followPhone(): Promise<void> {
    if (stopWatching || asking || !window.isSecureContext) return
    asking = true
    const access = await requestOrientationAccess()
    asking = false
    if (access !== 'granted') return // dragging still works
    stopWatching = watchOrientation(({ rotation, compass: reading }) => {
      if (reading) {
        // The first heading is taken as it comes; later ones nudge it, by how much they can be trusted
        const weight = compassKnown ? COMPASS_SMOOTHING * reading.confidence : 1
        compass += wrapPi(reading.turn - compass) * weight
        compassKnown = true
      }
      if (deviceToSky === null) {
        mode = 'compass'
        releaseScreen ??= keepScreenOn()
      }
      deviceToSky = rotation
    })
  }

  // --- Drawing -------------------------------------------------------------------------------
  /** Dot radius in CSS pixels: about half a pixel per magnitude, like a printed star chart. */
  const coreRadius = (magV: number): number => Math.min(4.4, Math.max(1, 3.4 - 0.5 * magV))

  function makeSprite(color: string, core: number, dpr: number): HTMLCanvasElement {
    const size = Math.ceil(core * 8 * dpr)
    const sprite = document.createElement('canvas')
    sprite.width = sprite.height = size
    const g = sprite.getContext('2d')
    if (!g) return sprite
    const glow = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
    glow.addColorStop(0, '#ffffff')
    glow.addColorStop(0.16, color)
    glow.addColorStop(0.27, `${color}70`)
    glow.addColorStop(0.55, `${color}1c`)
    glow.addColorStop(1, `${color}00`)
    g.fillStyle = glow
    g.fillRect(0, 0, size, size)
    return sprite
  }

  function drawGround(ctx: CanvasRenderingContext2D): void {
    const horizon = horizonOnScreen(camera, view)
    const { width, height } = view
    ctx.fillStyle = 'rgba(130, 150, 200, 0.055)' // a faint veil: the stars below show through
    ctx.strokeStyle = 'rgba(140, 160, 210, 0.4)'
    ctx.lineWidth = 1
    ctx.beginPath()
    if (horizon.kind === 'circle') {
      if (horizon.skyInside) ctx.rect(0, 0, width, height) // ground is everything outside the circle
      ctx.arc(horizon.x, horizon.y, horizon.radius, 0, 2 * Math.PI)
      ctx.fill('evenodd')
      ctx.beginPath()
      ctx.arc(horizon.x, horizon.y, horizon.radius, 0, 2 * Math.PI)
      ctx.stroke()
      return
    }
    const reach = 2 * (width + height)
    const [tx, ty] = [-horizon.ny, horizon.nx] // along the horizon
    const [ax, ay] = [horizon.x - tx * reach, horizon.y - ty * reach]
    const [bx, by] = [horizon.x + tx * reach, horizon.y + ty * reach]
    ctx.moveTo(ax, ay)
    ctx.lineTo(bx, by)
    ctx.lineTo(bx - horizon.nx * reach, by - horizon.ny * reach)
    ctx.lineTo(ax - horizon.nx * reach, ay - horizon.ny * reach)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(ax, ay)
    ctx.lineTo(bx, by)
    ctx.stroke()
  }

  const CARDINALS: [string, number][] = [['N', 0], ['E', 90], ['S', 180], ['W', 270]]

  /** N, E, S and W on the horizon, lifted a little to the sky side of the line. */
  function drawCardinals(ctx: CanvasRenderingContext2D): void {
    ctx.font = '600 15px system-ui, -apple-system, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    for (const [letter, azDeg] of CARDINALS) {
      const az = azDeg * DEG
      const onHorizon = project([Math.sin(az), Math.cos(az), 0], camera, view)
      const above = project([Math.sin(az), Math.cos(az), 0.02], camera, view)
      if (!onHorizon || !above) continue
      const dx = above.x - onHorizon.x
      const dy = above.y - onHorizon.y
      const len = Math.hypot(dx, dy) || 1
      const x = onHorizon.x + (dx / len) * 14
      const y = onHorizon.y + (dy / len) * 14
      if (x < -20 || x > view.width + 20 || y < -20 || y > view.height + 20) continue
      ctx.fillStyle = letter === 'N' ? 'rgba(255, 140, 120, 0.95)' : 'rgba(190, 205, 240, 0.85)'
      ctx.fillText(letter, x, y)
    }
  }

  function drawStars(ctx: CanvasRenderingContext2D, sprites: HTMLCanvasElement[]): void {
    SKY_STARS.forEach(({ position }, index) => {
      const direction = directions[index]
      const sprite = sprites[index]
      if (!direction || !sprite) return
      const at = project(direction, camera, view)
      if (!at || at.x < -30 || at.x > view.width + 30 || at.y < -30 || at.y > view.height + 30) return
      const up = direction[2] > 0
      const core = coreRadius(position.magV)
      ctx.globalAlpha = up ? 1 : GROUND_DIM
      ctx.drawImage(sprite, at.x - core * 4, at.y - core * 4, core * 8, core * 8)
    })
    ctx.globalAlpha = 1
  }

  onMount(() => {
    const context = canvas.getContext('2d', { alpha: false })
    if (!context) return
    const ctx = context
    const dpr = Math.min(window.devicePixelRatio || 1, 3)
    const sprites = SKY_STARS.map((s) => makeSprite(s.star.look.color, coreRadius(s.position.magV), dpr))

    setObserver(loadObserver() ?? observer)
    lookAtBrightest()
    void useLocation()
    const canFollow = hasOrientationSensor()
    if (canFollow && !orientationNeedsTouch()) void followPhone()

    function resize(): void {
      const width = Math.max(1, window.innerWidth)
      const height = Math.max(1, window.innerHeight)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      view = { width, height, fovRad: fovDeg * DEG }
    }
    resize()
    window.addEventListener('resize', resize)

    let raf = 0
    function frame(): void {
      raf = requestAnimationFrame(frame)
      if (!active) return

      view = { ...view, fovRad: fovDeg * DEG }
      directions = starDirections(new Date())
      if (mode === 'compass' && deviceToSky) {
        const target = turnCamera(cameraFromDevice(deviceToSky, screenAngleDeg()), compass + declination + manualTurn)
        camera = blendCameras(camera, target, SENSOR_SMOOTHING)
      } else {
        camera = cameraFromHorizontal(az, alt)
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, view.width, view.height)
      drawGround(ctx)
      drawStars(ctx, sprites)
      drawCardinals(ctx)
    }
    raf = requestAnimationFrame(frame)

    // Pointers: one finger drags, two pinch, a tap picks a star
    const pointers: Record<number, { x: number; y: number }> = {}
    let tap: { x: number; y: number; time: number } | null = null

    function down(event: PointerEvent): void {
      canvas.setPointerCapture(event.pointerId)
      pointers[event.pointerId] = { x: event.clientX, y: event.clientY }
      tap =
        Object.keys(pointers).length === 1 ? { x: event.clientX, y: event.clientY, time: event.timeStamp } : null
    }

    function move(event: PointerEvent): void {
      const previous = pointers[event.pointerId]
      if (!previous) return
      const current = { x: event.clientX, y: event.clientY }
      const others = Object.entries(pointers).filter(([id]) => Number(id) !== event.pointerId)
      const other = others[0]?.[1]
      if (!other) {
        if (tap && Math.hypot(current.x - tap.x, current.y - tap.y) > TAP_MOVE_PX) tap = null
        if (!tap) {
          // Grab the sky: it follows the finger, so the view turns the other way
          const perPixel = 1 / focalLength(view)
          if (mode === 'compass') manualTurn -= (current.x - previous.x) * perPixel
          else {
            az -= (current.x - previous.x) * perPixel
            alt = Math.min(89.9 * DEG, Math.max(-89.9 * DEG, alt + (current.y - previous.y) * perPixel))
          }
        }
      } else if (others.length === 1) {
        const before = Math.hypot(previous.x - other.x, previous.y - other.y)
        const after = Math.hypot(current.x - other.x, current.y - other.y)
        if (before > 0 && after > 0) zoom(before / after)
      }
      pointers[event.pointerId] = current
    }

    /** iOS only shows its motion-access prompt from a touch, so every touch that ends is a chance to ask. */
    function touched(): void {
      if (canFollow) void followPhone()
    }

    function up(event: PointerEvent): void {
      delete pointers[event.pointerId]
      if (event.type === 'pointerup' && tap && event.timeStamp - tap.time < TAP_MS) {
        const reach = PICK_RADIUS_PX / focalLength(view)
        const picked = pickNearest(directions, unproject(tap.x, tap.y, camera, view), reach)
        const star = SKY_STARS[picked]?.star
        // After this event's click has been delivered, so the close-up does not read it as a tap of its own
        if (star) setTimeout(() => onpick(star.id), 0)
      }
      tap = null
    }

    function zoom(factor: number): void {
      fovDeg = Math.min(MAX_FOV_DEG, Math.max(MIN_FOV_DEG, fovDeg * factor))
    }

    function wheel(event: WheelEvent): void {
      event.preventDefault()
      zoom(Math.exp(event.deltaY * 0.0015))
    }

    function key(event: KeyboardEvent): void {
      if (!active || event.ctrlKey || event.metaKey || event.altKey) return
      if (event.target instanceof Element && event.target.closest('input, textarea, select, button, a')) return
      const step = (fovDeg / 12) * DEG
      if (event.key === 'ArrowLeft') az -= step
      else if (event.key === 'ArrowRight') az += step
      else if (event.key === 'ArrowUp') alt = Math.min(89.9 * DEG, alt + step)
      else if (event.key === 'ArrowDown') alt = Math.max(-89.9 * DEG, alt - step)
      else if (event.key === '+' || event.key === '=') zoom(0.85)
      else if (event.key === '-') zoom(1 / 0.85)
      else return
      event.preventDefault()
    }

    canvas.addEventListener('pointerdown', down)
    canvas.addEventListener('pointermove', move)
    canvas.addEventListener('pointerup', up)
    canvas.addEventListener('pointercancel', up)
    canvas.addEventListener('touchend', touched)
    canvas.addEventListener('click', touched)
    canvas.addEventListener('wheel', wheel, { passive: false })
    window.addEventListener('keydown', key)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('keydown', key)
      stopWatching?.()
      releaseScreen?.()
    }
  })
</script>

<div hidden={!active}>
  <canvas bind:this={canvas} aria-label="The sky right now, with the catalogue's stars in place"></canvas>
</div>

<style>
  canvas {
    position: fixed;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    touch-action: none; /* drags and pinches belong to the sky, not the page */
    cursor: grab;
    -webkit-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
  }
  canvas:active {
    cursor: grabbing;
  }
</style>
