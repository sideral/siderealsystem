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
  story: [
    'Achernar is the flattest bright star in the sky.',
    'It spins once in about two days. For a star this big that is ferocious. Its equator moves over a hundred times faster than the Sun’s.',
    'The spin flings the equator outward. The star is at least a third wider across than from pole to pole.',
    'The poles sit closer to the hot core, so they glow hotter and brighter than the equator.',
    'It spins so close to its limit that gas leaks from the equator into a thin, faint ring.',
    'The real ring comes and goes over the years. Here it is drawn steady. The star is tipped a little further over, to show the bulge.',
    'It is blue-white, nearly three times as hot as the Sun, and as bright as some 3,000 Suns.',
    'It is about 140 light-years away, and the ninth-brightest star of the night. From most of the northern hemisphere it never rises.',
    'Its name is Arabic for “the end of the river”. It is the mouth of Eridanus, the long river constellation.',
    'The name first belonged to a fainter star farther north. There the river ended for the Greeks. It moved south later.',
    'More stars spun flat: Regulus, Altair and Vega. More with a ring of shed gas: Gamma Cassiopeiae and Dschubba.',
  ],
}
