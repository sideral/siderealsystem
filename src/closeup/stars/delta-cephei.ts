import type { CloseupStar } from '../star'

/**
 * Figures: Mérand et al. 2015 (radius change); Benedict et al. 2002 (distance). Only the speed
 * is changed here: the 5% swing in radius and the doubling in brightness are real.
 */
export const deltaCephei: CloseupStar = {
  id: 'delta-cephei',
  name: 'Delta Cephei',
  designation: 'δ Cephei',
  radiusSun: 44.5,
  look: {
    color: '#fff0d9', // 5,500 to 6,600 K over its cycle
    limbColor: '#f1c184',
    limbDarkening: 0.62,
    whiten: 0.2,
    spinSeconds: 400,
    texture: { amplitude: 0.1, scale: 9, speed: 0.05 },
    pulse: { seconds: 6, radius: -0.05, brightness: 0.38 },
  },
  story: (distance) => [
    `This is Delta Cephei, from ${distance} away. Watch it beat. This star gave its name to the Cepheids.`,
    'Every 5.37 days it swells and shrinks by about 5 percent, and its light more than doubles and falls again.',
    'Here the beat is sped up, but its size is true to life.',
    'Its colour changes too: from yellow-white, about 6,600 K, at its brightest, to deeper yellow, about 5,500 K, at its dimmest.',
    'A layer of helium inside acts as a valve. It traps heat until the star swells, lets the heat out, and the star falls back.',
    'Size: about 44 times as wide as the Sun and 4.5 times as heavy. It gives off some 2,000 times as much light.',
    'Type: F5 to G1 Ib, a yellow supergiant.',
    'Estimated age: about 100 million years.',
    'It is about 890 light-years away.',
    'In 1784 John Goodricke, the young deaf astronomer who explained Algol, found that it pulses. He died two years later, aged 21.',
    'In 1912 Henrietta Leavitt found a law: the slower a Cepheid beats, the more powerful it truly is.',
    'So time a Cepheid’s beat, compare how bright it looks, and you know how far away it is.',
    'In 1923 Edwin Hubble found one in the Andromeda “nebula”. It was far outside the Milky Way: another galaxy.',
  ],
}
