import type { CloseupStar } from '../star'

/**
 * Figures: Moravveji et al. 2013. Shows the red giant, with its companions (a yellow giant and
 * a white star, about 500 AU away) as one point.
 */
export const rasalgethi: CloseupStar = {
  id: 'rasalgethi',
  name: 'Rasalgethi',
  designation: 'α Herculis',
  radiusSun: 280,
  look: {
    color: '#ff9d58', // about 3,300 K
    limbColor: '#b84a1e',
    limbDarkening: 0.8,
    whiten: 0.04,
    spinSeconds: 1000,
    texture: { amplitude: 0.65, scale: 2, speed: 0.03 },
    pulse: { seconds: 28, radius: 0.02, brightness: 0.15 },
    fuzz: 0.06,
    wobble: 0.07,
    glare: 0.9,
    companion: {
      color: '#fff0c8',
      radius: 0.0085,
      brightness: 1,
      glare: 0.35,
      place: { at: [0.34, 0.26] },
    },
  },
  story: (distance) => [
    `This is Rasalgethi, the head of Hercules, from ${distance} away: a huge, unsteady red giant.`,
    'It is red-orange because it is cool: about 3,300 K, not much more than half the Sun’s temperature.',
    'Its surface boils in a few enormous cells, and its edge fades into thin gas with no sharp boundary.',
    'Its brightness wanders by up to three times over months, with no fixed rhythm. William Herschel noticed it in 1795.',
    'Size: about 280 times as wide as the Sun. Put where the Sun is, it would swallow Earth and reach most of the way to Mars.',
    'Yet it weighs only about two and a half Suns. It gives off some 8,000 times as much light.',
    'Type: M5 Ib-II. “M” is the coolest, reddest class of star. It sits between a bright giant and a supergiant.',
    'Estimated age: roughly a billion years.',
    'It is about 360 light-years away.',
    'The point beside it is a pair of stars, a yellow giant and a white star. A telescope shows the group as orange and blue-green.',
    'It is shedding its outer layers in a thick wind that flows out past those companions.',
    'Its name is from the Arabic for “the head of the kneeler”, an older name for Hercules.',
  ],
}
