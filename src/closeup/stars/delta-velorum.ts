import type { CloseupStar } from '../star'

/**
 * Figures: Otero, Fieseler & Lloyd 2000 (the eclipses, and the Galileo star scanner's record of
 * 1989); Mérand et al. 2011 and Pribulla et al. 2011 (sizes and orbit: 45.15 days, e = 0.29,
 * edge-on). The real orbit is about 32 star radii across; it is drawn far closer in, with its
 * true shape and tilt. The point is Delta Velorum B, about 140 years out, drawn far closer in.
 */
export const deltaVelorum: CloseupStar = {
  id: 'delta-velorum',
  name: 'Delta Velorum',
  designation: 'δ Velorum · Alsephina',
  radiusSun: 2.8,
  look: {
    color: '#d0dbff', // about 9,400 K
    limbColor: '#dbe3fc',
    limbDarkening: 0.5,
    radius: 0.04,
    spinSeconds: 30,
    glare: 1.3,
    companions: [
      {
        color: '#ccd8ff', // about 9,800 K
        radius: 0.86,
        brightness: 1,
        glare: 0.14,
        place: { orbit: { distance: 9.5, seconds: 18, inclinationDeg: 89, eccentricity: 0.29, periapsisDeg: 110, nodeDeg: 35, phase: 0.62 } },
      },
      { color: '#fff0de', radius: 0.055, brightness: 1, glare: 0.3, place: { at: [-0.3, 0.3] } }, // B, about 6,400 K
    ],
  },
  story: [
    'Delta Velorum is one of the brightest stars that winks. Nobody noticed until it confused a spacecraft.',
    'In 1989 the Galileo probe, bound for Jupiter, used this star to keep its bearings. One day the star was too faint for it to find.',
    'In 1997 Sebastián Otero, an amateur in Argentina, saw it fade with his own eyes. By 2000 the answer was clear: eclipses.',
    'It is two white stars that circle every 45 days. Their orbit is edge-on to us. So they take turns hiding each other, a few hours at a time.',
    'For those hours the star loses about a third of its light. Then it is back to normal for weeks. It is easy to miss.',
    'Here the pair is sped up and drawn far closer in than it really is. The two really keep about as far apart as Mercury and the Sun.',
    'The point beside them is a third, fainter star, also drawn closer in. It takes about 140 years to circle the pair.',
    'Each of the two is white, hotter than the Sun, and two to three times as wide. Together they shine like a hundred Suns.',
    'They are about 80 light-years away.',
    'It is one corner of the False Cross. Those four stars look like the Southern Cross, and have fooled many a navigator.',
    'More pairs that eclipse: Algol, Menkalinan and Beta Lyrae. Its neighbour in the Sails: Gamma Velorum.',
  ],
}
