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
  story: (distance) => [
    `This is Beta Lyrae, from ${distance} away: two stars so close that one is pouring itself onto the other.`,
    'The blue-white star, about 13,300 K, has swollen into a teardrop. Its partner’s gravity strips gas from the tip.',
    'That gas spirals into a thick, glowing disc around the second star, hiding it completely. The dim shape is that disc.',
    'We see that disc almost edge-on. The orbit is sped up; the spacing is to scale.',
    'Not all the gas settles. Some is thrown out in two faint jets, straight up and down from the disc.',
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
