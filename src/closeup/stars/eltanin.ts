import type { CloseupStar } from '../star'

/**
 * Figures: Bradley 1728 (aberration of light); Hipparcos distance and motion. Its age is a rough
 * estimate from its mass. The two large spots are a guess: nobody has mapped its surface.
 */
export const eltanin: CloseupStar = {
  id: 'eltanin',
  name: 'Eltanin',
  designation: 'γ Draconis',
  radiusSun: 48,
  look: {
    color: '#ffc07c', // 3,930 K
    limbColor: '#cf6427',
    limbDarkening: 0.75,
    whiten: 0.08,
    spinSeconds: 240,
    axis: { rollDeg: 38, inclinationDeg: 64 },
    texture: { amplitude: 0.25, scale: 9, speed: 0.045, cells: 0.65 },
    // Two large cool spots, as some giants are known to carry. Nobody has mapped this star's surface: these are a guess.
    spots: { darkness: 0.6, size: 0.16, seed: 19, count: 2 },
  },
  story: [
    'Eltanin is the star that proved Earth moves.',
    'It passes almost straight overhead in London. In 1725 James Bradley fixed a telescope to a chimney there to watch it.',
    'He hoped to see it shift as Earth circled the Sun, and so measure its distance. It did shift, but in the wrong direction.',
    'After three years he understood. Earth’s own speed tilts the light, as rain seems to slant when you run through it.',
    'It was the first direct proof that Earth goes around the Sun. It also gave a good value for the speed of light.',
    'The star is an orange giant, a third cooler than the Sun and nearly 50 times as wide. It gives off the light of almost 500 Suns.',
    'Cool giants like this can carry dark spots far larger than the Sun’s. The two drawn here are a guess: nobody has mapped its surface.',
    'It is about 150 light-years away, and it is coming closer.',
    'In about 1.5 million years it will pass within 28 light-years. It will then rival Sirius as the brightest star in the sky.',
    'Its name is from the Arabic for “the great serpent”. It is one of the eyes of Draco the Dragon.',
    'More stars that changed science: 61 Cygni, Mintaka and Alula Australis. More orange giants: Aldebaran and Kochab.',
  ],
}
