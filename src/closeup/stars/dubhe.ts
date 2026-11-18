import type { CloseupStar } from '../star'

/**
 * Figures: Guenther et al. 2000; Hipparcos distance. Its size and mass are rough. The white point
 * is Dubhe B, drawn hundreds of times closer in than its true distance of about 23 AU.
 */
export const dubhe: CloseupStar = {
  id: 'dubhe',
  name: 'Dubhe',
  designation: 'α Ursae Majoris',
  radiusSun: 17,
  look: {
    color: '#ffd49c', // about 4,650 K
    limbColor: '#df8640',
    limbDarkening: 0.7,
    whiten: 0.12,
    radius: 0.2,
    spinSeconds: 500,
    axis: { rollDeg: -15 },
    texture: { amplitude: 0.2, scale: 8.5, speed: 0.05, cells: 0.65 },
    companions: [
      {
        color: '#f3f1ff', // Dubhe B, a hotter white star, on its stretched 44-year orbit
        radius: 0.011,
        brightness: 1,
        glare: 0.4,
        place: { orbit: { distance: 1.65, seconds: 44, inclinationDeg: 35, eccentricity: 0.3, nodeDeg: -20 } },
      },
    ],
  },
  story: (distance) => [
    `This is Dubhe, from ${distance} away: the star at the lip of the Big Dipper’s bowl.`,
    'A line from Merak, below it, through Dubhe points to Polaris, the North Star. The two are called the Pointers.',
    'It is orange, unlike the Dipper’s other six stars, which are white. It is a giant of about 4,650 K.',
    'The white point is a fainter, hotter star that circles it every 44 years. It is drawn far closer in than true.',
    'Size: about 17 times as wide as the Sun and 3 or 4 times as heavy. It gives off around 300 times as much light.',
    'Type: K0 III. “K” is an orange star. “III” marks a giant that has used up the hydrogen in its core.',
    'Estimated age: about 300 million years.',
    'It is 123 light-years away.',
    'Five of the Dipper’s stars travel through space together. Dubhe and Alkaid, at the two ends, are going another way.',
    'So the Dipper is slowly bending out of shape. In 50,000 years it will no longer look like one.',
    'Its name is short for the Arabic for “the back of the Greater Bear”.',
    'In China it is the Celestial Pivot, first of the seven stars of the Northern Dipper.',
    'For the Navajo the Dipper is the Revolving Male, a father who circles the North Star, the central fire.',
  ],
}
