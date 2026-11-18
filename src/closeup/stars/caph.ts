import type { CloseupStar } from '../star'

/**
 * Figures: Che et al. 2011 (CHARA: shape, spin and the 20° angle between its axis and our line
 * of sight); standard F2 III values. Its Delta Scuti beat is 2.5 hours long and changes its
 * light by a few percent; here it is sped up and drawn far stronger.
 */
export const caph: CloseupStar = {
  id: 'caph',
  name: 'Caph',
  designation: 'β Cassiopeiae',
  radiusSun: 3.5,
  look: {
    color: '#f8f4ff', // about 7,500 K at the pole
    limbColor: '#f0dcb8',
    limbDarkening: 0.55,
    radius: 0.21,
    spinSeconds: 28, // about 27 hours in reality
    axis: { rollDeg: 28, inclinationDeg: 20 }, // seen nearly pole-on, as from Earth
    flattening: 0.24,
    gravityDarkening: 0.3,
    equatorColor: '#f7e4c6', // about 6,400 K
    texture: { amplitude: 0.08, scale: 16, speed: 0.2, cells: 0.6 },
    pulse: { seconds: 2.6, radius: 0.012, brightness: 0.1 }, // one steady beat
  },
  story: [
    'Caph, at one end of Cassiopeia’s W, has a steady pulse. It beats every two and a half hours.',
    'With each beat the whole star swells and shrinks a little. Its light rises and falls. It is one of the brightest stars that do this.',
    'The beat is sped up here and drawn far stronger than it really is. The real change is a few percent.',
    'Caph also spins fast: once in about a day. That flings its equator outward and leaves its poles hotter and brighter.',
    'We look almost straight down on one pole. That is the bright patch near the middle. The dimmer rim is the bulging equator.',
    'It has just run out of hydrogen in its core and begun to swell into a giant. Stars pass through this stage quickly, so few are caught in it.',
    'It is yellow-white and a little hotter than the Sun. It is over three times as wide and nearly 30 times as bright.',
    'It is 55 light-years away: one of the nearer bright stars.',
    'Sky maps count their east-west positions from a line that runs right past Caph. With Alpheratz, it shows where that line lies.',
    'Its name is from the Arabic for “palm”. It was once the fingertips of a great hand reaching out from the Pleiades.',
    'More stars spun flat: Vega, Altair and Alderamin. More of Cassiopeia: Gamma Cassiopeiae and Eta Cassiopeiae.',
  ],
}
