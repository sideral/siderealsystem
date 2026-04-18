# Game: constellation learning (Phase B)

## Introduction

Phase B layers **pedagogy and game mechanics** on the **Phase A map engine**: quizzes, constellation **stick figures**, progression, and optional spaced repetition. This doc stays **high level** until Phase A MVP exists; expand sections then without changing the **`01`–`07`** pipeline contracts.

## References

- [Stellarium](https://stellarium.org/) — UX inspiration only (GPL; do not copy assets).
- Literature on **retrieval practice** / **spaced repetition** (optional) if quizzes are core.
- Community **constellation line** formats (e.g. Stellarium star-line lists) as **data-shape examples** — produce your own licensed dataset for production.

## Overview

**Depends on:** Phase A complete per [07-milestones-map-project.md](./07-milestones-map-project.md) (at least through Milestone 4–5).

**Possible features**

- Identify constellation by outline or star name; highlight figure from a **line list** dataset (HIP pairs or RA/Dec endpoints).
- Session state in **localStorage** / IndexedDB (still no backend).

**Out of scope until Phase A ships:** heavy narrative content; monetization.

## Implementation route

1. **Frozen** — No code required until map MVP; keep this doc as a stub checklist.
2. **Mock quiz** — One hardcoded question (“Click α UMa”) using existing pick + `Star` data; no persistence.
3. **Line data** — Author or generate `constellation-lines.json` (HIP–HIP segments); draw in SVG or canvas overlay.
4. **Loop** — Progression rules, wrong-answer feedback, optional spaced repetition schedule.

**Done (Phase B “v1”):** repeatable constellation drill using the real map; data and copy licensed/cleared.
