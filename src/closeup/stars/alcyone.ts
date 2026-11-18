import type { CloseupStar } from '../star'

/**
 * Figures: Touhami et al. 2013 (size and disc). Pleiades lore: Momaday, "The Way to Rainy
 * Mountain" (Kiowa); Sahagún (Aztec New Fire); Orlove, Chiang & Cane 2000 (Andean forecasting).
 */
export const alcyone: CloseupStar = {
  id: 'alcyone',
  name: 'Alcyone',
  designation: 'η Tauri',
  radiusSun: 9.3,
  look: {
    color: '#bccdff', // about 12,300 K
    limbColor: '#cad6fd',
    limbDarkening: 0.4,
    spinSeconds: 40,
    flattening: 0.08,
    gravityDarkening: 0.2,
    glare: 1.2,
    ring: { inner: 1.3, outer: 2.4, tilt: 0.3, color: '#ffd9e6', brightness: 0.1 },
  },
  story: (distance) => [
    `This is Alcyone, the brightest star of the Pleiades, seen through a dark filter from ${distance} away.`,
    'It is blue-white: about 12,300 K, twice the Sun’s temperature, with a smooth surface.',
    'It spins fast enough to bulge a little and to shed a thin, faint ring of gas from its equator.',
    'Size: about 9 times as wide as the Sun and 6 times as heavy. It gives off some 2,000 times as much light.',
    'Type: B7 IIIe. “B” is a hot blue-white star, “III” a giant, and “e” marks the glowing gas around it.',
    'Estimated age: about 100 million years, like the rest of the Pleiades. The cluster holds over a thousand stars born together.',
    'It is about 440 light-years away. Most people can see six or seven of its sister stars without a telescope.',
    'In Greek myth the Pleiades are seven sisters chased by Orion. Aboriginal Australian stories tell of sisters and a hunter too.',
    'The Kiowa tell of seven girls chased by a giant bear. The rock they stood on rose to the sky, and they became these stars.',
    'The Aztecs watched the Pleiades cross overhead at midnight once every 52 years, then lit the New Fire to begin time again.',
    'In the Andes, farmers still watch them in June. If they look dim, less rain is coming, and potatoes are planted late.',
    'Scientists checked: high thin cloud in El Niño years does dim them. The forecast works.',
    'For Māori the cluster is Matariki, and its return at dawn begins the new year. In Japan it is Subaru.',
  ],
}
