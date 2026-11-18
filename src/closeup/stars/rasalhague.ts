import type { CloseupStar } from '../star'

/**
 * Figures: Zhao et al. 2009 (CHARA images of the flattened disc, and the angle of its axis);
 * Hinkley et al. 2011 (companion). The point is that companion, a few AU away.
 */
export const rasalhague: CloseupStar = {
  id: 'rasalhague',
  name: 'Rasalhague',
  designation: 'α Ophiuchi',
  radiusSun: 2.6,
  look: {
    color: '#d3deff', // about 9,300 K at the poles
    limbColor: '#e2e8fb',
    limbDarkening: 0.5,
    spinSeconds: 14,
    axis: { rollDeg: -54, inclinationDeg: 88 }, // as imaged: almost exactly side-on
    flattening: 0.17,
    gravityDarkening: 0.3,
    equatorColor: '#eaedff', // about 7,500 K
    companions: [
      { color: '#ffc38a', radius: 0.0085, brightness: 0.6, glare: 0.12, place: { at: [-0.36, 0.17] } }, // about 4,300 K
    ],
  },
  story: [
    'Rasalhague spins at nearly nine-tenths of the speed that would tear it apart.',
    'It turns once in about 14 hours, so fast that it bulges. It is a fifth wider at the equator than from pole to pole.',
    'We see it almost exactly side-on. Astronomers have imaged that squashed shape directly.',
    'The poles sit closer to the hot core, so they are hotter and brighter than the equator.',
    'The star is white, hotter than the Sun and 25 times as bright. It is about two and a half times as wide.',
    'A small orange star circles it every nine years. It is the faint point here, drawn closer in than it really is.',
    'It is 49 light-years away, and marks the head of Ophiuchus the Serpent Bearer.',
    'It sits a few degrees from Rasalgethi, the head of Hercules. The two giants are drawn head to head, upside down to each other.',
    'More stars spun flat: Altair, Alderamin and Regulus.',
  ],
}
