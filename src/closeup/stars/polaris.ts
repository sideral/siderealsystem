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
  story: (distance) => [
    `This is Polaris, the North Star, seen through a dark filter from ${distance} away.`,
    'It looks pale yellow because its surface is about 6,000 K, a little hotter than the Sun’s 5,772 K.',
    'Its outer layers churn like the Sun’s, so the surface is faintly mottled. Telescopes have picked out large spots on it.',
    'Watch it breathe. Polaris swells and shrinks every 4 days, and its light rises and falls by a few percent.',
    'The pulse is sped up and exaggerated here so you can see it.',
    'Stars that pulse like this are called Cepheids. Their rhythm reveals their true brightness.',
    'That makes them cosmic yardsticks: Cepheids are how we first measured the distance to other galaxies.',
    'Size: about 46 times as wide as the Sun and 5 times as heavy. It gives off some 1,300 times as much light.',
    'Type: F7 Ib. “F” is a yellow-white star. “Ib” marks a supergiant, a swollen star late in its life.',
    'Estimated age: 50 to 70 million years. Heavy stars live fast: it has already used up the hydrogen in its core.',
    'It is about 430 light-years away. Its light tonight left around when the first telescopes were being built.',
    'Polaris is really three stars. The two points are its much smaller companions, drawn far closer in than true. A small telescope shows the outer one.',
    'It sits almost exactly above Earth’s north pole, so the whole sky seems to turn around it while it stays put.',
    'It will not hold that job forever. Earth’s axis wobbles like a top every 26,000 years.',
    'When the pyramids were built, the pole star was Thuban. In 12,000 years it will be Vega.',
    // How people have seen it. Inuit name: MacDonald, "The Arctic Sky" (1998).
    'Norse sailors called it the leiðarstjarna, the guiding star. In Mongolia it is the Golden Stake that the sky is tied to.',
    'In India it is Dhruva: a prince so steadfast in his devotion that he was given the one fixed place in the sky.',
    'The Navajo call it the Central Fire. The stars of the Big Dipper and Cassiopeia circle it like a family around a hearth.',
    'The Skidi Pawnee knew it as the Star That Does Not Walk Around, the chief who watches over all the other stars.',
    'Inuit named it Nuutuittuq, “never moving”. So far north it stands almost overhead, too high to steer by.',
    'People escaping slavery in the United States travelled north by it, finding it with the Big Dipper, the “Drinking Gourd”.',
  ],
}
