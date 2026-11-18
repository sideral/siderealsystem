import type { CloseupStar } from '../star'

/**
 * Figures: Washington Double Star Catalog; Hipparcos distance. Shows the brightest of the four
 * stars, with its close partner (about 120 AU away) as a point.
 */
export const epsilonLyrae: CloseupStar = {
  id: 'epsilon-lyrae',
  name: 'Epsilon Lyrae',
  designation: 'ε Lyrae',
  radiusSun: 2,
  look: {
    color: '#e3eaff', // about 7,900 K
    limbColor: '#ede9e1',
    limbDarkening: 0.52,
    spinSeconds: 22,
    flattening: 0.06,
    gravityDarkening: 0.1,
    companion: {
      color: '#f1f1ff', // about 7,300 K
      radius: 0.0085,
      brightness: 0.8,
      glare: 0.5,
      place: { at: [0.33, 0.27] },
    },
  },
  story: (distance) => [
    `This is Epsilon Lyrae, the Double Double, from ${distance} away. It lies right next to Vega.`,
    'To most eyes it is one faint star. Sharp eyes on a dark night can split it in two. It is a classic test of eyesight.',
    'A telescope then shows that each of those two is itself a close pair. Four stars, two by two.',
    'This view shows the brightest of the four. The point is its close partner.',
    'All four are white: 7,000 to 8,000 K, hotter than the Sun.',
    'Size: each is about one and a half to two times as wide as the Sun and gives off 6 to 20 times as much light.',
    'The stars of each pair take many centuries to circle each other: over a thousand years for one pair.',
    'The two pairs are about a sixth of a light-year apart. One orbit of pair around pair takes hundreds of thousands of years.',
    'From a planet at one pair, the other would be two brilliant points, each about as bright as a quarter Moon.',
    'Types: A and F. White and yellow-white stars, all in their prime.',
    'Estimated age: about 800 million years.',
    'They are 162 light-years away.',
    'William Herschel studied the group in 1779, as part of his hunt for double stars.',
  ],
}
