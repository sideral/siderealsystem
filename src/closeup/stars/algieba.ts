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
    color: '#ffd192', // about 4,470 K
    limbColor: '#e08a36',
    limbDarkening: 0.7,
    whiten: 0.12,
    spinSeconds: 600,
    axis: { rollDeg: 18 },
    texture: { amplitude: 0.22, scale: 6.5, speed: 0.05, cells: 0.6 },
    companions: [
      {
        color: '#ffe5b0', // about 4,980 K: a paler, yellower gold
        radius: 0.0085,
        brightness: 1,
        glare: 0.6,
        place: { at: [-0.27, 0.24] },
      },
    ],
  },
  story: [
    'Algieba is a pair of golden giants circling each other in the mane of Leo the Lion.',
    'The larger one fills the view. The bright point is its partner: smaller, a little hotter and yellower. It is drawn closer in than it really is.',
    'They take more than 500 years to circle each other. They lie about four times as far apart as Pluto is from the Sun.',
    'Through a small telescope they are one of the prettiest pairs in the sky.',
    'The larger giant is about 30 times as wide as the Sun and as bright as 300 Suns. It is orange-gold because it is cooler than the Sun.',
    'Both have used up the hydrogen in their cores and swollen. Both were made with far less iron than the Sun.',
    'A planet about nine times as heavy as Jupiter has been reported around the larger star.',
    'They are 130 light-years away.',
    'Each November the Leonid meteors seem to fan out from a point close to it.',
    'Its name is from the Arabic for “the forehead”, though it sits in the Lion’s mane.',
    'More fine double stars: Almach, Izar and Porrima.',
  ],
}
