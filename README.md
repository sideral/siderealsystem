siderealsystem
==============

Online Planetarium

**Stack:** Vite, TypeScript, Svelte 5.

## Downloading catalog data

Upstream star / DSO tables are stored under `data/raw/`, which is **gitignored** — a fresh clone does not contain those files. After `pnpm install`, fetch everything once (network required):

```bash
pnpm download:data
```

Per-source commands (for debugging or partial refresh): `pnpm download:hipparcos`, `pnpm download:bsc`, `pnpm download:iau-star-names`, `pnpm download:iau-constellation-boundaries`, `pnpm download:openngc`.

If the expected files already exist locally, each script **logs and skips** without hitting the network (there is no `--force` flag in this version).

See [`docs/celestial/01-data-stars-and-dsos.md`](docs/celestial/01-data-stars-and-dsos.md) for how raw data and a future `data/dist/` build fit together.

## Data sources and credits

The interactive map pipeline vendors several public astronomical catalogs. **Attribute and comply with each license** when shipping derived JSON or screenshots. Summary (not legal advice — read each upstream ReadMe / license file):

| Source | What we use | Where / id | License (verify upstream) |
| ------ | ------------- | ---------- | --------------------------- |
| **ESA Hipparcos** (via CDS) | `hip_main.dat` astrometry & photometry | CDS **I/239** | Typically **CC BY 4.0** for ESA Hipparcos material — confirm on [ESA Hipparcos](https://www.cosmos.esa.int/web/hipparcos) and CDS. |
| **Yale Bright Star Catalogue** (via CDS) | `catalog.dat` (CDS V/50 layout) | CDS **V/50** | CDS / ADC terms in the V/50 ReadMe; cite Hoffleit & Warren. |
| **IAU Catalog of Star Names** | IV/27A tables | CDS **IV/27A** | CDS + IAU WGSN conditions; cite the catalog. |
| **Roman constellation boundaries** | `data.dat` segments | CDS **VI/42** | CDS terms; cite Roman 1987, PASP 99, 695. |
| **OpenNGC** | CSV database under pinned Git tag | [OpenNGC](https://github.com/mattiaverga/OpenNGC) | **CC BY-SA 4.0** (see `LICENSES/CC-BY-SA-4.0.txt` inside the downloaded tree). Share-alike applies to adapted material. |

When Wikipedia summaries are merged later into `data/dist/`, add **Wikimedia / CC BY-SA** attribution per `docs/celestial/01-data-stars-and-dsos.md`.

## Development

```bash
pnpm install
pnpm dev
```

Build for production and preview the static output:

```bash
pnpm build
pnpm preview
```

Lint, typecheck (Svelte + TS), and unit tests:

```bash
pnpm lint
pnpm check
pnpm test
pnpm test:watch
```
