import type { CloseupStar } from '../star'

/** Figures: Hummel et al. 2013. Its distance is uncertain. Lore: Snedegar 1995 (Tswana). */
export const alnitak: CloseupStar = {
  id: 'alnitak',
  name: 'Alnitak',
  designation: 'ζ Orionis',
  radiusSun: 20,
  look: {
    color: '#a6bdff', // about 29,500 K
    limbColor: '#b8c9fd',
    limbDarkening: 0.3,
    whiten: 0.45,
    spinSeconds: 80,
    texture: { amplitude: 0.04, scale: 4, speed: 0.03 },
    fuzz: 0.02,
    glare: 1.5,
  },
  story: (distance) => [
    `This is Alnitak, the eastern star of Orion’s Belt, seen through a dark filter from ${distance} away.`,
    'It is the brightest star of the hottest class, O, anywhere in the night sky.',
    'Its surface is about 29,500 K, five times the Sun’s temperature, and it shines blue.',
    'It is a triple. A second blue star circles the main one every seven years, and a third lies farther out.',
    'Size: about 20 times as wide as the Sun and some 30 times as heavy. It gives off around 250,000 times as much light.',
    'Type: O9.5 Ib. “O” is the hottest class of star. “Ib” marks a supergiant.',
    'Estimated age: about 6 or 7 million years. It will explode as a supernova.',
    'It is roughly 1,200 light-years away.',
    'Its ultraviolet light sets the Flame Nebula glowing beside it. The dark Horsehead Nebula stands just to its south.',
    'Its name is Arabic for “the girdle”.',
    'In Spain and Latin America the three Belt stars are the Three Marys. Elsewhere in Europe they are the Three Kings.',
    'Among the Tswana of southern Africa they are three pigs, chased by three dogs: the stars of Orion’s Sword.',
  ],
}
