import type { CloseupStar } from '../star'

/** Figures: Ireland et al. 2004 (size); Hipparcos distance. Boorong lore: Stanbridge 1857. Its age is not well known. */
export const gacrux: CloseupStar = {
  id: 'gacrux',
  name: 'Gacrux',
  designation: 'γ Crucis',
  radiusSun: 120,
  look: {
    color: '#ffab62', // about 3,690 K
    limbColor: '#bd4c1d',
    limbDarkening: 0.8,
    whiten: 0.05,
    spinSeconds: 900,
    axis: { rollDeg: -38 },
    texture: { amplitude: 0.5, scale: 3, speed: 0.035, cells: 0.4 },
    // A semi-regular variable: several slow rhythms at once, cooler and redder when faint
    pulse: { seconds: 18, radius: -0.015, brightness: 0.12, irregular: 0.5, dimColor: '#ee6f34' },
    fuzz: 0.05,
    wobble: 0.04,
    glare: 0.9,
    envelope: { color: '#ff6a36', strength: 0.07, reach: 0.22 }, // thin outer gas
  },
  story: (distance) => [
    `This is Gacrux, the top of the Southern Cross, from ${distance} away. It is the nearest red giant to the Sun.`,
    'The other bright stars of the Cross are blue. This one is plainly orange, and you can see the difference without a telescope.',
    'It is orange-red because it is cool: about 3,690 K. Its surface churns in large, slow cells.',
    'Its brightness wavers slightly over weeks and months as its swollen outer layers shift.',
    'Size: about 120 times as wide as the Sun, but only about one and a half times as heavy.',
    'Put it where the Sun is and it would fill more than half of Earth’s orbit. It gives off around 800 times the Sun’s light.',
    'Type: M3.5 III. “M” is the coolest, reddest class of star. “III” marks a giant near the end of its life.',
    'Estimated age: a few billion years, though it is not well measured.',
    'It is 89 light-years away, far closer than the blue stars of the Cross. The Cross is only a pattern seen from here.',
    'It carries an odd excess of the metal barium. It probably took that from a partner that has since died, now a white dwarf.',
    'A line from Gacrux through Acrux, carried on four and a half times as far, lands close to the south pole of the sky.',
    'To the Boorong people of Australia it was Bunya the possum, who ran up a tree to hide from Tchingal the emu.',
  ],
}
