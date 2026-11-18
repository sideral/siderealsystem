import type { CloseupStar } from '../star'

/**
 * Figures: Ohnaka et al. 2013 and 2017 (VLTI size and surface map). Boorong: Stanbridge (1857).
 * The blue point is Antares B, a hot star about 530 AU away.
 */
export const antares: CloseupStar = {
  id: 'antares',
  name: 'Antares',
  designation: 'α Scorpii',
  radiusSun: 680,
  look: {
    color: '#ffa861', // about 3,660 K
    limbColor: '#c24a1c',
    limbDarkening: 0.75,
    whiten: 0.06,
    spinSeconds: 900,
    texture: { amplitude: 0.8, scale: 1.8, speed: 0.035 },
    pulse: { seconds: 28, radius: 0.015, brightness: 0.06 },
    fuzz: 0.05,
    wobble: 0.06,
    glare: 0.9,
    companion: {
      color: '#b9ccff',
      radius: 0.0085,
      brightness: 1,
      glare: 0.3,
      place: { at: [-0.36, 0.22] },
    },
  },
  story: (distance) => [
    `This is Antares, the heart of the Scorpion, from ${distance} away. Placed where the Sun is, it would reach past Mars.`,
    'It glows orange-red because its surface is only about 3,660 K.',
    'Like Betelgeuse, it boils in a few enormous cells, so it looks patchy, and its edge is blurred by thin outer gas.',
    'In 2017 astronomers mapped its surface and the gas churning above it, the most detailed picture then made of another star.',
    'The blue point is its companion, a hot star about 530 times farther from it than Earth is from the Sun.',
    'Size: around 680 times as wide as the Sun and about 15 times as heavy. It gives off some 75,000 times as much light.',
    'Type: M1.5 Iab. “M” is the coolest, reddest class of star. “Iab” marks a supergiant.',
    'Estimated age: 11 to 15 million years. It is near its end and will explode as a supernova.',
    'It is roughly 550 light-years away, and the brightest member of the nearest group of young, heavy stars.',
    'Its name is Greek for “rival of Mars”. The red planet passes close by it in the sky every couple of years, and they look alike.',
    'In China it is the Fire Star, the heart of the Azure Dragon. Its place in the evening sky set the calendar 3,000 years ago.',
    'For Māori it is Rehua, a chief among the stars. In ancient Persia it was a royal star, the watcher of the west.',
    'For the Cherokee it was a dog guarding one end of the Milky Way, the Path of Souls, with Sirius at the other.',
    'To the Boorong people of Australia it was Djuit, son of Marpeankurrk, the star Arcturus. The stars beside him are his wives.',
  ],
}
