import type { CloseupStar } from '../star'

/**
 * Figures: Ramírez & Allende Prieto 2011. Inuit: MacDonald, "The Arctic Sky" (1998).
 * The faint ripples stand for its Sun-like oscillations, which take days; they are drawn stronger than true.
 */
export const arcturus: CloseupStar = {
  id: 'arcturus',
  name: 'Arcturus',
  designation: 'α Boötis',
  radiusSun: 25.4,
  look: {
    color: '#ffca8c', // 4,290 K
    limbColor: '#d6722a',
    limbDarkening: 0.74,
    whiten: 0.1,
    spinSeconds: 500,
    axis: { rollDeg: 14, inclinationDeg: 60 },
    texture: { amplitude: 0.24, scale: 7, speed: 0.045, cells: 0.6 },
    // It rings like the Sun, only slower: faint ripples that take days to cross it. Exaggerated here.
    waves: [
      { l: 3, m: 2, amplitude: 0.04, seconds: 11 },
      { l: 2, m: 0, amplitude: 0.03, seconds: 7 },
    ],
    envelope: { color: '#ff6f7d', strength: 0.18, reach: 0.035 }, // the chromosphere: a thin rosy rim
  },
  story: [
    'Arcturus is the brightest star of the northern sky. It is also a visitor from somewhere else.',
    'It does not circle the galaxy with the Sun and its neighbours. It cuts across their path.',
    'Compared with us it moves fast enough to go from Earth to the Moon in under an hour.',
    'It travels with a stream of other old stars. They may be the remains of a small galaxy the Milky Way swallowed.',
    'It is also a preview. Arcturus weighs barely more than the Sun. But it is older, and has swollen into an orange giant.',
    'This is roughly how the Sun will look in 5 billion years. It will be cooler, 25 times as wide, and as bright as 170 Suns.',
    'The thin rosy rim is its chromosphere, a layer of hotter gas just above the surface. The Sun has one too.',
    'The faint ripples stand for slow tremors that take days to cross it. They are drawn stronger than they really are.',
    'It is 37 light-years away.',
    'In 1933 its light switched on the Chicago World’s Fair. A telescope caught it and turned it into an electric signal.',
    'People thought that light had set out during the city’s previous fair, 40 years before.',
    'In Hawai‘i it is Hōkūle‘a, the Star of Gladness. It passes straight overhead there, so navigators used it to find the islands.',
    'Inuit know it as the Old Man. Its place in the sky told them the hour in the long winter dark.',
    'More orange giants: Aldebaran, Pollux and Kochab. More previews of the Sun’s future: Beta Hydri and Mira.',
  ],
}
