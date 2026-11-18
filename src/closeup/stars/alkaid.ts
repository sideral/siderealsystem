import type { CloseupStar } from '../star'

/**
 * Figures: Hipparcos distance; standard B3 V values.
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
  story: [
    'Alkaid, the star at the end of the Big Dipper’s handle, leads a funeral.',
    'Its name is from the Arabic for “the leader of the daughters of the bier”.',
    'In that old Arab picture the Dipper’s bowl is a coffin. The three handle stars are mourners walking ahead of it.',
    'Alkaid does not really belong with them. Five stars in the middle of the Dipper travel through space as a family.',
    'Alkaid, like Dubhe at the other end, is only passing through.',
    'It is blue-white and nearly three times as hot as the Sun. Much of its light is ultraviolet, which we cannot see.',
    'It is drawn plain on purpose: single, steady and smooth. Astronomers use it as the textbook example of its type.',
    'It is over three times as wide as the Sun, and as bright as 600 Suns. And it is young: about 10 million years old.',
    'It is about 100 light-years away. The light you see tonight is a century old.',
    'The rest of the Dipper here: Mizar, Alioth and Dubhe. More hot blue stars in their prime: Nunki and Peacock.',
  ],
}
