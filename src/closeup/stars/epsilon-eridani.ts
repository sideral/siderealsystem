import type { CloseupStar } from '../star'

/** Figures: Baines & Armstrong 2012 (radius); Mawet et al. 2019 (planet); Backman et al. 2009 (belts). */
export const epsilonEridani: CloseupStar = {
  id: 'epsilon-eridani',
  name: 'Epsilon Eridani',
  designation: 'ε Eridani · Ran',
  radiusSun: 0.735,
  look: {
    color: '#ffdcb8', // 5,080 K
    limbColor: '#eaa262',
    limbDarkening: 0.65,
    whiten: 0.15,
    spinSeconds: 60, // about 11 days in reality
    texture: { amplitude: 0.08, scale: 18, speed: 0.2 },
    spots: { darkness: 0.75, size: 0.13, seed: 23 }, // young and active: big spots
  },
  story: (distance) => [
    `This is Epsilon Eridani, from ${distance} away: a young, restless version of the Sun, and one of our nearest neighbours.`,
    'It is a little cooler than the Sun, about 5,080 K, so its light is a warmer, more orange white.',
    'It is young and spins once in 11 days, more than twice as fast as the Sun. That winds up its magnetism and covers it in large dark spots.',
    'Size: about three-quarters as wide as the Sun and four-fifths as heavy. It gives off a third as much light.',
    'Type: K2 V. “K” is an orange star. “V” means it is in its prime, fusing hydrogen.',
    'Estimated age: 400 to 800 million years, about a tenth of the Sun’s age.',
    'It is 10.5 light-years away. Only Alpha Centauri and Sirius are nearer among the stars you can see without a telescope.',
    'It has at least one planet, about the mass of Jupiter, on a seven-year orbit.',
    'It also has belts of rubble and a wide outer ring of icy dust, like a young copy of our own asteroid and comet belts.',
    'In 1960 Frank Drake pointed a radio telescope at it to listen for signals: the first modern search for other civilisations.',
    'He heard nothing. The other star he tried was Tau Ceti.',
    'Its official name is Ran, a Norse goddess of the sea. Its planet is Ægir, her husband.',
  ],
}
