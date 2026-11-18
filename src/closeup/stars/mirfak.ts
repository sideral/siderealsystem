import type { CloseupStar } from '../star'

/** Figures: Lyubimkov et al. 2010; Hipparcos distance; cluster age about 50 to 70 million years. */
export const mirfak: CloseupStar = {
  id: 'mirfak',
  name: 'Mirfak',
  designation: 'α Persei',
  radiusSun: 68,
  look: {
    color: '#fcf6ee', // about 6,350 K
    limbColor: '#f2d2a4',
    limbDarkening: 0.6,
    spinSeconds: 400,
    texture: { amplitude: 0.1, scale: 11, speed: 0.07 },
    glare: 1.2,
  },
  story: (distance) => [
    `This is Mirfak, the brightest star of Perseus, from ${distance} away.`,
    'It is yellow-white: about 6,350 K, a little hotter than the Sun. But it is a supergiant.',
    'Size: about 68 times as wide as the Sun and over 8 times as heavy. It gives off some 5,000 times as much light.',
    'It does not sit alone. It is the brightest member of a loose cluster of stars that were all born together.',
    'On a dark night the cluster shows to the naked eye as a sprinkle of faint stars around it. Binoculars show dozens.',
    'Type: F5 Ib. “F” is a yellow-white star. “Ib” marks a supergiant.',
    'Estimated age: about 50 million years, like the rest of its cluster.',
    'The others are still in their prime. Mirfak, the heaviest, used up its core hydrogen first and swelled.',
    'It is about 510 light-years away.',
    'It is close to the range where stars like this start to pulse, as Delta Cephei does. But it holds steady.',
    'Its name is Arabic for “the elbow”. Its other name, Algenib, means “the side”.',
    'For much of Europe and North America it never sets. It circles the pole all night.',
  ],
}
