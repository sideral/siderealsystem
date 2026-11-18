import type { CloseupStar } from '../star'

/**
 * Figures: Hohle et al. 2010 (mass, luminosity); distance is uncertain, about 1,800 light-years.
 * The red backdrop is the Sadr region (IC 1318), which lies far behind the star.
 */
export const sadr: CloseupStar = {
  id: 'sadr',
  name: 'Sadr',
  designation: 'γ Cygni',
  radiusSun: 150,
  look: {
    color: '#fff1dc', // about 5,800 to 6,100 K
    limbColor: '#f2c48a',
    limbDarkening: 0.62,
    radius: 0.23,
    spinSeconds: 600,
    axis: { rollDeg: -20 },
    texture: { amplitude: 0.13, scale: 9, speed: 0.05, cells: 0.5 },
    pulse: { seconds: 20, radius: 0.006, brightness: 0.035, irregular: 0.5 }, // it flickers with no steady rhythm
    glare: 1.2,
    // The glowing hydrogen of the Sadr region, crossed by dark dust: an even backdrop, not lit by the star
    nebula: { kind: 'cloud', color: '#ff5d6c', outerColor: '#d63c5a', brightness: 0.2, scale: 3.5, lanes: 0.8 },
  },
  story: [
    'Sadr sits at the centre of the Northern Cross, where the Swan’s wings meet its body.',
    'It looks like an ordinary bright star. It is a supergiant, seen from roughly 1,800 light-years away.',
    'To look that bright from that far, it has to give off the light of some 30,000 Suns.',
    'It is close to the Sun’s colour and temperature, but about 150 times as wide. In the Sun’s place it would reach nearly to Venus.',
    'It is only about 12 million years old. Heavy stars burn out fast, and this one has already left its prime.',
    'Its light flickers slightly, with no steady rhythm.',
    'The red glow behind it is a huge field of gas clouds in the Milky Way. Dark dust crosses it.',
    'They only look close. The real clouds lie far behind the star, and are not lit by it.',
    'Its name is Arabic for “the breast”, of the hen that Arab astronomers saw here.',
    'In China it is part of the Celestial Ford, a crossing over the river of the Milky Way.',
    'More yellow supergiants: Wezen, Mirfak and Polaris. Its neighbours in the Swan: Deneb and Albireo.',
  ],
}
