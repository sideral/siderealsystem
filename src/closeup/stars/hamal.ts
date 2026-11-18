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
  story: [
    'Hamal once marked the start of spring.',
    'Two thousand years ago, the Sun crossed the sky’s equator close to it each March.',
    'Earth’s slow wobble has since moved that crossing point into Pisces. Astronomers still call it the First Point of Aries.',
    'It is the brightest star of Aries the Ram. Its name is Arabic for “the lamb”.',
    'It is an orange giant: cooler than the Sun, 15 times as wide, and as bright as 90 Suns.',
    'Its disc has been measured directly, which is rare. Astronomers use it to check the sizes they work out for other stars.',
    'Even the way it dims toward its edge has been measured, not just worked out. That dimming is drawn strongly here.',
    'A planet nearly twice as heavy as Jupiter circles it. Its year is about as long as ours.',
    'It is 66 light-years away.',
    'More orange giants: Pollux, Arcturus and Kochab.',
  ],
}
