<script lang="ts">
  import SkyCanvas from './SkyCanvas.svelte'
  import StarSlider from './closeup/StarSlider.svelte'
</script>

<SkyCanvas />
<StarSlider />
<!-- Spinning logo: kept, but hidden while the star close-ups hold the centre of the page -->
<img id="hero-icon" src="/img/sidereal-system-icon.svg" alt="" aria-hidden="true" hidden />
<a id="logo" title="Sidereal System" href="/"></a>
