/**
 * What a close-up star is made of: how it is drawn (`StarLook`) and the story told under it.
 * The look is a set of physical knobs, not artwork: colour from temperature, limb darkening,
 * surface texture from convection, flattening from spin, and so on.
 */

export const RSUN_KM = 695_700

/** Default on-screen disc radius, as a fraction of the viewport's short side. */
export const DEFAULT_RADIUS = 0.26

/** Field of view assumed when saying how far away the viewer is. */
const FIELD_OF_VIEW_DEG = 60

export interface SurfaceTexture {
  /** Contrast of the mottling: 0.05 is barely visible, 0.5 is a boiling red supergiant */
  amplitude: number
  /** Cells across the disc: about 2 for a few giant cells, 20 for fine Sun-like grain */
  scale: number
  /** How fast the pattern churns */
  speed: number
}

export interface Starspots {
  /** How dark the spots are, 0 to 1 */
  darkness: number
  /** Typical spot radius, as a fraction of the star's radius */
  size: number
  /** Any number; changes where the spots sit so two stars don't share a pattern */
  seed: number
}

export interface Pulse {
  /** Seconds per cycle on screen (real periods are days to months) */
  seconds: number
  /** Fractional change in radius; negative means the star is smallest when brightest */
  radius: number
  /** Fractional change in brightness */
  brightness: number
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
}

export interface Companion {
  /** sRGB hex of the companion */
  color: string
  /** Radius in units of the main star's radius; tiny values draw a point with a glow */
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
        /** Circular orbit around the main star, which can eclipse and be eclipsed */
        orbit: { distance: number; seconds: number; inclinationDeg: number }
      }
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
  /** Surface mottling (default: the faint texture of a smooth, hot star) */
  texture?: SurfaceTexture
  /** A few dark starspots, for stars whose outer layers convect */
  spots?: Starspots
  /** Flattening from fast spin: 1 - polar radius / equatorial radius */
  flattening?: number
  /** How much dimmer the equator is than the poles on a fast spinner, 0 to 1 */
  gravityDarkening?: number
  pulse?: Pulse
  /** Edge softness in disc radii, for stars with no sharp surface */
  fuzz?: number
  /** Outline irregularity, for stars with loose, lumpy outer layers */
  wobble?: number
  /** Strength of the glare halo (default 1) */
  glare?: number
  companion?: Companion
  /** A disc of gas or dust around the star's equator */
  ring?: Ring
  /** Draw a two-lobed dust nebula around the star (Eta Carinae's Homunculus) */
  nebula?: boolean
}

export interface CloseupStar {
  /** URL-safe key, e.g. 'eta-carinae' */
  id: string
  name: string
  /** Bayer designation, e.g. 'α Canis Majoris' */
  designation: string
  /** Radius in solar radii; sets how far away the viewpoint is */
  radiusSun: number
  look: StarLook
  /** Narration beats, one idea each. `distance` reads like "about 4.1 million km". */
  story: (distance: string) => string[]
}

/** How far away you would be for a star to appear with the given on-screen radius. */
export function viewDistanceKm(radiusSun: number, screenRadius = DEFAULT_RADIUS): number {
  const halfAngle = Math.atan(2 * screenRadius * Math.tan((FIELD_OF_VIEW_DEG / 2) * (Math.PI / 180)))
  return (radiusSun * RSUN_KM) / Math.sin(halfAngle)
}

/** A distance in plain words, to two significant figures: "about 4.1 million km". */
export function describeDistance(km: number): string {
  const [value, unit] = km >= 1e9 ? [km / 1e9, 'billion'] : [km / 1e6, 'million']
  return `about ${Number(value.toPrecision(2))} ${unit} km`
}
