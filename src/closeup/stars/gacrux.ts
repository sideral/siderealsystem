import type { CloseupStar } from '../star'

/** Figures: Ireland et al. 2004 (size); Hipparcos distance. Boorong lore: Stanbridge 1857. Its age is not well known. */
export const gacrux: CloseupStar = {
  id: 'gacrux',
  name: 'Gacrux',
  designation: 'γ Crucis',
  radiusSun: 120,
  look: {
    color: '#ffb26c', // about 3,690 K
    limbColor: '#c85a22',
    limbDarkening: 0.78,
    whiten: 0.06,
    spinSeconds: 900,
    texture: { amplitude: 0.4, scale: 3, speed: 0.035 },
    pulse: { seconds: 24, radius: 0.008, brightness: 0.04 },
    fuzz: 0.03,
    wobble: 0.03,
    glare: 0.9,
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
