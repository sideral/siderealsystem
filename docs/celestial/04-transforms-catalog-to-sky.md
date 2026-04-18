# Transforms: catalog → observer horizontal coordinates

## Introduction

This doc implements the **core astronomy path**: **ICRS RA/Dec** (or a unit vector) → **hour angle** using **LST** from **`03`** → **altitude and azimuth** for observer latitude **φ**. This is **first-party code**—not delegated to a planetarium SDK. **`05`** projects the resulting direction to the screen.

## References

- Jean Meeus or W.M. Smart — equatorial ↔ horizontal formulas (compare to your matrix version).
- Graphics texts — world-to-camera rotations; **column-vector × matrix** convention (match project-wide).

## Overview

**Inputs**

- Star: **α, δ** (or unit vector in equatorial basis).
- **LST** (or GST + λ), **φ**, **λ** (λ used for LST only if not already folded into LST).

**Output**

- **Altitude** *a*, **azimuth** *A* (document: north=0° eastward vs south-based conventions).

**Approach**

1. Hour angle *H* = LST − α (same units; document rad vs deg).
2. Rotation chain or classical spherical formulas → (*a*, *A*).

**Dependencies:** **`02`** (vectors), **`03`** (LST).

## Implementation route

1. **One star** — Hard-code Sirius or Polaris; compute *H* by hand, then in TS.
2. **Vector path** — Equatorial unit vector → apply documented rotation(s) to **topocentric horizontal** basis; extract alt/az.
3. **Tests** — Tabulated alt/az for known observer/time from a reference (Skyfield/astropy script or almanac); tolerance in arcminutes documented.
4. **Batch** — Map over `stars.json` entries, filter *a* > 0 for “up” hemisphere if needed.

**Done:** `horizontalFromEquatorial({ ra, dec }, observer, jd)` (or vector equivalent), tested; conventions file or header comment for azimuth zero and east/west.
