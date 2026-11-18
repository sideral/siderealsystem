import type { CloseupStar } from '../star'

/** Figures: Lacour et al. 2009 (the star imaged through its pulse); AAVSO light curve (408 days). */
export const chiCygni: CloseupStar = {
  id: 'chi-cygni',
  name: 'Chi Cygni',
  designation: 'χ Cygni',
  radiusSun: 400,
  look: {
    color: '#ff9450', // near its brightest and hottest; about 2,500 K on average
    limbColor: '#b03a16',
    limbDarkening: 0.82,
    whiten: 0,
    radius: 0.23,
    spinSeconds: 1200,
    axis: { rollDeg: -10 },
    texture: { amplitude: 0.5, scale: 2.4, speed: 0.03, cells: 0.35 },
    // Real period 408 days. Smallest and hottest near maximum; swollen, cool and deep red at minimum
    pulse: { seconds: 19, radius: -0.16, brightness: 0.75, skew: 0.35, dimColor: '#b93611' },
    fuzz: 0.14,
    wobble: 0.07,
    glare: 0.75,
    envelope: { color: '#d8431c', strength: 0.14, reach: 0.3 }, // loose outer layers where molecules form
  },
  story: [
    'Chi Cygni changes brightness more than any other star you can see.',
    'About every 13 months it rises until it is easy to see with the naked eye. Then it fades until it needs a good telescope.',
    'At its brightest it can be more than 10,000 times brighter than at its faintest. The beat is sped up here.',
    'It really does swell and shrink, by about a third. Astronomers have imaged it doing so.',
    'But most of the fading is a trick of colour. As it swells it cools, and its light slides into the infrared, which we cannot see.',
    'Molecules then form in its loose outer layers and block what visible light is left.',
    'It is a dying red giant, less than half as hot as the Sun. It has a blurry edge and no real surface.',
    'It weighs about two Suns. But in the Sun’s place it would reach past the orbit of Mars.',
    'It is roughly 550 light-years away, in the neck of the Swan.',
    'The German astronomer Gottfried Kirch found that it varies in 1686. Its pulses have been recorded ever since.',
    'More dying giants that pulse: Mira and La Superba. Another star that fades from sight: R Coronae Borealis.',
  ],
}
