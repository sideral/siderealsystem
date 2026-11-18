import type { CloseupStar } from '../star'

/**
 * Figures: Kervella et al. 2008 (radii); Bessel 1838 (parallax). Shows 61 Cygni A, with B as a
 * point in the background. At about 80 AU, B would be a brilliant star, not a disc.
 */
export const cygni61: CloseupStar = {
  id: '61-cygni',
  name: '61 Cygni',
  designation: 'Bessel’s Star',
  radiusSun: 0.665,
  look: {
    color: '#ffd9aa', // 4,530 K
    limbColor: '#e2924f',
    limbDarkening: 0.68,
    whiten: 0.12,
    spinSeconds: 170, // about 35 days in reality
    texture: { amplitude: 0.09, scale: 16, speed: 0.18 },
    spots: { darkness: 0.7, size: 0.09, seed: 51 },
    companion: {
      color: '#ffc689', // 4,080 K
      radius: 0.0085,
      brightness: 1,
      glare: 0.4,
      place: { at: [0.36, 0.24] },
    },
  },
  story: (distance) => [
    `This is 61 Cygni A, from ${distance} away. It is the first star whose distance was ever measured.`,
    'In 1838 the German astronomer Friedrich Bessel watched it shift slightly against the far stars as Earth circled the Sun.',
    'From that tiny shift he worked out its distance: about 10 light-years. For the first time, the scale of the stars was known.',
    'He chose it because it moves. It crosses the sky faster than almost any other star you can see: a Moon’s width in 350 years.',
    'A star that seems to move that fast is probably close. An earlier astronomer had named it the Flying Star.',
    'It is an orange dwarf: about 4,530 K, cooler and dimmer than the Sun, with dark spots that come and go over seven years.',
    'The point beside it is its partner, 61 Cygni B: slightly smaller and cooler, about 4,080 K.',
    'The two take about 700 years to circle each other, twice as far apart as Pluto is from the Sun.',
    'Size: A is two-thirds as wide as the Sun and gives off a seventh as much light. B is a little smaller and half as bright as A.',
    'Types: K5 V and K7 V. “K” is an orange star. “V” means it is in its prime, fusing hydrogen.',
    'Estimated age: about 6 billion years, older than the Sun.',
    'They are 11.4 light-years away. Under a dark sky you can just see them, as one faint star in the Swan.',
  ],
}
