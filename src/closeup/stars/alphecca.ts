import type { CloseupStar } from '../star'

/**
 * Figures: Tomkin & Popper 1986 (eclipsing orbit, 17.36 days). The partner is drawn closer in
 * than it is; the true gap is about 14 times the main star's radius. The dust ring is drawn
 * far closer still: the real one lies tens of Earth-Sun distances out.
 */
export const alphecca: CloseupStar = {
  id: 'alphecca',
  name: 'Alphecca',
  designation: 'α Coronae Borealis',
  radiusSun: 3,
  look: {
    color: '#cbd8ff', // about 9,700 K
    limbColor: '#d7e0fc',
    limbDarkening: 0.45,
    radius: 0.075,
    spinSeconds: 30,
    axis: { rollDeg: 12 },
    flattening: 0.04,
    glare: 1.15,
    // The ring of dust around the pair, lit by the white star
    ring: { inner: 4.9, outer: 5.8, tilt: 0.22, color: '#e6d6bd', brightness: 0.16, sharp: 0.8 },
    companions: [
      {
        color: '#fff0e6', // about 5,800 K
        radius: 0.3,
        brightness: 0.2,
        glare: 0.1,
        place: { orbit: { distance: 4, seconds: 17, inclinationDeg: 88, nodeDeg: 12 } },
      },
    ],
  },
  story: (distance) => [
    `This is Alphecca, from ${distance} away: the jewel in the Northern Crown, a small arc of stars beside Boötes.`,
    'It is two stars. The large one is white: about 9,700 K. The small one is yellow and much like the Sun.',
    'They circle each other every 17.36 days. We see the orbit edge-on, so each passes in front of the other.',
    'When the small star crosses the big one, the light drops by a few percent. You could never notice it by eye.',
    'Here the orbit is sped up, and the small star is drawn closer in than it really is.',
    'Size: the white star is about 3 times as wide as the Sun and gives off 74 times as much light.',
    'Types: A0 V and G5 V: a white star and a yellow one, both in their prime.',
    'Estimated age: about 300 million years.',
    'It is 75 light-years away. A wide ring of dust circles the pair, like the one around Vega. Here it is drawn far closer in than it is.',
    'To the Greeks the arc was the crown of Ariadne, set in the sky by Dionysus. Its other name is Gemma, “the jewel”.',
    'The Skidi Pawnee saw a council of chiefs sitting in a circle. In Wales the arc is Caer Arianrhod, a goddess’s castle.',
    'To many Aboriginal Australian peoples, the arc is a boomerang.',
  ],
}
