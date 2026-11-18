/**
 * What a close-up star is made of: how it is drawn (`StarLook`) and the story told under it.
 * The look is a set of physical knobs, not artwork: colour from temperature, limb darkening,
 * surface texture from convection, flattening from spin, and so on.
 */

/** Default on-screen disc radius, as a fraction of the viewport's short side. */
export const DEFAULT_RADIUS = 0.26

/** How many companions one star can be drawn with. */
export const MAX_COMPANIONS = 4

/** How many pulsation waves one star can be drawn with. */
export const MAX_WAVES = 2

export interface SurfaceTexture {
  /** Contrast of the mottling: 0.05 is barely visible, 0.5 is a boiling red supergiant */
  amplitude: number
  /** Cells across the disc: about 2 for a few giant cells, 20 for fine Sun-like grain */
  scale: number
  /** How fast the pattern churns */
  speed: number
  /** 0 is soft mottling (default); 1 is distinct bright granules with dark lanes between them */
  cells?: number
}

export interface Starspots {
  /** How dark the spots are, 0 to 1 */
  darkness: number
  /** Typical spot radius, as a fraction of the star's radius */
  size: number
  /** Any number; changes where the spots sit so two stars don't share a pattern */
  seed: number
  /** How many spots, up to 12 (default 6) */
  count?: number
  /** Latitude of the two belts the spots keep to, as on the Sun (default: scattered) */
  beltDeg?: number
  /** Seconds for the spots to fade and come back: an activity cycle like the Sun's 11 years */
  cycleSeconds?: number
  /** Brightness of the faculae, the bright patches around spots that show near the limb, 0 to 1 */
  faculae?: number
}

/** Magnetic unrest on a cool star, on top of its spots. */
export interface Activity {
  /** Loops of glowing hydrogen standing off the limb, 0 to 1 */
  prominences?: number
  /** Brief white flashes beside the first few spots, 0 to 1 (needs `spots`) */
  flares?: number
}

/** Regions of odd chemistry on a hot star with a calm surface, held in place by magnetism or left to drift. */
export interface Patches {
  /** Caps at the two magnetic poles, a belt around the magnetic equator, or clouds near the spin equator */
  shape: 'caps' | 'belt' | 'clouds'
  /** sRGB hex the surface shifts toward inside a patch */
  color: string
  /** How far it shifts, 0 to 1 */
  strength: number
  /** Half-width of each cap, of the belt, or of the band of latitudes the clouds keep to */
  sizeDeg: number
  /** Tilt of the magnetic axis away from the spin axis (default 0) */
  tiltDeg?: number
  /** Any number; changes the ragged outline */
  seed: number
  /** How fast the outline changes: clouds that come and go (default 0, fixed) */
  drift?: number
}

/** One non-radial pulsation: a pattern of hotter and cooler zones that travels around the star. */
export interface Wave {
  /** Total number of node lines on the surface */
  l: number
  /** How many of those lines run pole to pole; 0 gives bands of latitude */
  m: number
  /** Fractional change in brightness at the crests */
  amplitude: number
  /** Seconds per cycle on screen */
  seconds: number
}

export interface Pulse {
  /** Seconds per cycle on screen (real periods are days to months) */
  seconds: number
  /** Fractional change in radius; negative means the star is smallest when brightest */
  radius: number
  /** Fractional change in brightness */
  brightness: number
  /** 0 is an even rise and fall (default); toward 1 the rise is quick and the fall slow, as in a Cepheid */
  skew?: number
  /** 0 to 1: mixes in slower rhythms so the beat never quite repeats (semi-regular variables) */
  irregular?: number
  /** sRGB hex of the disc centre at minimum light; `color` is then the colour at maximum */
  dimColor?: string
}

/** Glowing gas outside the visible surface: a chromosphere, a corona, or a wind. */
export interface Envelope {
  /** sRGB hex of the glow */
  color: string
  /** Brightness at the limb */
  strength: number
  /** Distance over which it fades, in star radii: 0.04 is a thin rim, 1 is a far-reaching wind */
  reach: number
  /** Number of streamers around the star; 0 is an even glow (default) */
  streaks?: number
  /** Clumps travelling outward, 0 to 1 (default 0) */
  clumps?: number
  /** How fast the clumps travel (default 0.1) */
  speed?: number
}

/** Dust that forms above the surface and hides part of the star. */
export interface Dust {
  /** How much light the thickest dust blocks, 0 to 1 */
  darkness: number
  /** Clumps across the disc: about 1.5 for a few big clouds */
  scale: number
  /** Share of the area covered when the dust is at its thickest, 0 to 1 */
  cover: number
  /** Seconds for the dust to gather, linger and clear; omit for dust that stays */
  seconds?: number
  /** Confine the dust to a patch: its centre and radius, in star radii from the disc centre (y up) */
  patch?: { at: [number, number]; radius: number }
  /** Any number; changes the shape of the clouds */
  seed?: number
}

export interface Ring {
  /** Inner and outer edge, in star radii */
  inner: number
  outer: number
  /** How open the ring looks: 0 is edge-on (a thin line), 1 is face-on (a circle) */
  tilt: number
  /** sRGB hex of the glowing gas or sunlit dust */
  color: string
  brightness: number
  /** How far the ring's centre sits from the star along the ring's long axis, in star radii */
  offset?: number
  /** Edges: 0 fades in and out softly (default), 1 is crisp */
  sharp?: number
  /** A brighter one-armed spiral wave turning within the disc, 0 to 1 */
  arm?: number
  /** A warp: the inner half is tilted against the outer by this many degrees */
  warpDeg?: number
}

export interface Orbit {
  /** Half the long axis of the orbit, in star radii */
  distance: number
  /** Seconds per orbit on screen */
  seconds: number
  /** 90 is seen edge-on, with eclipses; 0 is seen face-on */
  inclinationDeg: number
  /** 0 is a circle (default); toward 1 the orbit is long and narrow, with the star at one focus */
  eccentricity?: number
  /** Direction of closest approach, turned within the orbit's own plane (default 0: to the right) */
  periapsisDeg?: number
  /** Turns the whole orbit anticlockwise on the screen (default 0) */
  nodeDeg?: number
  /** Where along the orbit it starts, as a fraction of one lap (default 0) */
  phase?: number
}

export interface Companion {
  /** sRGB hex of the companion */
  color: string
  /** Radius in units of the main star's radius. About 0.0022 / `look.radius` draws a point with a glow */
  radius: number
  /** Surface brightness relative to the main star (1 = as bright) */
  brightness: number
  /** Strength of the glow around it */
  glare: number
  place:
    | {
        /** Fixed spot in the background, in short-side units from the star's centre (y up) */
        at: [number, number]
      }
    | {
        /** Orbit around the main star, which can eclipse and be eclipsed */
        orbit: Orbit
      }
  /** Light it reflects from the main star, so that it shows phases like a planet (default 0) */
  lit?: number
  /** 1 - short axis / long axis: draws a flat disc seen at a slant in place of a ball */
  flattening?: number
  /** How far it stretches toward the main star, as a star that fills its Roche lobe does */
  tide?: number
  /** A disc of gas circling the companion. Outer edge in companion radii; tilt as for `Ring` */
  disc?: { outer: number; tilt: number; color: string; brightness: number }
  /** A stream of gas crossing between the main star and the companion */
  stream?: { color: string; brightness: number }
  /** Twin jets leaving the companion at right angles to the orbit. Length in star radii */
  jets?: { color: string; brightness: number; length: number }
  /** A curved shock on the side facing the main star, where two winds meet. Gap in companion radii */
  shock?: { color: string; brightness: number; gap: number }
}

/** Gas and dust around the star, drawn behind it. */
export type Nebula =
  | {
      /** Two hollow lobes and a skirt: Eta Carinae's Homunculus */
      kind: 'homunculus'
    }
  | {
      /** A cloud lit or set glowing by the star */
      kind: 'cloud'
      /** sRGB hex near the star, and farther out */
      color: string
      outerColor: string
      brightness: number
      /** Billows across the short side: about 3 for broad clouds, 8 for fine ones */
      scale: number
      /** 0 is billows; toward 1 the cloud is drawn out into parallel streaks */
      streak?: number
      /** Direction of the streaks, anticlockwise from the horizontal */
      angleDeg?: number
      /** Dark dust lanes across the glow, 0 to 1 */
      lanes?: number
      /** How quickly the glow fades away from the star; 0 is an even backdrop */
      falloff?: number
      /** Radius of the cavity the star has blown around itself, in short-side units */
      hollow?: number
    }
  | {
      /** Shells of gas the star has thrown off, drifting outward */
      kind: 'shells'
      color: string
      brightness: number
      /** Gap between shells, in short-side units */
      spacing: number
      /** How fast they move outward, in gaps per second */
      speed: number
    }
  | {
      /** The shock a fast-moving star piles up ahead of itself */
      kind: 'bowshock'
      color: string
      brightness: number
      /** The way the star is heading, anticlockwise from the right */
      angleDeg: number
      /** Distance from the star to the nose of the shock, in short-side units */
      standoff: number
      /** A wake of cast-off gas behind the star: its brightness (0 to 1) and sRGB hex */
      tail?: { brightness: number; color: string }
    }

export interface StarLook {
  /** sRGB hex at the centre of the disc (blackbody colour of the surface temperature) */
  color: string
  /** sRGB hex at the edge, where we see higher, cooler layers */
  limbColor: string
  /** Linear limb-darkening coefficient: 0 is a flat disc; the Sun is about 0.6 */
  limbDarkening: number
  /** How far the centre saturates toward white (default 0.3; less for cool, red stars) */
  whiten?: number
  /** Disc radius as a fraction of the viewport's short side (default DEFAULT_RADIUS) */
  radius?: number
  /** Seconds per on-screen rotation (default 90) */
  spinSeconds?: number
  /** Which way the spin axis points (default: straight up, seen from the side) */
  axis?: {
    /** Lean of the axis on the screen, anticlockwise from straight up */
    rollDeg?: number
    /** Angle between the axis and our line of sight: 90 is equator-on (default), 0 is pole-on */
    inclinationDeg?: number
  }
  /** Surface mottling (default: the faint texture of a smooth, hot star) */
  texture?: SurfaceTexture
  /** A few dark starspots, for stars whose outer layers convect */
  spots?: Starspots
  activity?: Activity
  patches?: Patches
  /** Up to `MAX_WAVES` */
  waves?: Wave[]
  /** Flattening from fast spin: 1 - polar radius / equatorial radius */
  flattening?: number
  /** How much dimmer the equator is than the poles on a fast spinner, 0 to 1 */
  gravityDarkening?: number
  /** sRGB hex of the cooler equator of a fast spinner; `color` is then the colour of the poles */
  equatorColor?: string
  /** How far the star stretches toward its first companion, pulled into an egg or a teardrop */
  tide?: number
  pulse?: Pulse
  /** Edge softness in disc radii, for stars with no sharp surface */
  fuzz?: number
  /** Outline irregularity, for stars with loose, lumpy outer layers */
  wobble?: number
  /** Strength of the glare halo (default 1) */
  glare?: number
  envelope?: Envelope
  dust?: Dust
  /** Up to `MAX_COMPANIONS`. Only the first may carry a `tide`, `disc`, `stream`, `jets` or `shock`. */
  companions?: Companion[]
  /** A disc of gas or dust around the star's equator (it follows `axis.rollDeg`) */
  ring?: Ring
  nebula?: Nebula
}

export interface CloseupStar {
  /** URL-safe key, e.g. 'eta-carinae' */
  id: string
  name: string
  /** Bayer designation, e.g. 'α Canis Majoris' */
  designation: string
  /** Radius in solar radii (the real star's size; the drawn size is `look.radius`) */
  radiusSun: number
  look: StarLook
  /**
   * Narration beats, one idea each: the name and why the star is interesting, then what makes it
   * so, then how it compares with the Sun, then any story worth telling, then similar stars.
   */
  story: readonly string[]
}
