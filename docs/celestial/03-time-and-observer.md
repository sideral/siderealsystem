# Time and observer: JD, sidereal time, truth model

## Introduction

Catalog positions are in **ICRS**; the **observer’s sky** depends on **when** and **where** they stand. This doc covers **Julian Date**, **Greenwich / local sidereal time**, and the **alt/az** “what you see” model. `**04`** composes this with catalog vectors to get altitude and azimuth.

## References

- Jean Meeus, *Astronomical Algorithms* — Julian date, sidereal time, hour angle (pick one edition and cite it in code).
- [USNO](https://www.usno.navy.mil/USNO/astronomical-applications) / ERFA docs — time-scale definitions if you cross-check libraries.
- Wikipedia — *Sidereal time*, *Julian day* — sanity checks only; verify signs against Meeus.

## Overview

**Inputs**

- Civil time (UTC) → **JD**.
- Observer **latitude φ**, **longitude λ** (sign convention documented).
- **GST** → **LST = GST + λ** (with consistent east-positive convention).

**Why it matters**

- **Hour angle** links **RA** and **LST**; combined with **φ**, yields **alt/az** (implemented in `**04`**).

**Dependency:** none on `**01`** for pure formulas; tests can use fixed JD + observer.

## Implementation route

1. **JD from UTC** — Implement or carefully wrap a minimal JD calculator; unit-test against Meeus worked example.
2. **GST at JD** — One published formula (or split mean vs apparent if you document approximations).
3. **LST** — Add λ; log degrees vs hours clearly.
4. **Sanity** — Compare one instant to Skyfield/astropy (Python) or Meeus table; document ΔUT1 vs UTC if you ignore it initially.

**Done:** exported functions `julianDate(utc)`, `localSiderealTimeRadians(jd, lonRad)` (or equivalent), tested; observer struct `{ latRad, lonRad }` for the app.