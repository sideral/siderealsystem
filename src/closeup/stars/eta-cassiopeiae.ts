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
    axis: { rollDeg: 26, inclinationDeg: 60 },
    texture: { amplitude: 0.15, scale: 21, speed: 0.24, cells: 1 },
    spots: { darkness: 0.55, size: 0.04, seed: 11, count: 3 }, // a quiet star: a few small spots
    companions: [
      // The orange partner, about 4,040 K; tinted a little deeper than true, toward how observers describe it
      { color: '#ffb873', radius: 0.0085, brightness: 0.9, glare: 0.38, place: { at: [0.33, 0.3] } },
    ],
  },
  story: [
    'Eta Cassiopeiae is a near twin of the Sun with an orange companion. It sits inside the “W” of Cassiopeia.',
    'The star in view is almost exactly as wide and as heavy as the Sun. It is a touch hotter, and about as old.',
    'The orange point is its partner, a smaller, cooler star about half as heavy as the Sun. It is drawn closer in than it really is.',
    'They circle each other every 480 years. They are nearly twice as far apart as Pluto is from the Sun.',
    'William Herschel found the pair in 1779. Since then they have completed only half an orbit.',
    'Through a small telescope the pair is a favourite: one star gold, the other reddish. Some observers have even called them yellow and purple.',
    'From a planet there, the orange star would be a dazzling point. It would outshine our full Moon hundreds of times over.',
    'They are 19 light-years away. No planets have been found.',
    'Its other name, Achird, is a mystery. It first appeared on a star map in the 20th century, and nobody knows where it came from.',
    'More near twins of the Sun: Alpha Centauri, 18 Scorpii and Alula Australis.',
  ],
}
