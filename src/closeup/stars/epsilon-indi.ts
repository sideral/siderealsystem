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
  story: [
    'Epsilon Indi is one of the Sun’s nearest neighbours. It has two failed stars and a photographed planet in tow.',
    'The two dim red points are brown dwarfs: objects too small to shine as stars. They circle far out, as a tight pair.',
    'They were found in 2003, and are among the nearest brown dwarfs known.',
    'The pale point is a giant planet, several times as heavy as Jupiter. In 2024 the James Webb Space Telescope took its picture.',
    'It is one of the coldest planets ever photographed directly. This planet is about as warm as Earth, on an orbit decades long.',
    'All three are drawn far brighter, and closer in, than they really are.',
    'The star is an orange dwarf with a few dark spots. It is cooler than the Sun, three-quarters as wide and a fifth as bright.',
    'It is 12 light-years away. Only a handful of naked-eye stars are closer.',
    'It moves fast against the background stars. In about 400 years it crosses a stretch of sky as wide as the full Moon.',
    'From there the Sun would be an ordinary star, sitting beside the bowl of the Big Dipper.',
    'More small orange neighbours: Epsilon Eridani, 61 Cygni and 40 Eridani. More photographed planets: HR 8799.',
  ],
}
