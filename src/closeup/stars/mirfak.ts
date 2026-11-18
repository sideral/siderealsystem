import type { CloseupStar } from '../star'

/**
 * Figures: Lyubimkov et al. 2010; Hipparcos distance; cluster age about 50 to 70 million years.
 * The points are a few stars of its cluster, light-years away in reality.
 */
export const mirfak: CloseupStar = {
  id: 'mirfak',
  name: 'Mirfak',
  designation: 'α Persei',
  radiusSun: 68,
  look: {
    color: '#fcf6ee', // about 6,350 K
    limbColor: '#f2d2a4',
    limbDarkening: 0.6,
    radius: 0.22,
    spinSeconds: 400,
    axis: { rollDeg: 14 },
    texture: { amplitude: 0.1, scale: 12, speed: 0.06, cells: 0.5 },
    glare: 1.25,
    // A few of the hot blue-white stars of its cluster, trailing off to one side as they do in the sky
    companions: [
      { color: '#b9caff', radius: 0.01, brightness: 1, glare: 0.42, place: { at: [0.3, 0.3] } }, // δ Persei
      { color: '#c2d1ff', radius: 0.01, brightness: 1, glare: 0.24, place: { at: [0.4, 0.1] } }, // ψ Persei
      { color: '#b4c6ff', radius: 0.01, brightness: 1, glare: 0.3, place: { at: [0.36, -0.13] } }, // 34 Persei
      { color: '#bccdff', radius: 0.01, brightness: 1, glare: 0.18, place: { at: [-0.38, 0.26] } }, // 29 Persei
    ],
  },
  story: [
    'Mirfak is the brightest member of a family of stars you can see with the naked eye.',
    'On a dark night a sprinkle of faint stars shows around it. Binoculars show dozens. They were all born together.',
    'The blue-white points here are a few of them, drawn far closer than they really are. The real ones lie light-years apart.',
    'The others are still in their prime. Mirfak, the heaviest, used up its core hydrogen first and swelled into a supergiant.',
    'It is yellow-white, a little hotter than the Sun, but nearly 70 times as wide. In the Sun’s place it would reach most of the way to Mercury.',
    'It gives off the light of some 5,000 Suns.',
    'It is about 50 million years old, like the rest of its cluster. The Sun is nearly a hundred times older.',
    'It is close to the range where stars like this start to pulse, as Delta Cephei does. But it holds steady.',
    'It is about 510 light-years away, in Perseus. For much of Europe and North America it never sets.',
    'Its name is Arabic for “the elbow”.',
    'More yellow supergiants: Polaris, Sadr and Wezen. Another star among its siblings: Alcyone.',
  ],
}
