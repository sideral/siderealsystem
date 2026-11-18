import type { CloseupStar } from '../star'

/**
 * Figures: Han et al. 2010 (planet); Mason et al. 2006 (orbit). Shows the larger giant, with
 * its partner as a point about 170 AU away.
 */
export const algieba: CloseupStar = {
  id: 'algieba',
  name: 'Algieba',
  designation: 'γ Leonis',
  radiusSun: 32,
  look: {
    color: '#ffd29b', // about 4,470 K
    limbColor: '#de8641',
    limbDarkening: 0.7,
    whiten: 0.1,
    spinSeconds: 600,
    texture: { amplitude: 0.18, scale: 6, speed: 0.05 },
    companion: {
      color: '#ffe2bd', // about 4,980 K
      radius: 0.0085,
      brightness: 1,
      glare: 0.5,
      place: { at: [-0.34, 0.25] },
    },
  },
  story: (distance) => [
    `This is Algieba, in the mane of Leo the Lion, from ${distance} away: two golden giants circling each other.`,
    'The larger one fills the view. It is orange-gold: about 4,470 K.',
    'The bright point is its partner, a smaller, slightly hotter and yellower giant of about 4,980 K.',
    'They take more than 500 years to circle each other, about four times as far apart as Pluto is from the Sun.',
    'Through a small telescope they are one of the prettiest pairs in the sky.',
    'Size: the larger is about 32 times as wide as the Sun and gives off 320 times as much light. The smaller is 10 times as wide.',
    'Types: K1 III and G7 III: two giants that have used up the hydrogen in their cores.',
    'Both were made with far less iron and other heavy elements than the Sun.',
    'Estimated age: uncertain, perhaps 2 billion years.',
    'They are 130 light-years away.',
    'In 2009 a planet was reported around the larger star: about nine times the mass of Jupiter, with a year of 429 days.',
    'Its name is from the Arabic for “the forehead”, though it sits in the Lion’s mane.',
    'Each November the Leonid meteors seem to fan out from a point close to it.',
  ],
}
