import type { CloseupStar } from '../star'

/**
 * Figures: Savary 1828 (first binary orbit); Mason et al. 1995 (59.9-year orbit). Shows the
 * brighter star, with its partner as a point about 21 AU away. Each has a small partner of its
 * own, known only from its pull: both are drawn as red points, not to scale (the one circling
 * the main star far closer in than true, the one beside the bright point farther from it).
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
    whiten: 0.2,
    radius: 0.15,
    spinSeconds: 70,
    axis: { rollDeg: -12 },
    texture: { amplitude: 0.15, scale: 21, speed: 0.24, cells: 1 },
    spots: { darkness: 0.6, size: 0.04, seed: 28, count: 4, beltDeg: 25, faculae: 0.4 },
    companions: [
      // Ab: a red dwarf on a 1.8-year orbit. Really some 350 star radii out; drawn far closer in.
      {
        color: '#ff9558',
        radius: 0.05,
        brightness: 0.45,
        glare: 0.1,
        place: { orbit: { distance: 2.5, seconds: 14, inclinationDeg: 76, nodeDeg: 20 } },
      },
      { color: '#ffeedd', radius: 0.0147, brightness: 1, glare: 0.5, place: { at: [-0.34, 0.27] } }, // B: about 5,650 K
      // Bb: a dim star that circles B every four days. Drawn farther from B than true, so that it shows.
      { color: '#ff9558', radius: 0.0147, brightness: 0.8, glare: 0.08, place: { at: [-0.317, 0.26] } },
    ],
  },
  story: (distance) => [
    `This is Alula Australis, in a hind paw of the Great Bear, from ${distance} away. It changed physics.`,
    'It is two Sun-like stars. One is at the centre of the view. The bright point is the other.',
    'In 1780 William Herschel found the pair. Over the next twenty years he watched one star move around the other.',
    'In 1828 the French astronomer Félix Savary worked out their orbit. It was the first ever calculated for a double star.',
    'The orbit fitted Newton’s law of gravity. It was the first proof that gravity works the same way far beyond the Sun’s family.',
    'One orbit takes 59.9 years. They are about as far apart as the Sun and Uranus.',
    'Both are yellow, close to the Sun’s temperature: about 5,950 K and 5,650 K.',
    'Size: the brighter is almost exactly as wide and as heavy as the Sun. The other is a little smaller.',
    'Each also has a small partner, known only from its pull. They are drawn here as the two red points, not to scale.',
    'A faint brown dwarf circles far out as well. It is a family of five.',
    'Types: G0 V and G5 V. “G” is a yellow star like the Sun. “V” means in its prime.',
    'Estimated age: uncertain, perhaps a few billion years.',
    'They are 29 light-years away.',
    'Its name is from the Arabic for “the first leap”, of a gazelle. Arab stargazers saw its tracks in the Bear’s three pairs of paws.',
  ],
}
