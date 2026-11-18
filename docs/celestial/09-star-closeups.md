# Star close-ups (slider)

## Introduction

A side feature next to the sky map: a **slider of ten naked-eye stars seen up close**, each drawn from its physical properties and paired with a short **typed story** (why it looks that way, size, temperature, type, age, facts, and how different cultures have seen it). It started as a prototype for Sirius and currently **holds the centre of the page** until the sky view exists. Like the rest of the app it is **static and offline**: no runtime network, no backend.

## References

- Per-star figures and sources are cited in a comment at the top of each file in `src/closeup/stars/`.
- Culture notes cite their source next to the beats (e.g. Holberg 2007 for Sirius; Stanbridge 1857 for Boorong names; Urton 1981 for the Andes). They were written from memory and **should be checked against the sources before public release**.
- [Ubuntu Font Licence 1.0](../../public/fonts/UBUNTU-FONT-LICENCE.txt) — the bundled Ubuntu Mono subset used for the text.
- Prototype branch `prototype/sirius-closeup` — the three variants tried for "Sirius up close"; variant A (filtered disc) won.

## Overview

**Stars (slider order):** Sirius, Polaris, Betelgeuse, Vega, Eta Carinae, Algol, Mira, Alpha Centauri, Rigel, Albireo.

**Code layout (`src/closeup/`)**

| File | Role |
| ---- | ---- |
| `star.ts` | `CloseupStar` / `StarLook` types; `viewDistanceKm`, `describeDistance` |
| `stars/<id>.ts` | One star each: look parameters + story beats |
| `stars/index.ts` | `STARS`, the slider order |
| `StarDisc.svelte` | One WebGL fragment shader that draws any `StarLook` |
| `Narration.svelte` | Typed text, at most two lines per page, tap / Space / Enter to continue |
| `paginate.ts` | Splits beats into pages that fit (pure, unit-tested) |
| `StarSlider.svelte` | Arrows, dots, ← / → keys, swipe, `?star=<id>` in the URL |

**Rendering stance.** The look is a set of **physical knobs, not artwork**: blackbody colour, limb darkening, convection texture, starspots, flattening and gravity darkening (fast spin), pulsation, a soft or lumpy edge, a companion star, a dust nebula. The halo is optical glare. All ten stars share one shader; a new star is a new data file.

**Known liberties (each is also stated in the star's story or file comment)**

- Pulsations and orbits are sped up; Polaris's pulse is exaggerated in size.
- Algol's sizes and spacing are to scale, but the cool star is drawn brighter than it is.
- Eta Carinae is drawn from about a light-year away (the nebula), not from a distance set by its radius.
- Vega is shown side-on; from Earth it is seen pole-on.
- Star colours are hand-picked sRGB values near the blackbody colour, not computed from temperature.

## Implementation route

1. **Done** — Sirius prototype (three variants), variant A promoted to real code.
2. **Done** — Typed narration with a two-line limit measured against the real layout.
3. **Done** — Shared shader and data model; ten stars; slider.
4. **Next (open)** — Decide where this lives once the sky map exists (e.g. opened from a picked star, per [06-input-ui-and-detail.md](./06-input-ui-and-detail.md)).
5. **Next (open)** — Compute disc colour from temperature or B−V with the same function the map will use ([05-projection-and-rendering.md](./05-projection-and-rendering.md)).
6. **Next (open)** — Fact-check the stories against their cited sources.

**Done for this doc:** a reader can find the close-up code, add a star, and see which parts are physical and which are liberties.
