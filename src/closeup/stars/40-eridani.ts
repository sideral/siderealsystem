import type { CloseupStar } from '../star'

/**
 * Figures: Mason et al. 2017 (the white dwarf's orbit and mass); Burrows et al. 2024 (the planet
 * claim withdrawn). Shows 40 Eridani A. The two points are B (white) and C (red), about 400 AU
 * away and 35 AU from each other.
 */
export const eridani40: CloseupStar = {
  id: '40-eridani',
  name: '40 Eridani',
  designation: 'ο² Eridani · Keid',
  radiusSun: 0.81,
  look: {
    color: '#ffdfbd', // about 5,100 K
    limbColor: '#eaa566',
    limbDarkening: 0.65,
    whiten: 0.15,
    spinSeconds: 190, // about 40 days in reality
    axis: { rollDeg: 16 },
    texture: { amplitude: 0.15, scale: 20, speed: 0.22, cells: 1 },
    // The spots whose 40-day turn was once taken for a planet
    spots: { darkness: 0.7, size: 0.06, seed: 66, count: 5, beltDeg: 21, faculae: 0.5 },
    companions: [
      { color: '#f2f5ff', radius: 0.0085, brightness: 1, glare: 0.22, place: { at: [-0.35, 0.26] } }, // B, the white dwarf: 16,500 K
      { color: '#ff8f52', radius: 0.0085, brightness: 0.8, glare: 0.09, place: { at: [-0.322, 0.243] } }, // C, the red dwarf: 3,100 K
    ],
  },
  story: (distance) => [
    `This is 40 Eridani A, from ${distance} away: an orange dwarf with two small partners far off, one of them a famous first.`,
    'It is about 5,100 K, a little cooler than the Sun, with a fine-grained surface and a few small spots.',
    'The two points in the distance are its partners, side by side: a white dwarf, small and white-hot, and a dim red dwarf.',
    'That white dwarf was the first ever found. William Herschel saw it in 1783. Nobody knew it was strange until 1910.',
    'It was faint, so it should have been cool and red. But its light showed it was white-hot. That meant it had to be tiny.',
    'It is the dead core of a star that was once the heaviest of the three: half the Sun’s mass, squeezed to the size of Earth.',
    'Size: the main star is four-fifths as wide as the Sun and four-fifths as heavy. It gives off under half as much light.',
    'Type: K0.5 V. “K” is an orange star. “V” means it is in its prime, fusing hydrogen.',
    'Estimated age: several billion years, probably older than the Sun.',
    'They are 16.3 light-years away. This is the easiest white dwarf to see with a small telescope.',
    'In Star Trek, this star is the sun of Vulcan, Mr Spock’s home planet.',
    'In 2018 astronomers reported a real planet here. Later work showed the signal came from the star’s own spots.',
    'Its name, Keid, is from the Arabic for “eggshells”: broken shells lying beside a nest of ostrich eggs, the stars nearby.',
  ],
}
