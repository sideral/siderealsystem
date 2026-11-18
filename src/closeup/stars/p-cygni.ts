import type { CloseupStar } from '../star'

/** Figures: Najarro et al. 1997; de Groot 1988 (history of the 1600 outburst). */
export const pCygni: CloseupStar = {
  id: 'p-cygni',
  name: 'P Cygni',
  designation: '34 Cygni',
  radiusSun: 76,
  look: {
    color: '#b4c7ff', // about 18,700 K
    limbColor: '#c3d0fd',
    limbDarkening: 0.35,
    whiten: 0.4,
    radius: 0.2,
    spinSeconds: 400,
    texture: { amplitude: 0.05, scale: 4, speed: 0.03 },
    pulse: { seconds: 17, radius: 0.006, brightness: 0.05, irregular: 0.5 },
    fuzz: 0.09, // a dense wind blurs the edge
    glare: 1.5,
    envelope: { color: '#9cb6ff', strength: 0.45, reach: 0.3, clumps: 0.8, speed: 0.25 },
    // Shells thrown off in the outbursts of the 1600s, still drifting outward
    nebula: { kind: 'shells', color: '#ff8fa3', brightness: 0.45, spacing: 0.16, speed: 0.04 },
  },
  story: (distance) => [
    `This is P Cygni, from ${distance} away. In the year 1600 it appeared from nowhere, where no star had been seen before.`,
    'The Dutch mapmaker Willem Blaeu noted it that August as a new third-magnitude star in the Swan.',
    'It stayed for years, faded from sight in 1626, flared again in 1655, and has been slowly brightening ever since.',
    'It was never a new star. It is an unstable giant that had thrown off a shell of gas and briefly outshone itself.',
    'The faint pink arcs are shells like that one, still drifting outward centuries later.',
    'It is blue-white: about 18,700 K. Its edge is soft because it is blowing a thick wind in every direction.',
    'That wind left a mark in its light that astronomers now look for everywhere: gas flowing outward, toward us.',
    'The pattern is still called a P Cygni profile, whether it is seen in a star, a supernova or a galaxy.',
    'Size: about 76 times as wide as the Sun and over 30 times as heavy.',
    'It gives off around 600,000 times the Sun’s light, among the most of any star in the galaxy.',
    'Type: a luminous blue variable, like Eta Carinae: a star so bright that its own light is pushing it apart.',
    'Estimated age: a few million years. It will end as a supernova.',
    'It is about 5,300 light-years away, and still just visible to the naked eye.',
    'The “P” is not a name. It is the letter the star was given on a 1603 atlas, and it stuck.',
  ],
}
