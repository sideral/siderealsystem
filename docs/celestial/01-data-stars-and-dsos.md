# Data: stars, optional DSOs, and build pipeline

## Introduction

Before implementing sky math, we **vendor and merge** catalog data into typed offline files the browser loads. This doc is the contract for `**data/raw/`**, `**scripts/download/**`, `**scripts/build/**`, and `**data/dist/**`, plus the `**Star**` record shape (common name, scientific name, constellation, B−V, magnitude, optional blurb). For the **brightest / best-known** stars, we also merge a **short overview** from Wikipedia (fetched at **build time**, stored offline—same static-data rule as catalogs). It feeds `**04`–`06`** with clean inputs.

## References

- [ESA Hipparcos](https://www.cosmos.esa.int/web/hipparcos) — catalog documentation, epochs, photometric systems.
- [Yale Bright Star Catalog](http://tdc-www.harvard.edu/catalogs/bsc5.html) — HR ids, Bayer–Flamsteed strings, spectral types (merge with Hipparcos on HR).
- [OpenNGC](https://github.com/mattiaverga/OpenNGC) — machine-readable NGC/IC (check license).
- **IAU constellation boundaries** — polygon data you vendor under `data/raw/` (cite source in a README).
- [VizieR](https://vizier.cds.unistra.fr/) — ReadMe files for auxiliary tables (names, cross-matches).
- [Node.js](https://nodejs.org/docs/) — `fetch`, `fs`, streams for download/build scripts.
- [Wikipedia REST API](https://en.wikipedia.org/api/rest_v1/) — `page/summary/{title}` for a short extract (plaintext/HTML stripped to plain text in build). Use **only in `scripts/`** during `build:data` (or a dedicated `download:wiki` step); **never** from the browser for baseline content.
- [Wikipedia: CC BY-SA](https://foundation.wikimedia.org/wiki/Policy:Terms_of_Use) / [Reusing Wikipedia content](https://en.wikipedia.org/wiki/Wikipedia:Reusing_Wikipedia_content) — summaries are **CC BY-SA**; ship **attribution** (e.g. “From Wikipedia, the Free Encyclopedia” + article URL + license) in `data/dist` metadata or the app credits; keep a `**data/raw/wikipedia/`** snapshot or generated JSON with `title`, `revision`, `extract`, `content_urls` for traceability.

## Overview

**Inputs:** upstream archives (Hipparcos subset, BSC strings, IAU star names, optional OpenNGC, optional hand-authored `blurbs.json`), plus **optional Wikipedia fetches** for a defined set of “important” stars (see below).

**Outputs:** `data/dist/stars.json` (and optionally `dsos.json`, `blurbs.json`) — plain JSON, documented schema, no runtime HTTP for these assets.

**Star fields (target)**


| Field                          | Notes                                                                                                                                                                                          |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids                            | HIP, HR, HD as available                                                                                                                                                                       |
| `raDeg`, `decDeg`              | ICRS                                                                                                                                                                                           |
| `magV` or `hpMag`              | document which band the UI shows                                                                                                                                                               |
| `bv`                           | for display color mapping                                                                                                                                                                      |
| `commonName`, `scientificName` | nullable / constructed                                                                                                                                                                         |
| `constellation`                | IAU abbrev from boundaries + position                                                                                                                                                          |
| `blurb`                        | optional; hand-authored or other non-Wiki text                                                                                                                                                 |
| `wikiSummary`                  | optional; short plain-text overview from Wikipedia **build-time** API; include `**wikiAttribution`** (string) or parallel fields `wikiTitle`, `wikiUrl`, `wikiLicense` for CC BY-SA compliance |


**Which stars get a Wikipedia summary**

- Default rule of thumb: **curated list** (e.g. HIP ids or Wikipedia article titles in `data/raw/wiki-star-list.json`) **or** automatic cutoff (e.g. `magV ≤ 1.5` / top *N* by brightness)—pick one and document it here once chosen.
- Resolve article title via **common name** when unambiguous; fallback to **“Alpha Canis Majoris”**-style titles or a manual map file when disambiguation is needed.

**Processing**

- `**scripts/download/`** — one script per major source; writes to `data/raw/<name>/`.
- `**scripts/build/**` — reads raw, emits `data/dist/*`; may call `**scripts/build/wiki-summaries.ts**` (or inline step) that reads the star list, requests summaries from the REST API with **throttling** (e.g. ≥1 req/s), writes `**data/raw/wikipedia/snapshots/`** and merges `**wikiSummary**` + attribution into the final star records.
- `**package.json`:** `download:data`, `build:data`, optional `prepare:data` = both.

## Implementation route

1. **Manual seed** — Place one small CSV/FITS sample under `data/raw/test/` and document columns in this file.
2. **Single download script** — e.g. `scripts/download/hipparcos.ts` fetching one canonical URL into `data/raw/hipparcos/`; record URL, date, license in `data/raw/hipparcos/README.md`.
3. **Minimal build** — `scripts/build/merge-stars.ts` outputs `data/dist/stars.min.json` with a handful of columns (RA, Dec, mag, HIP only).
4. **Full merge** — Add BSC/IAU name joins, constellation assignment (boundary script or precomputed polygon test in Node), B−V, optional DSO pipeline from OpenNGC, optional `blurbs.json` merge; document final schema and `prepare:data`.
5. **Wikipedia summaries (optional but recommended for UX)** — Implement title resolution + REST `summary` fetch for the chosen “important” set; store raw JSON under `data/raw/wikipedia/`; merge `wikiSummary` + attribution fields; document license in app credits; re-run when you intentionally refresh copy.

**Done:** reproducible `pnpm download:data` / `pnpm build:data`; committed `data/raw/` (or documented first-run download); app loads only `data/dist/`*; schema written here; any Wikipedia-derived text has **clear attribution** and a reproducible snapshot or generated file in-repo.