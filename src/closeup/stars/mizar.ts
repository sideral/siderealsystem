import type { CloseupStar } from '../star'

/**
 * Figures: Hummel et al. 1998 (Mizar A orbit); Mamajek et al. 2010 (Alcor). Shows the two
 * near-twin stars of Mizar A, drawn about five times closer together than they are. The pair of
 * points is Mizar B, a few hundred AU away; the lone point is Alcor.
 * Mi'kmaq story: Hagar, "The Celestial Bear" (1900).
 */
export const mizar: CloseupStar = {
  id: 'mizar',
  name: 'Mizar',
  designation: 'ζ Ursae Majoris',
  radiusSun: 2.4,
  look: {
    color: '#d3ddff', // about 9,000 K
    limbColor: '#dde4fc',
    limbDarkening: 0.5,
    radius: 0.08,
    spinSeconds: 100,
    glare: 1.4,
    companions: [
      {
        color: '#d3ddff', // its twin: 20.5 days in reality, on a still more stretched orbit five times as wide
        radius: 1,
        brightness: 1,
        glare: 0.1,
        place: { orbit: { distance: 4, seconds: 26, inclinationDeg: 45, eccentricity: 0.4, periapsisDeg: 180, nodeDeg: 15, phase: 0.35 } },
      },
      { color: '#e2e9ff', radius: 0.0275, brightness: 1, glare: 0.3, place: { at: [-0.28, 0.32] } }, // Mizar B: a second
      { color: '#e6ecff', radius: 0.0275, brightness: 1, glare: 0.22, place: { at: [-0.253, 0.335] } }, // close pair
      { color: '#dde5ff', radius: 0.0275, brightness: 1, glare: 0.14, place: { at: [0.38, -0.24] } }, // Alcor
    ],
  },
  story: (distance) => [
    `This is Mizar, the middle star in the handle of the Big Dipper, from ${distance} away.`,
    'It is a white star of about 9,000 K. The second disc is its twin. They swing round each other every 20 days, on a stretched orbit.',
    'They are drawn here about five times closer together than they really are.',
    'The two points side by side are a second close pair. The lone point is faint Alcor, about a light-year off and itself double. Six stars in all.',
    'On a clear night you can see Alcor right beside Mizar. Telling them apart was a traditional test of eyesight.',
    'Size: each of the twins is about 2.4 times as wide as the Sun and 2.2 times as heavy.',
    'Type: A2 V. “A” is a hot white star. “V” means it is in its prime, fusing hydrogen like the Sun.',
    'Estimated age: about 400 million years, the same as the four neighbouring Dipper stars. They were born together and still travel together.',
    'It is about 83 light-years away.',
    'Mizar was the first double star found with a telescope, around 1617, and the first to be photographed as a pair, in 1857.',
    'In 1889 its light revealed the hidden twin: the first star found to be double from its spectrum alone.',
    'Its name is from the Arabic for “girdle”. Alcor was called “the overlooked one”.',
    'In India they are Vasishtha and Arundhati, a devoted couple, pointed out to newlyweds.',
    'For the Mi’kmaq of north-east America the Dipper’s bowl is a bear and the handle stars are birds hunting it.',
    'Mizar is Chickadee, and little Alcor is the pot he carries to cook the bear.',
  ],
}
