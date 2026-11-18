import type { CloseupStar } from '../star'

/**
 * Figures: Hipparcos distance; standard B3 V values. Lore: Hagar 1900 (Mi’kmaq).
 * Drawn plain on purpose: a single, steady, smooth star, the standard its type is measured by.
 */
export const alkaid: CloseupStar = {
  id: 'alkaid',
  name: 'Alkaid',
  designation: 'η Ursae Majoris',
  radiusSun: 3.4,
  look: {
    color: '#b9ccff', // about 15,500 K
    limbColor: '#c8d5fd',
    limbDarkening: 0.4,
    whiten: 0.45,
    spinSeconds: 30,
    axis: { rollDeg: -6 },
    flattening: 0.03,
    texture: { amplitude: 0.02, scale: 4, speed: 0.01 }, // as smooth as a star gets
    glare: 1.6,
  },
  story: (distance) => [
    `This is Alkaid, the star at the end of the Big Dipper’s handle, seen through a dark filter from ${distance} away.`,
    'It is blue-white and hot: about 15,500 K, nearly three times the Sun’s temperature. Its surface is smooth.',
    'It is young and in its prime, fusing hydrogen, and it gives off much of its light as ultraviolet.',
    'Size: about 3.4 times as wide as the Sun and 6 times as heavy. It gives off some 600 times as much visible light.',
    'Type: B3 V. “B” is a hot blue-white star. “V” means it is in its prime. Astronomers use it as the textbook example of its type.',
    'Estimated age: about 10 million years.',
    'It is 104 light-years away.',
    'Like Dubhe at the other end, it does not belong to the family of five stars in the middle of the Dipper. It is passing through.',
    'Its name is from the Arabic for “the leader of the daughters of the bier”.',
    'In that old Arab picture the bowl is a coffin, and the three handle stars are mourners walking ahead of it.',
    'In China it is the Twinkling Brilliance, the last star of the Northern Dipper’s handle.',
    'In the Mi’kmaq bear hunt, Alkaid is Moose Bird, the third hunter, following Robin and Chickadee.',
  ],
}
