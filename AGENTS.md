# Agent instructions (Sidereal / celestial project)

## Why this file exists

This repo is a **multi-day to multi-week** effort: build an **interactive celestial map** (correct math, real star data, usable UI) as a **learning project**, then layer a **constellation-learning game** on top. Work is tracked in **living markdown plans**, not only in chat.

**Architecture:** the **shipped product** is a **browser-only** app: **static files** (HTML, JS, CSS, JSON) with **no application backend**. **Node.js** is for **dev-time** tooling only (`scripts/download`, `scripts/build`, Vite, tests). Deploy e.g. `dist/` to any static host.

**Do not lose the arc:** small tasks should still advance the numbered docs and milestones below—not only the immediate fix.

---

## Canonical roadmap (read this first)

1. **`docs/celestial/00-README.md`** — Index of all planning docs. Each `NN-*.md` uses the same section order: **`## Introduction`** → **`## References`** → **`## Overview`** → **`## Implementation route`**. If missing, scaffold to match sibling docs.
2. **`docs/celestial/07-milestones-map-project.md`** — Ordered vertical slices for the **map** phase; keep this checklist honest as work completes.
3. Other files in **`docs/celestial/`** (`01-` … `08-`) — Deep dives in **recommended order:** **data first** (`01-data-stars-and-dsos.md`), then math, time, transforms, projection, UI; game stub last.

---

## Long-term goals (in order)

| Phase | Goal | Notes |
| ----- | ---- | ----- |
| **A — Map** | **Client-only** TypeScript + sky view (canvas or SVG) driven by RA/Dec → observer sky → 2D projection; merged **naked-eye** star catalog with names, constellation, B−V→color, magnitude, optional blurbs; optional DSO layer — all from **static data** | Learning-first: understand frames, sidereal time, rotations, projection |
| **B — Game** | Constellation learning mechanics on top of the same engine | Stub in `08-game-constellation-learning.md` until Phase A MVP |

---

## Data policy (offline, reproducible)

- **All** catalog and game-related tabular data: **vendored as plain files** under **`data/raw/`** and **`data/dist/`** (use **Git LFS** only if size requires it—still offline at **app** runtime).
- **`scripts/download/`** — **Node.js** scripts that **fetch** upstream archives into **`data/raw/<source>/`** (canonical URLs, optional checksum/size checks). Run on a machine with network; **not** used by the browser. Expose as e.g. **`pnpm download:data`**.
- **`scripts/build/`** — **Node.js** scripts that read **`data/raw/`** and write **`data/dist/`** (merge, filter, schema). Expose as e.g. **`pnpm build:data`**. Optional **`prepare:data`** = download then build, documented in **`01-data-stars-and-dsos.md`**.
- **`scripts/lib/`** — Optional shared helpers (paths, parsers, checksums).
- **`data/raw/`** — Original upstream files as downloaded; per-source provenance (URL, date, license, checksum) in `README.md` or **`01-data-stars-and-dsos.md`**.
- **`data/dist/`** (or `public/data/`) — **Only** these artifacts are loaded by the app; **no** runtime network for baseline catalogs.
- Document schema, epochs, download vs build steps, and re-refresh workflow in **`01-data-stars-and-dsos.md`**.

---

## Rules for agents

- **Prefer updating `docs/celestial/*.md`** when scope, decisions, or milestones change—don’t rely on chat memory alone.
- **Match the learning stance:** preserve clear math/data/rendering separation. **Low-level deps are OK** (e.g. vector/matrix math). **Do not** substitute a planetarium or full ephemeris SDK for core behavior—**sidereal time, catalog→observer sky, projection, and picking** stay in our TypeScript (document rare exceptions in `docs/celestial/*.md`).
- **Stack defaults:** TypeScript, Vite (or equivalent), no required framework for the core map. **Do not add** a server/API for catalog or game logic unless the user explicitly changes this—keep the **static-only** model.
- **Data:** follow **Data policy** above; treat **`01-data-stars-and-dsos.md`** as the contract for raw → script → dist (do this **before** deep-diving pure math).

---

## Quick pointer for humans

If you open this repo after a break: start at `docs/celestial/00-README.md`, then `07-milestones-map-project.md`.
