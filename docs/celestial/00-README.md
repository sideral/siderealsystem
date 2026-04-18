# Celestial map & game — planning index

## Introduction

This folder holds the **living plan** for a browser-only **interactive celestial map** (Phase A) and, later, a **constellation-learning game** (Phase B). Documents are ordered by number; start with `**01-data-stars-and-dsos.md`** for data, then follow `**02`–`06`** for math and UI. The repo root `**AGENTS.md**` explains agent conventions; the Cursor meta-plan (outside this repo) lists policies in full.

## References

- Meta-plan: `~/.cursor/plans/celestial_map_learning_path_b16b381f.plan.md` — document tree, data policy, dependency policy, Kickstart references index.
- `[AGENTS.md](../../AGENTS.md)` — architecture, data policy, rules for agents.
- [Vite guide](https://vitejs.dev/guide/) — static dev server and production build for a client-only app.
- [MDN](https://developer.mozilla.org/) — structuring project docs (optional).

## Overview

**Goals**

- Single entry point for humans and tools: what each `NN-*.md` covers, where `data/` and `scripts/` live, and how Phase A vs B relate.
- **Deployment:** static files only (e.g. Vite `dist/`). No application server; Node is for download/build scripts and the bundler.

**Layout (conventions)**


| Path                 | Role                                                           |
| -------------------- | -------------------------------------------------------------- |
| `data/raw/<source>/` | Unmodified upstream catalog files + per-folder provenance      |
| `scripts/download/`  | Node scripts that fetch into `data/raw/`                       |
| `scripts/build/`     | Node scripts: `data/raw/` → `data/dist/`                       |
| `data/dist/`         | JSON/CSV consumed by the app (or copied to `public/` at build) |
| `docs/celestial/`    | This planning set                                              |


**Document index**


| Doc                                                                      | Topic                                 |
| ------------------------------------------------------------------------ | ------------------------------------- |
| [01-data-stars-and-dsos.md](./01-data-stars-and-dsos.md)                 | Data pipeline, `Star` schema, DSOs    |
| [02-math-geometry-frames.md](./02-math-geometry-frames.md)               | S², frames, SO(3)                     |
| [03-time-and-observer.md](./03-time-and-observer.md)                     | JD, LST, observer, alt/az truth model |
| [04-transforms-catalog-to-sky.md](./04-transforms-catalog-to-sky.md)     | RA/Dec → horizontal                   |
| [05-projection-and-rendering.md](./05-projection-and-rendering.md)       | Projection, canvas/SVG, color         |
| [06-input-ui-and-detail.md](./06-input-ui-and-detail.md)                 | Pan/zoom/pick, detail UI              |
| [07-milestones-map-project.md](./07-milestones-map-project.md)           | Map phase milestones                  |
| [08-game-constellation-learning.md](./08-game-constellation-learning.md) | Game layer (after map MVP)            |


## Implementation route

1. **Index only** — This file exists with the table above; link to `AGENTS.md`.
2. **Policies visible** — Ensure `01` documents `data/` and script commands; cross-link when app `package.json` exists.
3. **Living docs** — As `02`–`06` gain decisions, add one-line pointers here (optional glossary subsection).

**Done for this doc:** readers can navigate the set and find data vs math vs milestones without opening the meta-plan.