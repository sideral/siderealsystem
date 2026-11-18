import type { CloseupStar } from '../star'

/**
 * Figures: North et al. 2007; De Marco & Schmutz 1999. Shows the Wolf-Rayet star as a ball of
 * wind with no surface. The crisp disc is its O-type partner, about 1.2 AU away, drawn at its
 * apparent size from a viewpoint roughly one Earth-Sun distance out.
 */
export const gammaVelorum: CloseupStar = {
  id: 'gamma-velorum',
  name: 'Gamma Velorum',
  designation: 'γ Velorum',
  radiusSun: 17,
  look: {
    color: '#c9d6ff',
    limbColor: '#b6c6f8',
    limbDarkening: 0.3,
    whiten: 0.55,
    radius: 0.075,
    fuzz: 0.7, // no surface: a glowing ball of fast wind
    glare: 2,
    envelope: { color: '#f2e3b3', strength: 0.25, reach: 1.2, streaks: 3, clumps: 0.8, speed: 0.4 },
    companions: [
      {
        color: '#a4bcff', // about 35,000 K
        radius: 0.42,
        brightness: 1,
        glare: 0.35,
        place: { orbit: { distance: 4, seconds: 30, inclinationDeg: 65, eccentricity: 0.33, periapsisDeg: 200 } },
        shock: { color: '#bfe0ff', brightness: 0.5, gap: 2.3 }, // where the two winds collide
      },
    ],
  },
  story: () => [
    'This is Gamma Velorum, from about as far away as Earth is from the Sun. It holds the nearest Wolf–Rayet star to us.',
    'The soft glowing ball is the Wolf–Rayet star. It has no surface you can see, only a dense wind leaving at 1,500 km/s.',
    'It is the bare core of a star that once weighed about 35 Suns. It has blown away all its outer layers and now weighs 9.',
    'Beneath the wind it is about 57,000 K, ten times the Sun’s temperature.',
    'The sharp blue disc is its partner: a hot giant of about 35,000 K, 17 times as wide as the Sun and 28 times as heavy.',
    'They circle each other every 78 days. Where their two winds collide a curved shock forms, hot enough to shine in X-rays.',
    'Together they give off several hundred thousand times the Sun’s light.',
    'Types: WC8, a Wolf–Rayet star rich in carbon, and O7.5, one of the hottest ordinary stars.',
    'Estimated age: about 4 million years. The Wolf–Rayet star will explode as a supernova, perhaps within 100,000 years.',
    'It is about 1,100 light-years away, and still the brightest star in Vela, the Sails.',
    'Its light, spread into a spectrum, shows bright coloured bands. Astronomers call it the Spectral Gem of the Southern Skies.',
    'It is sometimes called Regor: “Roger” backwards, an Apollo crew’s tribute to their crewmate Roger Chaffee.',
  ],
}
