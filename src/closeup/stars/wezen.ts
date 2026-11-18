import type { CloseupStar } from '../star'

/** Figures: Davis et al. 2007 (angular size); distance about 1,600 light-years (uncertain). */
export const wezen: CloseupStar = {
  id: 'wezen',
  name: 'Wezen',
  designation: 'δ Canis Majoris',
  radiusSun: 215,
  look: {
    color: '#fff0d8', // about 6,000 to 6,400 K
    limbColor: '#f0bf80',
    limbDarkening: 0.64,
    spinSeconds: 700,
    axis: { rollDeg: 25 },
    texture: { amplitude: 0.17, scale: 6, speed: 0.045, cells: 0.6 }, // big, slow cells on a puffed-up supergiant
    fuzz: 0.012,
    glare: 1.3,
    envelope: { color: '#ffd9a6', strength: 0.14, reach: 0.25, streaks: 3, clumps: 0.4, speed: 0.06 }, // a slow wind
  },
  story: (distance) => [
    `This is Wezen, in the hindquarters of Canis Major, the Great Dog, from ${distance} away.`,
    'It looks like one more bright star below Sirius. It is really one of the most powerful stars you can see.',
    'Sirius is bright because it is close: 8.6 light-years. Wezen is about 1,600 light-years away.',
    'Moved to where Sirius is, it would shine about as brightly as a half Moon, and cast shadows.',
    'It is yellow-white: about 6,000 K, close to the Sun’s temperature. But it is a supergiant.',
    'Size: about 215 times as wide as the Sun. Put where the Sun is, it would reach to Earth’s orbit.',
    'It weighs about 17 Suns and gives off some 80,000 times as much light.',
    'A star this bright cannot hold on to all its gas. The soft glow at its edge is a slow wind drifting away.',
    'Type: F8 Ia. “F” is a yellow-white star. “Ia” marks the most luminous kind of supergiant.',
    'Estimated age: about 10 million years. Its core hydrogen is already gone, and it is swelling and cooling.',
    'It will become a red supergiant, and then explode as a supernova, probably within the next 100,000 years or so.',
    'Its name is Arabic for “weight”. Nobody is sure why. One guess: it hangs low and seems to struggle to rise.',
  ],
}
