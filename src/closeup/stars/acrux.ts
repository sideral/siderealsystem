import type { CloseupStar } from '../star'

/**
 * Figures: Hipparcos distance; Tokovinin's Multiple Star Catalogue. Shows Alpha-1 Crucis, with
 * Alpha-2 as a point about 400 AU away. Star lore: Best, "Tuhoe"; Urton, "At the Crossroads of
 * the Earth and the Sky"; ESO on the Mapuche name; Snedegar on southern African names.
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
    spinSeconds: 40,
    flattening: 0.04,
    glare: 1.3,
    companion: {
      color: '#adc2ff', // about 26,000 K
      radius: 0.0085,
      brightness: 1,
      glare: 0.6,
      place: { at: [-0.34, 0.26] },
    },
  },
  story: (distance) => [
    `This is Acrux, the foot of the Southern Cross, seen through a dark filter from ${distance} away.`,
    'It is blue-white and extremely hot: about 28,000 K, nearly five times the Sun’s temperature.',
    'The bright point beside it is a second blue star almost as large. A small telescope splits Acrux into the two.',
    'The nearer star has a third, hidden partner that circles it every 76 days.',
    'Size: about 8 times as wide as the Sun and 18 times as heavy. It gives off some 25,000 times as much light.',
    'Types: B0.5 IV and B1 V. “B” is a hot blue-white star. Both are heavy enough to end as supernovas.',
    'Estimated age: about 11 million years.',
    'It is about 320 light-years away. It is the southernmost of the brightest stars, and never rises for most of Europe.',
    'The long bar of the Cross, from the top star down through Acrux, points to the south pole of the sky.',
    'It flies on the flags of Australia, New Zealand, Papua New Guinea, Samoa and Brazil.',
    'To the Māori the Cross is Te Punga, the anchor of a great sky canoe. The two Pointer stars are its rope.',
    'In the Andes it is Chakana, the stair or bridge. To the Mapuche of Chile it is Melipal, “four stars”.',
    'In southern Africa, Sotho and Tswana peoples saw giraffes: the bright stars of the Cross and the Pointers.',
  ],
}
