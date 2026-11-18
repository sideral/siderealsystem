import type { CloseupStar } from '../star'

/** Figures: Challouf et al. 2014 (radius); Hipparcos distance. Lore: MacDonald, "The Arctic Sky" (Inuit). */
export const bellatrix: CloseupStar = {
  id: 'bellatrix',
  name: 'Bellatrix',
  designation: 'γ Orionis',
  radiusSun: 5.75,
  look: {
    color: '#aec3ff', // about 22,000 K
    limbColor: '#bfcdfd',
    limbDarkening: 0.35,
    whiten: 0.4,
    spinSeconds: 55,
    axis: { rollDeg: 24, inclinationDeg: 70 },
    // Its slight variability, drawn as one slow wave and far stronger than the real change
    waves: [{ l: 2, m: 2, amplitude: 0.06, seconds: 14 }],
    glare: 1.3,
  },
  story: (distance) => [
    `This is Bellatrix, one of Orion’s shoulders, seen through a dark filter from ${distance} away.`,
    'It is blue-white and hot: about 22,000 K, nearly four times the Sun’s temperature. Its surface is smooth.',
    'It looks like one of the family of bright blue stars in Orion. It is not: at 250 light-years, it is several times closer than they are.',
    'Size: about 6 times as wide as the Sun and 8 times as heavy. It gives off around 9,000 times as much light.',
    'Type: B2 III. “B” is a hot blue-white star. “III” marks a giant.',
    'Estimated age: about 25 million years.',
    'It sits near a dividing line. It may explode as a supernova, or it may settle into a heavy white dwarf.',
    'It is one of the 30 brightest stars in the night sky.',
    'For decades astronomers used it as a standard of steady brightness to compare other stars with. Then it turned out to vary a little.',
    'The slow, faint ripple crossing it here stands for that change. The real one is far too small to see.',
    'Its name is Latin for “female warrior”. It is also called the Amazon Star.',
    'Inuit paired it with Betelgeuse as Akuttujuuk, “the two placed far apart”.',
    'When the two appeared before dawn in midwinter, the Sun was on its way back.',
  ],
}
