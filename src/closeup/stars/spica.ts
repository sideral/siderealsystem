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
  story: (distance) => [
    `This is Spica, from ${distance} away. To the eye it is a single blue-white star. Up close it is two, almost touching.`,
    'Both are very hot: about 25,000 K and 21,000 K, four times the Sun’s temperature. Most of their light is ultraviolet.',
    'They whirl around each other every 4 days, only 18 million km apart. The orbit is sped up here; sizes and spacing are to scale.',
    'They are so close that each pulls the other into a slight egg shape, and the pair brightens and dims as they turn.',
    'The larger star also pulses. The egg shapes and the ripples are both drawn far stronger here than they are.',
    'Size: 7.5 and 3.7 times as wide as the Sun, and about 11 and 7 times as heavy.',
    'Together they give off more than 20,000 times the Sun’s light.',
    'Types: B1 and B2, hot blue-white stars. The larger is leaving its prime, and is heavy enough to end as a supernova.',
    'Estimated age: about 12 million years.',
    'It is 250 light-years away and the sixteenth-brightest star of the night.',
    'Around 130 BC Hipparchus compared its position with records 150 years old and found the whole sky had shifted.',
    'He had discovered the slow wobble of Earth’s axis.',
    'Its name is Latin for “ear of grain”, the wheat held by Virgo. In China it is the Horn of the Azure Dragon.',
    'On Brazil’s flag it is the lone star above the white band, standing for the state of Pará.',
  ],
}
