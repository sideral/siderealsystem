import type { CloseupStar } from '../star'

/**
 * Figures: Hipparcos distance; standard B3 V values. Name: HM Nautical Almanac Office, The Air Almanac (1937).
 * The partner is known only from the main star's wobble: its size and colour are a guess, and
 * it is drawn at about half its true distance.
 */
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
    radius: 0.1,
    spinSeconds: 60,
    glare: 1.25,
    companions: [
      {
        color: '#c9d7ff', // a guess: about 10,000 K
        radius: 0.45,
        brightness: 0.6,
        glare: 0.12,
        place: { orbit: { distance: 4.2, seconds: 12, inclinationDeg: 62, nodeDeg: -20 } },
      },
    ],
  },
  story: [
    'Peacock got its name in the 1930s, in an office.',
    'Most bright stars have names that are centuries old. This one had none.',
    'Britain’s Nautical Almanac Office was making an almanac for Royal Air Force navigators. It listed the stars to steer by.',
    'The air force insisted that every one of them have a name. Two had none, so the office made two up.',
    'This star became Peacock, after its constellation, Pavo. Epsilon Carinae became Avior.',
    'The constellation is not ancient either. Dutch navigators drew Pavo in the 1590s, on a voyage to the East Indies.',
    'The star is blue-white and three times as hot as the Sun. It is nearly five times as wide, and as bright as 2,000 Suns.',
    'A partner circles it every 12 days, too close to see apart from Earth. Its look here is a guess, and it is drawn closer in than it really is.',
    'It is about 180 light-years away, deep in the southern sky. From most of Europe and North America it never rises.',
    'More stars with odd names: Sualocin and Nunki. More hot blue stars in their prime: Alkaid and Regulus.',
  ],
}
