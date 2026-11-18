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
    spinSeconds: 10,
    flattening: 0.15,
    gravityDarkening: 0.3,
    glare: 1.2,
    ring: { inner: 1, outer: 3, tilt: 0.4, color: '#ffd3e2', brightness: 0.26 },
  },
  story: (distance) => [
    `This is Gamma Cassiopeiae, the middle star of the “W”, from ${distance} away. It is spinning itself apart.`,
    'Its equator moves at over 400 km/s, close to the limit. Gas lifts off there and settles into a glowing disc around the star.',
    'The disc is hot hydrogen, which glows pink. It grows, thins and rebuilds over years and decades.',
    'So the star’s brightness wanders. In 1937 it rose to become the brightest star in Cassiopeia, then sank to the faintest of the W.',
    'The star itself is blue-white: about 25,000 K, more than four times the Sun’s temperature.',
    'Size: about 10 times as wide as the Sun and 15 times as heavy. It gives off tens of thousands of times as much light.',
    'Type: B0.5 IVe. “B” is a hot blue-white star. The “e” marks the glowing gas, and this was the first such star ever found.',
    'The Italian astronomer Angelo Secchi spotted its odd spectrum in 1866.',
    'Estimated age: about 8 million years.',
    'It is about 550 light-years away.',
    'It also gives off strange, strong X-rays that nobody has fully explained. A hidden companion may be involved.',
    'It has no traditional Western name. In China it is the Whip.',
    'Apollo astronauts navigated by it under the name “Navi”: the middle name of Virgil Ivan Grissom, spelled backwards.',
  ],
}
