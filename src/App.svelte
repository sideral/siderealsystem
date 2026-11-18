<script lang="ts">
  /**
   * Two screens: the sky (home), and a star's close-up. The only way into a close-up is to tap
   * that star in the sky. Opening one adds a history entry, so the browser's back button (or
   * the phone's back swipe) returns to the sky.
   */
  import StarCloseup from './closeup/StarCloseup.svelte'
  import type { CloseupStar } from './closeup/star'
  import { STARS } from './closeup/stars'
  import SkyView from './sky/SkyView.svelte'

  /** The star recorded in the current history entry, if this entry is a close-up. */
  function starInHistory(): CloseupStar | null {
    const state: unknown = window.history.state
    if (typeof state !== 'object' || state === null || !('star' in state)) return null
    return STARS.find((s) => s.id === state.star) ?? null
  }

  let openStar = $state.raw(starInHistory())

  function open(id: string): void {
    const star = STARS.find((s) => s.id === id)
    if (!star) return
    window.history.pushState({ star: id }, '')
    openStar = star
  }

  /** Bumped on every logo click at home; each value plays the spinning-logo flourish once. */
  let flourish = $state(0)

  function onLogoClick(event: MouseEvent): void {
    // Already home: nothing to load, so answer the click with the flourish instead
    if (openStar !== null) return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return
    event.preventDefault()
    flourish++
  }
</script>

<svelte:window onpopstate={() => (openStar = starInHistory())} />

<SkyView active={openStar === null} onpick={open} />
{#if openStar}
  <StarCloseup star={openStar} onclose={() => window.history.back()} />
{/if}

<!-- The logo is the way home; at home it plays the big spinning icon once instead of reloading -->
{#key flourish}
  {#if flourish > 0}
    <img
      id="hero-icon"
      src="/img/sidereal-system-icon.svg"
      alt=""
      aria-hidden="true"
      onanimationend={() => (flourish = 0)}
    />
  {/if}
{/key}
<a id="logo" title="Sidereal System" href="/" onclick={onLogoClick}></a>
