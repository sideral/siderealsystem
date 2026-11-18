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
  story: [
    'Mimosa, the left arm of the Southern Cross, is the hottest of the sky’s brightest stars.',
    'Its surface is nearly five times as hot as the Sun’s. Among the 20 or so brightest stars, none is hotter.',
    'Most of its light is ultraviolet, which we cannot see. What reaches our eyes is a small part of what it gives off.',
    'It pulses in several rhythms at once, each a few hours long. Astronomers read them to probe its inside, as with earthquakes.',
    'The ripples crossing its face are those rhythms. They are drawn far stronger than they really are.',
    'It is about 8 times as wide as the Sun and gives off the light of some 30,000 Suns. It will end as a supernova.',
    'It is about 280 light-years away. A hidden partner circles it every five years.',
    'Close beside it in the sky is the Jewel Box, a cluster of coloured stars. Next to that is the Coalsack, a dark cloud of dust.',
    'For the Arrernte and Luritja of central Australia the Cross is an eagle’s footprint. The Coalsack is its nest.',
    'The rest of the Cross here: Acrux and Gacrux. More hot blue stars that pulse: Hadar, Shaula and Spica.',
  ],
}
