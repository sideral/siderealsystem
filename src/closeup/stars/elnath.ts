import type { CloseupStar } from '../star'

/** Figures: Adelman et al. 2006 (chemistry); Hipparcos distance. The violet belt stands for its manganese. */
export const elnath: CloseupStar = {
  id: 'elnath',
  name: 'Elnath',
  designation: 'β Tauri',
  radiusSun: 4.2,
  look: {
    color: '#bbcefe', // about 13,800 K
    limbColor: '#cad6fc',
    limbDarkening: 0.4,
    spinSeconds: 120,
    axis: { rollDeg: 9, inclinationDeg: 68 },
    // Manganese floated to the surface. Where it sits is not known; it is drawn as a faint belt.
    patches: { shape: 'belt', color: '#c9b6f5', strength: 0.4, sizeDeg: 16, seed: 29 },
    glare: 1.1,
  },
  story: (distance) => [
    `This is Elnath, the tip of the Bull’s northern horn, from ${distance} away.`,
    'It is blue-white: about 13,800 K, more than twice the Sun’s temperature. Its surface is calm and smooth.',
    'That calm has an odd effect. With nothing stirring it, some elements float up and others sink.',
    'So its surface shows far more manganese than the Sun’s, and far less calcium and magnesium.',
    'The faint violet belt drawn here stands for that manganese. Where on the star it really sits is not known.',
    'Size: about 4 times as wide as the Sun and 5 times as heavy. It gives off around 700 times as much light.',
    'Type: B7 III. “B” is a hot blue-white star. “III” marks a giant that has used up the hydrogen in its core.',
    'Estimated age: about 100 million years.',
    'It is 134 light-years away, and one of the 30 brightest stars in the night sky.',
    'It sits on a border. Old charts drew it both as the horn of Taurus and as the foot of Auriga, the Charioteer.',
    'It marks a special direction. Look toward Elnath and you are looking almost exactly away from the centre of our galaxy.',
    'That way the Milky Way is at its thinnest: fewer stars, and then the edge.',
    'Its name is Arabic for “the butting one”: the horn.',
  ],
}
