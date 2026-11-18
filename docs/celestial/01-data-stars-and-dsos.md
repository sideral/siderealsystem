# Data: stars, optional DSOs, and build pipeline

## Introduction

Before implementing sky math, we **vendor and merge** catalog data into typed offline files the browser loads. This doc is the contract for `data/raw/`, `scripts/download/`, `scripts/build/`, and `data/dist/`, plus the **Star** record shape (common name, scientific name, constellation, B−V, magnitude, optional blurb). For the brightest / best-known stars, we also merge a short overview from Wikipedia (fetched at build time, stored offline—same static-data rule as catalogs). It feeds **04**–**06** with clean inputs.

## References

- [Star catalogs and related sources](../reference/star-catalogs.md) — Hipparcos, Yale BSC, OpenNGC, IAU boundaries, VizieR, Node, Wikipedia API and licensing (background reading).
- [Terminology (domain glossary)](../reference/terminology.md) — BSC strings, DSOs, coordinates, magnitudes, naming; not repo layout or schema (this doc is the contract for those).

## Overview

**Inputs:** upstream archives (Hipparcos subset, [BSC strings](../reference/terminology.md#bsc-strings), IAU star names, optional OpenNGC, optional hand-authored [`blurbs.json`](../reference/terminology.md#blurbs-json-and-blurb)), plus **optional Wikipedia fetches** for a defined set of “important” stars (see below).

**Outputs:** `data/dist/stars.json` (and optionally [`dsos.json`](../reference/terminology.md#dsosjson), [`blurbs.json`](../reference/terminology.md#blurbs-json-and-blurb)) — plain JSON, documented schema, no runtime HTTP for these assets.

**Built so far: `data/dist/closeup-stars.json`** — positions for the 120 close-up stars only, a first small artifact ahead of the merged `stars.json`.

- Built by `scripts/build/closeup-stars.ts` (`pnpm build:data`) from `data/raw/bsc/catalog.dat` (run `pnpm download:bsc` first). `data/dist/` is committed, so a fresh clone builds and runs without the raw catalogues.
- Shape: `{ source, epoch, stars: { [id]: { hr, raDeg, decDeg, magV } } }`. `id` is the close-up star's id; `hr` its Bright Star Catalogue number.
- `raDeg`, `decDeg`: equinox and epoch J2000.0, degrees, as given by the catalogue (FK5, close enough to ICRS here). Proper motion is not applied.
- `magV`: the catalogue's visual magnitude. Close pairs the eye sees as one (Alpha Centauri, Acrux, Castor, Mizar, Albireo, Gamma Velorum, 61 Cygni) are summed; Eta Carinae is overridden to 4.3 because the catalogue value is decades out of date.
- Each entry in the script names the designation the catalogue row must carry, so a mistyped HR number fails the build. `src/sky/catalog.test.ts` fails if the script's list and `src/closeup/stars/` drift apart.
- Loaded by `src/sky/catalog.ts` with a plain `import` (bundled; no runtime request).

**Star fields (target)** — domain-oriented column concepts: [terminology: typical stellar row](../reference/terminology.md#star-record-fields).


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
- `**scripts/build/`** — reads raw, emits `data/dist/`*; may call `**scripts/build/wiki-summaries.ts`** (or inline step) that reads the star list, requests summaries from the REST API with **throttling** (e.g. ≥1 req/s), writes `**data/raw/wikipedia/snapshots/`** and merges `**wikiSummary`** + attribution into the final star records.
- `**package.json`:** `download:data`, `build:data`, optional `prepare:data` = both.

## Implementation route

1. **Manual seed** — Place one small CSV/FITS sample under `data/raw/test/` and document columns in this file.
2. **Single download script** — e.g. `scripts/download/hipparcos.ts` fetching one canonical URL into `data/raw/hipparcos/`; record URL, date, license in `data/raw/hipparcos/README.md`.
3. **Minimal build** — `scripts/build/merge-stars.ts` outputs `data/dist/stars.min.json` with a handful of columns (RA, Dec, mag, HIP only).
4. **Full merge** — Add BSC/IAU name joins, constellation assignment (boundary script or precomputed polygon test in Node), B−V, optional DSO pipeline from OpenNGC, optional `blurbs.json` merge; document final schema and `prepare:data`.
5. **Wikipedia summaries (optional but recommended for UX)** — Implement title resolution + REST `summary` fetch for the chosen “important” set; store raw JSON under `data/raw/wikipedia/`; merge `wikiSummary` + attribution fields; document license in app credits; re-run when you intentionally refresh copy.

**Done:** reproducible `pnpm download:data` / `pnpm build:data`; committed `data/raw/` (or documented first-run download); app loads only `data/dist/`*; schema written here; any Wikipedia-derived text has **clear attribution** and a reproducible snapshot or generated file in-repo.