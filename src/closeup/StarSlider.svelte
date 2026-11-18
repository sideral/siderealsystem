<script lang="ts">
  /**
   * A slider of star close-ups: one star at a time, with its story typed out underneath.
   * Move between stars with the side arrows, the dots, the ← / → keys or a sideways swipe.
   * The current star is kept in the URL (?star=vega) so a view can be reloaded or shared.
   */
  import Narration from './Narration.svelte'
  import StarDisc from './StarDisc.svelte'
  import { DEFAULT_RADIUS, describeDistance, viewDistanceKm } from './star'
  import { STARS } from './stars'

  // Where the disc sits. Shared with the narration through CSS variables so the text hangs below it.
  const CENTER_Y = 0.42 // fraction of viewport height
  const FADE_MS = 220
  const SWIPE_PX = 60

  const requested = new URLSearchParams(window.location.search).get('star')
  const initial = Math.max(0, STARS.findIndex((s) => s.id === requested))

  /** The star the user has asked for; the dots follow this at once. */
  let selected = $state(initial)
  /** The star on screen; it follows `selected` after the fade-out. */
  let shown = $state(initial)
  let visible = $state(true)

  const star = $derived(STARS[shown] ?? STARS[0])
  const beats = $derived(
    star.story(describeDistance(viewDistanceKm(star.radiusSun, star.look.radius ?? DEFAULT_RADIUS))),
  )

  let fadeTimer: ReturnType<typeof setTimeout> | undefined

  function show(target: number): void {
    const next = (target + STARS.length) % STARS.length
    if (next === selected) return
    selected = next
    visible = false
    clearTimeout(fadeTimer)
    fadeTimer = setTimeout(() => {
      shown = selected
      visible = true
      const url = new URL(window.location.href)
      url.searchParams.set('star', (STARS[shown] ?? STARS[0]).id)
      window.history.replaceState(null, '', url)
    }, FADE_MS)
  }

  function onKey(event: KeyboardEvent): void {
    if (event.ctrlKey || event.metaKey || event.altKey) return
    if (event.target instanceof Element && event.target.closest('input, textarea, [contenteditable]'))
      return
    if (event.key === 'ArrowLeft') show(selected - 1)
    if (event.key === 'ArrowRight') show(selected + 1)
  }

  // Sideways swipe. The click that follows a swipe is swallowed so it doesn't also turn a page.
  let pressedAt: { x: number; y: number } | null = null
  let swallowClick = false

  function onPointerDown(event: PointerEvent): void {
    pressedAt = { x: event.clientX, y: event.clientY }
  }

  function onPointerUp(event: PointerEvent): void {
    if (!pressedAt) return
    const dx = event.clientX - pressedAt.x
    const dy = event.clientY - pressedAt.y
    pressedAt = null
    if (Math.abs(dx) < SWIPE_PX || Math.abs(dx) < 1.5 * Math.abs(dy)) return
    swallowClick = true
    setTimeout(() => (swallowClick = false), 400)
    show(selected + (dx < 0 ? 1 : -1))
  }

  function onClickCapture(event: MouseEvent): void {
    if (!swallowClick) return
    swallowClick = false
    event.stopPropagation()
  }
</script>

<svelte:window
  onkeydown={onKey}
  onpointerdown={onPointerDown}
  onpointerup={onPointerUp}
  onpointercancel={() => (pressedAt = null)}
  onclickcapture={onClickCapture}
/>

<div class="slider" style="--star-y: {CENTER_Y * 100}%; --star-r: {DEFAULT_RADIUS * 100}vmin">
  <div class="stage" class:hidden={!visible}>
    <StarDisc look={star.look} centerY={CENTER_Y} label="{star.name} seen up close" />
    <header>
      <h1>{star.name}</h1>
      <p>{star.designation}</p>
    </header>
    {#key star.id}
      <Narration {beats} />
    {/key}
  </div>

  <nav aria-label="Stars">
    <button type="button" class="arrow previous" onclick={() => show(selected - 1)} aria-label="Previous star">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4 7 12l8 8" /></svg>
    </button>
    <button type="button" class="arrow next" onclick={() => show(selected + 1)} aria-label="Next star">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 4 8 8-8 8" /></svg>
    </button>
    <ol class="dots">
      {#each STARS as item, i (item.id)}
        <li>
          <button
            type="button"
            class:current={i === selected}
            aria-label={item.name}
            aria-current={i === selected ? 'true' : undefined}
            onclick={() => show(i)}
          ></button>
        </li>
      {/each}
    </ol>
  </nav>
</div>

<style>
  .slider {
    font-family: 'Ubuntu Mono', ui-monospace, 'DejaVu Sans Mono', monospace;
  }
  .stage {
    transition: opacity 0.22s ease-out;
  }
  .stage.hidden {
    opacity: 0;
  }

  header {
    position: fixed;
    top: max(0.9rem, 3vh);
    left: 50%;
    z-index: 1;
    width: min(92vw, 46rem);
    translate: -50% 0;
    color: #fff;
    text-align: center;
    pointer-events: none;
  }
  h1 {
    margin: 0;
    /* letter-spacing adds a gap after the last letter; the indent re-centres the word */
    text-indent: 0.32em;
    font-size: clamp(1.15rem, 0.95rem + 0.9vw, 1.6rem);
    font-weight: 400;
    letter-spacing: 0.32em;
    text-transform: uppercase;
  }
  header p {
    margin: 0.25rem 0 0;
    color: #8a96b4;
    font-size: 0.85rem;
    letter-spacing: 0.08em;
  }

  .arrow {
    position: fixed;
    top: var(--star-y);
    z-index: 2;
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    padding: 0;
    translate: 0 -50%;
    border: 0;
    border-radius: 50%;
    background: none;
    color: #8a96b4;
    cursor: pointer;
    transition: color 0.2s;
  }
  .arrow:hover,
  .arrow:focus-visible {
    color: #fff;
  }
  .arrow:focus-visible,
  .dots button:focus-visible {
    outline: 1px solid #9aa6c4;
    outline-offset: 2px;
  }
  .arrow.previous {
    left: max(0.4rem, 2vw);
  }
  .arrow.next {
    right: max(0.4rem, 2vw);
  }
  .arrow svg {
    width: 28px;
    height: 28px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .dots {
    position: fixed;
    top: calc(max(0.9rem, 3vh) + clamp(1.15rem, 0.95rem + 0.9vw, 1.6rem) + 2.6rem);
    left: 50%;
    z-index: 2;
    display: flex;
    gap: 2px;
    margin: 0;
    padding: 0;
    translate: -50% 0;
    list-style: none;
  }
  /* 20px hit area around a 6px dot */
  .dots button {
    display: grid;
    place-items: center;
    width: 20px;
    height: 20px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: none;
    cursor: pointer;
  }
  .dots button::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #4b556e;
    transition:
      background 0.2s,
      scale 0.2s;
  }
  .dots button:hover::before {
    background: #9aa6c4;
  }
  .dots button.current::before {
    background: #fff;
    scale: 1.35;
  }
</style>
