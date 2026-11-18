import type { CloseupStar } from '../star'

/**
 * Figures: Di Folco et al. 2004 (radius); Churcher et al. 2011 (dust, and its tilt); Hipparcos
 * distance. The dust ring really lies some 40 AU out, far beyond this view.
 */
export const denebola: CloseupStar = {
  id: 'denebola',
  name: 'Denebola',
  designation: 'β Leonis',
  radiusSun: 1.73,
  look: {
    color: '#d8e1ff', // about 8,500 K
    limbColor: '#e1e7fb',
    limbDarkening: 0.5,
    radius: 0.15,
    spinSeconds: 18, // about 16 hours in reality
    axis: { rollDeg: -25, inclinationDeg: 55 },
    flattening: 0.1,
    gravityDarkening: 0.16,
    // A Delta Scuti star: quick ripples, drawn far stronger than the real, tiny changes
    waves: [
      { l: 5, m: 5, amplitude: 0.06, seconds: 2.4 },
      { l: 2, m: 1, amplitude: 0.04, seconds: 3.7 },
    ],
    // The ring of cool dust, drawn well over a thousand times too close in
    ring: { inner: 2.2, outer: 2.9, tilt: 0.57, color: '#e9cfae', brightness: 0.18 },
  },
  story: [
    'Denebola is the tail of Leo the Lion. It is a white star ringed by the rubble of comets and asteroids.',
    'The ring is cool dust, like the ones around Vega and Fomalhaut. It hints at a planetary system we cannot see.',
    'It is drawn far closer in than it really is. The real ring lies about as far out as Pluto is from the Sun.',
    'The star spins in well under a day, and bulges slightly at its equator.',
    'It also quivers, about ten times a day. The ripples crossing it are drawn far stronger than they really are.',
    'It is white, half again as hot as the Sun, nearly twice as wide and 15 times as bright.',
    'It is young: under 400 million years old, a tenth of the Sun’s age.',
    'It is 36 light-years away, one of the nearer bright stars. With Arcturus and Spica it forms the Spring Triangle.',
    'Its name is short for the Arabic for “the tail of the lion”.',
    'More stars with dust rings: Vega, Fomalhaut and Beta Pictoris.',
  ],
}
