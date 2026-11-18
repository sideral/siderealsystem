import type { CloseupStar } from '../star'

/**
 * Figures: Hipparcos distance; Washington Double Star Catalog. Shows the golden giant, with its
 * blue companions (three stars, about 1,000 AU away) as three points, spread apart so they show.
 */
export const almach: CloseupStar = {
  id: 'almach',
  name: 'Almach',
  designation: 'γ Andromedae',
  radiusSun: 80,
  look: {
    color: '#ffcc90', // about 4,250 K
    limbColor: '#dc7f38',
    limbDarkening: 0.73,
    whiten: 0.1,
    spinSeconds: 800,
    axis: { rollDeg: 40 },
    texture: { amplitude: 0.3, scale: 4, speed: 0.04, cells: 0.5 },
    companions: [
      // The blue trio: a pair too tight for any telescope to split, and a third star close beside it
      { color: '#b3c8ff', radius: 0.0085, brightness: 1, glare: 0.35, place: { at: [0.3, 0.3] } },
      { color: '#bccfff', radius: 0.0085, brightness: 1, glare: 0.22, place: { at: [0.322, 0.309] } },
      { color: '#cad7ff', radius: 0.0085, brightness: 1, glare: 0.28, place: { at: [0.335, 0.262] } },
    ],
  },
  story: [
    'Almach is a golden giant with a blue companion. It is one of the finest coloured pairs in the sky.',
    'A small telescope shows one gold star and one blue. But the blue star is really three.',
    'Two of the three sit too close together for any telescope to split. Almach is a family of four.',
    'The three blue points here are spread apart so they show. They are drawn closer to the giant than they really are.',
    'The real trio is about 30 times as far from the giant as Neptune is from the Sun.',
    'The giant is gold because it is cool. It is about 80 times as wide as the Sun. In the Sun’s place it would nearly fill Mercury’s orbit.',
    'It gives off the light of some 2,000 Suns. The blue stars are hot, nearly twice the Sun’s temperature.',
    'It is about 350 light-years away, at the foot of Andromeda.',
    'Its name is from the Arabic for the caracal, a desert lynx.',
    'More coloured pairs: Albireo, Izar and Rasalgethi.',
  ],
}
