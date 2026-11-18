import type { CloseupStar } from '../star'

/** Figures: Richichi & Roccatagliata 2005; Hatzes et al. 2015. Seri names: Moser & Marlett dictionary (2005). */
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
  story: (distance) => [
    `This is Aldebaran, the red eye of Taurus the Bull, seen through a dark filter from ${distance} away.`,
    'It is orange because it is cool: about 3,900 K, two-thirds of the Sun’s temperature.',
    'Its surface churns in large, slow cells, and its brightness wanders slightly as it does.',
    'The red rim is thin gas lifting off the surface. A giant this size sheds its outer layers in a slow wind.',
    'Size: about 45 times as wide as the Sun, yet only a little heavier. It gives off over 400 times as much light.',
    'Type: K5 III. “K” is an orange star. “III” marks a giant that has used up the hydrogen in its core.',
    'Estimated age: about 6 billion years, older than the Sun.',
    'It is 65 light-years away. It seems to sit among the Hyades star cluster, but the cluster is more than twice as far.',
    'The Pioneer 10 probe is drifting in its direction. It will take about 2 million years to get there.',
    'Its name is Arabic for “the follower”: it rises after the Pleiades and trails them across the sky.',
    'In ancient Persia it was one of four royal stars, the watcher of the east.',
    'In India it is Rohini, the favourite wife of the Moon.',
    'The Seri of north-west Mexico call it “the star that goes ahead”, and name their October moon “Aldebaran’s path”.',
    'In one Aboriginal story from eastern Australia it is Karambal, who stole another man’s wife and was lifted into the sky.',
  ],
}
