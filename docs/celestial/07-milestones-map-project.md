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

- [ ] Vite + TypeScript project at repo root (or `app/`); `pnpm`/`npm` scripts documented in root README.
- [ ] Empty sky view (canvas or SVG) + resize handling.

**Done:** `pnpm dev` shows a blank or test pattern; DPR considered if canvas.

---

### Milestone 1 — Data on disk

- [ ] `data/raw/` layout + at least one provenance `README.md`.
- [ ] `scripts/download/` + `scripts/build/` stubs; `download:data` / `build:data` in `package.json`.
- [ ] `data/dist/stars.json` (minimal schema) loadable from dev (import or `fetch` to static path).

**Done:** documented in [01](./01-data-stars-and-dsos.md); no runtime catalog HTTP.

---

### Milestone 2 — Time + one star sanity check

- [ ] JD + LST for a test instant ([03](./03-time-and-observer.md)).
- [ ] One catalog star → alt/az ([04](./04-transforms-catalog-to-sky.md)); compare to reference.

**Done:** unit test or script output within agreed tolerance.

---

### Milestone 3 — Projection + field

- [ ] Forward + inverse projection ([05](./05-projection-and-rendering.md)).
- [ ] Draw all stars above horizon from merged file; B−V color + mag scaling.

**Done:** rotating Earth (time slider) visibly moves the field.

---

### Milestone 4 — Interaction + detail

- [ ] Pan/zoom/pick ([06](./06-input-ui-and-detail.md)).
- [ ] Detail UI with merged names/mag/constellation/blurb when present.

**Done:** click Sirius (or similar) shows expected info.

---

### Milestone 5 — Phase A polish

- [ ] Performance acceptable for naked-eye count; optional DSO layer toggle.
- [ ] README: build, data refresh, deploy to static host.

**Done:** you would ship Phase A as a learning demo.

---

**Tracking:** after each milestone, note the git tag or date in a one-line log at the bottom of this file (optional).
