import type { CloseupStar } from '../star'

/** Figures: Lee et al. 2011 (planet); Mozurkewich et al. 2003 (angular size). */
export const hamal: CloseupStar = {
  id: 'hamal',
  name: 'Hamal',
  designation: 'α Arietis',
  radiusSun: 15,
  look: {
    color: '#ffd29b', // about 4,480 K
    limbColor: '#de8641',
    limbDarkening: 0.7,
    whiten: 0.1,
    spinSeconds: 500,
    texture: { amplitude: 0.15, scale: 7, speed: 0.05 },
  },
  story: (distance) => [
    `This is Hamal, the brightest star of Aries the Ram, from ${distance} away.`,
    'It is an orange giant: about 4,500 K.',
    'Two thousand years ago it marked the start of spring. At the March equinox the Sun crossed the sky’s equator close to it.',
    'Earth’s slow wobble has since moved that crossing point into Pisces. Astronomers still call it the First Point of Aries.',
    'Size: about 15 times as wide as the Sun, but only one and a half times as heavy. It gives off around 90 times as much light.',
    'Its disc has been measured directly, which is rare. Astronomers use it to check the sizes they work out for other stars.',
    'Type: K2 III. “K” is an orange star. “III” marks a giant that has used up the hydrogen in its core.',
    'Estimated age: about 3.4 billion years.',
    'It is 66 light-years away.',
    'In 2011 a planet was found circling it: nearly twice the mass of Jupiter, with a year of 381 days.',
    'Its name is Arabic for “the lamb”.',
  ],
}
