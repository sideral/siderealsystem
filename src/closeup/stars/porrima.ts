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
  story: [
    'Porrima is two stars that are almost perfect twins.',
    'One fills the view. The bright point is the other. They match in colour, size and brightness.',
    'They circle each other every 169 years on a long, stretched orbit.',
    'That orbit is drawn here, sped up and far smaller than it really is. The real twin never comes closer than Jupiter is to the Sun.',
    'At their widest they are far enough apart for any small telescope to split. At their closest they merge into one.',
    'The closest pass came in 2005. They are now widening again, and will keep doing so until about 2090.',
    'In 1833 John Herschel worked out their orbit, one of the first found for a pair of stars.',
    'Both are white, a little hotter than the Sun, half again as wide and four times as bright.',
    'They are 38 light-years away, in Virgo, close to the path of the Sun, Moon and planets.',
    'Porrima was a Roman goddess of prophecy and childbirth.',
    'More fine double stars: Algieba, Alula Australis and Castor.',
  ],
}
