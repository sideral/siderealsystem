import type { CloseupStar } from '../star'

/**
 * Figures: Pigulski et al. 2016; Ausseloos et al. 2006. Lore: Best, "Tuhoe" (Māori); Snedegar 1995 (Khoikhoi).
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
  story: (distance) => [
    `This is Hadar, seen through a dark filter from ${distance} away. It and Alpha Centauri are the two Pointers to the Southern Cross.`,
    'The two look like neighbours. They are not: Alpha Centauri is 4 light-years away, and Hadar is about 390.',
    'It is blue-white and very hot: about 25,000 K, more than four times the Sun’s temperature.',
    'It is really three stars. Two near-twins circle each other every 357 days on a long, stretched orbit. The third is the point farther out.',
    'Here the twins are drawn far closer together than they are, and their year is sped up to seconds.',
    'The surface also pulses every few hours. The ripples crossing it here are drawn far stronger than the real ones.',
    'Size: each of the twins is about 9 times as wide as the Sun and 11 or 12 times as heavy.',
    'Together they give off tens of thousands of times the Sun’s light.',
    'Type: B1 III. “B” is a hot blue-white star. “III” marks a giant that has finished the hydrogen in its core.',
    'Estimated age: about 14 million years. Both twins are heavy enough to end as supernovas.',
    'It is the 11th-brightest star in the night sky, and never rises for most of Europe or North America.',
    'Its name is Arabic, and seems to mean “ground”. Its other old name, Agena, may mean “the knee”.',
    'For Māori the Pointers are the rope of an anchor, the Southern Cross, belonging to a great sky canoe.',
    'In southern Africa, Khoikhoi herders called the Pointers Mura, “the eyes” of a great beast.',
  ],
}
