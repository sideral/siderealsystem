import type { CloseupStar } from '../star'

/**
 * Figures: Washington Double Star Catalog; Hipparcos distance. Shows the brightest of the four
 * stars, with its close partner (about 120 AU away) as the bright point and the other pair
 * (about 10,000 AU away) as two fainter points.
 */
export const epsilonLyrae: CloseupStar = {
  id: 'epsilon-lyrae',
  name: 'Epsilon Lyrae',
  designation: 'ε Lyrae',
  radiusSun: 2,
  look: {
    color: '#e3eaff', // about 7,900 K
    limbColor: '#e9edfb',
    limbDarkening: 0.52,
    radius: 0.22,
    spinSeconds: 22,
    axis: { rollDeg: 24 },
    flattening: 0.08,
    gravityDarkening: 0.14,
    companions: [
      { color: '#f1f1ff', radius: 0.01, brightness: 0.8, glare: 0.55, place: { at: [0.17, 0.33] } }, // its partner, about 7,300 K
      // The other pair, which lies at right angles to this one in the sky
      { color: '#e6ecff', radius: 0.01, brightness: 1, glare: 0.22, place: { at: [-0.39, 0.2] } },
      { color: '#eaeeff', radius: 0.01, brightness: 1, glare: 0.19, place: { at: [-0.366, 0.188] } },
    ],
  },
  story: [
    'Epsilon Lyrae is the Double Double. It is a test for your eyes, then a surprise in a telescope.',
    'To most eyes it is one faint star beside Vega. Sharp eyes on a dark night can split it in two.',
    'A telescope then shows that each of those two is itself a close pair. Four stars, two by two.',
    'This view shows the brightest of the four. The bright point is its close partner. The two fainter points, side by side, are the other pair.',
    'All three points are drawn closer in than they really are.',
    'The stars of each pair take many centuries to circle each other. One orbit of pair around pair takes hundreds of thousands of years.',
    'From a planet at one pair, the other would be two brilliant points. Each would be about as bright as a quarter Moon.',
    'All four are white, hotter than the Sun, and up to twice as wide.',
    'They are about 160 light-years away.',
    'More stars that are secretly several: Castor, Mizar and Alula Australis.',
  ],
}
