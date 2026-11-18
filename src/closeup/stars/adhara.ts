import type { CloseupStar } from '../star'

/** Figures: Fossati et al. 2015; Tomkin 1998 (past brightness); Vallerga & Welsh 1995 (extreme ultraviolet). */
export const adhara: CloseupStar = {
  id: 'adhara',
  name: 'Adhara',
  designation: 'ε Canis Majoris',
  radiusSun: 13.9,
  look: {
    color: '#aec3ff', // about 22,900 K
    limbColor: '#bfcdfd',
    limbDarkening: 0.35,
    whiten: 0.4,
    spinSeconds: 200,
    glare: 1.3,
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
    'In extreme ultraviolet light it is the brightest star in the whole sky.',
    'That light strips the electrons from hydrogen atoms in the thin cloud of gas the Sun is passing through.',
    'Its name is from the Arabic for “the maidens”. It lies in the Great Dog, below Sirius.',
    'On Brazil’s flag it stands for the state of Tocantins.',
  ],
}
