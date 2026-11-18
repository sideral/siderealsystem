import type { CloseupStar } from '../star'

/** Figures: Montargès et al. 2019; Levesque et al. 2005. Its size and distance are uncertain. */
export const garnetStar: CloseupStar = {
  id: 'garnet-star',
  name: 'Garnet Star',
  designation: 'μ Cephei',
  radiusSun: 1000,
  look: {
    color: '#ff9a50', // about 3,750 K, reddened further by its own dust
    limbColor: '#b8401a',
    limbDarkening: 0.78,
    whiten: 0.04,
    spinSeconds: 1200,
    texture: { amplitude: 0.8, scale: 1.5, speed: 0.03 },
    pulse: { seconds: 30, radius: 0.02, brightness: 0.12 },
    fuzz: 0.08,
    wobble: 0.1,
    glare: 0.85,
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
