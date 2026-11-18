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
  story: (distance) => [
    `This is Chi Cygni, in the neck of the Swan, from ${distance} away. No star you can see changes brightness more.`,
    'Every 408 days it rises until it is easy to see with the naked eye, then fades until it needs a good telescope.',
    'At its brightest it can be more than 10,000 times brighter than at its faintest. The beat is sped up here.',
    'It really does swell and shrink: from about 350 to nearly 500 times the Sun’s width. Astronomers have imaged it doing so.',
    'But most of the fading is a trick of colour. As it swells it cools, and its light slides into the infrared.',
    'Molecules then form in its outer layers and block what visible light is left.',
    'It is a dying red giant like Mira: about 2,500 K, with a loose, blurry edge and no real surface.',
    'It weighs about two Suns. Put where the Sun is, it would reach past the orbit of Mars.',
    'Type: S. A rare kind of cool giant whose outer layers are rich in the metal zirconium, made deep inside the star.',
    'Estimated age: uncertain. It is near the end of its life.',
    'It is roughly 550 light-years away.',
    'The German astronomer Gottfried Kirch found that it varies in 1686. Only two such stars were known before it.',
    'It has been followed ever since: more than three hundred years of pulses on record.',
  ],
}
