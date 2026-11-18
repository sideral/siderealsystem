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
  story: (distance) => [
    `This is Beta Hydri, from ${distance} away: the nearest bright star to the south pole of the sky.`,
    'The south has no pole star to match Polaris. This one is 12 degrees off, but it is the closest that is easy to see.',
    'Earth’s axis slowly wobbles. Around 150 BC this star was within two degrees of the pole: a true South Star.',
    'It is yellow and almost exactly the Sun’s temperature: about 5,870 K.',
    'It also began with almost the Sun’s mass. But it is about 6.5 billion years old, two billion more than the Sun.',
    'The hydrogen in its core has run out. It has swelled to 1.8 times the Sun’s width and gives off 3.5 times as much light.',
    'This is the Sun’s future, a couple of billion years from now.',
    'The whole star rings like a bell with tiny tremors. By timing them, astronomers have worked out its age and its insides.',
    'The ripples crossing it here are those tremors. The real ones are far too slight to see, so they are drawn much stronger.',
    'Type: G2 IV. “G2” is the Sun’s own class. “IV” means it has left its prime and begun to swell.',
    'It is 24.3 light-years away.',
    'It is the brightest star of Hydrus, the Little Water Snake, drawn by Dutch navigators in the 1590s.',
    'From anywhere north of the tropics it never rises.',
  ],
}
