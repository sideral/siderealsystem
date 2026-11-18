import type { CloseupStar } from '../star'

/**
 * Figures: Yoon et al. 2010 (shape, pole and equator temperatures); Aufdenberg et al. 2006;
 * Böhm et al. 2015 (faint spots). Shown as we see it from Earth: almost exactly pole-on.
 */
export const vega: CloseupStar = {
  id: 'vega',
  name: 'Vega',
  designation: 'α Lyrae',
  radiusSun: 2.82, // at the equator; 2.36 pole to pole
  look: {
    color: '#c5d4ff', // about 10,200 K at the pole
    limbColor: '#e6e9fb',
    limbDarkening: 0.4,
    spinSeconds: 12, // spins in well under a day; the Sun takes almost a month
    axis: { inclinationDeg: 6 }, // seen almost exactly pole-on, as from Earth
    flattening: 0.16,
    gravityDarkening: 0.28,
    equatorColor: '#e6ebff', // about 8,000 K
    spots: { darkness: 0.12, size: 0.12, seed: 41, count: 7 }, // faint surface structure (Böhm et al. 2015)
  },
  story: [
    'Vega is the star astronomers measure all others against.',
    'For a century it defined zero on the brightness scale used for every other star.',
    'In 1850 it became the first star other than the Sun ever photographed.',
    'It kept a secret all that time. Vega spins once in well under a day, so fast that it bulges at the equator.',
    'Nobody noticed, because we look almost straight down on its pole, as in this view. From above, a squashed star still looks round.',
    'The hot pole is the bright middle. The bulging equator sits farther from the core, so it is the cooler, dimmer rim.',
    'It turns at more than two-thirds of the speed that would pull it apart.',
    'It is blue-white and two-thirds hotter than the Sun. It is over twice as wide, and 40 times as bright. Only very faint spots mark its surface.',
    'It is 25 light-years away and a tenth of the Sun’s age. A wide disc of dust rings it: the rubble of comets and asteroids.',
    'Around 12,000 BC it was the north pole star. Earth’s slow wobble will bring it back in about 12,000 years.',
    'In China it is Zhinü, the Weaver Girl. The river of the Milky Way parts her from her Cowherd, the star Altair.',
    'They may meet one night a year, on a bridge of magpies. That night is the Qixi festival in China and Tanabata in Japan.',
    'More stars spun flat: Altair, Regulus and Achernar. More with dust rings: Fomalhaut and Denebola.',
  ],
}
