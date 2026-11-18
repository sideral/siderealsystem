import type { CloseupStar } from '../star'

/**
 * Figures: Hipparcos distance; Washington Double Star Catalog. Shows the orange giant, with its
 * blue-white partner as a point about 185 AU away.
 */
export const izar: CloseupStar = {
  id: 'izar',
  name: 'Izar',
  designation: 'ε Boötis',
  radiusSun: 33,
  look: {
    color: '#ffd6a2', // about 4,550 K
    limbColor: '#e08c48',
    limbDarkening: 0.7,
    whiten: 0.1,
    spinSeconds: 600,
    texture: { amplitude: 0.18, scale: 6, speed: 0.05 },
    companion: {
      color: '#cdd9ff', // about 9,000 K
      radius: 0.0085,
      brightness: 1,
      glare: 0.45,
      place: { at: [0.32, 0.29] },
    },
  },
  story: (distance) => [
    `This is Izar, in the waist of Boötes the Herdsman, from ${distance} away.`,
    'It is two stars: an orange giant, which fills the view, and a smaller blue-white star, the point beside it.',
    'The astronomer Wilhelm Struve, who catalogued thousands of double stars, named this one Pulcherrima: “the loveliest”.',
    'The colours are real. The giant is cool, about 4,550 K. Its partner is hot, about 9,000 K.',
    'Seen side by side in a telescope, the contrast makes the small star look blue or even green.',
    'They are about 185 times as far apart as Earth is from the Sun. One orbit takes well over a thousand years.',
    'Size: the giant is about 33 times as wide as the Sun and gives off some 500 times as much light.',
    'Types: K0 II-III, an orange giant, and A2 V, a white star in its prime.',
    'The two were born together. The giant was the heavier, so it aged first. The other will follow.',
    'Estimated age: uncertain, a few hundred million years.',
    'They are about 200 light-years away.',
    'Its name is Arabic for “the veil” or “the loincloth”.',
  ],
}
