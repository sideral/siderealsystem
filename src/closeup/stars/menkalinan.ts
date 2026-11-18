import type { CloseupStar } from '../star'

/**
 * Figures: Southworth et al. 2007 (masses, sizes, orbit); Maury 1890 (the doubled lines);
 * Stebbins 1911 (the eclipses). Sizes and spacing are to scale: the second star is 0.93 times the
 * first's radius and orbits 6.35 radii away, tilted 76.9° so the eclipses are grazing. The
 * 3.96-day orbit is sped up.
 */
export const menkalinan: CloseupStar = {
  id: 'menkalinan',
  name: 'Menkalinan',
  designation: 'β Aurigae',
  radiusSun: 2.77,
  look: {
    color: '#d1dcff', // about 9,350 K
    limbColor: '#dce4fc',
    limbDarkening: 0.5,
    radius: 0.065,
    spinSeconds: 9, // each turns once per orbit
    glare: 1.2,
    companions: [
      {
        color: '#d3ddff', // about 9,200 K
        radius: 0.93,
        brightness: 0.97,
        glare: 0.12,
        place: { orbit: { distance: 6.35, seconds: 9, inclinationDeg: 76.9 } },
      },
    ],
  },
  story: [
    'Menkalinan looks like one white star. Up close it is identical twins, whirling round each other every four days.',
    'The two are almost the same in size, weight and colour. Each is nearly three times as wide as the Sun and over twice as heavy.',
    'They are five times closer together than Mercury is to the Sun.',
    'Their orbit is tipped almost edge-on to us. Twice each orbit one twin slides partly across the other. The star dims by a tenth.',
    'Sizes and spacing are to scale. The orbit is sped up.',
    'No ordinary telescope can split them. In 1889 Antonia Maury, at Harvard, split its light into a spectrum. The dark lines in it doubled, then merged again.',
    'Each twin’s light was shifting as it swung toward us and away. It was the second double star ever found that way. Mizar was the first.',
    'In 1910 Joel Stebbins caught the slight eclipses. He used one of the first electric light meters.',
    'Both twins are white and over half again as hot as the Sun. Both have just used up the hydrogen in their cores and begun to swell.',
    'The pair is about 80 light-years away. It drifts through space in step with the middle stars of the Big Dipper.',
    'Its name is from the Arabic for “shoulder of the charioteer”.',
    'More pairs that eclipse: Algol, Delta Velorum and Beta Lyrae. More stars that are secretly several: Capella and Castor.',
  ],
}
