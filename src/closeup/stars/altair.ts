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
  story: (distance) => [
    `This is Altair, seen through a dark filter from ${distance} away. It spins so fast that it is visibly squashed.`,
    'Altair turns once in about 9 hours. The Sun takes nearly a month.',
    'The spin makes it a fifth wider at the equator than from pole to pole.',
    'It is white, but its poles are about 8,500 K and its stretched equator under 7,000 K, so the middle band is dimmer.',
    'In 2007 it became the first ordinary star other than the Sun to have its surface imaged. The picture showed exactly this.',
    'Size: about twice as wide as the Sun at the equator and 1.8 times as heavy. It gives off 11 times as much light.',
    'Type: A7 V. “A” is a hot white star. “V” means it is in its prime, fusing hydrogen like the Sun.',
    'Estimated age: uncertain. Estimates run from about 100 million to a billion years.',
    'It is 16.7 light-years away, one of the closest stars you can see without a telescope.',
    'With Vega and Deneb it forms the Summer Triangle.',
    'Its name is from the Arabic for “the flying eagle”.',
    'In China it is Niulang, the Cowherd, kept from his Weaver Girl, Vega, by the river of the Milky Way.',
    'For Māori it is Poutūterangi, the pillar of the sky, and gives its name to a month of the harvest season.',
    'For the Kulin peoples of Australia it is Bunjil, the wedge-tailed eagle and creator. The stars beside him are his two wives.',
  ],
}
