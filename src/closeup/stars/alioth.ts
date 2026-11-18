import type { CloseupStar } from '../star'

/**
 * Figures: Shulyak et al. 2010; Lueftinger et al. 2003 (surface maps). The patches drawn stand
 * for zones of different chemistry; on the real star they differ little in brightness.
 */
export const alioth: CloseupStar = {
  id: 'alioth',
  name: 'Alioth',
  designation: 'ε Ursae Majoris',
  radiusSun: 4.1,
  look: {
    color: '#d2ddff', // about 9,000 K
    limbColor: '#dde4fc',
    limbDarkening: 0.45,
    spinSeconds: 26, // 5.1 days in reality
    spots: { darkness: 0.22, size: 0.22, seed: 71 },
  },
  story: (distance) => [
    `This is Alioth, from ${distance} away: the brightest star of the Big Dipper, third from the end of the handle.`,
    'It is white: about 9,000 K. Its surface is patchy, but not with ordinary dark spots.',
    'Its magnetism sorts the chemical elements into zones. Some regions are rich in chromium, others in oxygen or europium.',
    'As the star turns, once every 5.1 days, those zones swing past, and its light and its colours change in step.',
    'The patches drawn here stand for those zones. On the real star they differ in chemistry more than in brightness.',
    'Size: about 4 times as wide as the Sun and 3 times as heavy. It gives off around 100 times as much light.',
    'Type: A1p. “A” is a white star, hotter than the Sun. The “p” is for peculiar: the odd chemistry.',
    'Estimated age: about 300 million years.',
    'It is 83 light-years away, and one of the 35 brightest stars in the night sky.',
    'It travels with a family. Five of the Dipper’s seven stars were born together and still drift the same way through space.',
    'Its name may come from the Arabic for “the fat tail of a sheep”.',
    'It is one of the 58 stars that sailors and pilots use for navigation.',
  ],
}
