import type { CloseupStar } from '../star'

/** Figures: Hipparcos distance; standard B2.5 V values. Name: Allen 1899, from the Babylonian Tablet of the Thirty Stars. */
export const nunki: CloseupStar = {
  id: 'nunki',
  name: 'Nunki',
  designation: 'σ Sagittarii',
  radiusSun: 4.5,
  look: {
    color: '#b4c7ff', // about 18,900 K
    limbColor: '#c3d0fd',
    limbDarkening: 0.36,
    whiten: 0.38,
    spinSeconds: 28,
    flattening: 0.05,
    glare: 1.2,
  },
  story: (distance) => [
    `This is Nunki, in the handle of the Teapot of Sagittarius, seen through a dark filter from ${distance} away.`,
    'Its name may be the oldest star name still in use. It comes from a Babylonian list of thirty stars, pressed into a clay tablet.',
    'There it was the star of Eridu, a holy city by the sea. Scholars deciphered the name in the 19th century, and it stuck.',
    'It is blue-white and hot: about 18,900 K, more than three times the Sun’s temperature.',
    'It spins fast, at 165 km/s or more at its equator. The Sun turns at 2.',
    'Size: about 4.5 times as wide as the Sun and nearly 8 times as heavy. It gives off some 3,300 times as much light.',
    'Type: B2.5 V. “B” is a hot blue-white star. “V” means it is in its prime, fusing hydrogen.',
    'Estimated age: about 30 million years.',
    'It is 228 light-years away, and the second-brightest star in Sagittarius.',
    'It lies near the path of the Moon and planets, so now and then one passes in front of it. Venus hid it in November 1981.',
    'In China it belongs to the Southern Dipper, a small ladle of six stars that mirrors the Big Dipper in the north.',
  ],
}
