import type { CloseupStar } from '../star'

/** Figures: Porto de Mello & da Silva 1997 (solar twin); Bazot et al. 2011 (measured radius and mass); Hall et al. 2007 (cycle). */
export const scorpii18: CloseupStar = {
  id: '18-scorpii',
  name: '18 Scorpii',
  designation: 'HR 6060',
  radiusSun: 1.01,
  look: {
    color: '#fff0e6', // about 5,810 K
    limbColor: '#f5bf85',
    limbDarkening: 0.6,
    whiten: 0.2,
    spinSeconds: 115, // about 23 days in reality
    texture: { amplitude: 0.07, scale: 18, speed: 0.2 },
    spots: { darkness: 0.55, size: 0.045, seed: 77 },
  },
  story: (distance) => [
    `This is 18 Scorpii, from ${distance} away. If it looks familiar, it should: it is the closest thing to a copy of the Sun.`,
    'Astronomers call such a star a solar twin. This is the nearest and brightest one known.',
    'Temperature: about 5,810 K. The Sun: 5,772 K.',
    'Size: 1.01 times as wide as the Sun and about 1.03 times as heavy. It gives off 5 percent more light.',
    'It is made of nearly the same mix of elements. It spins once in about 23 days. The Sun takes 25.',
    'It even has a cycle of spots and storms like the Sun’s. But its cycle runs about 7 years, and the Sun’s runs 11.',
    'Type: G2 V, the same as the Sun.',
    'Estimated age: about 3 to 4 billion years, a little younger than the Sun.',
    'It holds about three times as much lithium. Stars slowly destroy lithium, so that fits a younger star.',
    'It is 46 light-years away, and just visible to the naked eye in a dark sky, in the north of Scorpius.',
    'Two Brazilian astronomers picked it out as a twin in 1997.',
    'Astronomers use it as a stand-in for the Sun. It lets them point at night the same instruments they use on other stars.',
    'No planets have been confirmed there yet.',
  ],
}
