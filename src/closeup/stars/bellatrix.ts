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
  story: [
    'Bellatrix is one of Orion’s shoulders. It looks like one of the family of blue stars around it. It is not.',
    'Orion’s other blue stars were born together, far away. Bellatrix is several times closer, about 250 light-years off.',
    'For decades astronomers used it as a steady standard to compare other stars with. Then it turned out to vary a little.',
    'The slow, faint ripple crossing it stands for that change. It is drawn far stronger than it really is.',
    'It is blue-white and nearly four times as hot as the Sun. Six times as wide, it shines like 9,000 Suns.',
    'It sits near a dividing line. It may explode as a supernova, or it may settle quietly into a heavy white dwarf.',
    'Its name is Latin for “female warrior”. It is also called the Amazon Star.',
    'Inuit paired it with Betelgeuse as “the two placed far apart”.',
    'When the two appeared before dawn in midwinter, the Sun was on its way back.',
    'More hot blue stars: Adhara, Spica and Mimosa. Its neighbours in Orion: Betelgeuse and Rigel.',
  ],
}
