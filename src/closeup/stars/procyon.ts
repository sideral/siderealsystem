import type { CloseupStar } from '../star'

/** Figures: Kervella et al. 2004; Bond et al. 2015. Inuit: MacDonald, "The Arctic Sky" (1998). */
export const procyon: CloseupStar = {
  id: 'procyon',
  name: 'Procyon',
  designation: 'α Canis Minoris',
  radiusSun: 2.05,
  look: {
    color: '#fbf7f2', // 6,530 K
    limbColor: '#f2d5a8',
    limbDarkening: 0.58,
    whiten: 0.22,
    spinSeconds: 140,
    texture: { amplitude: 0.07, scale: 16, speed: 0.18 },
    spots: { darkness: 0.5, size: 0.05, seed: 8 },
  },
  story: (distance) => [
    `This is Procyon, the eighth-brightest star in the night sky, seen through a dark filter from ${distance} away.`,
    'It is white with a trace of yellow: 6,530 K, a little hotter than the Sun.',
    'Like the Sun it has a finely grained, bubbling surface, and its edge is dimmer than its centre.',
    'Size: twice as wide as the Sun and 1.5 times as heavy. It gives off about 7 times as much light.',
    'Type: F5 IV–V. “F” is a yellow-white star. “IV–V” means it is just leaving its prime and starting to swell.',
    'Estimated age: under 2 billion years. Being heavier than the Sun, it has aged faster.',
    'It is 11.5 light-years away, one of our nearest neighbours.',
    'Like Sirius, it has a white dwarf companion: a burnt-out star the size of Earth that circles it every 41 years.',
    'With Sirius and Betelgeuse it forms the Winter Triangle.',
    'The name is Greek for “before the dog”. It rises just ahead of Sirius, the Dog Star.',
    'Arab astronomers called it the Northern Sirius.',
    'Inuit named it Sikuliarsiujuittuq: a man too heavy to go hunting on the new sea ice, who lived by taking food from others.',
  ],
}
