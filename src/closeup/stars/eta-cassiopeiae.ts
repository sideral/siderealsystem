import type { CloseupStar } from '../star'

/**
 * Figures: Boyajian et al. 2012 (measured radius); 480-year orbit from the Sixth Orbit Catalog.
 * Shows the yellow star, with its orange partner as a point about 70 AU away.
 */
export const etaCassiopeiae: CloseupStar = {
  id: 'eta-cassiopeiae',
  name: 'Eta Cassiopeiae',
  designation: 'Achird',
  radiusSun: 1.04,
  look: {
    color: '#fff2e0', // about 5,970 K
    limbColor: '#f3c78e',
    limbDarkening: 0.6,
    whiten: 0.2,
    spinSeconds: 90,
    texture: { amplitude: 0.07, scale: 18, speed: 0.2 },
    spots: { darkness: 0.5, size: 0.04, seed: 13 },
    companion: {
      color: '#ffc483', // about 4,040 K
      radius: 0.0085,
      brightness: 0.5,
      glare: 0.35,
      place: { at: [-0.34, 0.26] },
    },
  },
  story: (distance) => [
    `This is Eta Cassiopeiae, from ${distance} away. It sits inside the “W” of Cassiopeia, and it is a near twin of the Sun.`,
    'It is yellow, a touch hotter than the Sun: about 5,970 K. Its surface has the same fine grain.',
    'Size: almost exactly as wide and as heavy as the Sun. It gives off about a fifth more light.',
    'The orange point is its partner: a smaller, cooler star of about 4,000 K, with just over half the Sun’s mass.',
    'They circle each other every 480 years, on average about 70 times as far apart as Earth is from the Sun.',
    'William Herschel found the pair in 1779. Since then they have completed half an orbit.',
    'Through a small telescope the pair is a favourite: one star gold, the other reddish. Observers have also called them yellow and purple.',
    'Types: G0 V and K7 V. A yellow star and an orange dwarf, both in their prime.',
    'Estimated age: about 5 billion years, close to the Sun’s.',
    'They are 19.4 light-years away. No planets have been found.',
    'From a planet there, the orange star would be a dazzling point, hundreds of times brighter than our full Moon.',
    'Its other name, Achird, is modern. It first appeared on a star map in the 20th century, and nobody knows where it came from.',
  ],
}
