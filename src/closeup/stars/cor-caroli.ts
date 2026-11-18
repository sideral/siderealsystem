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
  story: [
    'Cor Caroli is “Charles’s Heart”, a star named for an executed king. It is wrapped in a fierce magnetic field.',
    'An English court physician named it around 1660, in honour of King Charles I.',
    'Its magnetic field is thousands of times stronger than Earth’s. It is tilted against the star’s spin.',
    'The field holds rare metals in place on the surface. Among them are chromium, mercury and europium.',
    'They gather around the magnetic poles: the pale violet patches drawn here. On the real star they would hardly show.',
    'As the star turns, every five and a half days, the patches swing in and out of view. Its brightness and its colours change in step.',
    'It was the first of its kind to be studied. A whole class of magnetic, patchy stars is named after it.',
    'It is blue-white, twice as hot as the Sun, and as bright as 100 Suns. It lies about 115 light-years away.',
    'The point beside it is a fainter, yellow-white partner. It is drawn closer in than it really is. A small telescope shows the two well apart.',
    'It is the brightest star of the Hunting Dogs. With Arcturus, Spica and Denebola it forms a large diamond in the spring sky.',
    'More stars with patchy chemistry: Alioth, Alpheratz and Elnath.',
  ],
}
