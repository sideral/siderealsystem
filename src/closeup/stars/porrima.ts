import type { CloseupStar } from '../star'

/**
 * Figures: Scardia et al. 2007 (169-year orbit, closest approach in 2005). Shows one star, with
 * its twin as a point on their long, narrow orbit, drawn thousands of times too small.
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
    radius: 0.17,
    spinSeconds: 40,
    axis: { rollDeg: -12 },
    texture: { amplitude: 0.07, scale: 22, speed: 0.2, cells: 0.6 },
    companions: [
      {
        color: '#f5f3ff',
        radius: 0.013,
        brightness: 1,
        glare: 0.55,
        // 169 years in reality. Closest approach is on the far side, so the twin slips behind the disc:
        // the two merge into one, as they did for telescopes in 2005. (The real orbit is narrower still: e = 0.88.)
        place: { orbit: { distance: 2, seconds: 40, inclinationDeg: 40, eccentricity: 0.7, periapsisDeg: -90, nodeDeg: 125, phase: 0.5 } },
      },
    ],
  },
  story: (distance) => [
    `This is Porrima, in Virgo, from ${distance} away: two stars that are almost perfect twins.`,
    'One fills the view. The bright point is the other. They match in colour, size and brightness.',
    'Both are white: about 7,100 K, a little hotter than the Sun.',
    'Size: each is about 1.4 times as wide as the Sun and 1.4 times as heavy. Each gives off 4 times as much light.',
    'They circle each other every 169 years on a long, stretched orbit.',
    'That orbit is drawn here, sped up and shrunk. Really the twin never comes closer than Jupiter is to the Sun.',
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
