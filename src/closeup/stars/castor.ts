import type { CloseupStar } from '../star'

/**
 * Figures: Torres et al. 2022. Shows Castor Aa with its red dwarf, Ab, circling about five times
 * closer than true. The bright point is Castor B, about 100 AU away; the two dim red points are
 * Castor C, a pair of red dwarfs ten times farther still. Six stars in all (B's red dwarf is not drawn).
 */
export const castor: CloseupStar = {
  id: 'castor',
  name: 'Castor',
  designation: 'α Geminorum',
  radiusSun: 2.09,
  look: {
    color: '#c8d6ff', // about 10,300 K
    limbColor: '#d5dffc',
    limbDarkening: 0.5,
    radius: 0.15,
    spinSeconds: 80,
    glare: 1.2,
    companions: [
      {
        color: '#ff8f5e', // Castor Ab, a red dwarf of about 3,800 K: 9.2 days in reality, and five times farther out
        radius: 0.1,
        brightness: 0.45,
        glare: 0.06,
        place: { orbit: { distance: 2.4, seconds: 24, inclinationDeg: 60, nodeDeg: -25, phase: 0.1 } },
      },
      { color: '#d4defe', radius: 0.0147, brightness: 1, glare: 0.5, place: { at: [0.32, 0.27] } }, // Castor B, about 8,800 K
      { color: '#ff9a6c', radius: 0.0147, brightness: 0.7, glare: 0.07, place: { at: [-0.3, -0.22] } }, // Castor C: two
      { color: '#ff946a', radius: 0.0147, brightness: 0.7, glare: 0.07, place: { at: [-0.325, -0.205] } }, // red dwarfs
    ],
  },
  story: [
    'Castor looks like one star. It is really six.',
    'This is the brightest of them: a white star, smooth like Sirius. The bright point is a second, similar star.',
    'Each of them has a small red dwarf tucked in close. This one’s is the red ball circling it.',
    'The two dim red points are a third pair: red dwarfs that eclipse each other. They take thousands of years to circle the rest.',
    'So: three pairs, each pair circling the others. All the companions here are drawn closer in than they really are.',
    'In 1803 William Herschel showed that its two bright stars were slowly circling each other.',
    'It was the first evidence that one star can orbit another. Gravity reaches beyond the Solar System.',
    'The main star is nearly twice as hot as the Sun and twice as wide. It is 51 light-years away.',
    'In Greek myth Castor was the mortal twin, a horseman. When he died, his brother Pollux shared his own immortality with him.',
    'So the two spend half their time in the underworld and half in the sky, together.',
    'More stars that are secretly several: Mizar, Capella and Epsilon Lyrae. His twin: Pollux.',
  ],
}
