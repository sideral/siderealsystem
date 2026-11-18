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
    texture: { amplitude: 0.14, scale: 6, speed: 0.04, cells: 0.4 },
    pulse: { seconds: 9, radius: 0.004, brightness: 0.04 },
    fuzz: 0.02,
    // Soot: clouds of carbon dust that gather over the star and black it out, then blow away
    dust: { darkness: 0.97, scale: 1.6, cover: 0.92, seconds: 34, seed: 9 },
  },
  story: [
    'R Coronae Borealis is a star that blacks out.',
    'Most variable stars flare up. This one sits at the edge of naked-eye sight. Then, without warning, it fades thousands of times over.',
    'It can stay dark for months or years. From 2007 it stayed dim for most of a decade, its longest blackout on record.',
    'The cause is soot. The star puffs out clouds of carbon, which cool into black dust and block its light.',
    'When the soot blows away, the star returns. Here the fading runs on a steady cycle. The real one is random.',
    'It is strange in other ways. It has almost no hydrogen: it is nine-tenths helium, with a great deal of carbon.',
    'It probably formed when two white dwarfs spiralled together and merged. White dwarfs are the dead cores of old stars.',
    'Only about 150 stars like it are known in the galaxy.',
    'The star is yellow-white and a little hotter than the Sun. It is about 85 times as wide, yet lighter. It shines like 10,000 Suns.',
    'It is about 4,500 light-years away, inside the little arc of the Northern Crown.',
    'The English astronomer Edward Pigott discovered its fading in 1795.',
    'More stars veiled by their own dust: La Superba and Betelgeuse. Its neighbour in the Crown: Alphecca.',
  ],
}
