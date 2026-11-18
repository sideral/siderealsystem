import type { CloseupStar } from '../star'

/** Figures: Lee et al. 2011 (planet); Mozurkewich et al. 2003 (angular size); Hajian et al. 1998 (limb darkening seen directly). */
export const hamal: CloseupStar = {
  id: 'hamal',
  name: 'Hamal',
  designation: 'α Arietis',
  radiusSun: 15,
  look: {
    color: '#ffd29b', // about 4,480 K
    limbColor: '#c8672b',
    limbDarkening: 0.82, // its dimming toward the edge has been measured directly; drawn strong and crisp
    whiten: 0.14,
    spinSeconds: 500,
    axis: { rollDeg: -8 },
    texture: { amplitude: 0.13, scale: 12, speed: 0.05, cells: 0.6 }, // fine grain for a giant, and nothing else: a clean disc
    glare: 0.9,
  },
  story: (distance) => [
    `This is Hamal, the brightest star of Aries the Ram, from ${distance} away.`,
    'It is an orange giant: about 4,500 K.',
    'Two thousand years ago it marked the start of spring. At the March equinox the Sun crossed the sky’s equator close to it.',
    'Earth’s slow wobble has since moved that crossing point into Pisces. Astronomers still call it the First Point of Aries.',
    'Size: about 15 times as wide as the Sun, but only one and a half times as heavy. It gives off around 90 times as much light.',
    'Its disc has been measured directly, which is rare. Astronomers use it to check the sizes they work out for other stars.',
    'Even the way it dims toward its edge has been measured, not just worked out. That dimming is drawn strongly here.',
    'Type: K2 III. “K” is an orange star. “III” marks a giant that has used up the hydrogen in its core.',
    'Estimated age: about 3.4 billion years.',
    'It is 66 light-years away.',
    'In 2011 a planet was found circling it: nearly twice the mass of Jupiter, with a year of 381 days.',
    'Its name is Arabic for “the lamb”.',
  ],
}
