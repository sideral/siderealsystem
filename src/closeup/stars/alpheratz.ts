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
  story: [
    'Alpheratz has weather: clouds of mercury that drift across its face.',
    'Its surface is calm, with nothing to stir it. In that calm, the star’s own light pushes some heavy elements upward.',
    'So its surface holds many thousands of times the Sun’s share of mercury.',
    'The mercury gathers in clouds, and the clouds drift. Astronomers have watched the pattern change over years.',
    'The pale patches drawn here stand for those clouds. Watch a while and they slowly change shape.',
    'A smaller star circles it every 97 days, on a stretched orbit. It is the bright point, drawn far closer in than it really is.',
    'The star is blue-white, more than twice as hot as the Sun, and as bright as 240 Suns. It is just under 100 light-years away.',
    'It marks the head of Andromeda and one corner of the Great Square of Pegasus.',
    'For centuries it belonged to both constellations at once. Its Arabic name still says so: “the navel of the horse”.',
    'In 1930 astronomers drew firm borders, and it went to Andromeda.',
    'Stargazers start here and hop from star to star to the Andromeda Galaxy. It is the farthest thing the eye can see.',
    'More stars with patchy chemistry: Alioth, Cor Caroli and Elnath.',
  ],
}
