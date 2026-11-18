import type { CloseupStar } from '../star'

/**
 * Figures: Shenar et al. 2015; Hartmann 1904 (interstellar calcium). Its distance is uncertain.
 * The close pair is to scale. Two of the outer stars are points, drawn far closer in than they are.
 */
export const mintaka: CloseupStar = {
  id: 'mintaka',
  name: 'Mintaka',
  designation: 'δ Orionis',
  radiusSun: 16.5,
  look: {
    color: '#a6bdff', // about 29,500 K
    limbColor: '#b8c9fd',
    limbDarkening: 0.3,
    whiten: 0.45,
    radius: 0.12,
    spinSeconds: 70,
    glare: 1.5,
    envelope: { color: '#8eabff', strength: 0.16, reach: 0.3, streaks: 3, clumps: 0.5, speed: 0.3 }, // its wind
    companions: [
      {
        color: '#adc2ff', // about 25,000 K
        radius: 0.4,
        brightness: 0.8,
        glare: 0.2,
        place: { orbit: { distance: 2.6, seconds: 14, inclinationDeg: 76, eccentricity: 0.11, periapsisDeg: 150 } },
        shock: { color: '#bfe0ff', brightness: 0.3, gap: 1.5 }, // where the two winds collide
      },
      { color: '#abc0ff', radius: 0.018, brightness: 1, glare: 0.45, place: { at: [0.31, 0.24] } }, // the hot star on a wider orbit, centuries long
      { color: '#b9caff', radius: 0.018, brightness: 1, glare: 0.18, place: { at: [-0.37, 0.33] } }, // Mintaka C, far outside
    ],
  },
  story: [
    'Mintaka is the western star of Orion’s Belt. It showed that the space between the stars is not empty.',
    'In 1904 Johannes Hartmann studied its light. He found a trace of calcium that did not move as its stars circled each other.',
    'The calcium was not in the stars. It was in the space between them and us. This was the first proof that gas drifts between the stars.',
    'Mintaka is a crowd of at least five stars. The brightest is a blue giant, five times as hot as the Sun.',
    'A smaller hot star circles that giant every six days. Each partly hides the other in turn, and the light dips slightly.',
    'Both blow fast winds. Where the winds collide, a curved sheet of hot gas wraps around the smaller star.',
    'The close pair is to scale, but sped up. The sheet is drawn brighter than it really is.',
    'Two of the outer stars show as points, drawn closer in than they really are.',
    'The main star is about 16 times as wide as the Sun. It is as bright as nearly 200,000 Suns. It will end as a supernova.',
    'It lies almost exactly on the sky’s equator. So it rises due east and sets due west, wherever on Earth you stand.',
    'It is roughly 1,200 light-years away.',
    'In Scandinavia the Belt was Frigg’s distaff, the rod the goddess spun thread from.',
    'The rest of the Belt: Alnilam and Alnitak. More stars that changed science: 61 Cygni and Eltanin.',
  ],
}
