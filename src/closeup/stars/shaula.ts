import type { CloseupStar } from '../star'

/** Figures: Uytterhoeven et al. 2004; Tango et al. 2006. Its distance is uncertain. Lore: Chamberlain 1982 (Skidi Pawnee). */
export const shaula: CloseupStar = {
  id: 'shaula',
  name: 'Shaula',
  designation: 'λ Scorpii',
  radiusSun: 8.8,
  look: {
    color: '#aabfff', // about 25,000 K
    limbColor: '#bccbfd',
    limbDarkening: 0.35,
    whiten: 0.4,
    spinSeconds: 45,
    pulse: { seconds: 8, radius: 0.004, brightness: 0.02 },
    glare: 1.3,
  },
  story: (distance) => [
    `This is Shaula, the sting in the Scorpion’s tail, seen through a dark filter from ${distance} away.`,
    'It is blue-white and very hot: about 25,000 K, more than four times the Sun’s temperature.',
    'It is three stars in one. A small, still-forming star circles the main one every six days, and another hot star every three years.',
    'The main star pulses, brightening and fading very slightly every five hours.',
    'Size: about 9 times as wide as the Sun and over 10 times as heavy. It gives off tens of thousands of times as much light.',
    'Type: B2 IV. “B” is a hot blue-white star. “IV” marks a star starting to swell as its core hydrogen runs out.',
    'Estimated age: around 10 to 20 million years.',
    'It is roughly 570 light-years away, though measurements disagree.',
    'It is the second-brightest star in Scorpius, after Antares, and one of the 25 brightest in the sky.',
    'Its name is Arabic for “the raised tail”. With fainter Lesath beside it, it makes a close pair sometimes called the Cat’s Eyes.',
    'For the Skidi Pawnee of the North American plains the pair were the Swimming Ducks. Their first rising told that spring had come.',
    'In Polynesia the curve of the Scorpion’s tail is the fish-hook of Māui, with which he pulled islands up from the sea.',
    'In India the stars of the sting are Mula, “the root”.',
  ],
}
