import type { CloseupStar } from '../star'

/**
 * Figures: Gromadzki & Mikołajewska 2009 (the orbit: about 44 years, e = 0.25); Schmid et al.
 * 2017 (VLT image splitting the pair and the foot of the jets); Yang et al. 2005 (the Korean
 * records of 1073 and 1074). The white dwarf really circles about twice as far out as drawn, and
 * is a point far too small to show. The disc and jets are drawn brighter than true. The
 * hourglass nebula around the pair (Cederblad 211) is not drawn.
 */
export const rAquarii: CloseupStar = {
  id: 'r-aquarii',
  name: 'R Aquarii',
  designation: 'HR 8992',
  radiusSun: 400,
  look: {
    color: '#ffa052', // about 2,800 K
    limbColor: '#c44c1c',
    limbDarkening: 0.8,
    whiten: 0.04,
    radius: 0.09,
    spinSeconds: 1200,
    texture: { amplitude: 0.4, scale: 2.4, speed: 0.03, cells: 0.4 },
    // Real period 387 days; smallest and hottest near maximum light
    pulse: { seconds: 14, radius: -0.08, brightness: 0.5, skew: 0.3, dimColor: '#d84f1c' },
    fuzz: 0.12,
    wobble: 0.06,
    glare: 0.7,
    envelope: { color: '#ff6a30', strength: 0.16, reach: 0.6, clumps: 0.6, speed: 0.06 }, // the slow wind the white dwarf feeds on
    companions: [
      {
        color: '#d6e4ff', // the white dwarf
        radius: 0.035,
        brightness: 1,
        glare: 0.3,
        place: { orbit: { distance: 4, seconds: 30, inclinationDeg: 70, eccentricity: 0.25, periapsisDeg: 60, nodeDeg: -25, phase: 0.15 } },
        disc: { outer: 5, tilt: 0.35, color: '#a9c8ff', brightness: 0.4 },
        jets: { color: '#9fe0d8', brightness: 0.45, length: 1.7 },
      },
    ],
  },
  story: [
    'R Aquarii is a red giant with a tiny dead star feeding on it. The dead star fires jets into space.',
    'The giant swells and fades every 13 months, like Mira. It breathes out a slow, thick wind.',
    'The small white point is a white dwarf: the burnt-out core of an older star. It is about the size of Earth, and circles the giant every 44 years.',
    'Its gravity catches part of the giant’s wind. The gas spirals in through a hot, glowing disc.',
    'Not all of it lands. Some is shot out from the two faces of the disc in narrow jets. They move hundreds of times faster than a rifle bullet.',
    'The real jets twist as they go. They reach dozens of times farther from the pair than Pluto is from the Sun.',
    'Here the white dwarf is drawn larger and closer in than it really is. Its orbit is sped up. The disc and jets are drawn brighter.',
    'Now and then the gas piled on the white dwarf ignites like a bomb. Korean astronomers may have recorded one such flash in 1073.',
    'Those blasts left a glowing, hourglass-shaped cloud around the pair. It is not drawn here.',
    'The giant is deep red and hundreds of times as wide as the Sun. The pair is about 700 light-years away: the nearest of its kind.',
    'At its brightest it is just visible without a telescope on a dark night. At its faintest it needs a good one.',
    'More dying giants that pulse: Mira and Chi Cygni. More stars feeding a partner: Beta Lyrae and Algol.',
  ],
}
