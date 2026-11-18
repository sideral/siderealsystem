import type { CloseupStar } from '../star'

/**
 * Figures: Hummel et al. 1998 (Mizar A orbit); Mamajek et al. 2010 (Alcor). Shows one star of
 * Mizar A; the small disc beside it is its near-twin, about a quarter of the Earth-Sun
 * distance away, drawn at its true apparent size from this viewpoint.
 * Mi'kmaq story: Hagar, "The Celestial Bear" (1900).
 */
export const mizar: CloseupStar = {
  id: 'mizar',
  name: 'Mizar',
  designation: 'ζ Ursae Majoris',
  radiusSun: 2.4,
  look: {
    color: '#d3ddff', // about 9,000 K
    limbColor: '#dde4fc',
    limbDarkening: 0.5,
    spinSeconds: 100,
    companion: {
      color: '#d3ddff',
      radius: 0.15,
      brightness: 1,
      glare: 0.12,
      place: { at: [0.34, 0.24] },
    },
  },
  story: (distance) => [
    `This is Mizar, the middle star in the handle of the Big Dipper, from ${distance} away.`,
    'It is a white star of about 9,000 K. The smaller disc beside it is its twin: the two circle each other every 20 days.',
    'Farther off is a second close pair. And about a light-year away sits faint Alcor, itself double. That makes six stars in all.',
    'On a clear night you can see Alcor right beside Mizar. Telling them apart was a traditional test of eyesight.',
    'Size: each of the twins is about 2.4 times as wide as the Sun and 2.2 times as heavy.',
    'Type: A2 V. “A” is a hot white star. “V” means it is in its prime, fusing hydrogen like the Sun.',
    'Estimated age: about 400 million years, the same as the four neighbouring Dipper stars. They were born together and still travel together.',
    'It is about 83 light-years away.',
    'Mizar was the first double star found with a telescope, around 1617, and the first to be photographed as a pair, in 1857.',
    'In 1889 its light revealed the hidden twin: the first star found to be double from its spectrum alone.',
    'Its name is from the Arabic for “girdle”. Alcor was called “the overlooked one”.',
    'In India they are Vasishtha and Arundhati, a devoted couple, pointed out to newlyweds.',
    'For the Mi’kmaq of north-east America the Dipper’s bowl is a bear and the handle stars are birds hunting it.',
    'Mizar is Chickadee, and little Alcor is the pot he carries to cook the bear.',
  ],
}
