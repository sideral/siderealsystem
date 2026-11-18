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
  story: (distance) => [
    `This is Sadr, from ${distance} away: the star at the centre of the Northern Cross, where the Swan’s wings meet its body.`,
    'It is yellow-white, close to the Sun’s temperature: about 6,000 K. But it is a supergiant.',
    'Size: about 150 times as wide as the Sun. Put where the Sun is, it would reach most of the way to Venus.',
    'It weighs about 12 Suns and gives off some 33,000 times as much light.',
    'Type: F8 Iab. “F” is a yellow-white star. “Iab” marks a supergiant.',
    'Estimated age: about 12 million years. Heavy stars burn out fast, and this one has already left its prime.',
    'It is roughly 1,800 light-years away. That it looks so bright from so far shows how powerful it is.',
    'The red glow behind it is a huge field of gas clouds in the Milky Way, crossed by dark dust. They only look close: they lie far behind it.',
    'Its light flickers slightly, with no steady rhythm.',
    'Its name is Arabic for “the breast”, of the hen that Arab astronomers saw here.',
    'In China it is the central star of the Celestial Ford, a crossing over the river of the Milky Way.',
  ],
}
