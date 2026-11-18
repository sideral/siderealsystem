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
  story: [
    'Mizar, in the handle of the Big Dipper, is an eye test, and then a nest of six stars.',
    'On a clear night you can see a fainter star, Alcor, right beside it. Telling them apart was a traditional test of eyesight.',
    'Mizar was the first double star found with a telescope, around 1617. In 1857 it was the first to be photographed as a pair.',
    'In 1889 its light revealed a hidden twin. It was the first star found to be double from its light alone.',
    'The twins are the two discs here. They swing round each other every 20 days. They are drawn about five times closer together than they really are.',
    'The two points side by side are a second close pair. The lone point is Alcor, itself double, about a light-year off. Six stars in all.',
    'Each twin is white, half again as hot as the Sun and more than twice as wide.',
    'They are about 80 light-years away. They travel through space with four of the other Dipper stars. All were born together.',
    'In India Mizar and Alcor are Vasishtha and Arundhati, a devoted couple. Newlyweds are shown the pair.',
    'For the Mi’kmaq of north-east America the Dipper’s bowl is a bear. The handle stars are hunters.',
    'Mizar is Chickadee, and little Alcor is the pot he carries to cook the bear.',
    'More stars that are secretly several: Castor, Epsilon Lyrae and Capella. The rest of the Dipper here: Alioth, Alkaid and Dubhe.',
  ],
}
