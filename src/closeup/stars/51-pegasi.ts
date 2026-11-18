import type { CloseupStar } from '../star'

/**
 * Figures: Mayor & Queloz 1995; Martins et al. 2015 (orbit tilt); Fuhrmann et al. 1997 (the star).
 * The star is drawn small so that the planet's whole orbit fits, at true scale. The planet's
 * size is not known (it never crosses the star), so it is drawn a little larger than Jupiter.
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
    radius: 0.045,
    spinSeconds: 110, // about 22 days in reality
    texture: { amplitude: 0.07, scale: 18, speed: 0.2 },
    glare: 0.8,
    companion: {
      color: '#d49a6a',
      radius: 0.16,
      brightness: 0.4,
      glare: 0,
      place: { orbit: { distance: 9.2, seconds: 9, inclinationDeg: 80 } },
    },
  },
  story: (distance) => [
    `This is 51 Pegasi, from ${distance} away. The small dot circling it changed astronomy.`,
    'In 1995 Michel Mayor and Didier Queloz found that this star wobbles, toward us and away, every 4.2 days.',
    'Something was pulling it around: a planet. It was the first ever found circling a star like the Sun.',
    'Nobody expected a planet like it. It has half the mass of Jupiter, but orbits seven times closer than Mercury does to the Sun.',
    'Its year lasts four days, and its sunlit side is about 1,000 °C. Astronomers named this new kind of world a hot Jupiter.',
    'The orbit here is drawn to scale. The real planet takes four days to go round, not a few seconds.',
    'The star itself is nearly a twin of the Sun: 5,790 K, the same colour, with the same fine-grained surface.',
    'Size: 1.24 times as wide as the Sun and 1.1 times as heavy. It gives off a third more light.',
    'Type: G2 IV. “G2” is the Sun’s own class. “IV” means it is starting to run short of hydrogen and swell.',
    'Estimated age: 6 to 8 billion years, older than the Sun.',
    'It is 50.6 light-years away, and just visible without a telescope beside the Great Square of Pegasus.',
    'More than 5,000 planets of other stars have been found since. Mayor and Queloz shared the 2019 Nobel Prize in Physics.',
    'The star’s official name is Helvetios, for the Swiss discoverers. The planet is Dimidium, Latin for “half”.',
  ],
}
