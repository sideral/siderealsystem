import type { CloseupStar } from '../star'

/** Figures: Baines & Armstrong 2012 (radius); Mawet et al. 2019 (planet); Backman et al. 2009 (belts). */
export const epsilonEridani: CloseupStar = {
  id: 'epsilon-eridani',
  name: 'Epsilon Eridani',
  designation: 'ε Eridani · Ran',
  radiusSun: 0.735,
  look: {
    color: '#ffdcb8', // 5,080 K
    limbColor: '#e89a55',
    limbDarkening: 0.66,
    whiten: 0.14,
    spinSeconds: 45, // about 11 days in reality
    axis: { rollDeg: 20, inclinationDeg: 55 },
    texture: { amplitude: 0.16, scale: 20, speed: 0.25, cells: 1 },
    spots: { darkness: 0.85, size: 0.13, seed: 23, count: 8, faculae: 0.8 }, // young and active: big spots
    activity: { prominences: 0.8, flares: 0.9 },
  },
  story: [
    'Epsilon Eridani is a young, restless version of the Sun. It is one of our nearest neighbours.',
    'It is about a tenth of the Sun’s age and spins more than twice as fast. That winds up its magnetism and covers it in large dark spots.',
    'The bright flashes are flares. The arcs at its edge are loops of gas held up by magnetism. Both are drawn larger than they really are.',
    'It is still settling its family. It has at least one planet, about as heavy as Jupiter, on a seven-year orbit.',
    'It also has belts of rubble and a wide outer ring of icy dust. They are like a young copy of our own asteroid and comet belts.',
    'In 1960 Frank Drake pointed a radio telescope at it to listen for signals. It was the first modern search for other civilisations.',
    'He heard nothing. The other star he tried was Tau Ceti.',
    'It is a little cooler than the Sun, so its light is a warmer, more orange white. The star is three-quarters as wide and a third as bright.',
    'It is 10.5 light-years away. Of the stars the naked eye can see, only Alpha Centauri and Sirius are nearer.',
    'Its official name is Ran, a Norse goddess of the sea. Its planet is Ægir, her husband.',
    'More small orange neighbours: 61 Cygni, Epsilon Indi and Tau Ceti. More young systems in the making: Beta Pictoris and Fomalhaut.',
  ],
}
