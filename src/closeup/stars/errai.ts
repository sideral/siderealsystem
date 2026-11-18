import type { CloseupStar } from '../star'

/**
 * Figures: Campbell, Walker & Yang 1988 (first hint of the planet); Hatzes et al. 2003
 * (confirmation); Neuhäuser et al. 2007 (the red dwarf). The red dwarf is the point, about 20 AU away.
 */
export const errai: CloseupStar = {
  id: 'errai',
  name: 'Errai',
  designation: 'γ Cephei',
  radiusSun: 4.9,
  look: {
    color: '#ffdcb6', // about 4,800 K
    limbColor: '#e89d5c',
    limbDarkening: 0.68,
    whiten: 0.12,
    spinSeconds: 300,
    texture: { amplitude: 0.1, scale: 12, speed: 0.1 },
    spots: { darkness: 0.5, size: 0.06, seed: 63 },
    companion: {
      color: '#ff9a55', // about 3,300 K
      radius: 0.0085,
      brightness: 0.45,
      glare: 0.25,
      place: { at: [0.34, 0.26] },
    },
  },
  story: (distance) => [
    `This is Errai, at the peak of the house-shaped figure of Cepheus the King, from ${distance} away.`,
    'It may be the first star around which anyone detected a planet. But nobody believed it for fifteen years.',
    'In 1988 Canadian astronomers saw the star wobble, as if a planet were tugging it. They were cautious, and in 1992 withdrew the claim.',
    'In 2003 better measurements showed the wobble was real. By then other planets had taken the title of first found.',
    'The planet is heavier than Jupiter, with a year of two and a half Earth years.',
    'The faint red point is a second, small star in the system. It circles every 67 years, about as far out as Uranus is from the Sun.',
    'So the planet lives in a double-star system. That was once thought too unstable for planets.',
    'The main star is orange: about 4,800 K. It has just left its prime and begun to swell.',
    'Size: about 4.9 times as wide as the Sun and 1.4 times as heavy. It gives off 11 times as much light.',
    'Type: K1 III-IV. “K” is an orange star, on its way to becoming a giant.',
    'Estimated age: about 3 billion years.',
    'It is 45 light-years away.',
    'Earth’s axis slowly wobbles. In about a thousand years Errai will be nearer the pole than Polaris: the next North Star.',
    'Its name is Arabic for “the shepherd”.',
  ],
}
