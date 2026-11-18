import type { CloseupStar } from '../star'

/**
 * Figures: Torres et al. 2015. The two giants' sizes are to scale (the second is 0.74 times the
 * first's radius), and the orbit is tilted 137° so they never eclipse. The real spacing is 13.3
 * radii; it is drawn at 7.8 so that both discs are large enough to show their surfaces.
 * The orbit (104 days) is sped up. The two red points are the red dwarf pair, drawn thousands of
 * times closer in than true. The pale glow stands for the coronae, which really shine in X-rays.
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
    radius: 0.055,
    spinSeconds: 18, // it turns once per orbit, as the real one does
    texture: { amplitude: 0.14, scale: 12, speed: 0.1, cells: 0.6 },
    glare: 1.1,
    // Both giants have hot coronae that shine in X-rays, drawn as a pale glow
    envelope: { color: '#fff0d8', strength: 0.2, reach: 1.1 },
    companions: [
      {
        color: '#fff0de', // 5,730 K
        radius: 0.74,
        brightness: 0.96,
        glare: 0.12,
        place: { orbit: { distance: 7.8, seconds: 18, inclinationDeg: 137 } },
      },
      // The red dwarf pair, Capella H and L: really thousands of times farther out
      { color: '#ff9a62', radius: 0.04, brightness: 1, glare: 0.08, place: { at: [0.36, 0.37] } },
      { color: '#ff8c56', radius: 0.04, brightness: 1, glare: 0.05, place: { at: [0.385, 0.352] } },
    ],
  },
  story: (distance) => [
    `This is Capella, from ${distance} away. To the eye it is one golden star. Up close it is two giants circling each other.`,
    'The larger one is 4,970 K and deeper gold. The smaller is 5,730 K, almost exactly the Sun’s colour.',
    'They orbit every 104 days, about as far apart as Venus is from the Sun. Here the orbit is sped up, and drawn a little over half its true width.',
    'Size: 12 and 9 times as wide as the Sun. Each weighs about 2.5 Suns and gives off more than 70 times the Sun’s light.',
    'Types: G8 III and G0 III, both yellow giants. They have finished burning hydrogen in their cores and begun to swell.',
    'Estimated age: about 600 million years. The slightly heavier one is a step further along.',
    'They are 43 light-years away, and together make the sixth-brightest star in the night sky.',
    'The two faint red points are red dwarfs that belong to the system too. They circle the giants from thousands of times farther out than shown.',
    'Both giants have hot, active outer atmospheres, drawn here as a pale glow. Capella was one of the first stars seen to shine in X-rays.',
    'The name is Latin for “little she-goat”: the goat that nursed the infant Zeus. Three faint stars nearby are her kids.',
    'In India it is the Heart of Brahma. In China it is one of the Five Chariots.',
    'To the Boorong people of Australia it was Purra, the kangaroo, chased across the sky by two hunters, Castor and Pollux.',
  ],
}
