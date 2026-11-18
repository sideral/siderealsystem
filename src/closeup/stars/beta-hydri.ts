import type { CloseupStar } from '../star'

/** Figures: Brandão et al. 2011 and North et al. 2007 (starquakes, measured radius); Hipparcos distance. */
export const betaHydri: CloseupStar = {
  id: 'beta-hydri',
  name: 'Beta Hydri',
  designation: 'β Hydri',
  radiusSun: 1.81,
  look: {
    color: '#fff1e3', // about 5,870 K
    limbColor: '#f4c38a',
    limbDarkening: 0.6,
    whiten: 0.2,
    spinSeconds: 130,
    axis: { rollDeg: 8 },
    texture: { amplitude: 0.15, scale: 15, speed: 0.2, cells: 1 }, // a swollen star: coarser grain than the Sun's
    // Starquakes: the whole star rings in many tones, each about a quarter of an hour long.
    // The real ripples are far too slight to see; these are drawn many times stronger.
    waves: [
      { l: 10, m: 4, amplitude: 0.05, seconds: 3.4 },
      { l: 7, m: 0, amplitude: 0.04, seconds: 4.6 },
    ],
  },
  story: [
    'Beta Hydri shows the Sun’s future, a couple of billion years from now.',
    'It began with almost the Sun’s mass, and it is still almost the Sun’s colour. But it is about two billion years older.',
    'The hydrogen in its core has run out. It has swelled to nearly twice the Sun’s width. It gives off over three times as much light.',
    'The whole star rings like a bell with tiny tremors. By timing them, astronomers have worked out its age and its insides.',
    'The ripples crossing it here are those tremors. They are drawn far stronger than they really are.',
    'It is also the closest thing the south has to a pole star. No other easily seen star lies nearer the south pole of the sky.',
    'Earth’s axis slowly wobbles. Around 150 BC this star was within two degrees of the pole: a true South Star.',
    'It is 24 light-years away, in Hydrus, the Little Water Snake. From anywhere north of the tropics it never rises.',
    'More previews of the Sun’s future: Delta Pavonis and Arcturus. The real south pole star: Sigma Octantis.',
  ],
}
