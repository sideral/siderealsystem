# Star close-ups

## Introduction

Each of the **hundred naked-eye stars** in the sky view has a **close-up**: the star drawn from its physical properties, with a short **typed story** underneath (why it looks that way, size, temperature, type, age, facts, and how different cultures have seen it). A close-up is opened **only by tapping that star in the sky** ([10-sky-view.md](./10-sky-view.md)); there is no list, slideshow or link to one. Like the rest of the app it is **static and offline**: no runtime network, no backend.

## References

- Per-star figures and sources are cited in a comment at the top of each file in `src/closeup/stars/`.
- Culture notes cite their source next to the beats (e.g. Holberg 2007 for Sirius; Stanbridge 1857 for Boorong names; Urton 1981 for the Andes). Figures, facts and culture notes for all hundred stars were written from memory and **should be checked against the sources before public release**.
- [Ubuntu Font Licence 1.0](../../public/fonts/UBUNTU-FONT-LICENCE.txt) — the bundled Ubuntu Mono subset used for the text.
- Prototype branch `prototype/sirius-closeup` — the three variants tried for "Sirius up close"; variant A (filtered disc) won.

## Overview

**Stars (100).** All are visible without a telescope from a dark site; the faintest are near magnitude 6 (AE Aurigae, HR 8799, 55 Cancri, R Coronae Borealis at maximum). The first six groups are the original fifty; the last five were added together.

| Group | Stars |
| ----- | ----- |
| The first ten | Sirius, Polaris, Betelgeuse, Vega, Eta Carinae, Algol, Mira, Alpha Centauri, Rigel, Albireo |
| The brightest of the rest | Canopus, Arcturus, Capella, Procyon, Achernar, Altair, Aldebaran, Antares, Spica, Pollux, Fomalhaut, Deneb, Regulus, Castor, Acrux, Gacrux, Adhara |
| Fainter stars with a story | Alnilam, Mizar, Thuban, Alcyone, Eltanin, Sigma Octantis |
| Stars that change | Delta Cephei, Beta Lyrae, Epsilon Aurigae, R Coronae Borealis |
| Giants and extremes | Garnet Star (Mu Cephei), Rho Cassiopeiae, P Cygni, Gamma Cassiopeiae, Zeta Ophiuchi, Naos, Gamma Velorum |
| The Sun's neighbours | Epsilon Eridani, Tau Ceti, 61 Cygni, 40 Eridani, Beta Pictoris, 51 Pegasi |
| More bright stars | Hadar, Mimosa, Shaula, Bellatrix, Elnath, Alnitak, Mintaka, Alioth, Dubhe, Alkaid, Kochab, Alphard, Alpheratz, Hamal, Denebola, Rasalhague, Nunki, Sadr, Mirfak, Wezen, Peacock, Alderamin, Zubeneschamali, Sualocin |
| Double and multiple stars | Almach, Algieba, Rasalgethi, Alphecca, Porrima, Cor Caroli, Izar, Epsilon Lyrae, Alula Australis (Xi Ursae Majoris) |
| More stars that change | Dschubba, La Superba (Y Canum Venaticorum), Chi Cygni, Eta Aquilae, VV Cephei |
| Hot young stars of Orion | Theta¹ Orionis C, AE Aurigae |
| More neighbours, Sun-like stars and stars with planets | Errai, Epsilon Indi, Eta Cassiopeiae, Delta Pavonis, Beta Hydri, 18 Scorpii, Zeta Reticuli, Upsilon Andromedae, 55 Cancri, HR 8799 |

**Code layout (`src/closeup/`)**

| File | Role |
| ---- | ---- |
| `star.ts` | `CloseupStar` / `StarLook` types; `viewDistanceKm`, `describeDistance` |
| `stars/<id>.ts` | One star each: look parameters + story beats |
| `stars/index.ts` | `STARS`, the full list (the sky view shows exactly these) |
| `StarDisc.svelte` | One WebGL fragment shader that draws any `StarLook` |
| `Narration.svelte` | Typed text, at most two lines per page, tap / Space / Enter to continue |
| `paginate.ts` | Splits beats into pages that fit (pure, unit-tested) |
| `StarCloseup.svelte` | One star: disc, name, story, and a back button to the sky (Escape and the browser's back also return) |

**Rendering stance.** The look is a set of **physical knobs, not artwork**: blackbody colour, limb darkening, convection texture, starspots, flattening and gravity darkening (fast spin), pulsation, a soft or lumpy edge, a companion (a star, a planet or a dark body; fixed in the background or on an orbit with eclipses), a ring of gas or dust in the equatorial plane, a dust nebula. The halo is optical glare. All fifty stars share one shader; a new star is a new data file, one line in `stars/index.ts`, and one line in `scripts/build/closeup-stars.ts` (its catalogue number, so the sky view can place it).

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
4. **Done** — Forty more stars (fifty in all); ring knob in the shader.
5. **Done** — Slider removed. The sky view is the home screen and the only way into a close-up ([10-sky-view.md](./10-sky-view.md)).
6. **Done** — Fifty more stars (a hundred in all).
7. **Next (open)** — Compute disc colour from temperature or B−V with the same function the map will use ([05-projection-and-rendering.md](./05-projection-and-rendering.md)).
8. **Next (open)** — Fact-check the stories against their cited sources (all hundred were written from memory).

**Done for this doc:** a reader can find the close-up code, add a star, and see which parts are physical and which are liberties.
