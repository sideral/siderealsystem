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
  story: [
    'Zeta Reticuli is a pair of Sun-like stars. In countless stories it is the home of aliens.',
    'In 1961 an American couple, Betty and Barney Hill, said they had been taken aboard a UFO.',
    'Betty Hill drew a star map she said she was shown. A schoolteacher, Marjorie Fish, matched it to these two stars.',
    'Astronomers were not persuaded. But the idea stuck. In the film “Alien”, the crew finds the creature on a moon in this system.',
    'The real stars are quieter. One fills the view. The point is the other. Both are near copies of the Sun, a little smaller and dimmer.',
    'They are far apart: nearly a hundred times as far as Pluto is from the Sun. One orbit takes well over 100,000 years.',
    'Here the far star is drawn closer in than it really is. From Earth, sharp eyes can split the pair with no telescope, in a dark sky.',
    'They are 39 light-years away. No planets are known around either.',
    'The constellation is the Reticle: the crosshairs in a telescope eyepiece. A French astronomer drew it in the 1750s.',
    'More near twins of the Sun: 18 Scorpii, Alpha Centauri and Tau Ceti.',
  ],
}
