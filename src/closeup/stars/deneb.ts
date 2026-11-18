import type { CloseupStar } from '../star'

/** Figures: Schiller & Przybilla 2008. Its distance, and so its size and power, are uncertain by almost a factor of two. */
export const deneb: CloseupStar = {
  id: 'deneb',
  name: 'Deneb',
  designation: 'α Cygni',
  radiusSun: 200,
  look: {
    color: '#d9e2ff', // 8,500 K
    limbColor: '#e2e7fb',
    limbDarkening: 0.45,
    whiten: 0.35,
    spinSeconds: 600,
    axis: { rollDeg: 18, inclinationDeg: 70 },
    texture: { amplitude: 0.04, scale: 4, speed: 0.02 },
    // The quiver of an Alpha Cygni variable: slow waves crossing the surface, drawn far stronger than true
    waves: [
      { l: 3, m: 2, amplitude: 0.07, seconds: 14 },
      { l: 2, m: 0, amplitude: 0.05, seconds: 23 },
    ],
    pulse: { seconds: 13, radius: 0.004, brightness: 0.03, irregular: 0.5 },
    fuzz: 0.02, // the wind softens the edge
    glare: 1.3,
    envelope: { color: '#b4c8ff', strength: 0.2, reach: 0.3, streaks: 2, clumps: 0.3, speed: 0.1 }, // a steady wind
  },
  story: (distance) => [
    `This is Deneb, the tail of the Swan, from ${distance} away. It is the most distant of the sky’s brightest stars.`,
    'It is white: about 8,500 K, much like Sirius. But Sirius is small and near. Deneb is enormous and far.',
    'Its surface is smooth, it blows a steady wind, and the whole star quivers slightly over days and weeks.',
    'The slow patches of light and shade crossing it show that quiver. They are drawn far stronger than the real thing.',
    'It is so far that its distance is hard to measure: somewhere between 1,400 and 2,600 light-years.',
    'So its size is uncertain too: 100 to 200 times as wide as the Sun. It weighs about 19 Suns.',
    'It gives off somewhere between 55,000 and 200,000 times the Sun’s light.',
    'In a single day it sends out more light than the Sun does in 150 years. Placed as close as Sirius, it would cast shadows.',
    'Type: A2 Ia. “A” is a hot white star. “Ia” marks the most luminous kind of supergiant.',
    'Estimated age: about 10 million years. It will end as a supernova.',
    'With Vega and Altair it forms the Summer Triangle, and it marks the top of the Northern Cross.',
    'Earth’s slow wobble will make it the north pole star in about 8,000 years.',
    'Its name is Arabic for “the tail”: the tail of the hen, as Arab astronomers saw the Swan.',
    'In the Chinese tale of the Weaver Girl and the Cowherd, it marks the bridge of magpies across the Milky Way.',
  ],
}
