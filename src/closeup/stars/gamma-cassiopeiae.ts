import type { CloseupStar } from '../star'

/** Figures: Stee et al. 2012 (disc); Smith et al. 2016 (X-rays). The disc is real, and close in: a few star-widths across. */
export const gammaCassiopeiae: CloseupStar = {
  id: 'gamma-cassiopeiae',
  name: 'Gamma Cassiopeiae',
  designation: 'γ Cassiopeiae',
  radiusSun: 10,
  look: {
    color: '#aac0ff', // about 25,000 K
    limbColor: '#bbcbfd',
    limbDarkening: 0.35,
    radius: 0.13,
    spinSeconds: 10,
    axis: { rollDeg: -18 },
    flattening: 0.15,
    gravityDarkening: 0.3,
    glare: 1.2,
    ring: { inner: 1.05, outer: 3.3, tilt: 0.42, color: '#ff9fc2', brightness: 0.4, arm: 0.6 },
  },
  story: [
    'Gamma Cassiopeiae, the middle star of the “W”, is spinning itself apart.',
    'Its equator moves about 200 times faster than the Sun’s, close to the limit. Gas lifts off there and settles into a glowing disc.',
    'The disc is hot hydrogen, which glows pink. The real one grows, thins and rebuilds over years and decades. Here it is drawn steady.',
    'So the star’s brightness wanders. In 1937 it rose to become the brightest star in Cassiopeia. Then it sank to the faintest of the W.',
    'It was the first star of this kind ever found. The Italian astronomer Angelo Secchi spotted its odd light in 1866.',
    'It also gives off strange, strong X-rays that nobody has fully explained. A hidden companion may be involved.',
    'The star is blue-white and more than four times as hot as the Sun. It is about 10 times as wide. It shines like tens of thousands of Suns.',
    'It is about 8 million years old, and about 550 light-years away.',
    'It has no traditional Western name. Apollo astronauts navigated by it as “Navi”. That is the middle name of Virgil Ivan Grissom, spelled backwards.',
    'More stars shedding a disc: Achernar, Dschubba and Alcyone.',
  ],
}
