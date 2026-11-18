import type { CloseupStar } from '../star'

/** Figures: Guenther et al. 2000; Hipparcos distance. Its size and mass are rough. */
export const dubhe: CloseupStar = {
  id: 'dubhe',
  name: 'Dubhe',
  designation: 'α Ursae Majoris',
  radiusSun: 17,
  look: {
    color: '#ffd39e', // about 4,650 K
    limbColor: '#df8742',
    limbDarkening: 0.7,
    whiten: 0.1,
    spinSeconds: 500,
    texture: { amplitude: 0.16, scale: 7, speed: 0.05 },
  },
  story: (distance) => [
    `This is Dubhe, from ${distance} away: the star at the lip of the Big Dipper’s bowl.`,
    'A line from Merak, below it, through Dubhe points to Polaris, the North Star. The two are called the Pointers.',
    'It is orange, unlike the Dipper’s other six stars, which are white. It is a giant of about 4,650 K.',
    'A fainter, hotter star circles it every 44 years, too close to show apart here.',
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
