import type { CloseupStar } from '../star'

/**
 * Figures: Hatzes et al. 2012 (star and planet); Aurière et al. 2009 (weak magnetic field).
 * Boorong: Stanbridge (1857). The planet's real orbit is about 39 star radii out: it is drawn
 * far closer in, and larger, than true.
 */
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
    radius: 0.16,
    spinSeconds: 400,
    axis: { rollDeg: 14 },
    texture: { amplitude: 0.22, scale: 8, speed: 0.05, cells: 0.6 }, // the broad, slow cells of a giant
    spots: { darkness: 0.35, size: 0.09, seed: 19, count: 3 }, // faint: its magnetism is weak, but it has been measured
    companions: [
      // Thestias. Its real orbit is about 39 star radii out; drawn far closer in, and the planet larger.
      { color: '#dccab4', radius: 0.035, brightness: 0.03, glare: 0, lit: 0.9, place: { orbit: { distance: 2.7, seconds: 28, inclinationDeg: 62, nodeDeg: 22 } } },
    ],
  },
  story: (distance) => [
    `This is Pollux, the brighter of the Twins, seen through a dark filter from ${distance} away.`,
    'It is orange because it is cool: about 4,600 K, more than 1,000 K cooler than the Sun.',
    'Its surface churns gently, and its edge is dimmer and redder than its centre.',
    'Size: 9 times as wide as the Sun and almost twice as heavy. It gives off about 33 times as much light.',
    'Type: K0 III. “K” is an orange star. “III” marks a giant that has used up the hydrogen in its core.',
    'Estimated age: about 700 million years. It began as a hotter, whiter star, something like Sirius.',
    'It is 34 light-years away, the nearest giant star to the Sun.',
    'The small dot is its planet, Thestias: at least twice as heavy as Jupiter, circling every 590 days. It is drawn far closer in than true.',
    'Pollux is brighter than its twin Castor, yet it was labelled “beta”. Nobody is sure why.',
    'In Greek myth the twins were brothers. Pollux was the immortal one, a boxer, who shared his immortality with Castor.',
    'In China it is the third star of the North River.',
    'To the Boorong people of Australia, Castor and Pollux were Yurree and Wanjel, two hunters chasing Purra the kangaroo.',
  ],
}
