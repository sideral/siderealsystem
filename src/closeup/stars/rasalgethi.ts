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
  story: [
    'Rasalgethi is a huge, unsteady red giant with a blue-green companion.',
    'In the Sun’s place it would swallow Earth and reach most of the way to Mars. Yet it weighs only two or three Suns.',
    'It is red because it is cool: not much more than half as hot as the Sun.',
    'Its surface boils in a few enormous cells. It has no sharp edge, only gas that thins away.',
    'Its brightness wanders over months, with no fixed rhythm. William Herschel noticed it in 1795.',
    'The two points beside it are a yellow giant and a white star, a tight pair of their own. They are drawn closer in than they really are.',
    'A telescope shows them as one blue-green star beside the orange giant. It is a famous colour contrast.',
    'The giant is shedding its outer layers in a thick wind. It flows out past those companions.',
    'It gives off the light of some 8,000 Suns, from about 360 light-years away.',
    'Its name is from the Arabic for “the head of the kneeler”, an older name for Hercules.',
    'More red giants: Gacrux, Mira and Antares. More coloured pairs: Albireo and Izar.',
  ],
}
