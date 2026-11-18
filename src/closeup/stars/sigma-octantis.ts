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
  story: (distance) => [
    `This is Sigma Octantis, from ${distance} away. It is the south pole star, and almost nobody has ever seen it.`,
    'It sits about one degree from the point the whole southern sky turns around, just as Polaris does in the north.',
    'But it is 25 times fainter than Polaris. You need a dark sky and good eyes to find it at all.',
    'So southern sailors never steered by it. They used the Southern Cross, whose long bar points to the pole.',
    'The star itself is white: about 7,400 K, hotter than the Sun.',
    'It swells and shrinks very slightly every 2.3 hours. Here that is sped up to a few seconds.',
    'Stars of this kind often ripple as well as swell. The ripples drawn here are far stronger than any real ones.',
    'Size: about 4 times as wide as the Sun and one and a half times as heavy. It gives off around 40 times as much light.',
    'Type: F0 III. “F” is a white star a little hotter than the Sun. “III” marks a giant that is starting to swell.',
    'Estimated age: between 1 and 2 billion years, judging by its mass.',
    'It is roughly 290 light-years away.',
    'On the flag of Brazil it stands for the Federal District, the capital. The other 26 stars are arranged around it.',
    'Earth’s axis slowly wobbles, so the pole is drifting away from it. For most of history the south had no pole star at all.',
  ],
}
