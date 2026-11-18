import type { CloseupStar } from '../star'

/**
 * Figures: Kochukhov et al. 2007 (drifting mercury clouds); Pourbaix 2000 (orbit).
 * The faint patches drawn stand for the mercury clouds.
 */
export const alpheratz: CloseupStar = {
  id: 'alpheratz',
  name: 'Alpheratz',
  designation: 'α Andromedae',
  radiusSun: 2.7,
  look: {
    color: '#bdcfff', // about 13,800 K
    limbColor: '#cbd7fd',
    limbDarkening: 0.4,
    spinSeconds: 60, // 2.4 days in reality
    spots: { darkness: 0.16, size: 0.2, seed: 83 },
  },
  story: (distance) => [
    `This is Alpheratz, from ${distance} away. It marks the head of Andromeda and one corner of the Great Square of Pegasus.`,
    'For centuries it belonged to both constellations at once. In 1930 astronomers drew firm borders, and it went to Andromeda.',
    'It is blue-white: about 13,800 K, with a calm, smooth surface.',
    'In that calm, the star’s own light pushes some heavy elements upward. Its surface has many thousands of times the Sun’s share of mercury.',
    'The mercury gathers in clouds, and the clouds drift. Astronomers have watched the pattern change over years: weather on a star.',
    'The faint patches drawn here stand for those clouds.',
    'Size: about 2.7 times as wide as the Sun and 3.8 times as heavy. It gives off around 240 times as much light.',
    'A smaller star circles it every 97 days.',
    'Type: B8 IV. “B” is a hot blue-white star. It is the brightest known star of its mercury-and-manganese kind.',
    'Estimated age: about 60 million years.',
    'It is 97 light-years away.',
    'Its name is from the Arabic for “the navel of the horse”: Pegasus.',
    'Stargazers start here and hop along Andromeda’s stars to find the Andromeda Galaxy, the farthest thing the eye can see.',
  ],
}
