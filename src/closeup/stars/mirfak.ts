import type { CloseupStar } from '../star'

/**
 * Figures: Lyubimkov et al. 2010; Hipparcos distance; cluster age about 50 to 70 million years.
 * The points are a few stars of its cluster, light-years away in reality.
 */
export const mirfak: CloseupStar = {
  id: 'mirfak',
  name: 'Mirfak',
  designation: 'α Persei',
  radiusSun: 68,
  look: {
    color: '#fcf6ee', // about 6,350 K
    limbColor: '#f2d2a4',
    limbDarkening: 0.6,
    radius: 0.22,
    spinSeconds: 400,
    axis: { rollDeg: 14 },
    texture: { amplitude: 0.1, scale: 12, speed: 0.06, cells: 0.5 },
    glare: 1.25,
    // A few of the hot blue-white stars of its cluster, trailing off to one side as they do in the sky
    companions: [
      { color: '#b9caff', radius: 0.01, brightness: 1, glare: 0.42, place: { at: [0.3, 0.3] } }, // δ Persei
      { color: '#c2d1ff', radius: 0.01, brightness: 1, glare: 0.24, place: { at: [0.4, 0.1] } }, // ψ Persei
      { color: '#b4c6ff', radius: 0.01, brightness: 1, glare: 0.3, place: { at: [0.36, -0.13] } }, // 34 Persei
      { color: '#bccdff', radius: 0.01, brightness: 1, glare: 0.18, place: { at: [-0.38, 0.26] } }, // 29 Persei
    ],
  },
  story: (distance) => [
    `This is Mirfak, the brightest star of Perseus, from ${distance} away.`,
    'It is yellow-white: about 6,350 K, a little hotter than the Sun. But it is a supergiant.',
    'Size: about 68 times as wide as the Sun and over 8 times as heavy. It gives off some 5,000 times as much light.',
    'It does not sit alone. It is the brightest member of a loose cluster of stars that were all born together.',
    'The blue-white points here are a few of its brighter members, drawn far closer than they are. Really they lie light-years apart.',
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
