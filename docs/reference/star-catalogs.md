# Reference: star catalogs and related sources

## Introduction

A usable sky map needs **astrometry** (where each star is on the sphere), **photometry** (how bright and what color), **names** people recognize, and often **constellation membership** or optional **deep-sky objects**. No single public table gives all of that with the right joins for a static, offline app, so the pipeline combines several **standard catalogs and portals**—Hipparcos-class data for positions and B−V, bright-star lists for Bayer–Flamsteed and HR ids, boundary polygons for IAU abbreviations, VizieR-hosted tables for cross-IDs and ReadMe details, optional NGC/IC data for DSOs, and build-time Wikipedia text where licensing allows. The sections below summarize each source and how it supports that stack; [`01-data-stars-and-dsos.md`](../celestial/01-data-stars-and-dsos.md) defines paths, schema, and build commands.

## Main content

**[ESA Hipparcos](https://www.cosmos.esa.int/web/hipparcos)** — ESA’s space astrometry mission (1989–1993) produced the Hipparcos and Tycho catalogs: high-precision positions, parallaxes, and proper motions for a large stellar sample, plus homogeneous photometry (e.g. Hipparcos/Tycho magnitudes, B−V). For this project it is the natural backbone for **ICRS positions**, parallax-based distance hints, and **epoch / photometric system** documentation when you subset stars for the naked-eye map.

**[Yale Bright Star Catalog (BSC / HR)](http://tdc-www.harvard.edu/catalogs/bsc5.html)** — Yale’s “Bright Star Catalogue” lists every star brighter than about **V ≈ 6.5** and assigns **Harvard Revised (HR)** numbers. It carries **Bayer–Flamsteed designations**, **spectral types**, and other cross-identifiers useful for display names and cultural constellations. Merge **on HR** with Hipparcos (and related cross-index files) so the app can show traditional labels without replacing Hipparcos astrometry.

**[OpenNGC](https://github.com/mattiaverga/OpenNGC)** — Community-maintained, machine-readable **NGC/IC** (and related) data: positions, types, sizes, and cross-references suitable for an optional **DSO layer**. Treat it like any upstream table: verify **license** and column meanings, vendor a pinned revision under `data/raw/`, and document provenance in a per-source README.

**IAU constellation boundaries** — The IAU defines sky polygons separating the **88 modern constellations**; vendored polygon data (e.g. from an authoritative file you pin and cite) lives under `data/raw/` with **source + version** in a README. Build scripts can **assign `constellation`** from RA/Dec by point-in-polygon tests, keeping that logic in Node rather than the browser if you prefer a precomputed field in `data/dist`.

**[VizieR](https://vizier.cds.unistra.fr/)** — CDS portal to thousands of astronomical catalogs and **ReadMe** files describing columns, units, and joins. Use it to find **auxiliary tables** (e.g. IAU star names, cross-matches HIP↔HD↔HR) and to confirm **epoch**, **coordinate frame**, and magnitude band before you bake fields into `stars.json`.
