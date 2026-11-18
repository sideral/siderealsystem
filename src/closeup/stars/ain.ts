import type { CloseupStar } from '../star'

/**
 * Figures: Sato et al. 2007 (the planet, the first found in an open cluster); Perryman et al.
 * 1998 (the Hyades). The planet's real orbit is about 32 star radii out; it is drawn far closer
 * in, and the planet larger. The three points are the cluster's other three giants, laid out
 * roughly as they sit along the V of the Bull's face, light-years apart in reality.
 */
export const ain: CloseupStar = {
  id: 'ain',
  name: 'Ain',
  designation: 'ε Tauri',
  radiusSun: 12.7,
  look: {
    color: '#ffdfb6', // about 4,900 K
    limbColor: '#e6964e',
    limbDarkening: 0.68,
    whiten: 0.14,
    radius: 0.17,
    spinSeconds: 500,
    axis: { rollDeg: -16 },
    texture: { amplitude: 0.2, scale: 8, speed: 0.05, cells: 0.6 },
    companions: [
      {
        color: '#d8c6ae', // Amateru
        radius: 0.045,
        brightness: 0.03,
        glare: 0,
        lit: 0.9,
        place: { orbit: { distance: 2.5, seconds: 24, inclinationDeg: 66, eccentricity: 0.15, periapsisDeg: 90, nodeDeg: -16 } },
      },
      { color: '#ffdcb0', radius: 0.013, brightness: 1, glare: 0.4, place: { at: [-0.26, 0.22] } }, // Delta¹ Tauri
      { color: '#ffdcb2', radius: 0.013, brightness: 1, glare: 0.45, place: { at: [-0.4, 0.34] } }, // Gamma Tauri, at the point of the V
      { color: '#ffddb4', radius: 0.013, brightness: 1, glare: 0.38, place: { at: [-0.2, 0.39] } }, // Theta¹ Tauri
    ],
  },
  story: [
    'Ain is the Bull’s other eye. It is a golden giant of the Hyades cluster, with a planet of its own.',
    'Aldebaran, the bright eye, only stands in front of the Hyades. Ain truly belongs to them.',
    'The Hyades are the V of stars that makes the Bull’s face. They are the nearest star cluster to the Sun, about 150 light-years away.',
    'Its stars were all born together, over 600 million years ago. Four of the heaviest have already swollen into giants. Ain is one.',
    'The three golden points are the other three. They are drawn closer in than they really are: the real ones are light-years apart.',
    'In 2007 a planet was found circling Ain. It was the first planet known in a cluster like this.',
    'The planet is nearly eight times as heavy as Jupiter, and its year lasts 20 months. It is drawn larger and far closer in than it really is.',
    'Ain is cooler than the Sun, 13 times as wide and nearly a hundred times as bright. It is almost three times as heavy.',
    'This cluster was the first step in measuring the universe. Its stars all drift toward one point in the sky, and that gives away their distance.',
    'In 1919 it was Hyades stars that seemed to shift beside the eclipsed Sun. That showed gravity bends light, as Einstein had said.',
    'To the Greeks the Hyades were sisters weeping for their dead brother. When they rose with the Sun, the rains came.',
    'Ain is Arabic for “eye”. The planet is named Amateru, after Japanese shrines to the sun goddess.',
    'More orange giants with planets: Pollux, Hamal and Errai. More stars in clusters: Alcyone and Mirfak.',
  ],
}
