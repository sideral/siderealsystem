import type { CloseupStar } from '../star'

/** Figures: Hipparcos distance; the Bright Star Catalogue. Its size and age are rough estimates. */
export const sigmaOctantis: CloseupStar = {
  id: 'sigma-octantis',
  name: 'Sigma Octantis',
  designation: 'σ Octantis · Polaris Australis',
  radiusSun: 4,
  look: {
    color: '#eceeff', // about 7,400 K
    limbColor: '#f2ecdf',
    limbDarkening: 0.55,
    whiten: 0.25,
    spinSeconds: 60,
    axis: { rollDeg: -22, inclinationDeg: 65 },
    flattening: 0.04,
    texture: { amplitude: 0.06, scale: 14, speed: 0.08, cells: 0.3 },
    pulse: { seconds: 3, radius: -0.012, brightness: 0.06 }, // real period: 2.3 hours
    // Delta Scuti stars ripple as well as swell; drawn far stronger than true
    waves: [
      { l: 8, m: 6, amplitude: 0.06, seconds: 3.4 },
      { l: 5, m: 2, amplitude: 0.04, seconds: 4.7 },
    ],
  },
  story: [
    'Sigma Octantis is the south pole star, and almost nobody has ever seen it.',
    'It sits about one degree from the point the whole southern sky turns around. Polaris does the same in the north.',
    'But it is 25 times fainter than Polaris. You need a dark sky and good eyes to find it at all.',
    'So southern sailors never steered by it. They used the Southern Cross, whose long bar points to the pole.',
    'Earth’s axis slowly wobbles, so the pole is drifting away from it. For most of history the south had no pole star at all.',
    'On the flag of Brazil it stands for the capital. The other 26 stars are arranged around it.',
    'The star is white, hotter than the Sun, about four times as wide and 40 times as bright.',
    'It swells and shrinks very slightly every couple of hours, and ripples too. Both are sped up here, and drawn far stronger than they really are.',
    'It is roughly 290 light-years away.',
    'More pole stars: Polaris, Thuban and Beta Hydri.',
  ],
}
