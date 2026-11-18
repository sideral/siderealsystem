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
  story: (distance) => [
    `This is Alderamin, the brightest star of Cepheus the King, from ${distance} away.`,
    'It spins once in about 12 hours. The Sun takes nearly a month.',
    'The spin flings its equator outward. It is about a fifth wider across than it is from pole to pole.',
    'The poles sit closer to the hot core, so they are hotter and brighter than the equator.',
    'We see it at a tilt, with one pole turned our way. That pole is the brighter patch low on the disc.',
    'Astronomers have mapped that shape directly, by linking telescopes spread across a mountaintop in California.',
    'The thin glow at its edge is hot gas that gives off X-rays: a sign of magnetic unrest, rare in a star this hot.',
    'It is white: about 7,700 K on average.',
    'Size: about 2.5 times as wide as the Sun and twice as heavy. It gives off 17 times as much light.',
    'Type: A8 V. “A” is a white star, hotter than the Sun. It is close to the end of its prime.',
    'Estimated age: about 800 million years.',
    'It is 49 light-years away.',
    'Earth’s axis slowly wobbles, so the North Star changes. In about 5,500 years it will be Alderamin.',
    'Its name is from the Arabic for “the right arm”, of the king.',
  ],
}
