import type { CloseupStar } from '../star'

/**
 * Figures: Hipparcos distance; Washington Double Star Catalog. Shows the golden giant, with its
 * blue companions (three stars, about 1,000 AU away) as one point.
 */
export const almach: CloseupStar = {
  id: 'almach',
  name: 'Almach',
  designation: 'γ Andromedae',
  radiusSun: 80,
  look: {
    color: '#ffd09a', // about 4,250 K
    limbColor: '#dd8440',
    limbDarkening: 0.72,
    whiten: 0.1,
    spinSeconds: 800,
    texture: { amplitude: 0.25, scale: 4, speed: 0.04 },
    companion: {
      color: '#b6caff',
      radius: 0.0085,
      brightness: 1,
      glare: 0.5,
      place: { at: [0.33, 0.28] },
    },
  },
  story: (distance) => [
    `This is Almach, from ${distance} away: a golden giant with a blue companion, one of the finest coloured pairs in the sky.`,
    'The giant is gold because it is cool: about 4,250 K. Its surface churns in big cells.',
    'The blue point beside it is hot: over 10,000 K. A small telescope shows the two side by side, gold and blue.',
    'That blue point is not one star but three, packed too tightly to tell apart. Almach is a family of four.',
    'The blue trio is about 30 times as far from the giant as Neptune is from the Sun.',
    'Size: the giant is about 80 times as wide as the Sun and gives off around 2,000 times as much light.',
    'Types: K3 II, an orange bright giant, with hot blue-white and white stars in their prime.',
    'Estimated age: uncertain.',
    'It is about 350 light-years away, at the foot of Andromeda.',
    'The German astronomer Johann Tobias Mayer first saw it as a pair in 1778.',
    'Its name is from the Arabic for the caracal, a desert lynx.',
    'In China it is the first star of the Great General of the Heavens.',
  ],
}
