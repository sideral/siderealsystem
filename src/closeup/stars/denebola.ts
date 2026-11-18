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
  story: (distance) => [
    `This is Denebola, the tail of Leo the Lion, from ${distance} away.`,
    'It is white: about 8,500 K, hotter than the Sun, with a smooth surface.',
    'It spins in well under a day, and bulges slightly at its equator.',
    'It also quivers, about ten times a day. The ripples crossing it here are drawn far stronger than the real, tiny changes.',
    'Size: about 1.7 times as wide as the Sun and 1.8 times as heavy. It gives off around 15 times as much light.',
    'Type: A3 V. “A” is a white star, hotter than the Sun. “V” means it is in its prime, fusing hydrogen.',
    'Estimated age: under 400 million years.',
    'It is 36 light-years away, one of the nearer bright stars.',
    'It is circled by a ring of cool dust, like the ones around Vega and Fomalhaut: the rubble of asteroids and comets.',
    'The ring is drawn here far closer in than it really lies: about 40 times as far out as Earth is from the Sun.',
    'With Arcturus and Spica it forms the Spring Triangle.',
    'Its name is short for the Arabic for “the tail of the lion”.',
    'In China it is the first star of the Seat of the Five Emperors.',
  ],
}
