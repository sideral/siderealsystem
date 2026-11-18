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
  story: (distance) => [
    `This is Albireo, from ${distance} away: a golden giant, with a blue star shining in the distance.`,
    'The giant is gold because it is cool: about 4,300 K. The far star is blue because it is hot: about 13,000 K.',
    'Side by side in a telescope, they are the finest colour contrast in the sky. A star’s colour is simply its temperature.',
    'The giant’s surface churns in big, slow cells, and its edge is much dimmer and redder than its centre.',
    'The blue star is at least 4,000 times farther from the giant than Earth is from the Sun. From here it is only a brilliant point.',
    'Nobody is sure the two belong together. They may circle each other once in 100,000 years or more.',
    'Or they may simply lie along the same line of sight, strangers that only look like a pair.',
    'Size: the giant is about 60 times as wide as the Sun and 5 times as heavy. The blue star is under 3 times the Sun’s width.',
    'The giant gives off about 1,200 times the Sun’s light. The blue star gives off about 230 times.',
    'Types: K2 II, a bright giant, and B8 V, a hot star in its prime that spins so fast it has flung off a ring of gas.',
    'Estimated age: about 100 million years. The giant is heavier, so it has aged faster and already left its prime.',
    'It is about 400 light-years away. To the naked eye it is one modest star. A small telescope splits it in two.',
    'The giant has a closer companion too: the small point circling it. It takes about 120 years to go round, and is drawn far closer in than true.',
    'It marks the head of Cygnus the Swan, or the foot of the Northern Cross.',
    'The name is an accident. It comes from a chain of mistranslations between Greek, Arabic and Latin, and means nothing.',
    'Arab astronomers called it simply “the hen’s beak”.',
    'Its fame is recent. Without a telescope its two colours cannot be seen, so older sky traditions rarely single it out.',
  ],
}
