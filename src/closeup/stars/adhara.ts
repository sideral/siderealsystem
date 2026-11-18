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
  story: [
    'Adhara was once the brightest star in the sky. Today it ranks about 22nd.',
    'Almost 5 million years ago it passed much nearer the Sun, as close as Arcturus is now.',
    'For a while it shone nearly as bright as Venus, far brighter than Sirius is today.',
    'No star has been that bright since, and none will be for millions of years.',
    'It is still drifting away, and is now about 430 light-years off.',
    'In extreme ultraviolet, which no eye can see, it is still the sky’s brightest star.',
    'The violet glow drawn around it stands for that light. It strips atoms apart in the thin cloud of gas the Sun is passing through.',
    'It is blue-white, four times as hot as the Sun, and 14 times as wide. It gives off the light of nearly 40,000 Suns.',
    'The faint point beside it is a small companion star. It is drawn closer in than it really is.',
    'It is young, about 22 million years old, and heavy enough to end as a supernova.',
    'Its name is from the Arabic for “the maidens”. It lies in the Great Dog, below Sirius.',
    'More stars that were, or will be, the brightest in the sky: Algol and Eltanin. More hot blue giants: Bellatrix and Mimosa.',
  ],
}
