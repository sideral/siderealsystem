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
  story: [
    'Gacrux is the top of the Southern Cross, and the nearest red giant to the Sun.',
    'The other bright stars of the Cross are blue. This one is plainly orange, and you can see the difference without a telescope.',
    'It is also far closer than they are: 89 light-years. The Cross is only a pattern seen from here.',
    'It is a third cooler than the Sun and about 120 times as wide. In the Sun’s place it would reach past Mercury’s orbit.',
    'Yet it weighs barely more than the Sun. It gives off the light of about 800 Suns.',
    'Its surface churns in large, slow cells. Its brightness wavers over weeks and months as its swollen outer layers shift.',
    'It carries an odd excess of the metal barium. It probably took that from a partner that has since died and become a white dwarf.',
    'Draw a line from Gacrux through Acrux and carry it on four and a half times as far. It lands close to the south pole of the sky.',
    'To the Boorong people of Australia it was Bunya the possum. He ran up a tree to hide from Tchingal the emu.',
    'The rest of the Cross here: Acrux and Mimosa. More red giants: Mira and Rasalgethi.',
  ],
}
