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
| `star.ts` | `CloseupStar` / `StarLook` types, every knob documented; `viewDistanceKm`, `describeDistance` |
| `stars/<id>.ts` | One star each: look parameters + story beats |
| `stars/index.ts` | `STARS`, the full list (the sky view shows exactly these) |
| `frame.ts` | Pure per-frame maths that turns a `StarLook` and a time into the shader's numbers: pulse, Kepler orbits, eclipses, spot and dust cycles (unit-tested) |
| `shader.ts` | The GLSL: one WebGL fragment shader that draws any `StarLook` |
| `StarDisc.svelte` | The canvas: compiles the shader and feeds it `frameUniforms(look, t)` each frame |
| `Narration.svelte` | Typed text, at most two lines per page, tap / Space / Enter to continue |
| `paginate.ts` | Splits beats into pages that fit (pure, unit-tested) |
| `StarCloseup.svelte` | One star: disc, name, story, and a back button to the sky (Escape and the browser's back also return) |

**Rendering stance.** The look is a set of **physical knobs, not artwork**. Every star is built around the one or two things that make it that star (a fast spin, a wind, a partner, a pulse), and every star shares the one shader. The knobs, by what they describe:

| Part | Knobs |
| ---- | ----- |
| Surface | Blackbody colour and limb darkening. Convection: smooth noise for hot stars that do not boil; **cells** (granulation) for those that do, fine on a Sun-like star and a handful of giant ones on a red supergiant. Starspots in belts, on a cycle, with bright faculae and flares. Chemical **patches** on peculiar A and B stars (magnetic caps, a belt, drifting clouds). Non-radial pulsation **waves** (patterns with a given `l`, `m`). |
| Shape and spin | Spin **axis** (roll on the screen and tilt toward us, so a star can be seen pole-on or side-on), flattening, gravity darkening with a cooler equator colour, a **tide** that pulls the star into a teardrop, a soft or lumpy edge. |
| Change | A **pulse** (skewed like a Cepheid's, irregular like a semi-regular giant's, shifting colour at minimum) and a **dust** veil that can gather and clear. |
| Around the star | Optical glare. An **envelope** (a thin chromosphere rim, a corona, or a wind with streaks and clumps), prominences at the limb. A **ring** in the equatorial plane (a Be-star disc or a debris belt; it can be off-centre, sharp-edged, warped, or carry a spiral arm). |
| Companions | Up to four: stars, planets (with lit phases) or dark bodies; fixed points in the background or on Kepler orbits (eccentric, tilted, with real eclipses). The first can carry what ties a close pair together: an accretion **disc**, a **stream** of gas, **jets**, or the **shock** where two winds collide. |
| Nebula | The Homunculus (Eta Carinae), a glowing **cloud**, drifting **shells**, or a **bow shock** with an optional tail. |

Angles on the screen (`axis.rollDeg`, `orbit.nodeDeg`, a nebula's `angleDeg`) all run anticlockwise; a ring follows the axis. The near half of an orbit or ring passes below the centre and in front. `star.test.ts` keeps every companion on a phone screen, clear of the title above and the story below. A new star is a new data file, one line in `stars/index.ts`, and one line in `scripts/build/closeup-stars.ts` (its catalogue number, so the sky view can place it).

**Text and font.** Story text may only use characters in the bundled Ubuntu Mono subset (Latin, accented Latin, Greek, common punctuation). Ubuntu Mono has no ʻokina, so Hawaiian names use ‘ instead. `star.test.ts` checks every star: unique URL-safe id, valid colours, at least ten beats, each at most 160 characters, and a look the shader can draw (at most four companions and two waves, flares only with spots, extras only on the first companion).

**Known liberties (each is also stated in the star's story or file comment)**

The rule: what is drawn is real for that star, but it may be drawn **closer in, larger, brighter, faster or more regular** than true so that it shows on a phone.

- **Time.** Spins, pulses, orbits, spot cycles and dust cycles are all sped up, by very different factors from star to star.
- **Colour.** Star colours are hand-picked sRGB values near the blackbody colour, not computed from temperature. Gas and dust colours (pink hydrogen, blue reflected light, teal oxygen) are stylised. A few tints follow the eye, not the thermometer: Zubeneschamali's pale green, the blue-green of Antares B and Rasalgethi's companion, Izar's aqua partner.
- **Drawn closer in than true.** Wide companions and neighbours are points placed for composition (Alpha Centauri B and Proxima, Sirius B, Albireo B, the Trapezium, Alcyone's sisters, Mira B, Mirfak's cluster and so on). Planets and companions on orbits are pulled in until they fit (HR 8799's four planets, Upsilon Andromedae's three, Pollux's and Errai's planets, the partners of Dubhe, Polaris, Mizar, Castor, Hadar, Acrux, Porrima, Thuban, Regulus, Dschubba), often on a rounder orbit than the real one so they clear the disc. Debris rings are pulled in by factors of hundreds to thousands (Fomalhaut, Beta Pictoris, Tau Ceti, Denebola, Alphecca). Nebulae and bow shocks (Zeta Ophiuchi, Mira, the Orion, Flame, Flaming Star and Pleiades clouds, the gas behind Sadr) are light-years across in reality, and a cloud always surrounds its star here even when the real one lies to one side or far behind.
- **Drawn larger or stronger than true.** Pulsation waves (Mimosa, Hadar, Shaula, Spica, Deneb, Denebola, Kochab, Beta Hydri and the rest) are far too slight to see in reality. Flares, prominences and faculae (Epsilon Eridani) are enlarged. Planets are drawn several times their size. Jets, streams, coronae and wind-collision shocks (Beta Lyrae, Algol, VV Cephei, Capella, Gamma Velorum, Mintaka) are drawn brighter than true. Tidal egg shapes (Spica) are exaggerated.
- **Stand-ins for what the eye could not see.** Chemical patches (Cor Caroli, Alioth, Alpheratz, Elnath) differ in chemistry far more than in brightness, and Elnath's belt is placed by guess. Adhara's violet halo stands for its extreme-ultraviolet light. Eltanin's spots are a guess at what a cool giant carries. The looks of unseen partners (Peacock, Acrux) are guesses.
- **Drawn more regular than true.** R Coronae Borealis fades on a smooth cycle; the real fadings are random and can last years. Betelgeuse's Great Dimming repeats here; it happened once, in 2019. Rho Cassiopeiae's outbursts recur in seconds, not decades. Rings around Be stars (Achernar, Alcyone, Gamma Cassiopeiae, Dschubba) are schematic and steady: real ones grow and vanish over years.
- **Viewpoint.** Vega is shown pole-on, as from Earth; Altair, Alderamin, Rasalhague, Regulus and Achernar are turned as they were imaged (Achernar tipped a little further, to show the bulge). Where a star's orientation is unknown, the roll and tilt are chosen for variety. Eta Carinae is drawn from about a light-year away (the nebula), and Gamma Velorum from about 1 AU, not from a distance set by the star's radius.
- **Scale within a system.** Very close pairs (Algol, Beta Lyrae, Spica, Mintaka, 55 Cancri, 51 Pegasi) keep their true spacing in star radii. Capella's two giants keep their true sizes but sit at a little over half their true spacing. Algol's cool star is drawn brighter than it is. 51 Pegasi's planet size is a guess (it does not transit).

## Implementation route

1. **Done** — Sirius prototype (three variants), variant A promoted to real code.
2. **Done** — Typed narration with a two-line limit measured against the real layout.
3. **Done** — Shared shader and data model; ten stars; slider.
4. **Done** — Forty more stars (fifty in all); ring knob in the shader.
5. **Done** — Slider removed. The sky view is the home screen and the only way into a close-up ([10-sky-view.md](./10-sky-view.md)).
6. **Done** — Fifty more stars (a hundred in all).
7. **Done** — Every star restyled around its own signature. The look vocabulary grew (cells, spot belts and cycles, patches, waves, spin axis, tide, envelope, dust veil, four companions with discs, streams, jets and shocks, four kinds of nebula), and the shader moved out of the component into `frame.ts` (maths, tested) and `shader.ts` (GLSL).
8. **Next (open)** — Compute disc colour from temperature or B−V with the same function the map will use ([05-projection-and-rendering.md](./05-projection-and-rendering.md)).
9. **Next (open)** — Fact-check the stories against their cited sources (all hundred were written from memory). The new looks add claims to check too: orientations, disc and ring sizes, which companions are drawn.

**Done for this doc:** a reader can find the close-up code, add a star, and see which parts are physical and which are liberties.
