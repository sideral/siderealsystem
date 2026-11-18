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
  story: [
    'Wezen looks like one more bright star below Sirius. It is really one of the most powerful stars you can see.',
    'Sirius is bright because it is close: under 9 light-years. Wezen is about 1,600 light-years away.',
    'Moved to where Sirius is, it would shine about as brightly as a half Moon. It would cast shadows.',
    'It gives off the light of some 80,000 Suns.',
    'It is close to the Sun’s colour and temperature, but about 200 times as wide. In the Sun’s place it would reach to Earth’s orbit.',
    'A star this bright cannot hold on to all its gas. The soft glow at its edge is a slow wind drifting away.',
    'It is about 10 million years old. Its core hydrogen is already gone, and it is swelling and cooling.',
    'It will become a red supergiant, then explode as a supernova. That is probably less than 100,000 years away.',
    'Its name is Arabic for “weight”. Nobody is sure why. One guess: it hangs low and seems to struggle to rise.',
    'More yellow supergiants: Sadr, Mirfak and Canopus.',
  ],
}
