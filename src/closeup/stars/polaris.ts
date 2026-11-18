import type { CloseupStar } from '../star'

/**
 * Figures: Evans et al. 2024 (CHARA imaging: radius, mass, surface spots); Usenko & Klochkova 2008.
 * The circling point is Polaris Ab (a 30-year orbit) and the fixed one Polaris B; both are drawn
 * far closer in than true.
 */
export const polaris: CloseupStar = {
  id: 'polaris',
  name: 'Polaris',
  designation: 'α Ursae Minoris',
  radiusSun: 46,
  look: {
    color: '#fff2df', // about 6,000 K
    limbColor: '#f3c890',
    limbDarkening: 0.6,
    whiten: 0.2,
    radius: 0.2,
    spinSeconds: 240,
    axis: { rollDeg: 15 },
    texture: { amplitude: 0.12, scale: 9, speed: 0.05, cells: 0.5 },
    spots: { darkness: 0.4, size: 0.2, seed: 3, count: 5, faculae: 0.35 }, // large spots, as imaged by CHARA
    // A Cepheid with a small, even beat: really about 0.4% in radius over 4 days; exaggerated here to be visible
    pulse: { seconds: 8, radius: -0.012, brightness: 0.05, dimColor: '#ffe9c9' },
    companions: [
      {
        color: '#fff1e0', // Polaris Ab: a 30-year orbit, drawn far closer in and less stretched than true
        radius: 0.011,
        brightness: 1,
        glare: 0.16,
        place: { orbit: { distance: 1.7, seconds: 30, inclinationDeg: 38, eccentricity: 0.3, nodeDeg: -20, phase: 0.2 } },
      },
      { color: '#fff5ea', radius: 0.011, brightness: 1, glare: 0.3, place: { at: [0.36, 0.33] } }, // Polaris B, far beyond
    ],
  },
  story: [
    'Polaris is the North Star. It is the one star that stays put while the whole sky turns around it.',
    'It sits almost exactly above Earth’s north pole. Find it and you know which way is north.',
    'It is not especially bright. Nearly 50 stars outshine it.',
    'And it will not hold the job forever. Earth’s axis wobbles like a top every 26,000 years.',
    'When the pyramids were built, the pole star was Thuban. In 12,000 years it will be Vega.',
    'Watch it breathe. Polaris swells and shrinks every 4 days, and its light rises and falls by a few percent.',
    'Here the pulse is sped up, and drawn stronger than it really is.',
    'Stars that pulse like this are called Cepheids. Their rhythm reveals their true brightness. That makes them yardsticks for other galaxies.',
    'It is a yellow supergiant, about as hot as the Sun. But it is over 40 times as wide, and as bright as 1,300 Suns.',
    'Telescopes have picked out large spots on it.',
    'It is really three stars. The two points are its much smaller companions. They are drawn far closer in than they really are.',
    'It is about 430 light-years away. Its light tonight left around when the first telescopes were being built.',
    // How people have seen it. Inuit name: MacDonald, "The Arctic Sky" (1998).
    'In India it is Dhruva, a prince steadfast in his devotion. He was given the one fixed place in the sky.',
    'Inuit named it Nuutuittuq, “never moving”. So far north it stands almost overhead, too high to steer by.',
    'People escaping slavery in the United States travelled north by it. They found it with the Big Dipper, the “Drinking Gourd”.',
    'More pole stars, past and future: Thuban, Kochab and Vega. More Cepheids: Delta Cephei and Eta Aquilae.',
  ],
}
