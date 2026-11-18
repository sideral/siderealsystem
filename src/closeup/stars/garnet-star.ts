import type { CloseupStar } from '../star'

/**
 * Figures: Montargès et al. 2019; Levesque et al. 2005. Its size and distance are uncertain.
 * The shells are drawn close in; the real ones lie much farther out.
 */
export const garnetStar: CloseupStar = {
  id: 'garnet-star',
  name: 'Garnet Star',
  designation: 'μ Cephei',
  radiusSun: 1000,
  look: {
    color: '#f2713e', // about 3,750 K, reddened further by its own dust
    limbColor: '#8c2413',
    limbDarkening: 0.8,
    whiten: 0.03,
    radius: 0.23,
    spinSeconds: 1200,
    axis: { rollDeg: -18 },
    texture: { amplitude: 0.85, scale: 1.4, speed: 0.03, cells: 0.35 },
    pulse: { seconds: 30, radius: 0.025, brightness: 0.14, irregular: 0.5 },
    fuzz: 0.09,
    wobble: 0.11,
    glare: 0.8,
    envelope: { color: '#e0522a', strength: 0.1, reach: 0.3 }, // thin gas with no clear boundary
    // Shells of dust and water vapour it has already thrown off
    nebula: { kind: 'shells', color: '#e0683c', brightness: 0.45, spacing: 0.15, speed: 0.03 },
  },
  story: (distance) => [
    `This is Mu Cephei, the Garnet Star, from ${distance} away. It is one of the largest stars you can see without a telescope.`,
    'Placed where the Sun is, it would swallow Mercury, Venus, Earth and Mars, and reach nearly to Jupiter.',
    'It is a deep orange-red: about 3,750 K, and it looks redder still because it is wrapped in its own dust.',
    'Its surface boils in a few gigantic cells, and its edge fades into thin gas with no clear boundary.',
    'It brightens and fades irregularly, over roughly two and a half years and again over twelve.',
    'Size: around 1,000 times as wide as the Sun, though estimates run from 970 to 1,400. It weighs about 20 Suns.',
    'It gives off a few hundred thousand times the Sun’s light.',
    'Type: M2 Ia. “M” is the coolest, reddest class of star. “Ia” marks the most luminous kind of supergiant.',
    'Estimated age: about 10 million years. It is close to its end and will explode as a supernova.',
    'It is roughly 3,000 light-years away, but that is poorly known.',
    'It is shedding its outer layers. Around it lie shells of dust and water vapour that it has already thrown off.',
    'William Herschel gave it its name in 1783. He wrote that it was “a very fine deep garnet colour”.',
    'Through binoculars it is the reddest bright star in the northern sky.',
  ],
}
