import type { CloseupStar } from '../star'

/**
 * Figures: Kloppenborg et al. 2010 (CHARA images of the eclipse); Stencel 2012. Mass, size and
 * distance are all disputed. The dark disc of dust crosses every half minute here; the real one
 * crosses once every 27 years, and takes nearly two years to pass.
 */
export const epsilonAurigae: CloseupStar = {
  id: 'epsilon-aurigae',
  name: 'Epsilon Aurigae',
  designation: 'ε Aurigae · Almaaz',
  radiusSun: 150,
  look: {
    color: '#eef0ff', // about 7,750 K
    limbColor: '#f1e6d6',
    limbDarkening: 0.55,
    whiten: 0.25,
    radius: 0.12,
    spinSeconds: 600,
    texture: { amplitude: 0.08, scale: 7, speed: 0.03, cells: 0.4 },
    companions: [
      {
        color: '#2a1d16', // the dark disc of dust, seen edge-on: long, thin, and wider than the star
        radius: 2.4,
        brightness: 0.04,
        glare: 0,
        flattening: 0.88,
        place: { orbit: { distance: 2.8, seconds: 30, inclinationDeg: 83.9 } },
      },
    ],
  },
  story: (distance) => [
    `This is Epsilon Aurigae, from ${distance} away. Wait a moment, and something dark will cross in front of it.`,
    'Every 27 years this star fades to half its brightness and stays dim for nearly two years. Then it recovers.',
    'For almost two centuries nobody knew what was covering it. Nothing that big and that dark made sense.',
    'In 2009 astronomers linked telescopes and took pictures of the eclipse. A long, dark shape was sliding across the star.',
    'It is a huge disc of dust, wider than Earth’s orbit, seen edge-on, with another star hidden in its middle.',
    'Here the crossing is sped up enormously. A real one takes nearly two years to pass.',
    'The star itself is white: about 7,750 K, with a faintly mottled surface.',
    'Size: uncertain, somewhere between 140 and 350 times as wide as the Sun. Its mass is disputed too: 3 Suns, or 15.',
    'Type: F0 Iab, a white supergiant.',
    'Estimated age: unknown. It depends on which kind of star this really is, and that is still argued.',
    'It is roughly 2,000 light-years away, give or take a great deal.',
    'The last eclipse ran from 2009 to 2011. Hundreds of amateur observers helped record it. The next begins in 2036.',
    'Its old name, Almaaz, is Arabic for “the he-goat”. It sits beside Capella, the she-goat.',
  ],
}
