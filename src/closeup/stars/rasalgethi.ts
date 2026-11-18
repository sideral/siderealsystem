import type { CloseupStar } from '../star'

/**
 * Figures: Moravveji et al. 2013. Shows the red giant, with its companions (a yellow giant and
 * a white star, about 500 AU away) as two points. Those two are really too close together to
 * split, and the white one is tinted the blue-green it shows in a telescope.
 */
export const rasalgethi: CloseupStar = {
  id: 'rasalgethi',
  name: 'Rasalgethi',
  designation: 'α Herculis',
  radiusSun: 280,
  look: {
    color: '#ff9652', // about 3,300 K
    limbColor: '#b0421a',
    limbDarkening: 0.8,
    whiten: 0.04,
    radius: 0.24,
    spinSeconds: 1000,
    axis: { rollDeg: 50 },
    texture: { amplitude: 0.65, scale: 2.1, speed: 0.03, cells: 0.4 },
    // It wanders by up to three times in brightness with no fixed rhythm; here the swing is gentler
    pulse: { seconds: 26, radius: -0.02, brightness: 0.22, irregular: 0.6, dimColor: '#f0703a' },
    fuzz: 0.06,
    wobble: 0.07,
    glare: 0.9,
    // A thick, dusty wind that flows out past its companions
    envelope: { color: '#e8602c', strength: 0.14, reach: 0.6, streaks: 4, clumps: 0.6, speed: 0.04 },
    companions: [
      // Its companion is a pair: a yellow giant and a white star. Beside the red giant they look blue-green
      { color: '#ffe2a6', radius: 0.0092, brightness: 1, glare: 0.32, place: { at: [0.33, 0.25] } },
      { color: '#cfeee8', radius: 0.0092, brightness: 1, glare: 0.2, place: { at: [0.353, 0.262] } },
    ],
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
    'The two points beside it are a yellow giant and a white star, a tight pair of their own. A telescope shows the group as orange and blue-green.',
    'It is shedding its outer layers in a thick wind that flows out past those companions.',
    'Its name is from the Arabic for “the head of the kneeler”, an older name for Hercules.',
  ],
}
