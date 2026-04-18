# Projection and rendering: sphere to canvas/SVG

## Introduction

Directions (**alt/az** or tilted view) map to **2D** via a chosen **projection** (forward and **inverse** for picking). This doc also covers **B−V → RGB**, magnitude scaling for point size/alpha, and optional **DSO** markers. **`06`** adds interaction on top of the same geometry.

## References

- John P. Snyder, *Map Projections—A Working Manual* (USGS PP 1395) — forward/inverse, distortion.
- [MDN Canvas 2D](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) / [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) — coordinates, `viewBox`, `devicePixelRatio`.
- Articles or plots on **B−V** to sRGB for star tint (document the curve you code).

## Overview

**Projection**

- Pick one (e.g. stereographic, orthographic, azimuthal equidistant) for the “sky disc.”
- Implement **project(dir)** → `(x, y)` in normalized or pixel space.
- Implement **unproject(x, y)** → unit direction (for pick).

**Rendering**

- **Canvas** — single raster, batch draws; handle DPR.
- **SVG** — `<circle>` per star for modest counts; transform group for pan/zoom of celestial motion vs user zoom.

**Inputs:** unit vector or (*a*, *A*) from **`04`**.

## Implementation route

1. **Forward only** — Plot one star at fixed alt/az as a dot.
2. **Inverse** — Given click *(x,y)*, recover direction; unit-test round-trip on samples.
3. **Field** — Draw all visible stars from `data/dist/stars.json` with size from mag and color from B−V.
4. **Polish** — Horizon clip, optional DSO ellipses, grid overlay for debugging.

**Done:** stable projection module + render path chosen; inverse used by pick logic in **`06`**.
