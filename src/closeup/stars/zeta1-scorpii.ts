import type { CloseupStar } from '../star'

/**
 * Figures: Clark et al. 2012 (temperature, size, brightness and wind of this B1.5 Ia+
 * hypergiant). Its distance is uncertain: it belongs to the Scorpius OB1 group, thousands of
 * light-years off. The orange point is Zeta² Scorpii, an unrelated giant in the foreground. The
 * three blue points stand for the cluster NGC 6231, half a degree to the north.
 */
export const zeta1Scorpii: CloseupStar = {
  id: 'zeta1-scorpii',
  name: 'Zeta¹ Scorpii',
  designation: 'ζ¹ Scorpii',
  radiusSun: 103,
  look: {
    color: '#b3c6ff', // about 17,000 K
    limbColor: '#c2d0fd',
    limbDarkening: 0.35,
    whiten: 0.42,
    radius: 0.19,
    spinSeconds: 500,
    axis: { rollDeg: -24 },
    texture: { amplitude: 0.05, scale: 4, speed: 0.03 },
    pulse: { seconds: 15, radius: 0.006, brightness: 0.05, irregular: 0.55 },
    fuzz: 0.06, // the wind is thick enough to blur the edge
    glare: 1.6,
    envelope: { color: '#93b0ff', strength: 0.4, reach: 0.4, streaks: 7, clumps: 0.7, speed: 0.3 },
    companions: [
      { color: '#ffc27e', radius: 0.0116, brightness: 1, glare: 0.55, place: { at: [-0.38, 0.08] } }, // Zeta² Scorpii
      { color: '#b4c7ff', radius: 0.0116, brightness: 1, glare: 0.22, place: { at: [0.2, 0.36] } }, // NGC 6231
      { color: '#bccdff', radius: 0.0116, brightness: 1, glare: 0.14, place: { at: [0.27, 0.32] } },
      { color: '#aec2ff', radius: 0.0116, brightness: 1, glare: 0.18, place: { at: [0.25, 0.4] } },
    ],
  },
  story: [
    'Zeta¹ Scorpii is one of the most powerful stars in the Galaxy. You can just see it without a telescope.',
    'It gives off the light of nearly a million Suns. It looks faint only because it is thousands of light-years away, behind veils of dust.',
    'A star this bright can barely hold itself together. Its own light drives its outer layers off into space as a thick, fast wind.',
    'The blue streamers are that wind. Every million years it carries off more gas than the whole Sun contains.',
    'It weighs about 36 Suns and is only a few million years old. It may throw off whole shells in sudden outbursts, as P Cygni did. In the end it will explode.',
    'It is blue-white, three times as hot as the Sun and a hundred times as wide. In the Sun’s place it would swallow Mercury.',
    'The orange point is Zeta² Scorpii. To the eye the two make a close pair, blue beside orange. They are not partners: the orange star is far nearer.',
    'The three blue points stand for a cluster of young stars just to its north. It was born with them. All are drawn closer in than they really are.',
    'To the eye, star and cluster together look like a small comet on the Scorpion’s tail. It is known as the False Comet.',
    'More unstable giants: P Cygni, Eta Carinae and Rho Cassiopeiae. More far, powerful supergiants: Deneb and Rigel.',
  ],
}
