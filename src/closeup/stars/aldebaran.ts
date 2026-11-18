import type { CloseupStar } from '../star'

/** Figures: Richichi & Roccatagliata 2005; Hatzes et al. 2015. */
export const aldebaran: CloseupStar = {
  id: 'aldebaran',
  name: 'Aldebaran',
  designation: 'α Tauri',
  radiusSun: 45,
  look: {
    color: '#ffb872', // 3,900 K
    limbColor: '#c9581f',
    limbDarkening: 0.77,
    whiten: 0.07,
    spinSeconds: 700,
    axis: { rollDeg: -22 },
    texture: { amplitude: 0.32, scale: 4.2, speed: 0.04, cells: 0.55 },
    // A slow irregular variable: it wanders by a few percent with no fixed beat
    pulse: { seconds: 22, radius: -0.006, brightness: 0.05, irregular: 0.4 },
    fuzz: 0.012,
    envelope: { color: '#ff5d52', strength: 0.15, reach: 0.06 }, // chromosphere and the foot of a slow wind
  },
  story: [
    'Aldebaran is the red eye of Taurus the Bull.',
    'It seems to sit among the Hyades, the V of stars that makes the Bull’s face. It does not: the cluster is more than twice as far away.',
    'It is an orange giant, a third cooler than the Sun and about 45 times as wide. In the Sun’s place it would reach halfway to Mercury.',
    'Yet it weighs barely more than the Sun. This is what a Sun-like star becomes once the hydrogen in its core runs out.',
    'Its surface churns in large, slow cells, and its brightness wanders slightly as it does.',
    'The red rim is thin gas lifting off the surface. A giant this size sheds its outer layers in a slow wind.',
    'It gives off the light of over 400 Suns, from 65 light-years away. The light you see left in the early 1960s.',
    'The Pioneer 10 probe is drifting in its direction. It will take about 2 million years to get there.',
    'Its name is Arabic for “the follower”. It rises after the Pleiades and trails them across the sky.',
    'In India it is Rohini, the Moon’s favourite among his 27 wives. For neglecting the others he was cursed to wane each month.',
    'More orange giants: Arcturus, Pollux and Eltanin.',
  ],
}
