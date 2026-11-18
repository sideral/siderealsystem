import type { CloseupStar } from '../star'

/** Figures: Gaia distance (about 1,000 light-years); radius and temperature are rough. Name: Angelo Secchi. */
export const laSuperba: CloseupStar = {
  id: 'la-superba',
  name: 'La Superba',
  designation: 'Y Canum Venaticorum',
  radiusSun: 215,
  look: {
    color: '#ff7038', // about 2,750 K, reddened further by carbon soot
    limbColor: '#a02f10',
    limbDarkening: 0.82,
    whiten: 0,
    spinSeconds: 1200,
    texture: { amplitude: 0.6, scale: 2.5, speed: 0.03 },
    pulse: { seconds: 14, radius: -0.04, brightness: 0.4 },
    fuzz: 0.1,
    wobble: 0.06,
    glare: 0.7,
  },
  story: (distance) => [
    `This is La Superba, from ${distance} away: one of the reddest stars you can see without a telescope.`,
    'The Italian astronomer Angelo Secchi named it in the 1860s. Its spectrum struck him as superb.',
    'It is one of the coolest stars known: about 2,750 K, less than half the Sun’s temperature.',
    'But that is not the only reason it is so red. It is a carbon star.',
    'Deep inside, it has been making carbon. Churning has brought so much to the surface that there is more carbon than oxygen.',
    'The carbon forms sooty molecules in its outer layers. They soak up blue and violet light and let only red through.',
    'Size: about 200 times as wide as the Sun. Put where the Sun is, it would reach about to Earth’s orbit.',
    'It swells and fades roughly every 160 days, changing about tenfold in brightness. The beat is sped up here.',
    'At its best it is just visible to the naked eye in a dark sky. Binoculars show its colour well.',
    'Type: C5, a carbon star.',
    'Estimated age: uncertain. It is near the end of its life.',
    'It is blowing its outer layers into space as a slow wind of gas and soot. A shell of it surrounds the star.',
    'What is left will be a white dwarf. The carbon it sheds will drift off, and some may end up in new stars and planets.',
    'It is about 1,000 light-years away, in Canes Venatici, the Hunting Dogs.',
  ],
}
