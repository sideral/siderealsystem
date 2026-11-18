import type { CloseupStar } from '../star'

/**
 * Figures: Torres et al. 2015. The two giants are drawn to scale: the second is 0.74 times
 * the first's radius and orbits 13.3 radii away, tilted 137° so they never eclipse.
 * The orbit (104 days) is sped up.
 */
export const capella: CloseupStar = {
  id: 'capella',
  name: 'Capella',
  designation: 'α Aurigae',
  radiusSun: 11.98,
  look: {
    color: '#ffe2bd', // 4,970 K
    limbColor: '#e89a52',
    limbDarkening: 0.68,
    whiten: 0.15,
    radius: 0.03,
    companion: {
      color: '#fff0e2', // 5,730 K
      radius: 0.74,
      brightness: 1.05,
      glare: 0.04,
      place: { orbit: { distance: 13.3, seconds: 18, inclinationDeg: 137 } },
    },
  },
  story: (distance) => [
    `This is Capella, from ${distance} away. To the eye it is one golden star. Up close it is two giants circling each other.`,
    'The larger one is 4,970 K and deeper gold. The smaller is 5,730 K, almost exactly the Sun’s colour.',
    'They orbit every 104 days, about as far apart as Venus is from the Sun. The orbit is sped up here; the sizes and spacing are to scale.',
    'Size: 12 and 9 times as wide as the Sun. Each weighs about 2.5 Suns and gives off more than 70 times the Sun’s light.',
    'Types: G8 III and G0 III, both yellow giants. They have finished burning hydrogen in their cores and begun to swell.',
    'Estimated age: about 600 million years. The slightly heavier one is a step further along.',
    'They are 43 light-years away, and together make the sixth-brightest star in the night sky.',
    'Two faint red dwarfs belong to the system too, circling the giants from a very great distance.',
    'Both giants have hot, active outer atmospheres. Capella was one of the first stars seen to shine in X-rays.',
    'The name is Latin for “little she-goat”: the goat that nursed the infant Zeus. Three faint stars nearby are her kids.',
    'In India it is the Heart of Brahma. In China it is one of the Five Chariots.',
    'To the Boorong people of Australia it was Purra, the kangaroo, chased across the sky by two hunters, Castor and Pollux.',
  ],
}
