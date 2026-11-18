import type { CloseupStar } from '../star'

/**
 * Figures: Fossati et al. 2015; Tomkin 1998 (past brightness); Vallerga & Welsh 1995 (extreme ultraviolet).
 * The violet glow stands for its extreme-ultraviolet light, which no eye can see. The point is
 * its 7.5-magnitude companion, about 900 AU away.
 */
export const adhara: CloseupStar = {
  id: 'adhara',
  name: 'Adhara',
  designation: 'ε Canis Majoris',
  radiusSun: 13.9,
  look: {
    color: '#aec3ff', // about 22,900 K
    limbColor: '#c1c6ff',
    limbDarkening: 0.35,
    whiten: 0.42,
    spinSeconds: 200,
    axis: { rollDeg: -10 },
    glare: 1.4,
    envelope: { color: '#8f6bff', strength: 0.24, reach: 0.65 }, // stands for the extreme ultraviolet
    companions: [
      { color: '#e9eeff', radius: 0.0085, brightness: 1, glare: 0.12, place: { at: [0.36, -0.1] } }, // its faint companion
    ],
  },
  story: (distance) => [
    `This is Adhara, seen through a dark filter from ${distance} away. Today it is the 22nd-brightest star. It was once the first.`,
    'About 4.7 million years ago it passed within 34 light-years of the Sun.',
    'For a while it was by far the brightest star in the sky, several times brighter than Sirius is now.',
    'No star has been that bright since, and none will be for millions of years.',
    'It is blue-white and very hot: about 22,900 K, four times the Sun’s temperature. Its surface is smooth.',
    'Size: about 14 times as wide as the Sun and 12 times as heavy. It gives off nearly 40,000 times as much light.',
    'Type: B2 II. “B” is a hot blue-white star. “II” marks a bright giant.',
    'Estimated age: about 22 million years. It is heavy enough to end as a supernova.',
    'It is about 430 light-years away now, and still drifting off.',
    'The faint point beside it is a small companion star, some 900 times as far from it as Earth is from the Sun.',
    'In extreme ultraviolet light it is the brightest star in the whole sky.',
    'The violet glow around it here stands for that light. No eye could see the real thing.',
    'That light strips the electrons from hydrogen atoms in the thin cloud of gas the Sun is passing through.',
    'Its name is from the Arabic for “the maidens”. It lies in the Great Dog, below Sirius.',
    'On Brazil’s flag it stands for the state of Tocantins.',
  ],
}
