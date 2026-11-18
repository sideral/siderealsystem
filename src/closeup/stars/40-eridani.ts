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
  story: [
    '40 Eridani has a tiny white companion that was the first white dwarf ever found.',
    'It is the small white point in the distance. The red point beside it is a third star, a dim red dwarf. Both are drawn closer in than they really are.',
    'William Herschel saw the white one in 1783. Nobody realised how strange it was until 1910.',
    'It was faint, so it should have been cool and red. But its light showed it was white-hot. So it had to be tiny.',
    'It is the dead core of a star. Half the Sun’s weight is squeezed into a ball the size of Earth.',
    'The main star is an orange dwarf: a little cooler and smaller than the Sun. It is less than half as bright.',
    'Its dark spots once fooled astronomers. In 2018 their slow turn with the star was taken for the pull of a planet.',
    'It is 16 light-years away, and probably older than the Sun.',
    'In Star Trek, this star is the sun of Vulcan, Mr Spock’s home planet.',
    'Its old name, Keid, is Arabic for “eggshells”. They lie beside a nest of ostrich eggs: the stars nearby.',
    'More stars with a white dwarf in tow: Sirius and Procyon. More orange dwarfs: Epsilon Eridani and 61 Cygni.',
  ],
}
