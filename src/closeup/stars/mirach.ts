import type { CloseupStar } from '../star'

/**
 * Figures: Hipparcos distance; standard M0 III values. The smudge is Mirach's Ghost (NGC 404), a
 * dwarf galaxy about 10 million light-years behind the star (Karachentsev et al. 2002), 7 arc
 * minutes from it on the sky. It is drawn tens of thousands of star radii closer in than true,
 * and larger, as a soft halo with a brighter core.
 */
export const mirach: CloseupStar = {
  id: 'mirach',
  name: 'Mirach',
  designation: 'β Andromedae',
  radiusSun: 100,
  look: {
    color: '#ffb46c', // about 3,800 K
    limbColor: '#c9561f',
    limbDarkening: 0.77,
    whiten: 0.07,
    radius: 0.2,
    spinSeconds: 800,
    axis: { rollDeg: 12 },
    texture: { amplitude: 0.34, scale: 3.6, speed: 0.04, cells: 0.5 },
    pulse: { seconds: 20, radius: -0.005, brightness: 0.04, irregular: 0.5 }, // it wavers slightly, with no fixed beat
    fuzz: 0.015,
    glare: 1.7, // the glare is the point: the galaxy hides in it
    companions: [
      { color: '#d9d2c4', radius: 0.2, brightness: 0.1, glare: 0.1, place: { at: [0.2, 0.22] } }, // the Ghost's halo
      { color: '#f3ead8', radius: 0.07, brightness: 0.4, glare: 0.12, place: { at: [0.2, 0.22] } }, // and its core
    ],
  },
  story: [
    'Mirach is a red giant with a ghost: a whole galaxy hides in its glare.',
    'Look beside the star for a faint, round smudge. That is Mirach’s Ghost, a small galaxy with billions of stars of its own.',
    'The galaxy lies about 10 million light-years behind the star. Mirach is 50,000 times closer. They only line up from where we stand.',
    'In a telescope the star’s glare nearly drowns it. Observers often take it for a reflection inside the eyepiece: a ghost.',
    'Here the Ghost is drawn larger and far closer in than it really is.',
    'Mirach is also a signpost. Step from it past two fainter stars and you reach the Andromeda Galaxy. Nothing farther shows to the naked eye.',
    'The star is a red giant, cooler than the Sun and about a hundred times as wide. In the Sun’s place it would reach past Mercury’s orbit.',
    'It shines like 2,000 Suns from about 200 light-years away. Its light wavers slightly, with no steady beat.',
    'Its name comes from the Arabic for “girdle”. It marks the waist of Andromeda, the chained princess.',
    'More red giants: Gacrux, Aldebaran and Rasalgethi. More of Andromeda: Almach and Alpheratz.',
  ],
}
