# Sky view (phone orientation)

## Introduction

The home screen: **the sky as it is right now, from where you are**, showing only the hundred stars that have a close-up ([09-star-closeups.md](./09-star-closeups.md)), small and in place. On a phone the view **follows the phone**: hold it up and the stars on screen are the ones behind it, above the horizon or through the ground below. The primary target is an iPhone XR in portrait (414×896 CSS px, notch, home bar), but the layout is responsive and a desktop can drag to look around. There is **no interface on this screen by decision**: only the sky and the logo. Tapping a star opens its close-up.

This is the first end-to-end slice of the Phase A map ([07-milestones-map-project.md](./07-milestones-map-project.md)): catalogue → time → horizontal → projection → screen → pick, all in our own TypeScript.

## References

- Meeus, *Astronomical Algorithms* (2nd ed.): Julian Date (ch. 7), sidereal time (eq. 12.4), horizontal coordinates (ch. 13), precession (eq. 21.3). The unit tests use its worked examples 7.a, 12.a, 12.b, 13.b and 21.b.
- [W3C Device Orientation](https://www.w3.org/TR/orientation-event/): the alpha/beta/gamma angles and the `Z·X·Y` rotation order.
- astropy 6.1 was used once, at dev time, to produce the reference altitudes and azimuths in `src/sky/frames.test.ts`. It is not a dependency.
- Star positions: Yale Bright Star Catalogue (CDS V/50), via `data/dist/closeup-stars.json` ([01-data-stars-and-dsos.md](./01-data-stars-and-dsos.md)).

## Overview

**Code layout (`src/sky/`)**

| File | Role |
| ---- | ---- |
| `vec.ts` | `Vec3` / `Mat3` helpers, `radecToUnitVector` ([02](./02-math-geometry-frames.md)) |
| `time.ts` | `julianDate`, Greenwich and local mean sidereal time ([03](./03-time-and-observer.md)) |
| `frames.ts` | Precession from J2000, equatorial → east-north-up, `horizontalFromEquatorial` ([04](./04-transforms-catalog-to-sky.md)) |
| `camera.ts` | Camera from phone angles or from azimuth/altitude, compass correction, stereographic `project` / `unproject`, horizon shape, `pickNearest` ([05](./05-projection-and-rendering.md), [06](./06-input-ui-and-detail.md)) |
| `sensors.ts` | Browser glue: orientation events, motion permission, geolocation, saved location, screen wake lock |
| `catalog.ts` | Joins the close-up stars with their catalogue positions |
| `SkyView.svelte` | Canvas, render loop, pointer input |

**Conventions**

- Unit vectors and 3×3 matrices on column vectors; right-handed frames; radians unless a name ends in `Deg`.
- Horizontal frame is **east-north-up**, the same frame the phone's orientation sensor reports in. Azimuth is from north through east.
- The camera looks out of the **back** of the phone. Its axes are the screen's right and up, and the view direction.

**Projection.** Stereographic, centred on the view direction: r = 2f·tan(θ/2), with the field of view (default 90°, 25°–130° by pinch or wheel) measured across the longer side of the screen. It keeps small shapes undistorted at wide fields and turns the horizon into an exact circle (radius 2f/|u_z|, centre 2f·(u_x, u_y)/u_z, with u the zenith in camera axes), which is how the ground is filled without sampling.

**Drawing.** Canvas 2D (a hundred sprites and a circle per frame: WebGL would add nothing here). Each star is a pre-rendered glow sprite in its close-up colour, sized by magnitude (core radius 3.4 − 0.5·m px, clamped to 1–4.4). The ground is a faint veil; stars below the horizon show through it at 60% strength. **Nothing else is drawn**: no star names, no compass letters, no buttons or instructions. The screen is the stars, the horizon and the logo.

**Following the phone**

- Android fires `deviceorientationabsolute`: angles already referenced to the compass.
- iOS fires `deviceorientation` relative to wherever the phone pointed when the page opened, plus `webkitCompassHeading`, the compass direction of the phone's **top edge**. `compassTurn` compares that heading with where the top edge points in the relative frame and returns the turn about the vertical that reconciles them. The first heading is taken as is; later ones nudge it, weighted by how far the top edge is from vertical (where a heading means nothing).
- Readings are smoothed (30% of the way to the newest reading per frame).
- With the phone followed, dragging sideways adds a manual turn on top: a way to line the view up by hand against a star you know.
- `screen.orientation.angle` is applied, so landscape works.

**Permissions, without any interface**

- Location is requested on load. If refused or unavailable: the last location saved on the device, else an approximate one (longitude from the clock's time zone, latitude 40° N).
- iOS only grants motion access from a touch, so the request is made on the first touch of the sky. Elsewhere it starts on load.
- Both need a secure page. `pnpm dev:phone` serves the dev server over https on the local network with a self-signed certificate (made once with `openssl`, kept in `node_modules/.cache/`), so a phone can open it.
- If motion is refused or there is no sensor, the view stays in drag mode. Nothing is reported to the user.

**Input.** One finger or the mouse drags the sky (or, while following the phone, corrects the compass); two fingers pinch the field of view; the wheel zooms; arrow keys and +/− work on a desktop. A tap within 34 px of a star opens its close-up, including stars below the horizon.

**App shell.** `viewport-fit=cover` with safe-area insets, a web manifest and touch icons so it can be added to the home screen and run full-screen, and no page scrolling or overscroll.

**Known liberties and gaps**

- **Not yet tried on a real phone.** The orientation path was exercised in a desktop browser with synthetic events, for both the Android and the iOS style of reading. In particular, how iOS reports `webkitCompassHeading` once the phone is tipped back past upright is assumed (top-edge direction), not confirmed.
- The compass gives **magnetic** north. Magnetic declination (up to about ±20° depending on where you are) is not corrected; the sideways drag is the workaround.
- Mean sidereal time; UTC used as UT1; no nutation, aberration, refraction or proper motion. Agreement with astropy is within about an arcminute, far below compass accuracy.
- Magnitudes are the catalogue's single values: variable stars (Mira, R Coronae Borealis, Algol…) are drawn at a fixed brightness.
- The sky is always dark: no daylight, twilight, Sun, Moon or planets.

## Implementation route

1. **Done** — Positions for the close-up stars (fifty, then a hundred) from the Bright Star Catalogue (`pnpm build:data`).
2. **Done** — Time, frames, camera and projection modules, unit-tested against Meeus and astropy.
3. **Done** — Sky view: canvas, drag/pinch/pick, horizon and ground, phone following, silent permissions.
4. **Done** — App shell for phones; `pnpm dev:phone`.
5. **Next (open)** — Try it on an iPhone XR and an Android phone; fix what the real sensors show (heading semantics past upright, smoothing constants, landscape).
6. **Next (open)** — Magnetic declination from a small bundled model, so compass north becomes true north.
7. **Next (open)** — Grow from the hundred stars toward the merged catalogue in [01](./01-data-stars-and-dsos.md) (constellation lines, fainter stars, magnitude limit by field of view).
8. **Next (open)** — A service worker, so the installed app opens with no network at all.

**Done for this doc:** a reader can follow a star from the catalogue file to a pixel, knows which sensor assumptions are untested, and can run it on a phone.
