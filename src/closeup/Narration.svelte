<script lang="ts">
  /**
   * Typed-out narration: shows one page at a time, never more than `maxLines` lines,
   * and waits for a tap, click, Space or Enter before moving on. Pages are measured against
   * the real layout, so the line limit holds at any screen width.
   */
  import { flushSync, onMount } from 'svelte'
  import { paginate, type Page } from './paginate'

  let { beats, maxLines = 2 }: { beats: readonly string[]; maxLines?: number } = $props()

  const CHARS_PER_SECOND = 42

  let frame: HTMLElement
  let probe: HTMLElement
  let pages = $state<Page[]>([])
  let index = $state(0)
  let shown = $state(0)
  let probeText = $state('')

  const text = $derived(pages[index]?.text ?? '')
  const done = $derived(pages.length > 0 && shown >= text.length)
  const last = $derived(index === pages.length - 1)

  let raf = 0
  let typingSince = 0
  let instant = false

  function type(now: number): void {
    shown = Math.min(text.length, Math.floor(((now - typingSince) / 1000) * CHARS_PER_SECOND))
    if (shown < text.length) raf = requestAnimationFrame(type)
  }

  function startTyping(): void {
    cancelAnimationFrame(raf)
    if (instant) {
      shown = text.length
      return
    }
    shown = 0
    typingSince = performance.now()
    raf = requestAnimationFrame(type)
  }

  /** First press finishes the page being typed; the next one turns the page. */
  function advance(): void {
    if (pages.length === 0) return
    if (!done) {
      cancelAnimationFrame(raf)
      shown = text.length
      return
    }
    index = last ? 0 : index + 1
    startTyping()
  }

  /** Height the given text takes when laid out at the narration's real width and font. */
  function measure(candidate: string): number {
    flushSync(() => {
      probeText = candidate
    })
    return probe.getBoundingClientRect().height
  }

  /** Re-split the beats for the current width and font, staying on the beat being read. */
  function repaginate(): void {
    const limit = measure('X') * maxLines + 1
    const next = paginate(beats, (candidate) => measure(candidate) <= limit)
    probeText = ''

    const beat = pages[index]?.beat ?? 0
    const nextIndex = Math.max(0, next.findIndex((p) => p.beat === beat))
    const changed = next[nextIndex]?.text !== text
    pages = next
    index = nextIndex
    if (changed) startTyping()
  }

  function onClick(event: MouseEvent): void {
    // Links and the hint button handle their own clicks
    if (event.target instanceof Element && event.target.closest('a, button, input, textarea, select'))
      return
    advance()
  }

  function onKey(event: KeyboardEvent): void {
    if (event.repeat || event.ctrlKey || event.metaKey || event.altKey) return
    if (
      event.target instanceof Element &&
      event.target.closest('a, button, input, textarea, select, [contenteditable]')
    )
      return
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault()
      advance()
    }
  }

  onMount(() => {
    instant = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // Only a change of width can move line breaks. The height follows the page being shown
    // (one line or two), and re-splitting on that would snap back to the beat's first page.
    let width = -1
    const observer = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width === width) return
      width = entry.contentRect.width
      repaginate()
    }) // also fires once on observe
    observer.observe(frame)
    void document.fonts.ready.then(repaginate) // the web font changes line breaks
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  })
</script>

<svelte:window onclick={onClick} onkeydown={onKey} />

<section class="narration" bind:this={frame}>
  <!-- Screen readers get each page whole, not letter by letter -->
  <p class="sr-only" aria-live="polite">{text}</p>
  <p class="text" aria-hidden="true">
    <span class="typed" class:idle={done}>{text.slice(0, shown)}</span><span class="untyped"
      >{text.slice(shown)}</span
    >
  </p>
  <p class="text probe" bind:this={probe} aria-hidden="true">{probeText}</p>
  <button
    type="button"
    class="hint"
    class:ready={done}
    onclick={advance}
    aria-label={`${last ? 'Start over' : 'Continue'} (page ${index + 1} of ${pages.length})`}
  >
    {index + 1}/{pages.length}
  </button>
</section>

<style>
  .narration {
    position: fixed;
    /* Centred a little past halfway down the gap from the star's bottom edge to the logo's top
       (the logo is 50px tall, 10px off the bottom), so it reads closer to the logo than to the
       star; 2.5rem is about half the block (two lines and the page counter). Never so low that
       it runs into the logo. */
    top: min(
      calc(
        0.4 * (var(--star-y) + var(--star-r)) + 0.6 * (100% - env(safe-area-inset-bottom, 0px) - 60px) - 2.5rem
      ),
      calc(100% - 12rem)
    );
    left: 50%;
    z-index: 1;
    width: min(92vw, 46rem);
    translate: -50% 0;
    color: #fff;
    font-family: 'Ubuntu Mono', ui-monospace, 'DejaVu Sans Mono', monospace;
    font-size: clamp(0.9rem, 0.75rem + 0.7vw, 1.15rem);
    line-height: 1.5;
    text-align: center;
  }
  .text {
    margin: 0;
    text-shadow: 0 0 6px #000;
  }
  /* Caret: a border on the typed part, cancelled by a negative margin so it never shifts the text */
  .typed {
    margin-right: -2px;
    border-right: 2px solid #fff;
  }
  .typed.idle {
    animation: caret 1s steps(1) infinite;
  }
  /* The rest of the page is laid out but invisible, so words don't jump lines mid-typing */
  .untyped {
    visibility: hidden;
  }
  .probe {
    position: absolute;
    inset: 0 0 auto;
    min-height: 0;
    visibility: hidden;
    pointer-events: none;
  }
  .hint {
    /* Sits right under the text; the padding keeps it an easy tap target */
    margin-top: 0.1rem;
    padding: 0.3rem 0.8rem;
    border: 0;
    background: none;
    color: #9aa6c4;
    font: inherit;
    font-size: 0.8em;
    letter-spacing: 0.08em;
    opacity: 0;
    cursor: pointer;
    transition: opacity 0.4s;
  }
  .hint.ready {
    opacity: 1;
    animation: breathe 2.4s ease-in-out infinite;
  }
  .hint:focus-visible {
    outline: 1px solid #9aa6c4;
    outline-offset: 2px;
    opacity: 1;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  @keyframes caret {
    50% {
      border-color: transparent;
    }
  }
  @keyframes breathe {
    50% {
      opacity: 0.45;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .typed.idle,
    .hint.ready {
      animation: none;
    }
  }
</style>
