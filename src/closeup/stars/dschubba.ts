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
  story: [
    'Dschubba was an ordinary, steady star for all of recorded history. In June 2000 it began to brighten.',
    'An amateur astronomer in Argentina, Sebastián Otero, noticed first. Within three years it had nearly doubled in brightness.',
    'It had started throwing gas off its fast-spinning equator. The gas settled into the glowing pink disc you see here.',
    'It has stayed brighter ever since, rising and dipping. It changed the look of Scorpius.',
    'A smaller star circles it on a long, stretched orbit. It swings in close every 11 years. Its passes stir up the disc.',
    'The brighter arm in the disc is the wave it raises.',
    'Here that star is drawn far closer in than it really is, on a rounder orbit, and sped up.',
    'Dschubba itself is blue-white and nearly five times as hot as the Sun. It gives off the light of tens of thousands of Suns.',
    'It is about 10 million years old, and heavy enough to end as a supernova.',
    'It is about 440 light-years away. Its name is from the Arabic for “the forehead”: the forehead of the Scorpion.',
    'More stars shedding a disc: Gamma Cassiopeiae and Achernar. Its neighbours in Scorpius: Antares and Shaula.',
  ],
}
