import type { CloseupStar } from '../star'

/** Figures: da Silva et al. 2006; Hipparcos distance. Chinese lore: the Canon of Yao. */
export const alphard: CloseupStar = {
  id: 'alphard',
  name: 'Alphard',
  designation: 'α Hydrae',
  radiusSun: 50,
  look: {
    color: '#ffc280', // about 4,100 K
    limbColor: '#d0672a',
    limbDarkening: 0.76,
    whiten: 0.08,
    spinSeconds: 800,
    axis: { rollDeg: 32 },
    texture: { amplitude: 0.17, scale: 3.2, speed: 0.03, cells: 0.35 }, // large, low-contrast cells
    glare: 1.3,
    envelope: { color: '#ff9a4d', strength: 0.1, reach: 0.8 }, // the solitary one: nothing near it but its own warm glow
  },
  story: (distance) => [
    `This is Alphard, the heart of Hydra the Water Snake, from ${distance} away.`,
    'Its name is Arabic for “the solitary one”. It sits alone in a wide, dim stretch of sky with no other bright star near it.',
    'It is an orange giant: about 4,100 K. Its surface churns slowly in large cells.',
    'Size: about 50 times as wide as the Sun and 3 times as heavy. It gives off nearly 800 times as much light.',
    'Type: K3 II-III. “K” is an orange star. It sits between a giant and a bright giant.',
    'Estimated age: about 400 million years.',
    'It is 177 light-years away.',
    'It holds slightly too much of the metal barium. That usually means a star was once showered with material from a dying partner.',
    'The astronomer Tycho Brahe called it Cor Hydrae, “the heart of the snake”.',
    'In ancient China it was the Bird Star. Seeing it due south at dusk marked the middle of spring.',
    'On Brazil’s flag it stands for the state of Mato Grosso do Sul.',
  ],
}
