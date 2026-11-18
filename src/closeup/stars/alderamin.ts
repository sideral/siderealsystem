import type { CloseupStar } from '../star'

/**
 * Figures: van Belle et al. 2006 and Zhao et al. 2009 (CHARA: flattened, gravity-darkened disc,
 * tipped about 56° with its pole pointing down the sky). It is also an X-ray source (ROSAT).
 */
export const alderamin: CloseupStar = {
  id: 'alderamin',
  name: 'Alderamin',
  designation: 'α Cephei',
  radiusSun: 2.5,
  look: {
    color: '#dce5ff', // about 8,600 K at the poles
    limbColor: '#e9ecf8',
    limbDarkening: 0.52,
    spinSeconds: 12,
    axis: { rollDeg: 180, inclinationDeg: 56 }, // as imaged: one pole tipped toward us, pointing down the sky
    flattening: 0.2,
    gravityDarkening: 0.33,
    equatorColor: '#eef0fb', // about 6,600 K
    envelope: { color: '#c9d8ff', strength: 0.12, reach: 0.15 }, // hot gas that gives off X-rays
  },
  story: [
    'Alderamin spins so fast that it is squashed, and one day it will be the North Star.',
    'It turns once in about 12 hours. The Sun takes nearly a month.',
    'The spin flings its equator outward. It is about a fifth wider across than it is from pole to pole.',
    'The poles sit closer to the hot core, so they are hotter and brighter. One is turned our way: the brighter patch low on the disc.',
    'Astronomers mapped that shape by linking telescopes on a Californian mountaintop.',
    'The thin glow at its edge is hot gas that gives off X-rays. It is a sign of magnetic unrest, rare in a star this hot.',
    'It is white and hotter than the Sun, and about two and a half times as wide. It shines like 17 Suns.',
    'It is 49 light-years away, the brightest star of Cepheus the King.',
    'Earth’s axis slowly wobbles, so the North Star changes. In about 5,500 years the job will pass to Alderamin.',
    'More stars spun flat: Altair, Rasalhague and Regulus. More pole stars, past and future: Thuban and Vega.',
  ],
}
