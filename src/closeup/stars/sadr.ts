import type { CloseupStar } from '../star'

/** Figures: Hohle et al. 2010 (mass, luminosity); distance is uncertain, about 1,800 light-years. */
export const sadr: CloseupStar = {
  id: 'sadr',
  name: 'Sadr',
  designation: 'γ Cygni',
  radiusSun: 150,
  look: {
    color: '#fff1dc', // about 5,800 to 6,100 K
    limbColor: '#f2c48a',
    limbDarkening: 0.62,
    spinSeconds: 600,
    texture: { amplitude: 0.14, scale: 9, speed: 0.06 },
    pulse: { seconds: 20, radius: 0.006, brightness: 0.03 },
    glare: 1.2,
  },
  story: (distance) => [
    `This is Sadr, from ${distance} away: the star at the centre of the Northern Cross, where the Swan’s wings meet its body.`,
    'It is yellow-white, close to the Sun’s temperature: about 6,000 K. But it is a supergiant.',
    'Size: about 150 times as wide as the Sun. Put where the Sun is, it would reach most of the way to Venus.',
    'It weighs about 12 Suns and gives off some 33,000 times as much light.',
    'Type: F8 Iab. “F” is a yellow-white star. “Iab” marks a supergiant.',
    'Estimated age: about 12 million years. Heavy stars burn out fast, and this one has already left its prime.',
    'It is roughly 1,800 light-years away. That it looks so bright from so far shows how powerful it is.',
    'It sits in the Milky Way, in front of a huge field of glowing red gas clouds. They only look close: they lie far behind it.',
    'Its light flickers slightly, with no steady rhythm.',
    'Its name is Arabic for “the breast”, of the hen that Arab astronomers saw here.',
    'In China it is the central star of the Celestial Ford, a crossing over the river of the Milky Way.',
  ],
}
