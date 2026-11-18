import type { CloseupStar } from '../star'

/**
 * Figures: Hatzes et al. 2012 (star and planet); Aurière et al. 2009 (weak magnetic field).
 * The planet's real orbit is about 39 star radii out: it is drawn far closer in, and larger,
 * than true.
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
  story: [
    'Pollux is the nearest giant star to the Sun, and it has a planet.',
    'The small dot is that planet, Thestias. It is at least twice as heavy as Jupiter, with a year of about 19 months.',
    'It is drawn far closer in, and larger, than it really is.',
    'Pollux is an orange giant, cooler than the Sun. It is nine times as wide, and as bright as about 30 Suns.',
    'It began as a hotter, whiter star, something like Sirius. Now its core hydrogen is gone, and it has swollen and cooled.',
    'Its surface churns gently, and its edge is dimmer and redder than its centre. The faint spots mark its weak magnetism.',
    'It is 34 light-years away.',
    'It is brighter than its twin Castor, yet it was labelled “beta”. Nobody is sure why.',
    'In Greek myth he is the immortal twin, a boxer. His story is told at Castor.',
    'More orange giants with planets: Hamal, Kochab and Errai. His twin: Castor.',
  ],
}
