import type { CloseupStar } from '../star'

/**
 * Figures: Hipparcos distance; standard K2 Ib values (radius and brightness are rough). The
 * outburst of 1972 was reported by a single observer and has never been explained; drawing it as
 * a flare beside a spot is a guess, and it repeats here though it was seen once.
 */
export const enif: CloseupStar = {
  id: 'enif',
  name: 'Enif',
  designation: 'ε Pegasi',
  radiusSun: 185,
  look: {
    color: '#ffcf96', // about 4,400 K
    limbColor: '#da7c36',
    limbDarkening: 0.73,
    whiten: 0.1,
    radius: 0.24,
    spinSeconds: 900,
    axis: { rollDeg: 22 },
    texture: { amplitude: 0.5, scale: 3, speed: 0.035, cells: 0.5 },
    pulse: { seconds: 25, radius: 0.008, brightness: 0.06, irregular: 0.55 },
    fuzz: 0.03,
    spots: { darkness: 0.3, size: 0.3, seed: 72, count: 2 },
    activity: { flares: 2.5 },
    envelope: { color: '#ff8a52', strength: 0.1, reach: 0.2 }, // thin outer gas
  },
  story: [
    'Enif is the nose of Pegasus. This orange supergiant once flared up for ten minutes and has never explained itself.',
    'One night in 1972 an observer saw it shine at about five times its usual brightness. Ten minutes later it was back to normal.',
    'Nobody knows what happened. It may have been a giant flare, like the Sun’s but vastly bigger. Nothing like it has been caught since.',
    'Here the flare goes off again and again, beside a dark spot. It was seen just once, and what it looked like up close is a guess.',
    'Enif is cooler than the Sun but nearly 200 times as wide. In the Sun’s place it would reach almost to Earth.',
    'It gives off the light of about 10,000 Suns and weighs about ten. It is only some 20 million years old and already near its end.',
    'It may end as a supernova. Or it may just miss, and shrink into a heavy white dwarf.',
    'Its surface boils slowly, in cells far larger than the Sun. Its light wavers with no steady rhythm.',
    'It is about 700 light-years away. Two yellow supergiants in Aquarius, next door, seem to have been born with it.',
    'Its name is the Arabic word for “nose”. Pegasus flies upside down, so the nose points away from the Great Square.',
    'More supergiants: Betelgeuse, Antares and Wezen. More of Pegasus: 51 Pegasi and HR 8799.',
  ],
}
