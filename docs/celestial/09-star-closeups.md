# Star close-ups (slider)

## Introduction

A side feature next to the sky map: a **slider of fifty naked-eye stars seen up close**, each drawn from its physical properties and paired with a short **typed story** (why it looks that way, size, temperature, type, age, facts, and how different cultures have seen it). It started as a prototype for Sirius and currently **holds the centre of the page** until the sky view exists. Like the rest of the app it is **static and offline**: no runtime network, no backend.

## References

- Per-star figures and sources are cited in a comment at the top of each file in `src/closeup/stars/`.
- Culture notes cite their source next to the beats (e.g. Holberg 2007 for Sirius; Stanbridge 1857 for Boorong names; Urton 1981 for the Andes). Figures, facts and culture notes for all fifty stars were written from memory and **should be checked against the sources before public release**.
- [Ubuntu Font Licence 1.0](../../public/fonts/UBUNTU-FONT-LICENCE.txt) — the bundled Ubuntu Mono subset used for the text.
- Prototype branch `prototype/sirius-closeup` — the three variants tried for "Sirius up close"; variant A (filtered disc) won.

## Overview

**Stars (slider order, 50).** All are visible without a telescope from a dark site; the faintest are near magnitude 5–6 (Sigma Octantis, 51 Pegasi, R Coronae Borealis at maximum).

| Group | Stars |
| ----- | ----- |
| The first ten | Sirius, Polaris, Betelgeuse, Vega, Eta Carinae, Algol, Mira, Alpha Centauri, Rigel, Albireo |
| The brightest of the rest | Canopus, Arcturus, Capella, Procyon, Achernar, Altair, Aldebaran, Antares, Spica, Pollux, Fomalhaut, Deneb, Regulus, Castor, Acrux, Gacrux, Adhara |
| Fainter stars with a story | Alnilam, Mizar, Thuban, Alcyone, Eltanin, Sigma Octantis |
| Stars that change | Delta Cephei, Beta Lyrae, Epsilon Aurigae, R Coronae Borealis |
| Giants and extremes | Garnet Star (Mu Cephei), Rho Cassiopeiae, P Cygni, Gamma Cassiopeiae, Zeta Ophiuchi, Naos, Gamma Velorum |
| The Sun's neighbours | Epsilon Eridani, Tau Ceti, 61 Cygni, 40 Eridani, Beta Pictoris, 51 Pegasi |

**Code layout (`src/closeup/`)**

| File | Role |
| ---- | ---- |
| `star.ts` | `CloseupStar` / `StarLook` types; `viewDistanceKm`, `describeDistance` |
| `stars/<id>.ts` | One star each: look parameters + story beats |
| `stars/index.ts` | `STARS`, the slider order |
| `StarDisc.svelte` | One WebGL fragment shader that draws any `StarLook` |
| `Narration.svelte` | Typed text, at most two lines per page, tap / Space / Enter to continue |
| `paginate.ts` | Splits beats into pages that fit (pure, unit-tested) |
| `StarSlider.svelte` | Arrows, counter + drop-down list, ← / → keys, swipe, `?star=<id>` in the URL |

**Rendering stance.** The look is a set of **physical knobs, not artwork**: blackbody colour, limb darkening, convection texture, starspots, flattening and gravity darkening (fast spin), pulsation, a soft or lumpy edge, a companion (a star, a planet or a dark body; fixed in the background or on an orbit with eclipses), a ring of gas or dust in the equatorial plane, a dust nebula. The halo is optical glare. All fifty stars share one shader; a new star is a new data file plus one line in `stars/index.ts`.

**Text and font.** Story text may only use characters in the bundled Ubuntu Mono subset (Latin, accented Latin, Greek, common punctuation). Ubuntu Mono has no ʻokina, so Hawaiian names use ‘ instead. `star.test.ts` checks every star: unique URL-safe id, valid colours, at least ten beats, each at most 160 characters.

**Known liberties (each is also stated in the star's story or file comment)**

- Pulsations and orbits are sped up; Polaris's pulse is exaggerated in size.
- Algol's sizes and spacing are to scale, but the cool star is drawn brighter than it is.
- Eta Carinae is drawn from about a light-year away (the nebula), not from a distance set by its radius.
- Vega is shown side-on; from Earth it is seen pole-on.
- Star colours are hand-picked sRGB values near the blackbody colour, not computed from temperature.
- Epsilon Aurigae's eclipsing body is drawn as a dark ball crossing every half minute; the real one is an edge-on dust disc that crosses every 27 years.
- R Coronae Borealis fades on a smooth cycle; the real fadings are random and can last years.
- Beta Pictoris's debris disc is drawn hundreds of times too close to the star so that it fits in the view.
- Gamma Velorum is drawn from about 1 AU: the Wolf–Rayet star as a ball of wind, its O-type partner as a disc at roughly its apparent size.
- 51 Pegasi is drawn small so the planet's orbit fits at true scale; the planet's size is a guess (it does not transit).
- Rings (Achernar, Alcyone, Gamma Cassiopeiae) are schematic: real Be-star discs change from year to year.
- Distant companions (Alpha Centauri B, Albireo B, Acrux, 61 Cygni B, 40 Eridani BC) are points placed for composition, not at a computed position.

## Implementation route

1. **Done** — Sirius prototype (three variants), variant A promoted to real code.
2. **Done** — Typed narration with a two-line limit measured against the real layout.
3. **Done** — Shared shader and data model; ten stars; slider.
4. **Done** — Forty more stars (fifty in all); ring knob in the shader; drop-down list and counter in place of dots.
5. **Next (open)** — Decide where this lives once the sky map exists (e.g. opened from a picked star, per [06-input-ui-and-detail.md](./06-input-ui-and-detail.md)).
6. **Next (open)** — Compute disc colour from temperature or B−V with the same function the map will use ([05-projection-and-rendering.md](./05-projection-and-rendering.md)).
7. **Next (open)** — Fact-check the stories against their cited sources (all fifty were written from memory).
8. **Next (open)** — If the list keeps growing, generate the picker and order from the catalog in `data/dist/` instead of a hand-kept list.

**Done for this doc:** a reader can find the close-up code, add a star, and see which parts are physical and which are liberties.
