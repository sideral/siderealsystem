import type { CloseupStar } from '../star'

/**
 * Figures: Motalebi et al. 2015 (the planets; planet b crossing the star); Gillon et al. 2017
 * (planet c crossing too; sizes and masses). The two planets drawn are b and c, on their true
 * tilts (85.1° and 87.3°) and with years in the true ratio. Their real orbits are about 11 and
 * 18 star radii out; they are drawn closer in, and the planets three times too wide.
 */
export const hd219134: CloseupStar = {
  id: 'hd-219134',
  name: 'HD 219134',
  designation: 'HR 8832 · Gliese 892',
  radiusSun: 0.78,
  look: {
    color: '#ffd5a8', // about 4,700 K
    limbColor: '#e28d4a',
    limbDarkening: 0.68,
    whiten: 0.12,
    radius: 0.085,
    spinSeconds: 160, // about 42 days in reality
    axis: { rollDeg: 12 },
    texture: { amplitude: 0.15, scale: 20, speed: 0.22, cells: 1 },
    spots: { darkness: 0.5, size: 0.05, seed: 91, count: 3, beltDeg: 20 },
    glare: 0.75,
    companions: [
      { color: '#c9a58a', radius: 0.06, brightness: 0.03, glare: 0, lit: 0.8, place: { orbit: { distance: 3.2, seconds: 5, inclinationDeg: 85.1, nodeDeg: 12 } } }, // b
      { color: '#c2a892', radius: 0.057, brightness: 0.03, glare: 0, lit: 0.8, place: { orbit: { distance: 5.35, seconds: 10.9, inclinationDeg: 87.3, nodeDeg: 12, phase: 0.4 } } }, // c
    ],
  },
  story: [
    'HD 219134 is an orange dwarf just 21 light-years away. It has the nearest worlds we can watch cross their star.',
    'Watch the two dark dots. Each is a rocky planet. Each is about one and a half times as wide as Earth, and over four times as heavy.',
    'From Earth their orbits are almost exactly edge-on. So each passes across the star’s face once a lap and blocks a sliver of its light.',
    'The dip is tiny: three parts in ten thousand. But it gives the planet’s size. Its tug on the star gives its weight.',
    'Size and weight together say what a world is made of. These two are rock and iron, like Earth, only bigger.',
    'They are no place to live. Their years last three days and seven days. Their surfaces are hot enough to melt lead.',
    'Here the planets are drawn three times as large as they really are, and closer in. Their years are sped up.',
    'At least three more planets circle farther out. They are not drawn. None of them is known to cross the star.',
    'The star is cooler and smaller than the Sun and gives off about a quarter of its light. It is more than twice as old.',
    'It is just bright enough to see without a telescope on a dark night. Look beside the W of Cassiopeia.',
    'It has no proper name. Its planets were found in 2015 with a telescope in the Canary Islands. It was built to hunt for other Earths.',
    'More stars with close-in planets: 55 Cancri, 51 Pegasi and Tau Boötis. More small orange neighbours: 61 Cygni and Epsilon Indi.',
  ],
}
