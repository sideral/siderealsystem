import type { CloseupStar } from '../star'

/**
 * Figures: Kochukhov & Wade 2010 (magnetic field, surface map; period 5.47 days). The dark
 * patches drawn stand for regions rich in rare metals. Its wide partner, α¹, is the point.
 */
export const corCaroli: CloseupStar = {
  id: 'cor-caroli',
  name: 'Cor Caroli',
  designation: 'α² Canum Venaticorum',
  radiusSun: 2.5,
  look: {
    color: '#c2d2ff', // about 11,600 K
    limbColor: '#cfdafd',
    limbDarkening: 0.42,
    spinSeconds: 26, // 5.47 days in reality
    axis: { rollDeg: -12, inclinationDeg: 70 },
    // Rare metals gathered around the two magnetic poles, which sit far over from the spin axis
    patches: { shape: 'caps', color: '#e6c4ff', strength: 0.62, sizeDeg: 38, tiltDeg: 70, seed: 47 },
    companions: [
      {
        color: '#fbf7f2', // about 6,500 K
        radius: 0.0085,
        brightness: 0.5,
        glare: 0.3,
        place: { at: [-0.34, 0.26] },
      },
    ],
  },
  story: (distance) => [
    `This is Cor Caroli, the brightest star of Canes Venatici, the Hunting Dogs, from ${distance} away.`,
    'Its name is Latin for “Charles’s Heart”. An English court physician named it around 1660, in honour of King Charles I.',
    'It is blue-white: about 11,600 K, twice the Sun’s temperature.',
    'It has a magnetic field thousands of times stronger than Earth’s, and the field is tilted against its spin.',
    'The field holds rare metals in place on the surface: silicon, chromium, mercury, europium. They gather in great patches.',
    'As the star turns, every 5.47 days, the patches swing in and out of view. Its brightness and its spectrum change in step.',
    'It was the first of its kind to be studied. A whole class of magnetic, patchy stars is named after it.',
    'Size: about 2.5 times as wide as the Sun and 3 times as heavy. It gives off some 100 times as much light.',
    'Type: A0p. “A” is a white star, hotter than the Sun. “p” is for peculiar, on account of those metals.',
    'Estimated age: about 165 million years.',
    'It is about 115 light-years away.',
    'The point beside it is a fainter, yellow-white partner. A small telescope shows the two well apart.',
    'With Arcturus, Spica and Denebola it forms a large diamond in the spring sky, the Diamond of Virgo.',
  ],
}
