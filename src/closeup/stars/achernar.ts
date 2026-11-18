import type { CloseupStar } from '../star'

/**
 * Figures: Domiciano de Souza et al. 2014 (shape, temperatures and the angle of the axis on the
 * sky, from VLTI imaging). Drawn nearer to side-on than we see it (about 60° in reality), to show
 * the full bulge.
 */
export const achernar: CloseupStar = {
  id: 'achernar',
  name: 'Achernar',
  designation: 'α Eridani',
  radiusSun: 9.2, // at the equator; about 6.8 pole to pole
  look: {
    color: '#b1c4ff', // about 17,000 K at the poles
    limbColor: '#c6d2fd',
    limbDarkening: 0.4,
    radius: 0.21,
    spinSeconds: 16,
    axis: { rollDeg: 35, inclinationDeg: 78 }, // the axis lies at this angle on the sky
    flattening: 0.26,
    gravityDarkening: 0.34,
    equatorColor: '#d3ddff', // about 12,700 K
    glare: 1.2,
    ring: { inner: 1.12, outer: 2.1, tilt: 0.21, color: '#ffc7dd', brightness: 0.13 }, // gas shed from the equator
  },
  story: (distance) => [
    `This is Achernar, seen through a dark filter from ${distance} away. It is the flattest bright star in the sky.`,
    'It spins once in about two days. For a star this big that is ferocious: its equator moves at 250 km/s.',
    'The spin flings the equator outward, making the star at least a third wider across than it is from pole to pole.',
    'It is blue-white, but not evenly. The poles are about 17,000 K; the bulging equator is some 4,000 K cooler and dimmer.',
    'It spins so close to its limit that gas leaks from the equator into a thin, faint ring, which comes and goes over the years.',
    'Size: about 9 times as wide as the Sun at the equator and 6 times as heavy. It gives off some 3,000 times as much light.',
    'Type: B6 Ve. “B” is a hot blue-white star, “V” means it is in its prime, and “e” marks the glowing gas around it.',
    'Estimated age: a few tens of millions of years.',
    'It is 139 light-years away and the ninth-brightest star of the night. It never rises for most of the northern hemisphere.',
    'Its name is Arabic for “the end of the river”: the mouth of Eridanus, the long river constellation.',
    'The name first belonged to a fainter star farther north, where the river ended for Greek astronomers. It moved south later.',
    'In China it is the first star of the Crooked Running Water.',
  ],
}
