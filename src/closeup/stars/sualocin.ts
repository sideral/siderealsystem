import type { CloseupStar } from '../star'

/**
 * Figures: Hipparcos distance; standard B9 IV values. Names: Piazzi's Palermo Catalogue (1814); Webb 1859.
 * The 17-year companion is a point, drawn far closer in than it is and on a rounder orbit.
 */
export const sualocin: CloseupStar = {
  id: 'sualocin',
  name: 'Sualocin',
  designation: 'α Delphini',
  radiusSun: 3.9,
  look: {
    color: '#c4d3ff', // about 11,000 K
    limbColor: '#d1dbfd',
    limbDarkening: 0.43,
    radius: 0.13,
    spinSeconds: 20,
    axis: { rollDeg: -32 },
    flattening: 0.09,
    gravityDarkening: 0.2,
    equatorColor: '#d2ddff', // a little cooler than the poles
    glare: 1.1,
    companions: [
      {
        color: '#e3e9ff',
        radius: 0.017,
        brightness: 1,
        glare: 0.25,
        place: { orbit: { distance: 2.85, seconds: 34, inclinationDeg: 48, eccentricity: 0.2, periapsisDeg: 200, nodeDeg: 25 } },
      },
    ],
  },
  story: (distance) => [
    `This is Sualocin, the brightest star in the small diamond of Delphinus the Dolphin, from ${distance} away.`,
    'Its name is a practical joke that lasted two hundred years.',
    'In 1814 the star catalogue of Palermo Observatory gave two stars in Delphinus new names: Sualocin and Rotanev.',
    'Nobody could say what language they were. They sounded old, and other star maps copied them.',
    'Decades later the English astronomer Thomas Webb read them backwards: Nicolaus Venator.',
    'That is Latin for Niccolò Cacciatore, the observatory’s assistant astronomer. He had quietly named two stars after himself.',
    'In 2016 astronomers made both names official.',
    'The star is blue-white: about 11,000 K, nearly twice the Sun’s temperature.',
    'It spins fast enough to flatten itself a little. The equator bulges out and runs slightly cooler than the poles.',
    'Size: about 4 times as wide as the Sun and nearly 3 times as heavy. It gives off some 200 times as much light.',
    'A smaller star circles it every 17 years: the point of light going around it here, drawn far closer in than it is.',
    'Type: B9 IV. “B” is a hot blue-white star. “IV” means it is starting to leave its prime.',
    'Estimated age: about 230 million years.',
    'It is about 250 light-years away. The diamond of four stars it belongs to is also called Job’s Coffin.',
  ],
}
