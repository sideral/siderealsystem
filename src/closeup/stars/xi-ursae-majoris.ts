import type { CloseupStar } from '../star'

/**
 * Figures: Savary 1828 (first binary orbit); Mason et al. 1995 (59.9-year orbit). Shows the
 * brighter star, with its partner as a point about 21 AU away.
 */
export const xiUrsaeMajoris: CloseupStar = {
  id: 'xi-ursae-majoris',
  name: 'Alula Australis',
  designation: 'ξ Ursae Majoris',
  radiusSun: 1.02,
  look: {
    color: '#fff1e2', // about 5,950 K
    limbColor: '#f4c68c',
    limbDarkening: 0.6,
    spinSeconds: 70,
    texture: { amplitude: 0.07, scale: 18, speed: 0.2 },
    spots: { darkness: 0.5, size: 0.035, seed: 29 },
    companion: {
      color: '#ffeedd', // about 5,650 K
      radius: 0.0085,
      brightness: 0.7,
      glare: 0.5,
      place: { at: [-0.33, 0.27] },
    },
  },
  story: (distance) => [
    `This is Alula Australis, in a hind paw of the Great Bear, from ${distance} away. It changed physics.`,
    'It is two Sun-like stars. One fills the view. The point is the other.',
    'In 1780 William Herschel found the pair. Over the next twenty years he watched one star move around the other.',
    'In 1828 the French astronomer Félix Savary worked out their orbit. It was the first ever calculated for a double star.',
    'The orbit fitted Newton’s law of gravity. It was the first proof that gravity works the same way far beyond the Sun’s family.',
    'One orbit takes 59.9 years. They are about as far apart as the Sun and Uranus.',
    'Both are yellow, close to the Sun’s temperature: about 5,950 K and 5,650 K.',
    'Size: the brighter is almost exactly as wide and as heavy as the Sun. The other is a little smaller.',
    'Each also has a small, unseen partner. And a faint brown dwarf circles far out. It is a family of five.',
    'Types: G0 V and G5 V. “G” is a yellow star like the Sun. “V” means in its prime.',
    'Estimated age: uncertain, perhaps a few billion years.',
    'They are 29 light-years away.',
    'Its name is from the Arabic for “the first leap”, of a gazelle. Arab stargazers saw its tracks in the Bear’s three pairs of paws.',
  ],
}
