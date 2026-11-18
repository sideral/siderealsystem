import type { CloseupStar } from '../star'

/**
 * Figures: Otero, Fraser & Lloyd 2001 (the outburst); Tango et al. 2009 (10.8-year orbit).
 * Distance is uncertain: about 440 light-years. The partner is drawn far closer in than it is,
 * on a less stretched orbit than the real one (e = 0.94), so that it stays on the screen.
 */
export const dschubba: CloseupStar = {
  id: 'dschubba',
  name: 'Dschubba',
  designation: 'δ Scorpii',
  radiusSun: 6.7,
  look: {
    color: '#a9bfff', // about 27,400 K
    limbColor: '#bbcbfd',
    limbDarkening: 0.32,
    whiten: 0.42,
    radius: 0.1,
    spinSeconds: 12,
    axis: { rollDeg: 15, inclinationDeg: 41 },
    flattening: 0.1,
    gravityDarkening: 0.2,
    glare: 1.3,
    // The disc it began throwing off in 2000, seen fairly open. The arm is the wave its partner stirs up
    ring: { inner: 1.05, outer: 3.3, tilt: 0.75, color: '#ff9fc2', brightness: 0.36, arm: 0.8 },
    companions: [
      {
        color: '#b3c6ff', // about 20,000 K
        radius: 0.3,
        brightness: 0.85,
        glare: 0.2,
        place: { orbit: { distance: 2.85, seconds: 26, inclinationDeg: 41, eccentricity: 0.5, nodeDeg: 15 } },
      },
    ],
  },
  story: (distance) => [
    `This is Dschubba, the forehead of the Scorpion, seen through a dark filter from ${distance} away.`,
    'For all of recorded history it was an ordinary, steady star. In June 2000 it began to brighten.',
    'An amateur astronomer in Argentina, Sebastián Otero, noticed first. Within three years it had nearly doubled in brightness.',
    'It had started throwing gas off its fast-spinning equator. The gas settled into the glowing disc you see here.',
    'It has stayed brighter ever since, rising and dipping. It changed the look of Scorpius.',
    'The disc is hot hydrogen, which glows pink.',
    'The star itself is blue-white: about 27,000 K, nearly five times the Sun’s temperature.',
    'Size: about 6.7 times as wide as the Sun and 13 times as heavy. It gives off tens of thousands of times as much light.',
    'A smaller star circles it on a long, stretched orbit, swinging in close every 10.8 years. Its passes stir up the disc.',
    'Here that star is drawn far closer in than it is, and its orbit is sped up to seconds.',
    'Type: B0.3 IV. “B” is a hot blue-white star. “IV” means it is starting to leave its prime.',
    'Estimated age: about 10 million years. It is heavy enough to end as a supernova.',
    'It is about 440 light-years away. Its name is from the Arabic for “the forehead”.',
  ],
}
