import type { CloseupStar } from '../star'

/**
 * Figures: Torres et al. 2022. Shows Castor Aa; the bright point is Castor B, about 100 AU away.
 * Each of the three visible stars in the system is itself a close pair, making six in all.
 */
export const castor: CloseupStar = {
  id: 'castor',
  name: 'Castor',
  designation: 'α Geminorum',
  radiusSun: 2.09,
  look: {
    color: '#c8d6ff', // about 10,300 K
    limbColor: '#d5dffc',
    limbDarkening: 0.5,
    spinSeconds: 80,
    companion: {
      color: '#d4defe', // about 8,800 K
      radius: 0.0085,
      brightness: 1,
      glare: 0.5,
      place: { at: [0.3, 0.26] },
    },
  },
  story: (distance) => [
    `This is Castor, the second of the Twins, from ${distance} away. To the eye it is one star. It is really six.`,
    'This is the brightest of them: a blue-white star of about 10,300 K, smooth like Sirius.',
    'The bright point is a second, similar star about 100 times as far away as Earth is from the Sun. The two circle each other every 460 years.',
    'Each of them has a small red dwarf star tucked in close, too faint to pick out here.',
    'Farther out still, a third pair, two red dwarfs that eclipse each other, takes thousands of years to circle the rest.',
    'Size: the brightest star is about twice as wide as the Sun and 2.4 times as heavy.',
    'Types: A1 V and A2 V for the bright pair: hot white stars in their prime. The other four are all cool red dwarfs.',
    'Estimated age: about 300 million years.',
    'It is 51 light-years away.',
    'In 1803 William Herschel showed that its two bright stars were slowly circling each other.',
    'It was the first proof that gravity works beyond the Solar System.',
    'In Greek myth Castor was the mortal twin, a horseman. When he died, his brother Pollux shared his own immortality with him.',
    'To the Boorong people of Australia, Castor and Pollux were Yurree and Wanjel, two hunters chasing Purra the kangaroo.',
  ],
}
