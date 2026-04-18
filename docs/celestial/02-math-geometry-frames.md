# Math: celestial sphere, frames, and vectors

## Introduction

The sky is modeled as directions on **S²** embedded in **R³**. This doc fixes vocabulary—**ICRS equatorial**, **horizontal (alt/az)**, optional **ecliptic**—and the shift from spherical angles to **unit vectors** and **orthogonal transforms**, which `**04`** uses for the full pipeline.

## References

- Any linear algebra text — orthogonal matrices, change of orthonormal basis.
- [3Blue1Brown — Essence of linear algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) — intuition (optional).
- Jean Meeus, *Astronomical Algorithms* — spherical coordinates, fundamental triangle (tie to vector view).

## Overview

**Goals**

- Same object (a star direction) expressed in different frames: catalog **(α, δ)** vs observer **(alt, az)**.
- Prefer **unit vectors** **v** ∈ R³, ‖**v**‖ = 1, and **R** ∈ SO(3) for frame changes; quaternions optional later.

**Outputs for later docs**

- Conventions: right-handed systems, matrix–vector multiply order (column vectors).
- No time or observer yet—that is `**03`**; full rotation chain is `**04`**.

## Implementation route

1. **Definitions** — Short prose + diagram: celestial sphere, zenith, horizon, meridian; equatorial vs horizontal.
2. **Paper check** — One manual conversion or consistency check (e.g. known RA/Dec for a bright star) using spherical relations from Meeus/Smart.
3. **Vectors in TS** — Implement `radecToUnitVector(α, δ)` returning `[x,y,z]` in a fixed equatorial basis; unit-test ‖**v**‖ = 1 and equator/pole edge cases.

**Done:** glossary-level clarity in writing; one tested `vec3` helper aligned with conventions used in `**04`**.