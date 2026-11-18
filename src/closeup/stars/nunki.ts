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
    spinSeconds: 18,
    axis: { rollDeg: 28, inclinationDeg: 72 },
    flattening: 0.07,
    gravityDarkening: 0.2,
    glare: 1.25,
  },
  story: [
    'Nunki may carry the oldest star name still in use.',
    'It comes from a Babylonian list of thirty stars, pressed into a clay tablet.',
    'There it was the star of Eridu, a holy city by the sea. Scholars deciphered the name in the 19th century, and it stuck.',
    'The star is blue-white and more than three times as hot as the Sun.',
    'It spins fast: its equator moves about 80 times faster than the Sun’s. The spin flattens it a little.',
    'It is about four and a half times as wide as the Sun, and as bright as some 3,000 Suns.',
    'It is about 230 light-years away, in the handle of the Teapot of Sagittarius.',
    'It lies near the path of the Moon and planets. Now and then one passes in front of it. Venus hid it in November 1981.',
    'In China it belongs to the Southern Dipper. This small ladle of six stars mirrors the Big Dipper in the north.',
    'More hot blue stars in their prime: Alkaid, Peacock and Regulus. Another star with an odd name: Sualocin.',
  ],
}
