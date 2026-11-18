import type { CloseupStar } from '../star'

/** Figures: Lee et al. 2014 (planet); Hipparcos distance. */
export const kochab: CloseupStar = {
  id: 'kochab',
  name: 'Kochab',
  designation: 'β Ursae Minoris',
  radiusSun: 42,
  look: {
    color: '#ffc480', // about 4,030 K
    limbColor: '#d26a2a',
    limbDarkening: 0.75,
    whiten: 0.08,
    spinSeconds: 700,
    texture: { amplitude: 0.2, scale: 5, speed: 0.04 },
  },
  story: (distance) => [
    `This is Kochab, from ${distance} away: the brightest star in the bowl of the Little Dipper, and once the North Star.`,
    'Earth’s axis slowly wobbles, so the pole wanders among the stars.',
    'From about 1500 BC to AD 500, Kochab was the bright star nearest the pole. It was never as close as Polaris is now.',
    'With its neighbour Pherkad it still circles Polaris every night. Sailors called the pair the Guardians of the Pole.',
    'It is an orange giant: about 4,000 K, two-thirds of the Sun’s temperature.',
    'Size: about 42 times as wide as the Sun and twice as heavy. It gives off nearly 400 times as much light.',
    'Type: K4 III. “K” is an orange star. “III” marks a giant that has used up the hydrogen in its core.',
    'Estimated age: about 3 billion years.',
    'It is 131 light-years away, and almost as bright in our sky as Polaris.',
    'In 2014 astronomers found a planet circling it: six times the mass of Jupiter, with a year of 522 days.',
    'Its name probably comes from an Arabic or Hebrew word that simply means “star”.',
    'In China it is the Emperor, at the heart of the Purple Forbidden Enclosure around the pole.',
    'Navigators once told the time at night from the Guardians, reading them like the hand of a clock.',
  ],
}
