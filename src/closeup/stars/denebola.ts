import type { CloseupStar } from '../star'

/** Figures: Di Folco et al. 2004 (radius); Churcher et al. 2011 (dust); Hipparcos distance. */
export const denebola: CloseupStar = {
  id: 'denebola',
  name: 'Denebola',
  designation: 'β Leonis',
  radiusSun: 1.73,
  look: {
    color: '#d8e1ff', // about 8,500 K
    limbColor: '#e1e7fb',
    limbDarkening: 0.5,
    spinSeconds: 18, // about 16 hours in reality
    flattening: 0.07,
    gravityDarkening: 0.12,
    pulse: { seconds: 4, radius: 0.002, brightness: 0.015 },
  },
  story: (distance) => [
    `This is Denebola, the tail of Leo the Lion, from ${distance} away.`,
    'It is white: about 8,500 K, hotter than the Sun, with a smooth surface.',
    'It spins in well under a day, and bulges slightly at its equator.',
    'It also quivers. Its brightness flickers by a tiny amount about ten times a day.',
    'Size: about 1.7 times as wide as the Sun and 1.8 times as heavy. It gives off around 15 times as much light.',
    'Type: A3 V. “A” is a white star, hotter than the Sun. “V” means it is in its prime, fusing hydrogen.',
    'Estimated age: under 400 million years.',
    'It is 36 light-years away, one of the nearer bright stars.',
    'It is circled by a ring of cool dust, like the ones around Vega and Fomalhaut: the rubble of asteroids and comets.',
    'With Arcturus and Spica it forms the Spring Triangle.',
    'Its name is short for the Arabic for “the tail of the lion”.',
    'In China it is the first star of the Seat of the Five Emperors.',
  ],
}
