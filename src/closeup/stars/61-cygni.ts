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
    axis: { rollDeg: 9, inclinationDeg: 70 },
    texture: { amplitude: 0.16, scale: 17, speed: 0.2, cells: 1 },
    // Its spot cycle, about 7 years, is one of the clearest known on any star but the Sun
    spots: { darkness: 0.8, size: 0.075, seed: 51, count: 10, beltDeg: 24, cycleSeconds: 30, faculae: 0.55 },
    companions: [
      { color: '#ffc083', radius: 0.0085, brightness: 1, glare: 0.4, place: { at: [-0.36, 0.24] } }, // B: 4,080 K
    ],
  },
  story: [
    '61 Cygni is the first star whose distance was ever measured.',
    'In 1838 Friedrich Bessel saw it shift against the far stars as Earth circled the Sun.',
    'From that tiny shift he worked out how far away it was: about 10 light-years. For the first time, people knew the scale of the stars.',
    'He chose it because it moves. It crosses the sky faster than almost any other star you can see. It moves a Moon’s width in 350 years.',
    'A star that seems to move that fast is probably close. An earlier astronomer had named it the Flying Star.',
    'It is really two orange dwarfs. One fills the view. The point beside it is the other, drawn closer in than it really is.',
    'They take about 700 years to circle each other. They are twice as far apart as Pluto is from the Sun.',
    'Both are smaller, cooler and much dimmer than the Sun. The dark spots on this one come and go over seven years, sped up here.',
    'They are 11 light-years away. Under a dark sky you can just see them, as one faint star in the Swan.',
    'More of the Sun’s small orange neighbours: Epsilon Eridani, Epsilon Indi and 40 Eridani.',
  ],
}
