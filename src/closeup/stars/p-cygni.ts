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
  story: [
    'P Cygni appeared from nowhere in the year 1600, where no star had been seen before.',
    'The Dutch mapmaker Willem Blaeu noted it that August as a new star in the Swan.',
    'It stayed for years, faded from sight, then flared again. It has been slowly brightening ever since.',
    'It was never a new star. It is an unstable giant that had thrown off a shell of gas and briefly outshone itself.',
    'The faint pink arcs are shells like that one, still drifting outward centuries later. They are drawn closer in than they really are.',
    'Its edge is soft because it is blowing a thick wind in every direction.',
    'That wind left a mark in its light that astronomers now look for everywhere. It is the sign of gas flowing outward, toward us.',
    'The pattern is called a P Cygni profile, whether in a star, a supernova or a galaxy.',
    'The star is blue-white, over three times as hot as the Sun, and about 75 times as wide.',
    'It gives off the light of some 600,000 Suns. That is so much that its own light is pushing it apart. It will end as a supernova.',
    'It is about 5,300 light-years away, and still just visible to the naked eye. The light you see left around when writing was invented.',
    'The “P” is not a name. It is the letter the star was given on a 1603 atlas, and it stuck.',
    'More unstable giants: Eta Carinae and Rho Cassiopeiae. Another star with a fierce wind: Naos.',
  ],
}
