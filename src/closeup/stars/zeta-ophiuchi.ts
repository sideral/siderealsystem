import type { CloseupStar } from '../star'

/** Figures: Howarth & Smith 2001; Villamariz & Herrero 2005; Neuhäuser et al. 2020 (runaway history). */
export const zetaOphiuchi: CloseupStar = {
  id: 'zeta-ophiuchi',
  name: 'Zeta Ophiuchi',
  designation: 'ζ Ophiuchi',
  radiusSun: 8.5,
  look: {
    color: '#a4bcff', // about 32,000 K
    limbColor: '#b6c8fd',
    limbDarkening: 0.3,
    whiten: 0.4,
    radius: 0.2,
    spinSeconds: 9,
    axis: { rollDeg: 20 },
    flattening: 0.14,
    gravityDarkening: 0.3,
    glare: 1.5,
    nebula: { kind: 'bowshock', color: '#ff9a5c', brightness: 0.5, angleDeg: 150, standoff: 0.38 },
  },
  story: (distance) => [
    `This is Zeta Ophiuchi, from ${distance} away: a runaway star, flung across the galaxy by an explosion.`,
    'It once circled a heavier partner. About a million years ago that partner blew up as a supernova, and this star was let go.',
    'It left at the speed it had been orbiting. It is still moving at about 30 km/s through the gas between the stars.',
    'Ahead of it, its wind piles that gas into a great curved shock wave, like the wave at the bow of a ship.',
    'It is one of the hottest stars you can see: about 32,000 K, more than five times the Sun’s temperature.',
    'It also spins once a day, at about 400 km/s, and so bulges at the equator. Its partner fed it gas, and spin, before dying.',
    'Size: about 8.5 times as wide as the Sun and 20 times as heavy. It gives off some 80,000 times as much light.',
    'Type: O9.5 V. “O” is the hottest class of star there is, and this is the nearest one to the Sun.',
    'Estimated age: about 3 million years. It too will explode, within a few million more.',
    'It is about 370 light-years away.',
    'It would be one of the brightest stars in the sky, but thick clouds of dust in front of it dim and redden its light.',
    'It has no well-known traditional name. Its story was read from its motion.',
  ],
}
