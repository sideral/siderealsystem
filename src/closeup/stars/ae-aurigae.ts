import type { CloseupStar } from '../star'

/**
 * Figures: Blaauw & Morgan 1954 (the runaways); Hoogerwerf et al. 2001 (the encounter, about 2.5 million years ago).
 * The cloud is the Flaming Star Nebula (IC 405), which the star is passing through and lighting up.
 */
export const aeAurigae: CloseupStar = {
  id: 'ae-aurigae',
  name: 'AE Aurigae',
  designation: 'HR 1712',
  radiusSun: 7.5,
  look: {
    color: '#a4bbff', // about 33,000 K
    limbColor: '#b7c8fd',
    limbDarkening: 0.3,
    whiten: 0.48,
    radius: 0.17,
    spinSeconds: 110,
    axis: { rollDeg: 25 },
    glare: 1.5,
    // The Flaming Star Nebula: dust near the star scatters its blue light; hydrogen farther out glows red
    nebula: { kind: 'cloud', color: '#6f9cff', outerColor: '#ff4d5e', brightness: 0.28, scale: 4.2, streak: 0.55, angleDeg: 120, lanes: 0.55, falloff: 0.5 },
  },
  story: (distance) => [
    `This is AE Aurigae, seen through a dark filter from ${distance} away. It is a runaway star.`,
    'It is crossing the sky at about 100 km/s, far faster than its neighbours. Trace its path back and it leads to Orion.',
    'Another star, Mu Columbae, is fleeing Orion at the same speed in exactly the opposite direction.',
    'About 2.5 million years ago, two pairs of stars met in a young cluster near what is now the Orion Nebula.',
    'In the tangle they swapped partners. Two stars were flung out in opposite directions. The other two stayed, bound more tightly.',
    'Those two are still there: the double star Iota Orionis, at the tip of Orion’s sword.',
    'AE Aurigae is now in the next constellation but one, more than 40 degrees from where it started.',
    'It is blue and very hot: about 33,000 K, nearly six times the Sun’s temperature.',
    'Size: about 7.5 times as wide as the Sun and 23 times as heavy. It gives off tens of thousands of times as much light.',
    'Type: O9.5 V. “O” is the hottest and rarest class. “V” means it is in its prime.',
    'Estimated age: a few million years.',
    'It is about 1,300 light-years away, at the very limit of naked-eye sight.',
    'It is now passing a cloud of gas and dust and lighting it up. Astronomers call it the Flaming Star Nebula.',
    'That is the cloud behind it here. Dust near the star scatters its blue light, and hydrogen farther out glows red.',
  ],
}
