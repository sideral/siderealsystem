import type { CloseupStar } from '../star'

/**
 * Figures: Butler et al. 1997 and 1999 (planets); McArthur et al. 2010 (tilted orbits); Baines
 * et al. 2008 (radius). The star is drawn small with its three planets circling it: orbit shapes
 * and tilts as measured, but far closer together than true, and the planets too big. The red
 * point is the red dwarf, 750 AU out.
 */
export const upsilonAndromedae: CloseupStar = {
  id: 'upsilon-andromedae',
  name: 'Upsilon Andromedae',
  designation: 'Titawin',
  radiusSun: 1.48,
  look: {
    color: '#fef4ea', // about 6,210 K
    limbColor: '#f3cc98',
    limbDarkening: 0.58,
    whiten: 0.22,
    radius: 0.055,
    spinSeconds: 55, // about 12 days in reality
    texture: { amplitude: 0.12, scale: 12, speed: 0.2, cells: 1 },
    glare: 0.85,
    // The three giant planets. The shapes of the orbits and the 30-degree tilt between the outer two
    // follow the measurements. Sizes do not: the true orbits are about 9, 120 and 370 star radii
    // across, and the planets are drawn several times too big.
    companions: [
      { color: '#e9bd94', radius: 0.09, brightness: 0.08, glare: 0, lit: 0.9, place: { orbit: { distance: 1.7, seconds: 4, inclinationDeg: 42, nodeDeg: 10 } } }, // b, Saffar
      {
        color: '#dccbb2', // c, Samh
        radius: 0.11,
        brightness: 0.04,
        glare: 0,
        lit: 0.9,
        place: { orbit: { distance: 3.5, seconds: 15, inclinationDeg: 60, eccentricity: 0.25, periapsisDeg: 200, nodeDeg: 26, phase: 0.3 } },
      },
      {
        color: '#cdd6e2', // d, Majriti
        radius: 0.11,
        brightness: 0.04,
        glare: 0,
        lit: 0.9,
        place: { orbit: { distance: 6.2, seconds: 38, inclinationDeg: 36, eccentricity: 0.27, periapsisDeg: 90, nodeDeg: -4, phase: 0.6 } },
      },
      { color: '#ff8f55', radius: 0.04, brightness: 0.8, glare: 0.07, place: { at: [-0.4, 0.37] } }, // the red dwarf, 750 AU out
    ],
  },
  story: (distance) => [
    `This is Upsilon Andromedae, from ${distance} away. It was the first Sun-like star found to have a whole family of planets.`,
    'In 1996 astronomers found one planet here: a giant that circles the star every 4.6 days, far closer in than Mercury is to the Sun.',
    'In 1999 they found two more, farther out. Until then, every star known to have planets had shown only one.',
    'It proved that our solar system is not the only one.',
    'But it is nothing like ours. All three known planets are giants, and two of them follow stretched, oval orbits.',
    'Those two orbits are also tilted 30 degrees to each other. Our planets all circle in nearly the same plane.',
    'The three dots are the planets. Their orbits are drawn far closer together than true, and the planets far too big.',
    'Something violent probably happened here: perhaps a planet was thrown out of the system altogether.',
    'The star is yellow-white: about 6,210 K, a little hotter than the Sun.',
    'Size: about one and a half times as wide as the Sun and 1.3 times as heavy. It gives off 3.5 times as much light.',
    'The faint red point is a red dwarf. It circles far out, 750 times as far as Earth is from the Sun.',
    'Type: F8 V. “F” is a yellow-white star. “V” means it is in its prime, fusing hydrogen.',
    'Estimated age: about 3 billion years.',
    'It is 44 light-years away, and easy to see with the naked eye.',
    'Its name, Titawin, honours a Moroccan city. The planets are named for astronomers of medieval Spain: Saffar, Samh and Majriti.',
  ],
}
