import type { CloseupStar } from '../star'

/** Figures: Adelman et al. 2006 (chemistry); Hipparcos distance. The violet belt stands for its manganese. */
export const elnath: CloseupStar = {
  id: 'elnath',
  name: 'Elnath',
  designation: 'β Tauri',
  radiusSun: 4.2,
  look: {
    color: '#bbcefe', // about 13,800 K
    limbColor: '#cad6fc',
    limbDarkening: 0.4,
    spinSeconds: 120,
    axis: { rollDeg: 9, inclinationDeg: 68 },
    // Manganese floated to the surface. Where it sits is not known; it is drawn as a faint belt.
    patches: { shape: 'belt', color: '#c9b6f5', strength: 0.4, sizeDeg: 16, seed: 29 },
    glare: 1.1,
  },
  story: [
    'Elnath marks the way out of the galaxy.',
    'Look toward it and you look almost exactly away from the Milky Way’s centre.',
    'That way the galaxy is at its thinnest: fewer stars, and then the edge.',
    'It also sits on a border. Old charts drew it as the tip of the Bull’s horn and also as the foot of the Charioteer.',
    'Its name is Arabic for “the butting one”: the horn.',
    'The star is calm and smooth, and that calm has an odd effect. With nothing stirring it, some elements float up and others sink.',
    'So its surface shows far more manganese than the Sun’s. It shows far less calcium and magnesium.',
    'The faint violet belt drawn here stands for that manganese. Where on the star it really sits is a guess.',
    'It is blue-white and more than twice as hot as the Sun. Four times as wide, it shines like 700 Suns.',
    'It is about 130 light-years away, and one of the 30 brightest stars in the night sky.',
    'More stars with patchy chemistry: Alpheratz, Alioth and Cor Caroli.',
  ],
}
