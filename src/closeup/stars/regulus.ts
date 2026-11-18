import type { CloseupStar } from '../star'

/** Figures: McAlister et al. 2005 and Che et al. 2011 (CHARA shape and temperatures); Gies et al. 2020 (companion). */
export const regulus: CloseupStar = {
  id: 'regulus',
  name: 'Regulus',
  designation: 'α Leonis',
  radiusSun: 4.16, // at the equator; 3.14 pole to pole
  look: {
    color: '#bfd0ff', // about 12,500 K averaged over the surface
    limbColor: '#ccd8fd',
    limbDarkening: 0.4,
    spinSeconds: 18,
    flattening: 0.24,
    gravityDarkening: 0.45,
  },
  story: (distance) => [
    `This is Regulus, the heart of the Lion, seen through a dark filter from ${distance} away.`,
    'It spins once in 16 hours, so fast that it bulges: it is a third wider at the equator than from pole to pole.',
    'A little faster, about a tenth, and it would begin to fly apart.',
    'It is blue-white, but its poles are about 15,000 K and its stretched equator near 10,000 K, so the middle band is dimmer.',
    'Size: about 4 times as wide as the Sun at the equator and 3.8 times as heavy. It gives off about 300 times as much light.',
    'Type: B8 IV. “B” is a hot blue-white star. “IV” means it is just leaving its prime.',
    'Estimated age: hard to tell. It looks young, but it seems to have been refuelled with gas stolen from a companion.',
    'What is left of that companion is a small white dwarf, circling Regulus every 40 days. That theft may be why it spins so fast.',
    'It is 79 light-years away.',
    'It sits almost exactly on the path the Sun, Moon and planets follow, so the Moon regularly passes in front of it.',
    'Its name is Latin for “little king”. Babylonians called it the King, and in ancient Persia it was one of four royal stars.',
    'In China it belongs to Xuanyuan, the constellation of the Yellow Emperor.',
  ],
}
