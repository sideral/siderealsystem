import type { CloseupStar } from '../star'

/** Figures: Howarth & van Leeuwen 2019; Bouret et al. 2012. Its distance and mass are uncertain. */
export const naos: CloseupStar = {
  id: 'naos',
  name: 'Naos',
  designation: 'ζ Puppis',
  radiusSun: 19,
  look: {
    color: '#9db7ff', // about 40,000 K
    limbColor: '#b3c6fd',
    limbDarkening: 0.3,
    whiten: 0.45,
    spinSeconds: 14,
    axis: { rollDeg: -15 },
    flattening: 0.06,
    texture: { amplitude: 0.04, scale: 4, speed: 0.03 },
    fuzz: 0.03,
    glare: 1.6,
    envelope: { color: '#7fa0ff', strength: 0.5, reach: 0.45, streaks: 4, clumps: 0.9, speed: 0.5 }, // a fast, clumpy wind
  },
  story: (distance) => [
    `This is Naos, from ${distance} away. It is the hottest bright star in the sky.`,
    'Its surface is about 40,000 K, seven times the Sun’s temperature. It looks as blue as a star can.',
    'Nearly all its light is ultraviolet, invisible to us. What we see is a small fraction of what it gives off.',
    'It blows a wind at 2,500 km/s. The wind is clumpy, and it streams away in rays that soften the star’s edge.',
    'Size: around 19 times as wide as the Sun and several dozen times as heavy.',
    'It gives off well over half a million times the Sun’s light.',
    'Type: O4 I. “O” is the hottest class of star, and “I” marks a supergiant. Stars like this are extremely rare.',
    'Estimated age: 3 to 4 million years. It will explode as a supernova within a few million more.',
    'It is roughly 1,100 light-years away.',
    'Like Zeta Ophiuchi, it is a runaway. It left the cluster where it was born about 2 million years ago, at 60 km/s.',
    'It spins once in under two days, very fast for a star this size.',
    'Its name is Greek for “ship”. It lies in Puppis, the stern of the great ship Argo.',
  ],
}
