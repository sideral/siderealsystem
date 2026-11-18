import type { CloseupStar } from '../star'

/** Figures: Scholz et al. 2003 (brown dwarfs); Matthews et al. 2024 (JWST image of the planet); Demory et al. 2009 (radius). */
export const epsilonIndi: CloseupStar = {
  id: 'epsilon-indi',
  name: 'Epsilon Indi',
  designation: 'ε Indi',
  radiusSun: 0.73,
  look: {
    color: '#ffdaac', // about 4,630 K
    limbColor: '#e3944f',
    limbDarkening: 0.68,
    whiten: 0.12,
    spinSeconds: 120, // about 23 days in reality
    texture: { amplitude: 0.09, scale: 16, speed: 0.18 },
    spots: { darkness: 0.65, size: 0.08, seed: 19 },
  },
  story: (distance) => [
    `This is Epsilon Indi, from ${distance} away: one of the Sun’s nearest neighbours, in the southern constellation of the Indian.`,
    'It is an orange dwarf: about 4,630 K, cooler than the Sun, with a fine-grained surface and a few dark spots.',
    'Size: about three-quarters as wide as the Sun and three-quarters as heavy. It gives off just a fifth as much light.',
    'It is 11.9 light-years away. Only a handful of naked-eye stars are closer.',
    'It moves fast against the background stars. In about 400 years it crosses a stretch of sky as wide as the full Moon.',
    'Far out, 1,500 times as far as Earth is from the Sun, circle two brown dwarfs: objects too small to shine as stars.',
    'They were found in 2003, and they are the nearest brown dwarfs but one pair.',
    'Closer in is a giant planet, several times the mass of Jupiter. In 2024 the James Webb Space Telescope took its picture.',
    'It is one of the coldest planets ever photographed directly: about as warm as Earth, in an orbit decades long.',
    'Type: K5 V. “K” is an orange star. “V” means it is in its prime, fusing hydrogen.',
    'Estimated age: about 3.5 billion years.',
    'From there the Sun would be an ordinary second-magnitude star, sitting beside the bowl of the Big Dipper.',
  ],
}
