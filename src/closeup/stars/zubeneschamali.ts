import type { CloseupStar } from '../star'

/**
 * Figures: Hipparcos distance; standard B8 V values. The green colour is a long-running debate, not a measurement.
 * The disc is tinted pale green on purpose, to show the colour people report; a 12,300 K star is blue-white.
 */
export const zubeneschamali: CloseupStar = {
  id: 'zubeneschamali',
  name: 'Zubeneschamali',
  designation: 'β Librae',
  radiusSun: 4.9,
  look: {
    color: '#d3f1f1', // about 12,300 K, pushed toward the pale green some observers report
    limbColor: '#c6ecda',
    limbDarkening: 0.42,
    spinSeconds: 16,
    axis: { rollDeg: 15 },
    flattening: 0.1,
    gravityDarkening: 0.18,
    equatorColor: '#d6f3e6',
    glare: 1.15,
  },
  story: [
    'Zubeneschamali is famous as the only green star you can see without a telescope.',
    'Some people see pale green. Many see only white.',
    'A star cannot really look green. One that peaks in green light also gives off red and blue, and the mix looks white.',
    'The pale green tint drawn here is the legend, not the measurement. The real star is blue-white, twice as hot as the Sun.',
    'Its name is Arabic for “the northern claw”. Libra’s stars were once the claws of the Scorpion next door.',
    'The Romans cut them off to make the Scales. The star names still remember the claws.',
    'Ancient astronomers wrote that it was as bright as Antares. Today it is far fainter. Nobody knows if it changed, or if they erred.',
    'It spins fast: its equator moves more than a hundred times faster than the Sun’s.',
    'It is about five times as wide as the Sun and as bright as 130 Suns. It lies about 185 light-years away.',
    'More hot blue stars in their prime: Regulus and Alkaid. Another trick of colour: Antares.',
  ],
}
