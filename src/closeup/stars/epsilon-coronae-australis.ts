import type { CloseupStar } from '../star'

/**
 * Figures: Goecking & Duerbeck 1993 (orbit: 14.2 hours, tilted 73°; the small star has about an
 * eighth of the big one's mass and 0.4 of its radius); Tylenda et al. 2011 (the merger of
 * V1309 Scorpii in 2008). Sizes and spacing are to scale. Each star is drawn stretched toward
 * the other until the two join, as stars that overfill their Roche lobes do.
 */
export const epsilonCoronaeAustralis: CloseupStar = {
  id: 'epsilon-coronae-australis',
  name: 'Epsilon Coronae Australis',
  designation: 'ε Coronae Australis',
  radiusSun: 2.1,
  look: {
    color: '#fff6ea', // about 6,700 K
    limbColor: '#f2c88e',
    limbDarkening: 0.6,
    whiten: 0.3,
    radius: 0.13,
    spinSeconds: 6, // the whole peanut turns as one
    tide: 0.2,
    texture: { amplitude: 0.1, scale: 12, speed: 0.2, cells: 0.8 },
    glare: 0.9,
    companions: [
      {
        color: '#fff4e4', // as hot as its partner: they share one envelope
        radius: 0.42,
        brightness: 0.95,
        glare: 0.05,
        tide: 0.3,
        place: { orbit: { distance: 1.62, seconds: 6, inclinationDeg: 73, nodeDeg: 10 } },
      },
    ],
  },
  story: [
    'Epsilon Coronae Australis is two stars that touch. It is the brightest pair of its kind in the sky.',
    'They circle each other in just 14 hours. They are so close that their surfaces have merged into one peanut-shaped body.',
    'Gas and heat flow freely across the neck between them. So the small star glows as hot as the big one, though it should be far cooler.',
    'The big star is nearly eight times as heavy as the small one. It has probably been swallowing its partner bit by bit.',
    'Sizes and spacing are to scale. The orbit is sped up.',
    'From Earth we see them pass in front of each other twice each orbit. The light never holds still: it dips by a fifth and climbs again.',
    'Such pairs probably end by merging into one fast-spinning star. In 2008 another pair was seen to do it, in a red flash.',
    'The big star is a little hotter than the Sun and twice as wide. The pair is about 100 light-years away.',
    'It is faint but plain to see on a dark night. It lies in the Southern Crown, a little arc of stars under Sagittarius.',
    'More pairs trading gas: Beta Lyrae and Algol. More stars pulled out of shape: Spica and Iota Orionis.',
  ],
}
