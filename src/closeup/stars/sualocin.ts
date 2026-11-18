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
  story: [
    'Sualocin has a name that is a practical joke, and it lasted two hundred years.',
    'In 1814 the Palermo star catalogue gave two stars in Delphinus new names. They were Sualocin and Rotanev.',
    'Nobody could say what language they were. They sounded old, and other star maps copied them.',
    'Decades later the English astronomer Thomas Webb read them backwards: Nicolaus Venator.',
    'That is Latin for Niccolò Cacciatore, the observatory’s assistant astronomer. He had quietly named two stars after himself.',
    'In 2016 astronomers made both names official.',
    'The star is blue-white and nearly twice as hot as the Sun. It is four times as wide, and as bright as 200 Suns.',
    'It spins fast enough to flatten itself a little. The equator bulges out and runs slightly cooler than the poles.',
    'A smaller star circles it every 17 years. It is the point going around it here, drawn far closer in than it really is.',
    'It lies about 250 light-years away. It is the brightest star in the small diamond of Delphinus the Dolphin.',
    'More stars with odd names: Peacock, Nunki and Albireo.',
  ],
}
