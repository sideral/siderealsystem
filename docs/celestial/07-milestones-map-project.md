# Milestones: Phase A (interactive map)

## Introduction

This doc is the **single checklist** for shipping the **celestial map** (Phase A). Each milestone is **ordered**, has a clear **done** criterion, and maps to **`01`–`06`**. Update checkboxes as work completes.

## References

- [01](./01-data-stars-and-dsos.md)–[06](./06-input-ui-and-detail.md) — technical references per topic.
- Meta-plan Appendix B / project `AGENTS.md` — legacy ordering sanity check.

## Overview

**North star:** one real star from **`data/dist`** through **time → horizontal → projection → screen**, with **time** and **observer** controls, before heavy polish.

**Scope:** client-only static app; no backend. Core algorithms in-house per `AGENTS.md`.

## Implementation route

### Milestone 0 — Repo skeleton

- [x] Vite + TypeScript project at repo root (or `app/`); `pnpm`/`npm` scripts documented in root README.
- [x] Empty sky view (canvas or SVG) + resize handling.

**Done:** `pnpm dev` shows a blank or test pattern; DPR considered if canvas.

---

### Milestone 1 — Data on disk

- [x] `data/raw/` layout + at least one provenance `README.md`.
- [x] `scripts/download/` + `scripts/build/` stubs; `download:data` / `build:data` in `package.json`.
- [ ] `data/dist/stars.json` (minimal schema) loadable from dev (import or `fetch` to static path). *So far only `data/dist/closeup-stars.json`: the hundred close-up stars, imported by `src/sky/catalog.ts`.*

**Done:** documented in [01](./01-data-stars-and-dsos.md); no runtime catalog HTTP.

---

### Milestone 2 — Time + one star sanity check

- [x] JD + LST for a test instant ([03](./03-time-and-observer.md)).
- [x] One catalog star → alt/az ([04](./04-transforms-catalog-to-sky.md)); compare to reference. *Five stars, three places and dates, within 0.02° of astropy.*

**Done:** unit test or script output within agreed tolerance.

---

### Milestone 3 — Projection + field

- [x] Forward + inverse projection ([05](./05-projection-and-rendering.md)). *Stereographic, centred on the view direction.*
- [ ] Draw all stars above horizon from merged file; B−V color + mag scaling. *A hundred stars only, above and below the horizon, magnitude scaling; colour is each star's close-up colour, not B−V. No time slider: the clock is always now.*

**Done:** rotating Earth (time slider) visibly moves the field.

---

### Milestone 4 — Interaction + detail

- [x] Pan/zoom/pick ([06](./06-input-ui-and-detail.md)). *Plus following the phone's orientation: [10](./10-sky-view.md).*
- [ ] Detail UI with merged names/mag/constellation/blurb when present. *The detail view is the star's close-up ([09](./09-star-closeups.md)), for the hundred stars only.*

**Done:** click Sirius (or similar) shows expected info.

---

### Milestone 5 — Phase A polish

- [ ] Performance acceptable for naked-eye count; optional DSO layer toggle.
- [ ] README: build, data refresh, deploy to static host.

**Done:** you would ship Phase A as a learning demo.

---

**Tracking:** after each milestone, note the git tag or date in a one-line log at the bottom of this file (optional).

- 2026-11-17 — Milestones 0, 2 and the projection and input halves of 3–4 reached through the phone sky view ([10](./10-sky-view.md)), on a fifty-star catalogue, grown to a hundred the same day. The merged `stars.json` (milestone 1) is still to do.
