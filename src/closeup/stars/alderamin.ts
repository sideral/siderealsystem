import type { CloseupStar } from '../star'

/** Figures: van Belle et al. 2006 and Zhao et al. 2009 (CHARA: flattened, gravity-darkened disc). */
export const alderamin: CloseupStar = {
  id: 'alderamin',
  name: 'Alderamin',
  designation: 'α Cephei',
  radiusSun: 2.5,
  look: {
    color: '#e6ecff', // about 7,700 K averaged over the surface
    limbColor: '#efe9df',
    limbDarkening: 0.52,
    spinSeconds: 12,
    flattening: 0.2,
    gravityDarkening: 0.35,
  },
  story: (distance) => [
    `This is Alderamin, the brightest star of Cepheus the King, from ${distance} away.`,
    'It spins once in about 12 hours. The Sun takes nearly a month.',
    'The spin flings its equator outward. It is about a fifth wider across than it is from pole to pole.',
    'The poles sit closer to the hot core, so they are hotter and brighter than the equator.',
    'Astronomers have mapped that shape directly, by linking telescopes spread across a mountaintop in California.',
    'It is white: about 7,700 K on average.',
    'Size: about 2.5 times as wide as the Sun and twice as heavy. It gives off 17 times as much light.',
    'Type: A8 V. “A” is a white star, hotter than the Sun. It is close to the end of its prime.',
    'Estimated age: about 800 million years.',
    'It is 49 light-years away.',
    'Earth’s axis slowly wobbles, so the North Star changes. In about 5,500 years it will be Alderamin.',
    'Its name is from the Arabic for “the right arm”, of the king.',
  ],
}
