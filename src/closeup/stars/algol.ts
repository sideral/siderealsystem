import type { CloseupStar } from '../star'

/**
 * Figures: Baron et al. 2012 (CHARA orbit, sizes and masses); Jetsu et al. 2013 (Cairo Calendar).
 * Sizes and spacing are to scale: the K star is 1.27 times the B star's radius and orbits
 * 4.9 B-star radii away, tilted 81.4° so the eclipses are partial. The orbit is sped up and
 * the K star is drawn brighter than it is (its true surface brightness is a few percent).
 * The K star fills its Roche lobe, so it is drawn as a teardrop; the stream is brighter than
 * the real one. Algol C is a point, drawn far closer in than its true 2.7 AU.
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
    spinSeconds: 14, // turns once per orbit
    glare: 1.15,
    companions: [
      {
        color: '#ffd3a6', // 4,500 K
        radius: 1.27,
        brightness: 0.4,
        glare: 0.03,
        tide: 0.32, // swollen until it fills its Roche lobe: a teardrop pointing at the blue star
        place: { orbit: { distance: 4.87, seconds: 14, inclinationDeg: 81.4 } },
        stream: { color: '#ffc9c0', brightness: 0.3 }, // gas still crossing to the blue star
      },
      { color: '#e6ecff', radius: 0.031, brightness: 1, glare: 0.3, place: { at: [-0.3, 0.3] } }, // Algol C, about 7,500 K
    ],
  },
  story: [
    'Algol is the Demon Star: a star that winks.',
    'Every three days or so it fades to a third of its light for a few hours, then recovers. You can watch it happen with no telescope.',
    'It is two stars in a tight orbit, and you are watching them eclipse. The dim orange star slides in front of the bright blue-white one.',
    'They are six times closer together than Mercury is to the Sun.',
    'There is a puzzle here. Heavy stars age faster, yet the lighter, orange star is the one that looks old.',
    'The answer: the orange star used to be the heavy one. As it swelled, its partner’s gravity pulled most of its gas away.',
    'A thin stream of gas still crosses between them. The same pull stretches the orange star into a teardrop.',
    'Sizes and spacing are to scale. The orbit is sped up. The orange star and the stream are drawn brighter than they really are.',
    'A third star circles the pair. It is the point beside them, drawn closer in than it really is.',
    'The blue star is over twice as hot as the Sun and nearly three times as wide. The system is 90 light-years away.',
    'About 7 million years ago it passed within 10 light-years of the Sun and outshone Sirius.',
    'Its name is Arabic: ra’s al-ghul, “the demon’s head”. To the Greeks it was the eye of Medusa, in the head Perseus holds.',
    'An Egyptian calendar of lucky and unlucky days may follow its rhythm. It is some 3,200 years old.',
    'In 1783 John Goodricke, a deaf 18-year-old in England, timed its winks. He suggested something was passing in front of it. He was right.',
    'More pairs that eclipse or trade gas: Beta Lyrae, Epsilon Aurigae and VV Cephei.',
  ],
}
