import type { CloseupStar } from '../star'

/** Figures: Bradley 1728 (aberration of light); Hipparcos distance and motion. Its age is a rough estimate from its mass. */
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
    spinSeconds: 700,
    texture: { amplitude: 0.22, scale: 5, speed: 0.04 },
  },
  story: (distance) => [
    `This is Eltanin, the brightest star of Draco the Dragon, from ${distance} away. It once proved that Earth moves.`,
    'It passes almost straight overhead in London. In 1725 James Bradley fixed a telescope to a chimney there to watch it.',
    'He hoped to see it shift as Earth circled the Sun, and so measure its distance. It did shift, but in the wrong direction.',
    'After three years he understood. Earth’s own speed tilts the light, as rain seems to slant when you run through it.',
    'It was the first direct proof that Earth goes around the Sun, and it gave a good value for the speed of light.',
    'The star itself is an orange giant: about 3,930 K, two-thirds of the Sun’s temperature.',
    'Size: about 48 times as wide as the Sun, but less than twice as heavy. It gives off nearly 500 times as much light.',
    'Type: K5 III. “K” is an orange star. “III” marks a giant that has used up the hydrogen in its core.',
    'Estimated age: roughly 2 billion years.',
    'It is 154 light-years away, and it is coming closer.',
    'In about 1.5 million years it will pass within 28 light-years, and will rival Sirius as the brightest star in the sky.',
    'Its name is from the Arabic for “the great serpent”. It is one of the dragon’s two eyes.',
  ],
}
