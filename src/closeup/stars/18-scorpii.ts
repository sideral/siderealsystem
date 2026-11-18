import type { CloseupStar } from '../star'

/** Figures: Porto de Mello & da Silva 1997 (solar twin); Bazot et al. 2011 (measured radius and mass); Hall et al. 2007 (cycle). */
export const scorpii18: CloseupStar = {
  id: '18-scorpii',
  name: '18 Scorpii',
  designation: 'HR 6060',
  radiusSun: 1.01,
  look: {
    color: '#fff1e4', // about 5,810 K
    limbColor: '#f2b877',
    limbDarkening: 0.62,
    whiten: 0.2,
    spinSeconds: 115, // about 23 days in reality
    axis: { rollDeg: -7 }, // tipped a little, as the Sun is seen from Earth
    texture: { amplitude: 0.15, scale: 22, speed: 0.25, cells: 1 }, // fine Sun-like grain
    // As on the Sun: spots keep to two belts either side of the equator, and come and go on a cycle
    spots: { darkness: 0.75, size: 0.05, seed: 77, count: 9, beltDeg: 17, cycleSeconds: 42, faculae: 0.5 },
  },
  story: [
    '18 Scorpii is the closest thing we know to a copy of the Sun.',
    'Astronomers call such a star a solar twin. This is the nearest and brightest one known.',
    'Almost everything matches: its colour, its width, its weight, its mix of elements. Even its spin is within a couple of days of the Sun’s.',
    'It has a cycle of spots and storms like the Sun’s, too. Its cycle takes about 7 years. The Sun’s takes 11.',
    'Watch the dark spots gather in two belts and fade away again. The cycle is sped up here.',
    'One difference: it is a little younger than the Sun, by a billion years or so.',
    'Astronomers use it as a stand-in for the Sun. It lets them test, at night, the same instruments they point at other stars.',
    'No planets have been confirmed there yet.',
    'It is 46 light-years away, in the north of Scorpius. In a dark sky the naked eye can just see it.',
    'More near twins of the Sun: Alpha Centauri, Eta Cassiopeiae and Zeta Reticuli.',
  ],
}
