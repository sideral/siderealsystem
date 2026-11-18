# Input, UI, and star detail

## Introduction

This doc covers **pan**, **zoom**, **pick** (which star is under the pointer), and a **detail** readout using merged **`Star`** fields from **`01`**. Pan/zoom may be implemented as extra view rotation + scale on the sphere or as 2D transforms—**inverse projection** from **`05`** must stay consistent with **`04`** when the sky rotates with time.

## References

- [MDN Pointer events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events), [WheelEvent](https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent).
- DOMPoint + `getScreenCTM()` inverse for SVG pointer → user space.
- [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/) — if stars become focusable controls.

## Overview

**Behaviors**

- **Pan** — Rotate viewing direction or translate in projected plane (document which; avoid mixing without updating inverse).
- **Zoom** — Scale or change projection parameter; clip below horizon if using alt/az.
- **Pick** — Pointer → unproject → unit vector → nearest star (dot product on catalog unit vectors above horizon).
- **Detail panel** — Show common name, scientific name, constellation, magnitude, blurb when available.

**Dependencies:** **`04`**, **`05`**, merged star data from **`01`**.

## Implementation route

1. **Static sky** — No pan; click logs nearest star HIP or id.
2. **Zoom** — Wheel or buttons; redraw.
3. **Pan** — Drag to rotate view or offset center; sync with projection.
4. **Panel** — HTML/SVG overlay listing selected `Star` fields.

**Status:** pan rotates the viewing direction (azimuth/altitude); zoom changes the field of view; pick unprojects the tap and takes the nearest star by dot product within 34 px (as an angle at the current zoom). On a phone the view direction comes from the orientation sensor instead ([10-sky-view.md](./10-sky-view.md)). The detail view is the star's close-up ([09](./09-star-closeups.md)).

**Done:** end-to-end click-to-name flow; documented pick tolerance (angular radius).
