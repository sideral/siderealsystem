import type { CloseupStar } from '../star'

/**
 * Figures: Mazumdar et al. 2006 (three rhythms near six hours; two of them 1.8 minutes apart,
 * beating every 49 days); Fossati et al. 2015 (the star). The two waves drawn share one pattern
 * and differ in period, so they drift in and out of step. Their periods are drawn much farther
 * apart than true, so that the beat shows in seconds, and the ripples far stronger.
 */
export const mirzam: CloseupStar = {
  id: 'mirzam',
  name: 'Mirzam',
  designation: 'β Canis Majoris',
  radiusSun: 9.7,
  look: {
    color: '#a9beff', // about 25,000 K
    limbColor: '#bbcbfd',
    limbDarkening: 0.35,
    whiten: 0.42,
    spinSeconds: 120,
    axis: { rollDeg: -15 },
    waves: [
      { l: 2, m: 2, amplitude: 0.1, seconds: 4 },
      { l: 2, m: 2, amplitude: 0.1, seconds: 4.6 },
    ],
    glare: 1.35,
  },
  story: [
    'Mirzam is the herald. It rises just ahead of Sirius and announces the brightest star of all.',
    'Its name is Arabic for “the announcer”. Night after night it clears the horizon a little before Sirius does.',
    'It also beats. The whole star quivers in three rhythms at once, each about six hours long.',
    'Two of the rhythms differ by under two minutes. They drift in and out of step. Every seven weeks they cancel, and the star falls almost still.',
    'The ripples on its face are those two rhythms, swelling and dying away. They are sped up, and drawn far stronger than they really are.',
    'The space between us and Mirzam is unusually empty: a tunnel swept clean of gas. Its harsh ultraviolet light reaches us almost untouched.',
    'It is blue and over four times as hot as the Sun. It is about ten times as wide and gives off the light of 25,000 Suns.',
    'It weighs 13 Suns and is past its prime at about 12 million years old. It will likely end as a supernova.',
    'It is about 500 light-years away. Sirius, which it announces, is nearly 60 times closer.',
    'More hot blue stars that pulse: Mimosa, Hadar and Shaula. The star it heralds: Sirius.',
  ],
}
