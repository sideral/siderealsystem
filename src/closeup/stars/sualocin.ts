import type { CloseupStar } from '../star'

/** Figures: Hipparcos distance; standard B9 IV values. Names: Piazzi's Palermo Catalogue (1814); Webb 1859. */
export const sualocin: CloseupStar = {
  id: 'sualocin',
  name: 'Sualocin',
  designation: 'α Delphini',
  radiusSun: 3.9,
  look: {
    color: '#c4d3ff', // about 11,000 K
    limbColor: '#d1dbfd',
    limbDarkening: 0.43,
    spinSeconds: 24,
    flattening: 0.06,
    gravityDarkening: 0.1,
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
    'Size: about 4 times as wide as the Sun and nearly 3 times as heavy. It gives off some 200 times as much light.',
    'A smaller star circles it every 17 years.',
    'Type: B9 IV. “B” is a hot blue-white star. “IV” means it is starting to leave its prime.',
    'Estimated age: about 230 million years.',
    'It is about 250 light-years away. The diamond of four stars it belongs to is also called Job’s Coffin.',
  ],
}
