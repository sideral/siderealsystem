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
  story: (distance) => [
    `This is Delta Pavonis, in Pavo the Peacock, from ${distance} away. It shows what the Sun will be like a few billion years from now.`,
    'It began almost exactly like the Sun: the same mass, give or take a few percent.',
    'But it is older, about 6 to 7 billion years. The hydrogen in its core is nearly gone.',
    'So it has started to change. It has swelled to 1.2 times the Sun’s width and cooled a little, to about 5,570 K.',
    'It gives off about a fifth more light than the Sun. Any planet where Earth is would be slowly overheating.',
    'Over the next billion years or so it will swell much further and become a red giant.',
    'Its surface is quiet, with few spots or flares. Old stars spin slowly, and slow spin means weak magnetism.',
    'Type: G8 IV. “G” is a yellow star like the Sun. “IV” means it has begun to leave its prime.',
    'It is 19.9 light-years away: the nearest star that is alone, like the Sun, and this much like it.',
    'That made it a top target in the search for signals from other civilisations. Nothing has been heard.',
    'No planets have been confirmed there yet.',
    'It lies far in the southern sky. From most of Europe and North America it never rises.',
  ],
}
