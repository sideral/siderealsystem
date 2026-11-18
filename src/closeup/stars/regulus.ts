import type { CloseupStar } from '../star'

/**
 * Figures: McAlister et al. 2005 and Che et al. 2011 (CHARA shape, temperatures and the angle of
 * the axis on the sky); Gies et al. 2020 (companion). The companion's orbit is drawn about ten
 * times too close in, and its tilt is a guess.
 */
export const regulus: CloseupStar = {
  id: 'regulus',
  name: 'Regulus',
  designation: 'α Leonis',
  radiusSun: 4.16, // at the equator; 3.14 pole to pole
  look: {
    color: '#b7c9ff', // about 15,000 K at the poles
    limbColor: '#c8d4fd',
    limbDarkening: 0.4,
    radius: 0.2,
    spinSeconds: 18,
    axis: { rollDeg: 78, inclinationDeg: 86 }, // as seen from Earth: side-on, with the axis lying almost flat
    flattening: 0.24,
    gravityDarkening: 0.34,
    equatorColor: '#d4deff', // about 10,000 K
    companions: [
      {
        color: '#a9beff', // the stripped core of the star that fed it, on its way to being a white dwarf
        radius: 0.011,
        brightness: 1,
        glare: 0.1,
        place: { orbit: { distance: 1.65, seconds: 36, inclinationDeg: 84, nodeDeg: 78, phase: 0.05 } },
      },
    ],
  },
  story: [
    'Regulus, the heart of the Lion, spins so fast that it is close to flying apart.',
    'It turns once in 16 hours, and it bulges. It is a third wider at the equator than from pole to pole.',
    'A little faster, about a tenth, and it would begin to break up.',
    'From Earth we see it side-on, with its axis tipped right over. So here the bulging equator runs from top to bottom.',
    'The poles are hotter than the stretched equator, so the middle band is dimmer.',
    'The spin may be stolen. Regulus seems to have been fed gas, and with it spin, by a companion star.',
    'What is left of that companion is a small white dwarf, circling every 40 days. It is the faint point here, drawn far closer in than it really is.',
    'Regulus is blue-white, about four times as wide as the Sun and as bright as 300 Suns. It is 79 light-years away.',
    'It sits almost exactly on the path the Sun, Moon and planets follow. The Moon regularly passes in front of it.',
    'Its name is Latin for “little king”. Babylonians called it the King.',
    'In ancient Persia it was one of four royal stars that watched over the sky. The others were Aldebaran, Antares and Fomalhaut.',
    'More stars spun flat: Achernar, Altair and Vega.',
  ],
}
