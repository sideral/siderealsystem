import type { CloseupStar } from '../star'

/** Figures: Hipparcos distance; standard B8 V values. The green colour is a long-running debate, not a measurement. */
export const zubeneschamali: CloseupStar = {
  id: 'zubeneschamali',
  name: 'Zubeneschamali',
  designation: 'β Librae',
  radiusSun: 4.9,
  look: {
    color: '#bfd0ff', // about 12,300 K
    limbColor: '#cbd7fd',
    limbDarkening: 0.42,
    spinSeconds: 16,
    flattening: 0.08,
    gravityDarkening: 0.12,
  },
  story: (distance) => [
    `This is Zubeneschamali, the brightest star of Libra, from ${distance} away.`,
    'Its name is Arabic for “the northern claw”. Libra’s stars were once the claws of the Scorpion next door.',
    'The Romans cut them off to make the Scales. The star names still remember the claws.',
    'It is famous as the only green star you can see without a telescope. Some people see pale green. Many see only white.',
    'A star cannot really look green. One that peaks in green light also gives off red and blue, and the mix looks white.',
    'It is blue-white: about 12,300 K, twice the Sun’s temperature.',
    'It spins fast, at 250 km/s at its equator. The Sun turns at 2.',
    'Size: about 4.9 times as wide as the Sun and 3.5 times as heavy. It gives off some 130 times as much light.',
    'Type: B8 V. “B” is a hot blue-white star. “V” means it is in its prime, fusing hydrogen.',
    'Estimated age: about 80 million years.',
    'It is 185 light-years away.',
    'Ancient astronomers wrote that it was as bright as Antares. Today it is far fainter. Nobody knows if it changed, or if they erred.',
  ],
}
