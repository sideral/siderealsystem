import type { CloseupStar } from '../star'

/** Figures: Porto de Mello & da Silva 1997 (solar twin); Bazot et al. 2011 (measured radius and mass); Hall et al. 2007 (cycle). */
export const scorpii18: CloseupStar = {
  id: '18-scorpii',
  name: '18 Scorpii',
  designation: 'HR 6060',
  radiusSun: 1.01,
  look: {
    color: '#fff1e4', // about 5,810 K
    limbColor: '#f2b877',
    limbDarkening: 0.62,
    whiten: 0.2,
    spinSeconds: 115, // about 23 days in reality
    axis: { rollDeg: -7 }, // tipped a little, as the Sun is seen from Earth
    texture: { amplitude: 0.15, scale: 22, speed: 0.25, cells: 1 }, // fine Sun-like grain
    // As on the Sun: spots keep to two belts either side of the equator, and come and go on a cycle
    spots: { darkness: 0.75, size: 0.05, seed: 77, count: 9, beltDeg: 17, cycleSeconds: 42, faculae: 0.5 },
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
