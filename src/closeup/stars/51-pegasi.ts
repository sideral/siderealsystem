import type { CloseupStar } from '../star'

/**
 * Figures: Mayor & Queloz 1995; Martins et al. 2015 (orbit tilt); Fuhrmann et al. 1997 (the star).
 * The star is drawn small so that the planet's whole orbit fits, at true scale. The planet's
 * size is not known (it never crosses the star), so it is drawn about twice as wide as Jupiter,
 * as a puffed-up hot Jupiter may be. It shows phases: lit on the side that faces the star.
 */
export const pegasi51: CloseupStar = {
  id: '51-pegasi',
  name: '51 Pegasi',
  designation: 'Helvetios',
  radiusSun: 1.24,
  look: {
    color: '#fff0e6', // 5,790 K
    limbColor: '#f5bf85',
    limbDarkening: 0.6,
    whiten: 0.2,
    radius: 0.048,
    spinSeconds: 110, // about 22 days in reality
    texture: { amplitude: 0.15, scale: 12, speed: 0.2, cells: 1 },
    glare: 0.8,
    companions: [
      {
        color: '#e6b98f', // Dimidium: a dull glow of its own heat, and a day side lit by the star
        radius: 0.18,
        brightness: 0.07,
        glare: 0,
        lit: 0.9,
        place: { orbit: { distance: 9.2, seconds: 10, inclinationDeg: 80, nodeDeg: 14 } },
      },
    ],
  },
  story: [
    '51 Pegasi has the planet that changed astronomy. It was the first found circling a star like the Sun.',
    'In 1995 Michel Mayor and Didier Queloz saw this star wobble. It swung toward us and away every four days. Something was pulling it around.',
    'Nobody expected a planet like it. It is half as heavy as Jupiter. Yet it orbits far closer to its star than Mercury does to the Sun.',
    'Its year lasts four days, and its sunlit side is hot enough to melt aluminium. Astronomers named this new kind of world a hot Jupiter.',
    'The small dot is that planet. Its orbit is drawn to scale but sped up, and its size is a guess.',
    'Watch it change like the Moon. On the far side of the star it shows its lit face. On the near side it shows its dark one.',
    'More than 5,000 planets of other stars have been found since. Mayor and Queloz shared a Nobel Prize in 2019.',
    'The star itself is nearly a twin of the Sun: the same colour, a little wider and older. It is just starting to swell.',
    'It is about 50 light-years away. You can just see it without a telescope, beside the Great Square of Pegasus.',
    'The star’s official name is Helvetios, for its Swiss discoverers. The planet is Dimidium, Latin for “half”.',
    'More stars with planets: 55 Cancri, Upsilon Andromedae and HR 8799.',
  ],
}
