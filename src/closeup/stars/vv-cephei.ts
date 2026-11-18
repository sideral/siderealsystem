import type { CloseupStar } from '../star'

/**
 * Figures: Wright 1977 (20.3-year orbit); Bauer et al. 2008. The giant's size is very uncertain
 * (about 1,000 to 1,900 solar radii); the hot partner is drawn larger than true so it shows.
 */
export const vvCephei: CloseupStar = {
  id: 'vv-cephei',
  name: 'VV Cephei',
  designation: 'HR 8383',
  radiusSun: 1000,
  look: {
    color: '#ff9a50', // about 3,800 K
    limbColor: '#b8401a',
    limbDarkening: 0.82,
    whiten: 0.03,
    radius: 0.09,
    spinSeconds: 1500,
    texture: { amplitude: 0.75, scale: 1.6, speed: 0.025 },
    fuzz: 0.08,
    wobble: 0.1,
    glare: 0.8,
    companion: {
      color: '#aabfff', // about 25,000 K
      radius: 0.05,
      brightness: 4,
      glare: 0.5,
      place: { orbit: { distance: 4.4, seconds: 40, inclinationDeg: 80 } },
    },
  },
  story: (distance) => [
    `This is VV Cephei, from ${distance} away: a red supergiant, one of the largest stars known, with a hot blue partner.`,
    'Size: roughly a thousand times as wide as the Sun. Estimates vary a great deal. Its edge is too thin and blurry to pin down.',
    'Put where the Sun is, it would swallow every planet out to Jupiter. Light would take over an hour to cross it.',
    'It is red because it is cool: about 3,800 K. Its surface boils in a few enormous cells.',
    'The blue point is a star perhaps 20 times as wide as the Sun, and far hotter. It is drawn larger than true so you can see it.',
    'They circle each other every 20.3 years. Then the blue star slips behind the giant and stays hidden for about a year and a half.',
    'It is one of the longest eclipses known. The last ran from 2017 to 2019. The next begins around 2037.',
    'The giant is so bloated that its gas streams across to the blue star and swirls around it in a glowing disc.',
    'Types: M2 Iab, a red supergiant, and a hot B star.',
    'Estimated age: about 25 million years.',
    'It is roughly 5,000 light-years away, and still faintly visible to the naked eye.',
    'The giant will explode as a supernova. Nobody knows what that will do to its partner.',
  ],
}
