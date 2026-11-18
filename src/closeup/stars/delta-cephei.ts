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
    color: '#fff6e6', // 6,600 K at its brightest
    limbColor: '#f1c184',
    limbDarkening: 0.62,
    whiten: 0.2,
    spinSeconds: 400,
    texture: { amplitude: 0.12, scale: 9, speed: 0.05, cells: 0.5 },
    // A quick rise and a slow fall, cooling to 5,500 K at its dimmest
    pulse: { seconds: 6, radius: -0.05, brightness: 0.38, skew: 0.75, dimColor: '#ffd9a3' },
  },
  story: [
    'Delta Cephei is the star that taught us how to measure the universe.',
    'Watch it beat. Every five days or so it swells and shrinks. Its light more than doubles and falls again.',
    'Here the beat is sped up, but the swing in size and brightness is true to life.',
    'A layer of helium inside acts as a valve. It traps heat until the star swells, lets the heat out, and the star falls back.',
    'Stars that beat like this are called Cepheids, after this one.',
    'In 1912 Henrietta Leavitt found a law. The slower a Cepheid beats, the more powerful it truly is.',
    'So time a Cepheid’s beat, compare how bright it looks, and you know how far away it is.',
    'In 1923 Edwin Hubble found one in the Andromeda “nebula”. It was far outside the Milky Way: another galaxy.',
    'The star is a yellow supergiant. It is about 45 times as wide as the Sun and as bright as 2,000 Suns.',
    'It turns from yellow-white to a deeper yellow as it cools on each beat. It is nearly 900 light-years away.',
    'John Goodricke, the young deaf astronomer who explained Algol, found its beat in 1784. He died two years later, aged 21.',
    'More Cepheids: Eta Aquilae and Polaris. A supergiant that just misses pulsing: Mirfak.',
  ],
}
