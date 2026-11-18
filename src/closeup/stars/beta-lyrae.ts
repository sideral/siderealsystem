import type { CloseupStar } from '../star'

/**
 * Figures: Zhao et al. 2008 (CHARA image); Mourard et al. 2018. Spacing is to scale and the
 * orbit is sped up. The second body is the thick disc of gas, seen nearly edge-on, that hides
 * the heavier star. The stream and the jets are drawn brighter than true.
 */
export const betaLyrae: CloseupStar = {
  id: 'beta-lyrae',
  name: 'Beta Lyrae',
  designation: 'β Lyrae · Sheliak',
  radiusSun: 15.2,
  look: {
    color: '#bccdff', // about 13,300 K
    limbColor: '#cad6fd',
    limbDarkening: 0.4,
    radius: 0.085,
    tide: 0.35, // swollen until it fills its Roche lobe: a teardrop pointing at its partner
    companions: [
      {
        color: '#b9764a',
        radius: 1.45,
        brightness: 0.28,
        glare: 0.04,
        flattening: 0.62, // the thick disc of gas, seen edge-on, that hides the second star
        place: { orbit: { distance: 3.8, seconds: 13, inclinationDeg: 86 } },
        stream: { color: '#ffd9d0', brightness: 0.5 },
        jets: { color: '#cfe0ff', brightness: 0.35, length: 1.3 },
      },
    ],
  },
  story: [
    'Beta Lyrae is two stars so close that one is pouring itself onto the other.',
    'The blue-white star has swollen into a teardrop. Its partner’s gravity strips gas from the tip.',
    'That gas spirals into a thick, glowing disc around the second star, hiding it completely. The dim shape is that disc, seen almost edge-on.',
    'Not all the gas settles. Some is thrown out in two faint jets, straight up and down from the disc.',
    'The spacing is to scale. The orbit is sped up, and the stream and the jets are drawn brighter than they really are.',
    'They circle every 13 days and eclipse each other. From Earth the star’s light rises and falls without ever holding steady.',
    'So much mass is changing hands that the orbit is slowing. Each year it takes 19 seconds longer.',
    'The star being robbed used to be the heavier of the two. Now it weighs 3 Suns, and the hidden one 13.',
    'The visible star is about 15 times as wide as the Sun and over twice as hot. The pair is nearly 1,000 light-years away.',
    'John Goodricke, the young astronomer who explained Algol, saw it vary in 1784.',
    'More pairs trading gas: Algol and VV Cephei. Another star hidden by a dark disc: Epsilon Aurigae.',
  ],
}
