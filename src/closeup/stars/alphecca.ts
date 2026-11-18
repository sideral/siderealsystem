import type { CloseupStar } from '../star'

/**
 * Figures: Tomkin & Popper 1986 (eclipsing orbit, 17.36 days). The partner is drawn closer in
 * than it is; the true gap is about 14 times the main star's radius.
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
    radius: 0.09,
    spinSeconds: 30,
    companion: {
      color: '#fff0e6', // about 5,800 K
      radius: 0.3,
      brightness: 0.2,
      glare: 0.1,
      place: { orbit: { distance: 4.4, seconds: 17, inclinationDeg: 88 } },
    },
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
    'It is 75 light-years away. A wide ring of dust circles the pair, like the one around Vega.',
    'To the Greeks the arc was the crown of Ariadne, set in the sky by Dionysus. Its other name is Gemma, “the jewel”.',
    'The Skidi Pawnee saw a council of chiefs sitting in a circle. In Wales the arc is Caer Arianrhod, a goddess’s castle.',
    'To many Aboriginal Australian peoples, the arc is a boomerang.',
  ],
}
