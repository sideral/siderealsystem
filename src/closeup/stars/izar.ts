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
    color: '#ffd29a', // about 4,550 K
    limbColor: '#de8238',
    limbDarkening: 0.7,
    whiten: 0.1,
    spinSeconds: 320,
    axis: { rollDeg: -28 },
    texture: { amplitude: 0.2, scale: 7.5, speed: 0.05, cells: 0.6 },
    companions: [
      {
        color: '#c2e0ff', // about 9,000 K; beside the orange it looks blue, even green
        radius: 0.0085,
        brightness: 1,
        glare: 0.5,
        place: { at: [0.26, 0.25] },
      },
    ],
  },
  story: [
    'Izar was named Pulcherrima, “the loveliest”. The man who named it had catalogued thousands of double stars.',
    'He was the astronomer Wilhelm Struve. In a telescope it is an orange star with a small blue-green one tucked beside it.',
    'The orange giant fills the view. Its partner is the point beside it, drawn closer in than it really is.',
    'The colours are real. The giant is cooler than the Sun. Its partner is half again as hot.',
    'Seen side by side, the contrast makes the small star look blue or even green.',
    'The two were born together. The giant was the heavier, so it aged first. The other will follow.',
    'They are more than four times as far apart as Pluto is from the Sun. One orbit takes well over a thousand years.',
    'The giant is about 33 times as wide as the Sun and as bright as 500 Suns.',
    'They are about 200 light-years away, in the waist of Boötes the Herdsman.',
    'Its name is Arabic for “the veil” or “the loincloth”.',
    'More coloured pairs: Albireo, Almach and Rasalgethi.',
  ],
}
