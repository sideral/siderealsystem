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
  story: [
    'Naos is the hottest bright star in the sky.',
    'Its surface is seven times as hot as the Sun’s. It looks as blue as a star can.',
    'Nearly all its light is ultraviolet, invisible to us. What we see is a small fraction of what it gives off.',
    'In all it shines like well over half a million Suns.',
    'It blows a wind fast enough to reach the Moon from Earth in under three minutes.',
    'The wind is clumpy, and it streams away in rays that soften the star’s edge.',
    'It is a runaway. About 2 million years ago it left the cluster where it was born. It is still speeding away.',
    'It spins once in under two days, very fast for a star this size.',
    'It is about 19 times as wide as the Sun and several dozen times as heavy. Stars like this are extremely rare.',
    'It is only 3 or 4 million years old. It will explode as a supernova within a few million more.',
    'It is roughly 1,100 light-years away. Its name is Greek for “ship”: it lies in Puppis, the stern of the great ship Argo.',
    'More of the hottest stars: Zeta Ophiuchi, Theta¹ Orionis C and Alnitak.',
  ],
}
