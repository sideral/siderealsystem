import type { CloseupStar } from '../star'

/** Figures: Pigulski et al. 2016; Ausseloos et al. 2006. Lore: Best, "Tuhoe" (Māori); Snedegar 1995 (Khoikhoi). */
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
    spinSeconds: 50,
    pulse: { seconds: 9, radius: 0.004, brightness: 0.02 },
    glare: 1.3,
  },
  story: (distance) => [
    `This is Hadar, seen through a dark filter from ${distance} away. It and Alpha Centauri are the two Pointers to the Southern Cross.`,
    'The two look like neighbours. They are not: Alpha Centauri is 4 light-years away, and Hadar is about 390.',
    'It is blue-white and very hot: about 25,000 K, more than four times the Sun’s temperature.',
    'It is really three stars. Two near-twins circle each other every 357 days, too close to show apart here. A third orbits far outside.',
    'The surface also pulses, swelling and shrinking slightly every few hours.',
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
