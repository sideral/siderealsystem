import type { CloseupStar } from '../star'

/**
 * Figures: Zhao et al. 2008 (CHARA image); Mourard et al. 2018. Spacing is to scale and the
 * orbit is sped up. The second body is drawn as a dim ball; it is really a thick disc of gas,
 * seen edge-on, hiding the heavier star inside.
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
    flattening: 0.06,
    companion: {
      color: '#c98a5a',
      radius: 1.3,
      brightness: 0.25,
      glare: 0.04,
      place: { orbit: { distance: 3.8, seconds: 13, inclinationDeg: 86 } },
    },
  },
  story: (distance) => [
    `This is Beta Lyrae, from ${distance} away: two stars so close that one is pouring itself onto the other.`,
    'The blue-white star, about 13,300 K, has swollen until its partner’s gravity strips gas from its surface.',
    'That gas spirals into a thick, glowing disc around the second star, hiding it completely. The dim shape is that disc.',
    'It is drawn here as a ball. The real thing is a fat disc seen edge-on. The orbit is sped up; the spacing is to scale.',
    'They circle every 12.9 days and eclipse each other, so from Earth the star’s light rises and falls without ever holding steady.',
    'The orbit is slowing. Each year it takes 19 seconds longer, because so much mass is changing hands.',
    'The swollen star loses the mass of the Sun every 50,000 years.',
    'Size: the visible star is about 15 times as wide as the Sun but now weighs only 3 Suns. The hidden one weighs 13.',
    'It was once the other way round. The star being robbed used to be the heavier of the two.',
    'Type: B6 to B8 II, a blue-white bright giant, with a hidden hotter companion.',
    'Estimated age: about 23 million years.',
    'It is about 960 light-years away. John Goodricke found that it varies, in 1784.',
    'Its name, Sheliak, comes from an Arabic word for the lyre, the constellation it sits in.',
  ],
}
