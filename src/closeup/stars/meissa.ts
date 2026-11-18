import type { CloseupStar } from '../star'

/**
 * Figures: Dolan & Mathieu 2002 (the cluster, the ring and the supernova that may have cleared
 * it); standard O8 III values. The ring is some 200 light-years across and the star a speck at
 * its centre; here the hollow is drawn far closer in. The close point is Meissa B, about 4 arc
 * seconds away; the fainter two stand for the cluster (Collinder 69).
 */
export const meissa: CloseupStar = {
  id: 'meissa',
  name: 'Meissa',
  designation: 'λ Orionis',
  radiusSun: 10,
  look: {
    color: '#a3baff', // about 35,000 K
    limbColor: '#b6c7fd',
    limbDarkening: 0.3,
    whiten: 0.5,
    radius: 0.1,
    spinSeconds: 60,
    axis: { rollDeg: -20 },
    glare: 1.6,
    envelope: { color: '#9bb4ff', strength: 0.16, reach: 0.25, streaks: 4, clumps: 0.4, speed: 0.2 }, // its wind
    // The Lambda Orionis ring: a cleared-out hollow, walled by gas that the star keeps glowing
    nebula: { kind: 'cloud', color: '#ff7a8a', outerColor: '#d8405a', brightness: 0.42, scale: 5.5, lanes: 0.6, falloff: 2.4, hollow: 0.38 },
    companions: [
      { color: '#aabfff', radius: 0.022, brightness: 1, glare: 0.4, place: { at: [0.12, 0.1] } }, // Meissa B
      { color: '#b8caff', radius: 0.022, brightness: 1, glare: 0.14, place: { at: [-0.2, 0.17] } }, // cluster sisters
      { color: '#c0d0ff', radius: 0.022, brightness: 1, glare: 0.1, place: { at: [0.08, -0.22] } },
    ],
  },
  story: [
    'Meissa is the head of Orion. It sits at the centre of a hollow in space about 200 light-years wide.',
    'Meissa and its sister stars were born in a dark cloud about 5 million years ago.',
    'About a million years ago one of the sisters probably blew up. The blast swept what was left of the cloud outward.',
    'The gas and dust now form a ring around the hollow. On the sky it spans a patch wider than Orion’s shoulders.',
    'Meissa’s fierce ultraviolet light keeps the gas glowing red. The glow is far too faint to see by eye, but cameras catch it.',
    'Here the ring and the stars around Meissa are drawn far closer in than they really are. The real star is a speck in a vast empty room.',
    'The bright point beside it is a second hot star, its partner. The fainter two are sisters from the same cluster.',
    'Meissa is blue and six times as hot as the Sun. It is about ten times as wide and nearly 30 times as heavy.',
    'It is over 1,000 light-years away. To the eye, Meissa and two faint neighbours make a small triangle: Orion’s head.',
    'Ptolemy listed it as a cloudy star. Arab, Indian and Chinese stargazers each made that little triangle a station of the Moon.',
    'Its name is Arabic for “the shining one”. It first belonged to a star in Gemini, and landed here by mistake.',
    'More stars lighting up a nebula: Theta¹ Orionis C, Alnitak and Rho Ophiuchi. Orion’s shoulders: Betelgeuse and Bellatrix.',
  ],
}
