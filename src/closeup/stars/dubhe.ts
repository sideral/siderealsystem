import type { CloseupStar } from '../star'

/**
 * Figures: Guenther et al. 2000; Hipparcos distance. Its size and mass are rough. The white point
 * is Dubhe B, drawn hundreds of times closer in than its true distance of about 23 AU.
 */
export const dubhe: CloseupStar = {
  id: 'dubhe',
  name: 'Dubhe',
  designation: 'α Ursae Majoris',
  radiusSun: 17,
  look: {
    color: '#ffd49c', // about 4,650 K
    limbColor: '#df8640',
    limbDarkening: 0.7,
    whiten: 0.12,
    radius: 0.2,
    spinSeconds: 500,
    axis: { rollDeg: -15 },
    texture: { amplitude: 0.2, scale: 8.5, speed: 0.05, cells: 0.65 },
    companions: [
      {
        color: '#f3f1ff', // Dubhe B, a hotter white star, on its stretched 44-year orbit
        radius: 0.011,
        brightness: 1,
        glare: 0.4,
        place: { orbit: { distance: 1.65, seconds: 44, inclinationDeg: 35, eccentricity: 0.3, nodeDeg: -20 } },
      },
    ],
  },
  story: [
    'Dubhe, at the lip of the Big Dipper’s bowl, points the way to the North Star.',
    'Draw a line from Merak, below it, up through Dubhe and keep going: it lands on Polaris. The two are called the Pointers.',
    'It is the odd one out. The Dipper’s other six stars are white. Dubhe is an orange giant.',
    'It is also going its own way. Five of the Dipper’s stars travel through space together. Dubhe and Alkaid, at the two ends, do not.',
    'So the Dipper is slowly bending out of shape. In 50,000 years it will no longer look like one.',
    'The white point is a fainter, hotter star that circles it every 44 years. It is drawn far closer in than it really is.',
    'The giant is cooler than the Sun, about 17 times as wide, and as bright as 300 Suns. It is about 120 light-years away.',
    'For the Navajo the Dipper is the Revolving Male, a father who circles the North Star. That star is the central fire of the sky’s home.',
    'The rest of the Dipper here: Alioth, Mizar and Alkaid. More orange giants: Kochab and Pollux.',
  ],
}
