import type { CloseupStar } from '../star'

/**
 * Figures: Scholz et al. 2003 (brown dwarfs); Matthews et al. 2024 (JWST image of the planet);
 * Demory et al. 2009 (radius). The pair of red points is the two brown dwarfs and the pale point
 * the planet. All three are drawn far brighter than they would look from here.
 */
export const epsilonIndi: CloseupStar = {
  id: 'epsilon-indi',
  name: 'Epsilon Indi',
  designation: 'ε Indi',
  radiusSun: 0.73,
  look: {
    color: '#ffdaac', // about 4,630 K
    limbColor: '#e3944f',
    limbDarkening: 0.68,
    whiten: 0.12,
    spinSeconds: 120, // about 23 days in reality
    axis: { rollDeg: -22, inclinationDeg: 62 },
    texture: { amplitude: 0.16, scale: 18, speed: 0.2, cells: 1 },
    spots: { darkness: 0.7, size: 0.085, seed: 19, count: 5, faculae: 0.5 },
    companions: [
      // The two brown dwarfs, a tight pair far out. Drawn far brighter than they would look.
      { color: '#cf5d3d', radius: 0.0085, brightness: 0.9, glare: 0.1, place: { at: [0.33, 0.29] } },
      { color: '#b84c35', radius: 0.0085, brightness: 0.9, glare: 0.07, place: { at: [0.356, 0.277] } },
      // The giant planet, shining only by reflected light. Also drawn brighter than true.
      { color: '#e6d6c0', radius: 0.0085, brightness: 0.8, glare: 0.06, place: { at: [-0.39, 0.2] } },
    ],
  },
  story: (distance) => [
    `This is Epsilon Indi, from ${distance} away: one of the Sun’s nearest neighbours, in the southern constellation of the Indian.`,
    'It is an orange dwarf: about 4,630 K, cooler than the Sun, with a fine-grained surface and a few dark spots.',
    'Size: about three-quarters as wide as the Sun and three-quarters as heavy. It gives off just a fifth as much light.',
    'It is 11.9 light-years away. Only a handful of naked-eye stars are closer.',
    'It moves fast against the background stars. In about 400 years it crosses a stretch of sky as wide as the full Moon.',
    'The two dim red points are brown dwarfs: objects too small to shine as stars. They circle 1,500 times as far out as Earth is from the Sun.',
    'They were found in 2003, and they are the nearest brown dwarfs but one pair. They are drawn far brighter than they would look.',
    'The pale point is a giant planet, much closer in, with several times the mass of Jupiter. In 2024 the James Webb Space Telescope took its picture.',
    'It is one of the coldest planets ever photographed directly: about as warm as Earth, in an orbit decades long.',
    'Type: K5 V. “K” is an orange star. “V” means it is in its prime, fusing hydrogen.',
    'Estimated age: about 3.5 billion years.',
    'From there the Sun would be an ordinary second-magnitude star, sitting beside the bowl of the Big Dipper.',
  ],
}
