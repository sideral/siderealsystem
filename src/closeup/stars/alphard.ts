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
  story: [
    'Alphard is “the solitary one”: a lone orange star in a wide, dim stretch of sky.',
    'That is what its Arabic name means. No other bright star lies anywhere near it.',
    'The astronomer Tycho Brahe called it Cor Hydrae, the heart of Hydra. The Water Snake is the longest constellation of all.',
    'It is alone up close as well. Nothing shares the view but the giant and its own warm glow.',
    'It is an orange giant: cooler than the Sun and about 50 times as wide. Its surface churns slowly in large cells.',
    'It gives off the light of nearly 800 Suns, from about 180 light-years away.',
    'It holds slightly too much of the metal barium. That usually means a star was once showered with material from a dying partner.',
    'In ancient China it was the Bird Star. Seeing it due south at dusk marked the middle of spring.',
    'More orange giants: Arcturus, Aldebaran and Kochab. Another star with borrowed barium: Gacrux.',
  ],
}
