import type { CloseupStar } from '../star'

/**
 * Figures: Clayton 2012 (review); AAVSO light curves. The fading is drawn as a smooth cycle;
 * in reality it strikes without warning, and the star can stay dim for months or years.
 */
export const rCoronaeBorealis: CloseupStar = {
  id: 'r-coronae-borealis',
  name: 'R Coronae Borealis',
  designation: 'R CrB',
  radiusSun: 85,
  look: {
    color: '#fff3de', // about 6,750 K
    limbColor: '#f3c98f',
    limbDarkening: 0.6,
    whiten: 0.2,
    spinSeconds: 600,
    texture: { amplitude: 0.12, scale: 6, speed: 0.04 },
    pulse: { seconds: 26, radius: 0, brightness: 0.55 },
    fuzz: 0.02,
  },
  story: (distance) => [
    `This is R Coronae Borealis, from ${distance} away. Most variable stars flare up. This one blacks out.`,
    'Usually it sits at the edge of naked-eye visibility. Then, without warning, it fades by a factor of thousands.',
    'It can stay dark for months or years. From 2007 it stayed dim for most of a decade, its longest blackout on record.',
    'The cause is soot. The star puffs out clouds of carbon, which cool into black dust and block its light.',
    'When the soot blows away, the star returns. Here the fading is shown as a steady cycle; the real one is random.',
    'It is yellow-white: about 6,750 K, a little hotter than the Sun.',
    'Size: about 85 times as wide as the Sun, yet it weighs less than the Sun. It gives off around 10,000 times as much light.',
    'It has almost no hydrogen. It is nine-tenths helium, with a great deal of carbon.',
    'The likeliest explanation is that it formed when two white dwarfs, the dead cores of old stars, spiralled together and merged.',
    'Type: a carbon-rich yellow supergiant. Only about 150 stars like it are known in the galaxy.',
    'Estimated age: unknown. The stars that merged were billions of years old, but this new one may be very young.',
    'It is about 4,500 light-years away, inside the little arc of the Northern Crown.',
    'The English astronomer Edward Pigott discovered its fading in 1795.',
  ],
}
