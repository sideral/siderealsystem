import type { CloseupStar } from '../star'

/** Figures: Cohen et al. 2008; Aerts et al. 1998 (pulsations). Lore: Mountford 1976 (central Australia). */
export const mimosa: CloseupStar = {
  id: 'mimosa',
  name: 'Mimosa',
  designation: 'β Crucis',
  radiusSun: 8.4,
  look: {
    color: '#a8beff', // about 27,000 K
    limbColor: '#bacafd',
    limbDarkening: 0.35,
    whiten: 0.4,
    spinSeconds: 60,
    // Several rhythms at once (a Beta Cephei star); drawn far stronger than the real, tiny changes
    waves: [
      { l: 3, m: 3, amplitude: 0.1, seconds: 5 },
      { l: 4, m: 2, amplitude: 0.08, seconds: 7.3 },
    ],
    glare: 1.35,
  },
  story: (distance) => [
    `This is Mimosa, from ${distance} away: the left arm of the Southern Cross, and the hottest of the sky’s brightest stars.`,
    'Its surface is about 27,000 K, nearly five times the Sun’s temperature. Among the 20 or so brightest stars, none is hotter.',
    'Most of its light is ultraviolet, which we cannot see. What reaches our eyes is a small part of what it gives off.',
    'It pulses in several rhythms at once, each a few hours long. Astronomers read them to probe its inside, as with earthquakes.',
    'The ripples crossing its face here are those rhythms, drawn far stronger than true. The real ones are too slight to see.',
    'Size: about 8 times as wide as the Sun and 16 times as heavy. It gives off some 34,000 times as much light.',
    'Type: B0.5 III. “B” is a hot blue-white star. “III” marks a giant.',
    'Estimated age: about 10 million years. It will end as a supernova.',
    'It is about 280 light-years away. A hidden partner circles it every five years.',
    'Close beside it in the sky are the Jewel Box, a cluster of coloured stars, and the Coalsack, a dark cloud of dust.',
    'It is on the flags of Australia, New Zealand, Samoa, Papua New Guinea and Brazil, where it stands for Rio de Janeiro state.',
    'Nobody is sure where the name Mimosa comes from. It may be the flower, or the Latin for “actor”. It is also called Becrux.',
    'For the Arrernte and Luritja of central Australia the Cross is the footprint of an eagle, and the Coalsack is the eagle’s nest.',
  ],
}
