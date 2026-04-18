# Terminology — astronomy and celestial maps

## Introduction

This file is a **domain glossary**: catalogs, coordinates, magnitudes, deep-sky objects, and naming conventions used when building **celestial maps** from tabular data. 

<a id="bsc-strings"></a>

## BSC strings

The **Yale Bright Star Catalog (BSC)** is often distributed as **plain-text, fixed-width rows** (the classic `bsc5`-style layout). Colloquially, **BSC strings** means those **ASCII record fields** as read from the table: especially the **Harvard Revised (HR)** number, **Bayer–Flamsteed** designation, **spectral type**, and related columns. In merged catalogs, those labels are commonly **cross-matched** to high-precision astrometry (e.g. **Hipparcos**) using **HR** (and published cross-index tables), so a map can show traditional names while positions come from the astrometric catalog.

<a id="blurbs-json-and-blurb"></a>

## Curated notes versus encyclopedia summaries

A **curated note** (sometimes called a **blurb** in app data) is a **short, hand-written** line or paragraph about a star—culture, mythology, what to notice at the eyepiece—authored by the project or editors. That is different from an **encyclopedia-style summary** (e.g. the lead of a **Wikipedia** article), which is convenient for UX but carries **reuse obligations**: you must retain **attribution** and respect the content **license** (Wikipedia text is typically **CC BY-SA**). The distinction is **provenance and licensing**, not sky geometry.

<a id="dsosjson"></a>

## Deep-sky objects (DSOs)

**Deep-sky objects** are extended or composite things on the sky, not treated as single **point sources** like most stars: e.g. **galaxies**, **nebulae** (emission, reflection, planetary, …), **globular clusters**, **open clusters**. Historically many are listed in the **NGC** (**New General Catalogue**) and **IC** (**Index Catalogue**) numbering systems. **OpenNGC** is one widely used, machine-readable open compilation of such objects. On a map, DSOs are often an **optional layer** drawn with symbols or outlines, separate from the stellar catalog unless you explicitly combine them.

## Catalogs and cross-identifiers

| Term | Definition |
| ---- | ---------- |
| **Hipparcos** | ESA’s space **astrometry** mission (1989–1993); the Hipparcos (and related Tycho) catalogs give high-precision **positions**, **parallaxes**, **proper motions**, and homogeneous **photometry** for a large stellar sample—often the backbone for a digital sky map’s star positions. |
| **HIP** | **Hipparcos identifier** — the primary key in the Hipparcos catalog; a standard way to refer to a star row when cross-matching tables. |
| **HR** | **Harvard Revised** number — the sequence number in the **Yale Bright Star Catalog**; the usual join key between BSC and Hipparcos cross-indexes. |
| **HD** | **Henry Draper Catalog** number — a very common alternate identifier in stellar data. |
| **BSC / Yale Bright Star Catalog** | A bright-star list (roughly **V ≲ 6.5**) with **HR** ids, **Bayer–Flamsteed** designations, **spectral types**, and other fields useful for **labels** and cross-identification. |
| **BSC strings** | [§ BSC strings](#bsc-strings) — the BSC’s **ASCII row fields** used for names and ids when merging with astrometric catalogs. |
| **Bayer–Flamsteed designation** | Traditional **Greek-letter (or Latin letter) + constellation** label (e.g. α Canis Majoris / Sirius’s Bayer letter in CMa); still how many bright stars are named on charts. |
| **IAU proper names** | Official **proper names** for selected stars (and related IAU resources); “common name” in UIs often comes from these or historical usage. |
| **OpenNGC** | Open, machine-readable compilation of **NGC/IC** (and related) **DSO** data, suitable for plotting and cross-reference if license and revision are respected. |
| **NGC / IC** | Classic **catalog numbers** for many **deep-sky objects**; still the everyday shorthand on amateur and professional charts. |

## Coordinates, frame, and time

| Term | Definition |
| ---- | ---------- |
| **Right ascension (RA)** | Longitude-like coordinate on the **celestial equator**, usually given in **hours, minutes, seconds of time** (360° = 24h); maps and software often store it in **degrees** for trigonometry. |
| **Declination (Dec)** | Latitude-like coordinate measured **north/south of the celestial equator**, in degrees (negative = south). |
| **ICRS** | **International Celestial Reference System** — today’s standard **celestial reference frame** for high-precision catalog positions; coordinates are effectively aligned with **J2000.0** FK5 for most map work unless you state otherwise. |
| **Epoch** | The **date** (or Julian year) for which a tabulated position is intended; matters when **proper motion** is significant or when comparing to older catalogs. |
| **Equatorial coordinates** | **RA/Dec** pair; the natural input for rotating the sky into **hour angle / declination** or **altitude / azimuth** for an observer. |

## Photometry and color

| Term | Definition |
| ---- | ---------- |
| **Apparent magnitude** | **Brightness** on a **logarithmic scale**; smaller (more negative) = brighter. Band must be specified (**V**, **B**, Hipparcos band, …). |
| **Johnson V** | **V** band of the Johnson–Morgan system — the usual “**visual**” magnitude for “how bright to the eye” discussions when the source is on that system. |
| **Hipparcos magnitude** | Magnitude in the **Hipparcos/Tycho photometric system**; not always identical to **Johnson V** for the same star—maps should state which catalog band they plot. |
| **B−V** | **Color index**: difference between **B** and **V** magnitudes; a one-number proxy for **stellar temperature** / color and a common input to **star color** on a map. |

## Constellations and sky regions

| Term | Definition |
| ---- | ---------- |
| **IAU constellations** | The **88** officially defined **constellations** with abbreviated names (e.g. **Ori**, **UMa**); modern boundaries are **polygonal** regions on the sphere. |
| **Constellation membership** | Which abbreviation applies to a given **RA/Dec** is determined by **which boundary polygon** contains the point (a **point-in-polygon** test in sky projection or on the sphere with care at edges). |
| **Point-in-polygon** | Computational geometry test: is a point inside a closed polygon? Used with **IAU boundary** data to assign **constellation** from position. |

## Typical quantities in a stellar “row” (conceptual)

<a id="star-record-fields"></a>

Digital sky maps usually carry something like the following for each **point source** (conceptual names; exact column names vary by project):

| Concept | Definition |
| ------- | ---------- |
| **Catalog identifiers** | At least one of **HIP**, **HR**, **HD** (and optionally others) so rows from different tables can be joined unambiguously. |
| **Position** | **RA and Dec** in **ICRS**, with **epoch** stated if relevant; software may store them in decimal **degrees**. |
| **Brightness** | One or more **magnitudes** (e.g. **V** or Hipparcos band); the map legend should say which **photometric band** is driving point size or brightness. |
| **Color index** | Often **B−V** for coloring points by approximate **stellar color**. |
| **Names** | **Proper / common** name when known; **scientific** label often built from **Bayer–Flamsteed** or **HD**-style designations. |
| **Constellation** | **IAU** abbreviation for the **boundary** that contains the star’s position. |

## Data interchange (astronomy context)

| Term | Definition |
| ---- | ---------- |
| **FITS** | **Flexible Image Transport System** — astronomy’s standard container for **images and binary tables** from observatories and archives. |
| **CSV** | Simple delimited **tabular** export; common for small samples and teaching, less rich than FITS for metadata. |
