import type { CloseupStar } from '../star'

/**
 * Figures: Ohnaka et al. 2013 and 2017 (VLTI size and surface map).
 * The blue-green point is Antares B, a hot star about 530 AU away: really blue-white, but beside
 * Antares it looks green. The amber haze is the gas and dust Antares has shed, lit by the star.
 */
export const antares: CloseupStar = {
  id: 'antares',
  name: 'Antares',
  designation: 'α Scorpii',
  radiusSun: 680,
  look: {
    color: '#ffa55e', // about 3,660 K
    limbColor: '#be451a',
    limbDarkening: 0.76,
    whiten: 0.06,
    spinSeconds: 900,
    axis: { rollDeg: 25 },
    texture: { amplitude: 0.8, scale: 1.9, speed: 0.035, cells: 0.4 },
    pulse: { seconds: 28, radius: 0.015, brightness: 0.07, irregular: 0.3 },
    fuzz: 0.05,
    wobble: 0.07,
    glare: 0.9,
    // The gas and dust it has shed, lit amber by the star itself
    nebula: { kind: 'cloud', color: '#ffae5c', outerColor: '#b8601f', brightness: 0.2, scale: 3.5, lanes: 0.3, falloff: 5 },
    companions: [
      {
        color: '#aee0f2', // Antares B, about 18,500 K: blue-white, though beside Antares it looks green
        radius: 0.0085,
        brightness: 1,
        glare: 0.35,
        place: { at: [-0.36, 0.2] },
      },
    ],
  },
  story: [
    'Antares is the red heart of the Scorpion. It is so large that in the Sun’s place it would swallow Mars.',
    'Its name is Greek for “rival of Mars”. The red planet passes close by it in the sky every couple of years, and they look alike.',
    'It is red because it is cool: more than a third cooler than the Sun.',
    'It boils in a few enormous cells, so it looks patchy. Thin outer gas blurs its edge.',
    'In 2017 astronomers mapped its surface and the gas churning above it. No star but the Sun had been pictured in such detail.',
    'The amber haze is gas and dust that Antares has shed, lit up by the star’s own light.',
    'The blue-green point is its companion, a hot star far outside. It is drawn closer in than it really is.',
    'It is really blue-white. Beside red Antares it only looks green.',
    'Antares gives off the light of some 75,000 Suns, from about 550 light-years away. The light you see left in the 1400s.',
    'It is only about 12 million years old and already near its end. It will explode as a supernova.',
    'In China it is the Fire Star, the heart of the Azure Dragon. Its place in the evening sky set the calendar 3,000 years ago.',
    'For the Cherokee it was a dog guarding one end of the Milky Way, the Path of Souls. Sirius guards the other.',
    'More red supergiants: Betelgeuse, the Garnet Star and VV Cephei.',
  ],
}
