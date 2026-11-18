import type { CloseupStar } from '../star'

/** Figures: Zhao et al. 2009 (CHARA images of the flattened disc); Hinkley et al. 2011 (companion). */
export const rasalhague: CloseupStar = {
  id: 'rasalhague',
  name: 'Rasalhague',
  designation: 'α Ophiuchi',
  radiusSun: 2.6,
  look: {
    color: '#dfe6ff', // about 8,000 K averaged over the surface
    limbColor: '#ece9e2',
    limbDarkening: 0.5,
    spinSeconds: 14,
    flattening: 0.17,
    gravityDarkening: 0.35,
  },
  story: (distance) => [
    `This is Rasalhague, the head of Ophiuchus the Serpent Bearer, from ${distance} away.`,
    'It spins once in about 14 hours, so fast that it bulges at the equator. It is a fifth wider there than from pole to pole.',
    'It is turning at nearly nine-tenths of the speed that would tear it apart.',
    'The poles sit closer to the hot core, so they are hotter and brighter than the equator.',
    'It is white: about 8,000 K on average.',
    'Size: about 2.6 times as wide as the Sun and 2.4 times as heavy. It gives off 25 times as much light.',
    'A small orange star circles it every 8.6 years.',
    'Type: A5 III-IV. “A” is a white star, hotter than the Sun. It is just starting to leave its prime.',
    'Estimated age: about 800 million years.',
    'It is 49 light-years away.',
    'Its name is from the Arabic for “the head of the serpent collector”.',
    'It sits a few degrees from Rasalgethi, the head of Hercules. The two giants are drawn head to head, upside down to each other.',
  ],
}
