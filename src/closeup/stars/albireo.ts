import type { CloseupStar } from '../star'

/**
 * Figures: Drimmel et al. 2021 (Albireo A system); Gaia DR3 distances.
 * Shows the gold giant Albireo Aa, with blue Albireo B as a distant point wearing its ring of gas.
 * B is at least 4,000 AU away, and whether the two are bound at all is unsettled. The small
 * circling point is the close companion Ac, drawn far closer in than true.
 */
export const albireo: CloseupStar = {
  id: 'albireo',
  name: 'Albireo',
  designation: 'β Cygni',
  radiusSun: 60,
  look: {
    color: '#ffd192', // about 4,300 K
    limbColor: '#e2892f',
    limbDarkening: 0.72,
    whiten: 0.12,
    radius: 0.22,
    spinSeconds: 400,
    axis: { rollDeg: -12 },
    texture: { amplitude: 0.26, scale: 5, speed: 0.04, cells: 0.55 },
    companions: [
      {
        color: '#9db9ff', // Albireo B, about 13,000 K, with the ring of gas it has flung off
        radius: 0.01,
        brightness: 1,
        glare: 0.55,
        place: { at: [0.34, 0.34] },
        disc: { outer: 6, tilt: 0.35, color: '#ff9fc2', brightness: 0.22 },
      },
      {
        color: '#dbe4ff', // Albireo Ac, the giant's close companion (a 120-year orbit, drawn far closer in)
        radius: 0.01,
        brightness: 1,
        glare: 0.18,
        place: { orbit: { distance: 1.75, seconds: 60, inclinationDeg: 46, eccentricity: 0.15, nodeDeg: -15, phase: 0.1 } },
      },
    ],
  },
  story: [
    'Albireo is the finest colour contrast in the sky: a golden star with a blue one beside it.',
    'The golden giant fills the view. The blue star shines in the distance, drawn closer in than it really is.',
    'The colours are real, and they are temperatures. Gold is cool: a quarter cooler than the Sun. Blue is hot: more than twice as hot.',
    'Nobody is sure the two belong together. They may circle each other once in 100,000 years or more.',
    'Or they may simply lie along the same line of sight, strangers that only look like a pair.',
    'The blue star spins so fast that it has flung off gas: the faint pink ring around it.',
    'The giant has a closer companion too. It is the small point circling it, drawn far closer in than it really is. One real orbit takes about 120 years.',
    'The giant is about 60 times as wide as the Sun and as bright as a thousand Suns. Its surface churns in big, slow cells.',
    'It is about 400 light-years away. To the eye it is one modest star at the head of the Swan. A small telescope splits it in two.',
    'The name is an accident. It comes from a chain of mistranslations between Greek, Arabic and Latin. It means nothing.',
    'More coloured pairs: Almach, Izar and Eta Cassiopeiae.',
  ],
}
