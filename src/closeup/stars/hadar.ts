import type { CloseupStar } from '../star'

/**
 * Figures: Pigulski et al. 2016; Ausseloos et al. 2006. Lore: Snedegar 1995 (Khoikhoi).
 * The twin is drawn far closer in than it is, on a less stretched orbit than the real one
 * (e = 0.82), and the 357-day orbit is sped up. The point is Hadar B. The ripples are exaggerated.
 */
export const hadar: CloseupStar = {
  id: 'hadar',
  name: 'Hadar',
  designation: 'β Centauri',
  radiusSun: 9,
  look: {
    color: '#aabfff', // about 25,000 K
    limbColor: '#bccbfd',
    limbDarkening: 0.35,
    whiten: 0.4,
    radius: 0.075,
    spinSeconds: 50,
    axis: { rollDeg: -14 },
    // A Beta Cephei star: several rhythms at once, drawn far stronger than the real, tiny changes
    waves: [
      { l: 2, m: 2, amplitude: 0.09, seconds: 4.4 },
      { l: 3, m: 1, amplitude: 0.07, seconds: 6.1 },
    ],
    pulse: { seconds: 9, radius: 0.006, brightness: 0.03 },
    glare: 1.3,
    companions: [
      {
        color: '#acc1ff', // its near-twin, about 24,000 K
        radius: 0.95,
        brightness: 0.95,
        glare: 0.15,
        place: { orbit: { distance: 3.7, seconds: 24, inclinationDeg: 44, eccentricity: 0.45, nodeDeg: 18 } },
      },
      { color: '#b3c6ff', radius: 0.029, brightness: 1, glare: 0.35, place: { at: [-0.3, 0.33] } }, // Hadar B, far outside
    ],
  },
  story: [
    'Hadar is one of the two Pointers that lead the eye to the Southern Cross.',
    'The other is Alpha Centauri. The two look like neighbours. They are not: Alpha Centauri is 4 light-years away, and Hadar about 390.',
    'In southern Africa, Khoikhoi herders called the Pointers Mura. They were “the eyes” of a great beast.',
    'Up close it is three stars. Two near-twins circle each other in just under a year, on a long, stretched orbit. The third is the point farther out.',
    'Here the twins are drawn far closer together than they really are. Their orbit is rounder, and sped up.',
    'The surface also pulses every few hours. The ripples crossing it are drawn far stronger than they really are.',
    'Each twin is blue-white, more than four times as hot as the Sun, and about 9 times as wide.',
    'Together they give off the light of tens of thousands of Suns. Both are heavy enough to end as supernovas.',
    'It is the 11th-brightest star in the night sky. For most of Europe and North America it never rises.',
    'More hot blue stars that pulse: Mimosa, Shaula and Spica.',
  ],
}
