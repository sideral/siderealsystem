<script lang="ts">
  /**
   * One star seen up close, with its story typed out underneath.
   * Opened from the sky view by tapping the star; the back button (or Escape) returns to the sky.
   */
  import Narration from './Narration.svelte'
  import StarDisc from './StarDisc.svelte'
  import { type CloseupStar, DEFAULT_RADIUS } from './star'

  let { star, onclose }: { star: CloseupStar; onclose: () => void } = $props()

  // Where the disc sits. Shared with the narration through CSS variables so the text hangs below it.
  const CENTER_Y = 0.42 // fraction of viewport height

  function onKey(event: KeyboardEvent): void {
    if (event.key === 'Escape') onclose()
  }
</script>

<svelte:window onkeydown={onKey} />

<div class="closeup" style="--star-y: {CENTER_Y * 100}%; --star-r: {DEFAULT_RADIUS * 100}vmin">
  <StarDisc look={star.look} centerY={CENTER_Y} label="{star.name} seen up close" />
  <header>
    <h1>{star.name}</h1>
    <p>{star.designation}</p>
  </header>
  {#key star.id}
    <Narration beats={star.story} />
  {/key}

  <button type="button" class="back" onclick={onclose}>
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4 7 12l8 8" /></svg>
    sky
  </button>
</div>

<style>
  .closeup {
    font-family: 'Ubuntu Mono', ui-monospace, 'DejaVu Sans Mono', monospace;
    animation: arrive 0.3s ease-out;
  }
  @keyframes arrive {
    from {
      opacity: 0;
    }
  }

  header {
    position: fixed;
    top: calc(env(safe-area-inset-top, 0px) + max(0.9rem, 3vh));
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

  .back {
    position: fixed;
    top: calc(env(safe-area-inset-top, 0px) + max(0.45rem, 3vh - 0.45rem));
    left: calc(env(safe-area-inset-left, 0px) + 0.3rem);
    z-index: 3;
    display: inline-flex;
    gap: 0.1rem;
    align-items: center;
    min-height: 44px;
    padding: 0 0.7rem 0 0.3rem;
    border: 0;
    background: none;
    color: #8a96b4;
    font: inherit;
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    cursor: pointer;
    transition: color 0.2s;
  }
  .back:hover,
  .back:focus-visible {
    color: #fff;
  }
  .back:focus-visible {
    outline: 1px solid #9aa6c4;
    outline-offset: -2px;
  }
  .back svg {
    width: 20px;
    height: 20px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  @media (prefers-reduced-motion: reduce) {
    .closeup {
      animation: none;
    }
  }
</style>
