import type { CloseupStar } from '../star'

/**
 * Figures: Herschel 1782 (the triple); Washington Double Star Catalog (A to B 7 arc seconds, B to
 * C 3, in a slightly bent line); standard values for B-type emission stars. The three are drawn
 * as near-equal discs in their true arrangement, but far closer in: the real gaps are about
 * 1,500 and 600 AU. All three are Be stars with gas discs; the discs are drawn brighter than true.
 */
export const betaMonocerotis: CloseupStar = {
  id: 'beta-monocerotis',
  name: 'Beta Monocerotis',
  designation: 'β Monocerotis',
  radiusSun: 5,
  look: {
    color: '#b3c6ff', // about 18,000 K
    limbColor: '#c2d0fd',
    limbDarkening: 0.38,
    radius: 0.065,
    spinSeconds: 9,
    axis: { rollDeg: 30 },
    flattening: 0.14,
    gravityDarkening: 0.25,
    glare: 1.1,
    ring: { inner: 1.2, outer: 2.3, tilt: 0.3, color: '#ffc7dd', brightness: 0.09 }, // gas shed from the equator
    companions: [
      // B and C, each drawn over a flat, faint disc of its own gas
      { color: '#ffc7dd', radius: 2.1, brightness: 0.07, glare: 0, flattening: 0.62, place: { at: [0.25, 0.25] } },
      { color: '#afc3ff', radius: 0.9, brightness: 1, glare: 0.1, place: { at: [0.25, 0.25] } },
      { color: '#ffc7dd', radius: 2, brightness: 0.07, glare: 0, flattening: 0.74, place: { at: [0.375, 0.335] } },
      { color: '#b1c5ff', radius: 0.85, brightness: 1, glare: 0.1, place: { at: [0.375, 0.335] } },
    ],
  },
  story: [
    'Beta Monocerotis is three blue stars in a row. William Herschel called it one of the most beautiful sights in the heavens.',
    'To the eye it is one faint star in the Unicorn. A small telescope splits it into three, in a tight, slightly bent line.',
    'All three are hot, blue-white and nearly equal in brightness. Triple stars are common. Three this alike are rare.',
    'Each is about six or seven times as heavy as the Sun and three times as hot.',
    'All three spin fast enough to fling gas off their equators. The gas gathers in a faint, glowing ring around each star.',
    'The rings are drawn brighter than they really are, and the stars far closer in. The real gaps are dozens of times the distance from the Sun to Pluto.',
    'The two that sit close together circle each other over thousands of years. The third, at the centre here, takes far longer to go round them.',
    'They are about 700 light-years away, and young: a few tens of millions of years old.',
    'Herschel found the three in 1781, the year he discovered Uranus.',
    'More stars with a ring of shed gas: Achernar, Gamma Cassiopeiae and Alcyone. More fine multiple stars: Almach and Algieba.',
  ],
}
