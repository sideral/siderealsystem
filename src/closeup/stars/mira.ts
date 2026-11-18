import type { CloseupStar } from '../star'

/** Figures: Woodruff et al. 2004 (size, temperature); Martin et al. 2007 (GALEX tail); AAVSO light curves. */
export const mira: CloseupStar = {
  id: 'mira',
  name: 'Mira',
  designation: 'ο Ceti',
  radiusSun: 350,
  look: {
    color: '#ffa458', // about 3,000 K
    limbColor: '#c9501f',
    limbDarkening: 0.8,
    whiten: 0.05,
    spinSeconds: 1200,
    texture: { amplitude: 0.3, scale: 2.2, speed: 0.03 },
    // Real period 332 days; smallest and hottest near maximum light
    pulse: { seconds: 16, radius: -0.08, brightness: 0.5 },
    fuzz: 0.12,
    wobble: 0.06,
    glare: 0.8,
  },
  story: (distance) => [
    `This is Mira, a dying red giant, from ${distance} away. Put it in place of the Sun and it would reach to the orbit of Mars.`,
    'It is deep orange-red because it is cool: about 3,000 K, barely half the Sun’s temperature.',
    'Watch it swell and fade. Mira pulses every 332 days, sped up here to a few seconds.',
    'At its brightest it is easy to see with the naked eye. At its faintest it can be 1,500 times dimmer, and you need a telescope.',
    'Most of that is a trick of colour. As it cools, its light slides into the infrared, and molecules form that block visible light.',
    'The edge is blurry and the shape lopsided: its outer layers are so loose that it has no real surface.',
    'Size: around 350 times as wide as the Sun, changing as it pulses. Yet it weighs only a little more than the Sun.',
    'It gives off about 9,000 times the Sun’s light.',
    'Type: M7 III. “M” is the coolest, reddest class. “III” marks a giant. A whole family, the Mira variables, is named after it.',
    'Estimated age: about 6 billion years. This is what the Sun will look like near its end, some 5 billion years from now.',
    'It is shedding its outer layers into space. In time only its core will be left: a white dwarf.',
    'It is about 300 light-years away, racing through the galaxy at 130 km/s. It trails a tail of cast-off gas 13 light-years long.',
    'It has a small companion, probably a white dwarf, that catches some of the gas Mira throws off.',
    'In 1596 David Fabricius saw it and took it for a new star. It faded, and then it came back.',
    'It was the first star known to change brightness on a cycle. In 1662 Johannes Hevelius named it Mira, “the wonderful”.',
    'No older name for it is known for certain. A star that vanishes for months is easy to leave off the map.',
  ],
}
