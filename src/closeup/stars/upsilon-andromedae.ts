import type { CloseupStar } from '../star'

/** Figures: Butler et al. 1997 and 1999 (planets); McArthur et al. 2010 (tilted orbits); Baines et al. 2008 (radius). */
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
    spinSeconds: 55, // about 12 days in reality
    texture: { amplitude: 0.06, scale: 20, speed: 0.2 },
  },
  story: (distance) => [
    `This is Upsilon Andromedae, from ${distance} away. It was the first Sun-like star found to have a whole family of planets.`,
    'In 1996 astronomers found one planet here: a giant that circles the star every 4.6 days, far closer in than Mercury is to the Sun.',
    'In 1999 they found two more, farther out. Until then, every star known to have planets had shown only one.',
    'It proved that our solar system is not the only one.',
    'But it is nothing like ours. All three known planets are giants, and two of them follow stretched, oval orbits.',
    'Those two orbits are also tilted 30 degrees to each other. Our planets all circle in nearly the same plane.',
    'Something violent probably happened here: perhaps a planet was thrown out of the system altogether.',
    'The star is yellow-white: about 6,210 K, a little hotter than the Sun.',
    'Size: about one and a half times as wide as the Sun and 1.3 times as heavy. It gives off 3.5 times as much light.',
    'A faint red dwarf circles far out, 750 times as far as Earth is from the Sun.',
    'Type: F8 V. “F” is a yellow-white star. “V” means it is in its prime, fusing hydrogen.',
    'Estimated age: about 3 billion years.',
    'It is 44 light-years away, and easy to see with the naked eye.',
    'Its name, Titawin, honours a Moroccan city. The planets are named for astronomers of medieval Spain: Saffar, Samh and Majriti.',
  ],
}
