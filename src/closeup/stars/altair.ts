import type { CloseupStar } from '../star'

/** Figures: Monnier et al. 2007 (CHARA surface image); Bouchaud et al. 2020. Boorong: Stanbridge (1857). */
export const altair: CloseupStar = {
  id: 'altair',
  name: 'Altair',
  designation: 'α Aquilae',
  radiusSun: 2.03, // at the equator; 1.63 pole to pole
  look: {
    color: '#dfe7ff', // about 8,500 K at the poles
    limbColor: '#eef0f4',
    limbDarkening: 0.5,
    spinSeconds: 10,
    axis: { rollDeg: 62, inclinationDeg: 57 }, // as imaged: one pole tipped toward us
    flattening: 0.2,
    gravityDarkening: 0.34,
    equatorColor: '#f8f2ea', // under 7,000 K
    waves: [{ l: 3, m: 2, amplitude: 0.02, seconds: 3 }], // it also quivers: the brightest Delta Scuti star
  },
  story: [
    'Altair spins so fast that it is visibly squashed.',
    'It turns once in about 9 hours. The Sun takes nearly a month.',
    'The spin makes it a fifth wider at the equator than from pole to pole.',
    'The poles sit closer to the hot core, so they glow brighter. The stretched equator is the dimmer band across the middle.',
    'In 2007 it became the first ordinary star after the Sun to have its surface imaged. The picture showed exactly this.',
    'It also quivers, many times a day. The faint ripples crossing it are drawn stronger than they really are.',
    'It is white, a third hotter than the Sun, about twice as wide and 11 times as bright.',
    'It is under 17 light-years away. Few stars you can see without a telescope are closer.',
    'With Vega and Deneb it forms the Summer Triangle. Its name is from the Arabic for “the flying eagle”.',
    'In China it is the Cowherd, kept from his Weaver Girl by the river of the Milky Way. Their story is told at Vega.',
    'For the Kulin peoples of Australia it is Bunjil, the wedge-tailed eagle and creator. The stars beside him are his two wives.',
    'More stars spun flat: Vega, Regulus and Achernar.',
  ],
}
