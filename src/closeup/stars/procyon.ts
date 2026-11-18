import type { CloseupStar } from '../star'

/**
 * Figures: Kervella et al. 2004; Bond et al. 2015. Inuit: MacDonald, "The Arctic Sky" (1998).
 * Shows Procyon A, with the white dwarf Procyon B as a point in the background, about 15 AU away.
 */
export const procyon: CloseupStar = {
  id: 'procyon',
  name: 'Procyon',
  designation: 'α Canis Minoris',
  radiusSun: 2.05,
  look: {
    color: '#fbf7f2', // 6,530 K
    limbColor: '#f2d5a8',
    limbDarkening: 0.58,
    whiten: 0.24,
    spinSeconds: 140,
    axis: { rollDeg: -20, inclinationDeg: 40 }, // tipped toward us, as its companion's orbit is
    texture: { amplitude: 0.09, scale: 30, speed: 0.3, cells: 1 }, // only a thin skin boils: fine, faint grain
    // It rings faintly, as the Sun does, in tones about a quarter of an hour long. Drawn stronger than true.
    waves: [{ l: 9, m: 3, amplitude: 0.035, seconds: 3.2 }],
    glare: 1.1,
    companions: [
      { color: '#f3f2fb', radius: 0.0085, brightness: 1, glare: 0.18, place: { at: [0.38, -0.08] } }, // Procyon B, the white dwarf: about 7,700 K
    ],
  },
  story: [
    'Procyon is one of our nearest neighbours, and like Sirius it hides a dead star.',
    'The small white point is a white dwarf: a burnt-out star the size of Earth. It circles Procyon every 41 years.',
    'It is drawn closer in than it really is.',
    'Procyon itself is on the same road. It is just leaving its prime and starting to swell.',
    'Procyon is white with a trace of yellow and a little hotter than the Sun. It is twice as wide and seven times as bright.',
    'Only a thin skin of it boils, so its grain is fine and faint. It also rings faintly: the ripples are drawn stronger than they really are.',
    'It is 11.5 light-years away, and the eighth-brightest star in the night sky.',
    'With Sirius and Betelgeuse it forms the Winter Triangle.',
    'The name is Greek for “before the dog”. It rises just ahead of Sirius, the Dog Star.',
    'Inuit named it for a man too heavy to go hunting on the new sea ice. He lived by taking food from others.',
    'More stars with a white dwarf in tow: Sirius, 40 Eridani and Mira.',
  ],
}
