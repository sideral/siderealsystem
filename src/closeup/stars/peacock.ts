import type { CloseupStar } from '../star'

/** Figures: Hipparcos distance; standard B3 V values. Name: HM Nautical Almanac Office, The Air Almanac (1937). */
export const peacock: CloseupStar = {
  id: 'peacock',
  name: 'Peacock',
  designation: 'α Pavonis',
  radiusSun: 4.8,
  look: {
    color: '#b5c8ff', // about 17,700 K
    limbColor: '#c4d1fd',
    limbDarkening: 0.36,
    whiten: 0.38,
    spinSeconds: 120,
    glare: 1.2,
  },
  story: (distance) => [
    `This is Peacock, the brightest star of Pavo, seen through a dark filter from ${distance} away.`,
    'Most bright stars have names that are centuries old. This one got its name in the 1930s, in an office.',
    'Britain’s Nautical Almanac Office was making an almanac for Royal Air Force navigators, with 57 stars to steer by.',
    'The air force insisted that every one of them have a name. Two had none, so the office made two up.',
    'This star became Peacock, after its constellation. Epsilon Carinae became Avior.',
    'The constellation is not ancient either. Dutch navigators drew Pavo in the 1590s, on a voyage to the East Indies.',
    'The star is blue-white and hot: about 17,700 K, three times the Sun’s temperature.',
    'Size: about 4.8 times as wide as the Sun and 6 times as heavy. It gives off some 2,200 times as much light.',
    'A hidden partner circles it every 11.75 days.',
    'Type: B3 V. “B” is a hot blue-white star. “V” means it is in its prime, fusing hydrogen.',
    'Estimated age: about 50 million years.',
    'It is 179 light-years away, deep in the southern sky. From most of Europe and North America it never rises.',
  ],
}
