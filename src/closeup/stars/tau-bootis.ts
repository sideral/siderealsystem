import type { CloseupStar } from '../star'

/**
 * Figures: Butler et al. 1997 (the planet); Brogi et al. 2012 (its orbit tilt, 45°, and mass);
 * Donati et al. 2008 and Fares et al. 2009 (the star turns in step with the planet, and its
 * magnetic field flips about once a year). The planet's real orbit is 7.4 star radii out; it is
 * drawn closer in so that the star is large enough to show its spots. The spots are a guess:
 * its magnetic field has been mapped, not its face. The planet does not cross the star, so its
 * size is a guess too.
 */
export const tauBootis: CloseupStar = {
  id: 'tau-bootis',
  name: 'Tau Boötis',
  designation: 'τ Boötis',
  radiusSun: 1.42,
  look: {
    color: '#fff5ea', // about 6,400 K
    limbColor: '#f3cc98',
    limbDarkening: 0.58,
    whiten: 0.14,
    radius: 0.1,
    spinSeconds: 10, // in step with the planet: 3.3 days for both in reality
    axis: { rollDeg: 15, inclinationDeg: 45 },
    texture: { amplitude: 0.12, scale: 14, speed: 0.2, cells: 1 },
    spots: { darkness: 0.9, size: 0.2, seed: 12, count: 7, beltDeg: 28, faculae: 0.5 }, // a guess: they make the turning visible
    glare: 0.85,
    companions: [
      {
        color: '#e3bf9a',
        radius: 0.11,
        brightness: 0.08,
        glare: 0,
        lit: 0.9,
        place: { orbit: { distance: 4.4, seconds: 10, inclinationDeg: 45, nodeDeg: 15 } },
      },
      { color: '#ff8f55', radius: 0.022, brightness: 0.8, glare: 0.07, place: { at: [-0.38, 0.36] } }, // the red dwarf, about 220 AU out
    ],
  },
  story: [
    'Tau Boötis is a star that turns in step with its planet. The planet has taken hold of its sun.',
    'Usually it is the other way round. A star’s pull locks a close planet, so one side always faces in. Here the planet is heavy enough to pull back.',
    'It is about six times as heavy as Jupiter and circles in just over three days. The star’s surface now turns once in the same three days.',
    'Watch the spots. The planet hangs over the same patch of the star, orbit after orbit.',
    'The star’s magnetism is restless too. Its north and south magnetic poles swap about once a year. The Sun takes eleven years.',
    'The spots are a guess: nobody has seen its face. The planet’s size is a guess too, and its orbit is drawn closer in than it really is.',
    'It was one of the first planets found beyond the Solar System, in 1996. Later its own air was detected, and with that its true weight.',
    'The star is yellow-white, a little hotter than the Sun, and three times as bright.',
    'The red point is a dim second star, drawn far closer in than it really is.',
    'It is 51 light-years away: an easy star to see, near bright Arcturus.',
    'More stars with planets: 51 Pegasi, Upsilon Andromedae and 55 Cancri.',
  ],
}
