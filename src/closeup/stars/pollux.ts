import type { CloseupStar } from '../star'

/** Figures: Hatzes et al. 2012 (star and planet). Boorong: Stanbridge (1857). */
export const pollux: CloseupStar = {
  id: 'pollux',
  name: 'Pollux',
  designation: 'β Geminorum',
  radiusSun: 9.06,
  look: {
    color: '#ffd29c', // about 4,600 K
    limbColor: '#de8540',
    limbDarkening: 0.7,
    whiten: 0.12,
    spinSeconds: 400,
    texture: { amplitude: 0.12, scale: 8, speed: 0.05 },
  },
  story: (distance) => [
    `This is Pollux, the brighter of the Twins, seen through a dark filter from ${distance} away.`,
    'It is orange because it is cool: about 4,600 K, more than 1,000 K cooler than the Sun.',
    'Its surface churns gently, and its edge is dimmer and redder than its centre.',
    'Size: 9 times as wide as the Sun and almost twice as heavy. It gives off about 33 times as much light.',
    'Type: K0 III. “K” is an orange star. “III” marks a giant that has used up the hydrogen in its core.',
    'Estimated age: about 700 million years. It began as a hotter, whiter star, something like Sirius.',
    'It is 34 light-years away, the nearest giant star to the Sun.',
    'It has a planet at least twice as heavy as Jupiter, circling every 590 days. It is named Thestias.',
    'Pollux is brighter than its twin Castor, yet it was labelled “beta”. Nobody is sure why.',
    'In Greek myth the twins were brothers. Pollux was the immortal one, a boxer, who shared his immortality with Castor.',
    'In China it is the third star of the North River.',
    'To the Boorong people of Australia, Castor and Pollux were Yurree and Wanjel, two hunters chasing Purra the kangaroo.',
  ],
}
