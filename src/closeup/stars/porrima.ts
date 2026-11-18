import type { CloseupStar } from '../star'

/**
 * Figures: Scardia et al. 2007 (169-year orbit, closest approach in 2005). Shows one star, with
 * its twin as a point at their average separation, about 43 AU.
 */
export const porrima: CloseupStar = {
  id: 'porrima',
  name: 'Porrima',
  designation: 'γ Virginis',
  radiusSun: 1.45,
  look: {
    color: '#f5f3ff', // about 7,100 K
    limbColor: '#f0dcb8',
    limbDarkening: 0.55,
    spinSeconds: 40,
    texture: { amplitude: 0.05, scale: 20, speed: 0.15 },
    companion: {
      color: '#f5f3ff',
      radius: 0.0085,
      brightness: 1,
      glare: 0.6,
      place: { at: [0.34, 0.26] },
    },
  },
  story: (distance) => [
    `This is Porrima, in Virgo, from ${distance} away: two stars that are almost perfect twins.`,
    'One fills the view. The bright point is the other. They match in colour, size and brightness.',
    'Both are white: about 7,100 K, a little hotter than the Sun.',
    'Size: each is about 1.4 times as wide as the Sun and 1.4 times as heavy. Each gives off 4 times as much light.',
    'They circle each other every 169 years on a long, stretched orbit.',
    'At their widest they are far enough apart for any small telescope to split. At their closest they merge into one.',
    'The closest pass came in 2005. They are now widening again, and will keep doing so until about 2090.',
    'In 1833 John Herschel worked out their orbit. It was one of the first proofs that gravity rules beyond the Sun’s family.',
    'Types: F0 V, twice. “F” is a yellow-white star. “V” means in its prime.',
    'Estimated age: about 1 billion years.',
    'They are 38 light-years away.',
    'Porrima was a Roman goddess of prophecy and childbirth.',
    'The pair lies close to the path of the Sun, Moon and planets, so the Moon sometimes passes in front of it.',
  ],
}
