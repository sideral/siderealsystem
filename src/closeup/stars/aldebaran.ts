import type { CloseupStar } from '../star'

/** Figures: Richichi & Roccatagliata 2005; Hatzes et al. 2015. Seri names: Moser & Marlett dictionary (2005). */
export const aldebaran: CloseupStar = {
  id: 'aldebaran',
  name: 'Aldebaran',
  designation: 'α Tauri',
  radiusSun: 45,
  look: {
    color: '#ffbe7a', // 3,900 K
    limbColor: '#cf6226',
    limbDarkening: 0.75,
    whiten: 0.08,
    spinSeconds: 700,
    texture: { amplitude: 0.22, scale: 5, speed: 0.04 },
    pulse: { seconds: 20, radius: 0.004, brightness: 0.03 },
  },
  story: (distance) => [
    `This is Aldebaran, the red eye of Taurus the Bull, seen through a dark filter from ${distance} away.`,
    'It is orange because it is cool: about 3,900 K, two-thirds of the Sun’s temperature.',
    'Its surface churns in large, slow cells, and its brightness wanders slightly as it does.',
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
