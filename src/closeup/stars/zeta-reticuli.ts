import type { CloseupStar } from '../star'

/**
 * Figures: Hipparcos distance; del Peloso et al. 2000. Shows ζ², with ζ¹ as a point: the two
 * are at least 3,750 AU apart. The folklore: Fuller 1966 (the Hills); Marjorie Fish's star map.
 */
export const zetaReticuli: CloseupStar = {
  id: 'zeta-reticuli',
  name: 'Zeta Reticuli',
  designation: 'ζ Reticuli',
  radiusSun: 0.99,
  look: {
    color: '#fff1e3', // about 5,860 K
    limbColor: '#f4c38a',
    limbDarkening: 0.6,
    whiten: 0.2,
    spinSeconds: 100,
    axis: { rollDeg: -30 },
    texture: { amplitude: 0.15, scale: 20, speed: 0.22, cells: 1 },
    // No spots: a slow, quiet star
    companions: [
      // ζ¹, the twin: about 5,750 K, and thousands of times farther off than the main star is wide
      { color: '#ffefdc', radius: 0.0085, brightness: 1, glare: 0.42, place: { at: [-0.4, 0.34] } },
    ],
  },
  story: (distance) => [
    `This is Zeta Reticuli, from ${distance} away: a pair of Sun-like stars deep in the southern sky.`,
    'One fills the view. The point is the other. Both are yellow, at about 5,860 K and 5,750 K.',
    'Size: each is a little smaller than the Sun, and gives off slightly less light.',
    'They are far apart: at least 3,750 times as far as Earth is from the Sun. One orbit takes well over 100,000 years.',
    'So from Earth they are a wide pair that sharp eyes can split with no telescope, in a dark sky.',
    'Types: G2 V and G3 V. Stars of the Sun’s own class, in their prime.',
    'Estimated age: uncertain. Estimates run from 2 to 8 billion years.',
    'They are 39 light-years away. No planets are known around either.',
    'They are famous for another reason. In 1961 an American couple, Betty and Barney Hill, said they had been taken aboard a UFO.',
    'Betty Hill drew a star map she said she was shown. A schoolteacher, Marjorie Fish, matched it to these two stars.',
    'Astronomers were not persuaded. But the idea stuck, and Zeta Reticuli became the home of aliens in countless stories.',
    'In the film “Alien”, the crew finds the creature on a moon in this system.',
    'The constellation is the Reticle: the crosshairs in a telescope eyepiece. A French astronomer drew it in the 1750s.',
  ],
}
