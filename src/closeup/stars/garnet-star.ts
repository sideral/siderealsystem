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
  story: [
    'The Garnet Star is one of the largest stars you can see without a telescope. It is also one of the reddest.',
    'Placed where the Sun is, it would swallow Mercury, Venus, Earth and Mars. It would reach nearly to Jupiter.',
    'William Herschel gave it its name in 1783. He wrote that it was “a very fine deep garnet colour”.',
    'It is red because it is cool, a third cooler than the Sun. It looks redder still because it is wrapped in its own dust.',
    'Its surface boils in a few gigantic cells. Its edge fades into thin gas with no clear boundary.',
    'It is shedding its outer layers. The arcs around it are shells of dust and water vapour. They are drawn closer in than they really are.',
    'It brightens and fades irregularly, over two to three years and again over twelve.',
    'It gives off a few hundred thousand times the Sun’s light, and weighs about 20 Suns.',
    'It is only about 10 million years old, and already close to its end. It will explode as a supernova.',
    'It is roughly 3,000 light-years away, in Cepheus. Its other name is Mu Cephei.',
    'More red supergiants: Betelgeuse, Antares and VV Cephei.',
  ],
}
