import type { CloseupStar } from '../star'

/**
 * Figures: Tkachenko et al. 2016. Sizes and spacing are to scale: the second star is half the
 * first's radius and orbits 3.75 radii away, tilted 63° so they do not eclipse. Orbit sped up.
 * The egg shapes and the ripples are drawn far stronger than they are.
 */
export const spica: CloseupStar = {
  id: 'spica',
  name: 'Spica',
  designation: 'α Virginis',
  radiusSun: 7.47,
  look: {
    color: '#aabfff', // about 25,000 K
    limbColor: '#bccbfd',
    limbDarkening: 0.35,
    radius: 0.09,
    spinSeconds: 9,
    flattening: 0.03,
    tide: 0.14, // each pulls the other into an egg
    // The tide its partner raises, and its own Beta Cephei pulsation
    waves: [
      { l: 2, m: 2, amplitude: 0.08, seconds: 4.5 },
      { l: 3, m: 2, amplitude: 0.05, seconds: 6.7 },
    ],
    glare: 1.2,
    companions: [
      {
        color: '#b0c4ff', // about 21,000 K
        radius: 0.5,
        brightness: 0.85,
        glare: 0.2,
        tide: 0.1,
        place: { orbit: { distance: 3.75, seconds: 9, inclinationDeg: 63, eccentricity: 0.13 } },
      },
    ],
  },
  story: [
    'Spica looks like a single blue-white star. Up close it is two, almost touching.',
    'They whirl around each other every four days, much closer than Mercury is to the Sun.',
    'They are so close that each pulls the other into a slight egg shape. The pair brightens and dims as they turn.',
    'The larger star also pulses, in ripples that cross its face.',
    'Sizes and spacing are to scale. The orbit is sped up. The egg shapes and the ripples are drawn far stronger than they really are.',
    'Both are four times as hot as the Sun, and most of their light is ultraviolet. Together they shine like more than 20,000 Suns.',
    'The larger is leaving its prime, and is heavy enough to end as a supernova.',
    'It is 250 light-years away, and the sixteenth-brightest star of the night.',
    'Around 130 BC Hipparchus compared its position with records 150 years old. He found the whole sky had shifted.',
    'He had discovered the slow wobble of Earth’s axis.',
    'Its name is Latin for “ear of grain”, the wheat held by Virgo.',
    'More close pairs: Algol, Mintaka and Beta Lyrae. More hot blue stars that pulse: Mimosa and Hadar.',
  ],
}
