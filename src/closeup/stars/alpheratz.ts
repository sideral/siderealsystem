import type { CloseupStar } from '../star'

/**
 * Figures: Kochukhov et al. 2007 (drifting mercury clouds); Pourbaix 2000 (orbit).
 * The pale patches drawn stand for the mercury clouds. The point is its companion, on an orbit
 * drawn about 30 times too small.
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
    radius: 0.18,
    spinSeconds: 60, // 2.4 days in reality
    axis: { rollDeg: -15, inclinationDeg: 75 },
    // Clouds of mercury, which keep near the equator and slowly change shape
    patches: { shape: 'clouds', color: '#e3e6ee', strength: 0.55, sizeDeg: 30, seed: 83, drift: 0.02 },
    companions: [
      {
        color: '#dbe4ff', // about 8,500 K
        radius: 0.012,
        brightness: 1,
        glare: 0.25,
        // 97 days in reality, on a still more stretched orbit about 30 times as wide
        place: { orbit: { distance: 1.9, seconds: 80, inclinationDeg: 42, eccentricity: 0.3, periapsisDeg: 200, nodeDeg: 30, phase: 0.4 } },
      },
    ],
  },
  story: (distance) => [
    `This is Alpheratz, from ${distance} away. It marks the head of Andromeda and one corner of the Great Square of Pegasus.`,
    'For centuries it belonged to both constellations at once. In 1930 astronomers drew firm borders, and it went to Andromeda.',
    'It is blue-white: about 13,800 K, with a calm, smooth surface.',
    'In that calm, the star’s own light pushes some heavy elements upward. Its surface has many thousands of times the Sun’s share of mercury.',
    'The mercury gathers in clouds, and the clouds drift. Astronomers have watched the pattern change over years: weather on a star.',
    'The pale patches drawn here stand for those clouds. Watch a while and they slowly change shape.',
    'Size: about 2.7 times as wide as the Sun and 3.8 times as heavy. It gives off around 240 times as much light.',
    'A smaller star circles it every 97 days, on a stretched orbit. It is the bright point, drawn far closer in than it is.',
    'Type: B8 IV. “B” is a hot blue-white star. It is the brightest known star of its mercury-and-manganese kind.',
    'Estimated age: about 60 million years.',
    'It is 97 light-years away.',
    'Its name is from the Arabic for “the navel of the horse”: Pegasus.',
    'Stargazers start here and hop along Andromeda’s stars to find the Andromeda Galaxy, the farthest thing the eye can see.',
  ],
}
