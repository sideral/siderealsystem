import type { CloseupStar } from '../star'

/** Figures: Hipparcos distance; standard values for a G8 IV star; Turnbull & Tarter 2003 (SETI target list). */
export const deltaPavonis: CloseupStar = {
  id: 'delta-pavonis',
  name: 'Delta Pavonis',
  designation: 'δ Pavonis',
  radiusSun: 1.2,
  look: {
    color: '#ffebd9', // about 5,570 K
    limbColor: '#f0b274',
    limbDarkening: 0.64,
    whiten: 0.17,
    spinSeconds: 220, // an old star, turning slowly
    axis: { rollDeg: 5 },
    texture: { amplitude: 0.17, scale: 16, speed: 0.16, cells: 1 }, // beginning to swell: grain a little coarser than the Sun's
    // No spots at all: slow spin, weak magnetism
  },
  story: [
    'Delta Pavonis shows what the Sun will be like a few billion years from now.',
    'It began almost exactly like the Sun, with the same mass. But it is older, and the hydrogen in its core is nearly gone.',
    'So it has started to change. It has swelled by a fifth and cooled a little.',
    'It gives off about a fifth more light than the Sun. Any planet where Earth is would be slowly overheating.',
    'Over the next billion years or so it will swell much further and become a red giant.',
    'Its surface is quiet, with no spots or flares. Old stars spin slowly, and slow spin means weak magnetism.',
    'It is 20 light-years away. No nearer star is both alone, like the Sun, and this much like it.',
    'That made it a top target in the search for signals from other civilisations. Nothing has been heard, and no planets are known.',
    'It lies far in the southern sky, in Pavo the Peacock. From most of Europe and North America it never rises.',
    'More previews of the Sun’s future: Beta Hydri and Arcturus. More quiet Sun-like stars: Tau Ceti and Zeta Reticuli.',
  ],
}
