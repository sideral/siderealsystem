import type { CloseupStar } from '../star'

/**
 * Figures: Baron et al. 2012 (CHARA orbit, sizes and masses); Jetsu et al. 2013 (Cairo Calendar).
 * Sizes and spacing are to scale: the K star is 1.27 times the B star's radius and orbits
 * 4.9 B-star radii away, tilted 81.4° so the eclipses are partial. The orbit is sped up and
 * the K star is drawn brighter than it is (its true surface brightness is a few percent).
 */
export const algol: CloseupStar = {
  id: 'algol',
  name: 'Algol',
  designation: 'β Persei',
  radiusSun: 2.73,
  look: {
    color: '#bbccff', // 13,000 K
    limbColor: '#c9d4fd',
    limbDarkening: 0.4,
    radius: 0.07,
    companion: {
      color: '#ffd3a6', // 4,500 K
      radius: 1.27,
      brightness: 0.4,
      glare: 0.03,
      place: { orbit: { distance: 4.87, seconds: 14, inclinationDeg: 81.4 } },
    },
  },
  story: (distance) => [
    `This is Algol, the Demon Star, from ${distance} away. It is two stars in a tight orbit, and you are watching them eclipse.`,
    'The small blue-white star is the bright one: 13,000 K. The larger orange one is only 4,500 K and gives off far less light.',
    'Every 2.87 days the dim star slides in front of the bright one. For ten hours, Algol fades to a third of its light.',
    'You can watch it happen from Earth with no telescope: a star that winks on schedule.',
    'The orbit is sped up here. Sizes and spacing are to scale, but the orange star is drawn brighter than it is so you can see it.',
    'They are about 9 million km apart: six times closer than Mercury is to the Sun.',
    'Size: the blue star is 2.7 times as wide as the Sun and 3.2 times as heavy. The orange star is 3.5 times as wide but weighs only 0.7.',
    'Types: B8 V, a hot star in its prime, and K0 IV, a swollen star that has finished burning the hydrogen in its core.',
    'That is a puzzle. Heavy stars age faster, yet here the lighter star is the one that looks old.',
    'The answer: the orange star used to be the heavy one. As it swelled, its partner’s gravity pulled most of its gas away.',
    'A thin stream of gas still crosses from one to the other.',
    'Estimated age: about 570 million years. A third star circles the pair from farther out, every 680 days.',
    'It is 90 light-years away. About 7 million years ago it passed within 10 light-years of the Sun and outshone Sirius.',
    'Its name is Arabic: ra’s al-ghul, “the demon’s head”. To the Greeks it was the eye of Medusa, in the head Perseus holds.',
    'In Hebrew tradition it was Satan’s Head. In China it is the fifth star of the Mausoleum.',
    'An Egyptian calendar of lucky and unlucky days, written about 3,200 years ago, may follow its 2.85-day rhythm.',
    'In 1783 John Goodricke, a deaf 18-year-old astronomer in England, timed its winks.',
    'He suggested something was passing in front of it. He was right.',
  ],
}
