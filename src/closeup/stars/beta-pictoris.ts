import type { CloseupStar } from '../star'

/**
 * Figures: Smith & Terrile 1984 (the disc); Lagrange et al. 2010, 2019 (planets b and c);
 * Mamajek & Bell 2014 (age). The disc is drawn hundreds of times too close to the star, so
 * that it fits in the view: the real one starts far outside this frame.
 */
export const betaPictoris: CloseupStar = {
  id: 'beta-pictoris',
  name: 'Beta Pictoris',
  designation: 'β Pictoris',
  radiusSun: 1.8,
  look: {
    color: '#e6ebff', // 8,050 K
    limbColor: '#eef0fb',
    limbDarkening: 0.5,
    radius: 0.2,
    spinSeconds: 20, // about 16 hours in reality
    axis: { rollDeg: 30 },
    flattening: 0.04,
    ring: { inner: 1.5, outer: 9, tilt: 0.03, color: '#ffe6c2', brightness: 0.24, warpDeg: 4 }, // the inner disc is warped
    companions: [
      {
        color: '#ffb47a', // planet b, still glowing from its birth
        radius: 0.011,
        brightness: 1,
        glare: 0.12,
        place: { orbit: { distance: 2, seconds: 44, inclinationDeg: 89, nodeDeg: 30 } },
      },
    ],
  },
  story: [
    'Beta Pictoris is a newborn star with a solar system still being built around it.',
    'It is so young that the leftovers of its birth are still in orbit. They form a huge, flat disc of dust and rubble, seen exactly edge-on.',
    'In 1984 it became the first such disc ever photographed. It was the first sight of a planetary system in the making.',
    'Two giant planets have been found inside it, each several times as heavy as Jupiter. One has been photographed directly.',
    'That planet is the orange point, still glowing from its birth. It takes about 22 years to go round, and its day lasts eight hours.',
    'Its pull has bent the inner disc slightly out of line with the rest.',
    'The disc and the planet are drawn far closer in than they really are. The real disc would stretch hundreds of times wider than this view.',
    'Comets fall toward the star by the hundred. Astronomers see them as passing wisps of gas in the star’s light.',
    'The star is white and hotter than the Sun. It is nearly twice as wide and about nine times as bright.',
    'It is about 23 million years old. When it formed, the dinosaurs had been gone for 40 million years.',
    'It is 63 light-years away, in the southern constellation of the Painter’s Easel.',
    'More stars with dust discs: Fomalhaut, Vega and Epsilon Eridani. More photographed planets: HR 8799.',
  ],
}
