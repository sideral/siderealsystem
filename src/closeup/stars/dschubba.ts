import type { CloseupStar } from '../star'

/**
 * Figures: Otero, Fraser & Lloyd 2001 (the outburst); Tango et al. 2009 (10.8-year orbit).
 * Distance is uncertain: about 440 light-years.
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
    spinSeconds: 22,
    flattening: 0.08,
    gravityDarkening: 0.15,
    glare: 1.3,
    ring: { inner: 1, outer: 3.4, tilt: 0.35, color: '#ffd3e2', brightness: 0.24 },
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
    'Type: B0.3 IV. “B” is a hot blue-white star. “IV” means it is starting to leave its prime.',
    'Estimated age: about 10 million years. It is heavy enough to end as a supernova.',
    'It is about 440 light-years away. Its name is from the Arabic for “the forehead”.',
  ],
}
