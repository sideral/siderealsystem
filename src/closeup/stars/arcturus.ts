import type { CloseupStar } from '../star'

/**
 * Figures: Ramírez & Allende Prieto 2011. Inuit: MacDonald, "The Arctic Sky" (1998). Boorong: Stanbridge (1857).
 * The faint ripples stand for its Sun-like oscillations, which take days; they are drawn stronger than true.
 */
export const arcturus: CloseupStar = {
  id: 'arcturus',
  name: 'Arcturus',
  designation: 'α Boötis',
  radiusSun: 25.4,
  look: {
    color: '#ffca8c', // 4,290 K
    limbColor: '#d6722a',
    limbDarkening: 0.74,
    whiten: 0.1,
    spinSeconds: 500,
    axis: { rollDeg: 14, inclinationDeg: 60 },
    texture: { amplitude: 0.24, scale: 7, speed: 0.045, cells: 0.6 },
    // It rings like the Sun, only slower: faint ripples that take days to cross it. Exaggerated here.
    waves: [
      { l: 3, m: 2, amplitude: 0.04, seconds: 11 },
      { l: 2, m: 0, amplitude: 0.03, seconds: 7 },
    ],
    envelope: { color: '#ff6f7d', strength: 0.18, reach: 0.035 }, // the chromosphere: a thin rosy rim
  },
  story: (distance) => [
    `This is Arcturus, the brightest star of the northern sky, seen through a dark filter from ${distance} away.`,
    'It glows a warm orange because its surface is about 4,290 K, some 1,500 K cooler than the Sun.',
    'Its outer layers churn in broad, slow cells, and its edge is much dimmer and redder than its centre.',
    'The thin rosy rim is its chromosphere, a layer of hotter gas just above the surface. The Sun has one too.',
    'Size: 25 times as wide as the Sun, yet barely heavier. It gives off about 170 times as much light.',
    'Type: K1.5 III. “K” is an orange star. “III” marks a giant: a star that has run out of hydrogen in its core and swollen.',
    'Estimated age: about 7 billion years, older than the Sun. This is roughly how the Sun will look in 5 billion years.',
    'It is 37 light-years away, and it is not from around here. It cuts across the galaxy’s disc at 120 km/s.',
    'It travels with a stream of other old stars, which may be the remains of a small galaxy the Milky Way swallowed.',
    'In 1933 its light, caught by a telescope and turned into an electric signal, switched on the Chicago World’s Fair.',
    'Its name is Greek for “guardian of the bear”: it follows the Great Bear around the pole.',
    'In Hawai‘i it is Hōkūle‘a, the Star of Gladness. It passes straight overhead there, so navigators used it to find the islands.',
    'Inuit know it as Uttuqalualuk, the Old Man. Its place in the sky told them the hour in the long winter dark.',
    'The Boorong people of Australia called it Marpeankurrk. When she stood in the north, it was time to gather ant larvae.',
    'In China it is the Great Horn, the horn of the Azure Dragon of spring.',
  ],
}
