import type { CloseupStar } from '../star'

/**
 * Figures: Hipparcos distance; Tokovinin's Multiple Star Catalogue. Shows Alpha-1 Crucis, with
 * Alpha-2 as a point about 400 AU away. Alpha-1's 76-day partner is known only from the
 * star's wobble: its look is a guess, and it is drawn far closer in than its true 1 AU or so.
 * Star lore: Best, "Tuhoe" (Māori); Snedegar on southern African names.
 */
export const acrux: CloseupStar = {
  id: 'acrux',
  name: 'Acrux',
  designation: 'α Crucis',
  radiusSun: 7.8,
  look: {
    color: '#a9bfff', // about 28,000 K
    limbColor: '#bacafd',
    limbDarkening: 0.35,
    whiten: 0.4,
    radius: 0.1,
    spinSeconds: 40,
    axis: { rollDeg: 10 },
    flattening: 0.04,
    glare: 1.3,
    companions: [
      {
        color: '#b0c4ff', // the 76-day partner
        radius: 0.55,
        brightness: 0.8,
        glare: 0.18,
        place: { orbit: { distance: 3.2, seconds: 18, inclinationDeg: 50, eccentricity: 0.3, periapsisDeg: 200, nodeDeg: 25 } },
      },
      {
        color: '#adc2ff', // Alpha-2, about 26,000 K
        radius: 0.022,
        brightness: 1,
        glare: 0.6,
        place: { at: [-0.34, 0.3] },
      },
    ],
  },
  story: [
    'Acrux is the foot of the Southern Cross. It is the smallest constellation, and one of the best loved.',
    'The long bar of the Cross runs from the top star down through Acrux. It points to the south pole of the sky. Sailors steered by it.',
    'It flies on the flags of Australia, New Zealand, Papua New Guinea, Samoa and Brazil.',
    'To Māori the Cross is Te Punga, the anchor of a great sky canoe. The two Pointer stars are its rope.',
    'In southern Africa, Sotho and Tswana peoples saw giraffes in the Cross and the Pointers.',
    'Up close it is not one star. The bright point beside it is a second blue star almost as large. A small telescope splits the two.',
    'The nearer star has a hidden partner too, circling it every 76 days. Its look is a guess, and it is drawn far closer in than it really is.',
    'Both are blue-white and nearly five times as hot as the Sun. Each is heavy enough to end as a supernova.',
    'It is about 320 light-years away: the light you see left around the year 1700. From most of Europe it never rises.',
    'The rest of the Cross here: Mimosa and Gacrux. More hot blue pairs: Spica and Hadar.',
  ],
}
