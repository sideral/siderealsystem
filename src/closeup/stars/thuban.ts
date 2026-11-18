import type { CloseupStar } from '../star'

/**
 * Figures: Bedding et al. 2019 (TESS eclipses); Hey et al. 2022. The smaller disc is its
 * companion, about 0.46 AU away in reality: the orbit is drawn about nine times too tight.
 */
export const thuban: CloseupStar = {
  id: 'thuban',
  name: 'Thuban',
  designation: 'α Draconis',
  radiusSun: 3.4,
  look: {
    color: '#c9d7ff', // about 10,100 K
    limbColor: '#d6dffc',
    limbDarkening: 0.5,
    radius: 0.1,
    spinSeconds: 150,
    glare: 1.2,
    companions: [
      {
        color: '#d0dbff',
        radius: 0.55,
        brightness: 0.9,
        glare: 0.12,
        // 51 days in reality, with much the same stretch. Tilted so that each star just clips the other's edge.
        place: { orbit: { distance: 3.2, seconds: 30, inclinationDeg: 62, eccentricity: 0.4, nodeDeg: -20, phase: 0.3 } },
      },
    ],
  },
  story: (distance) => [
    `This is Thuban, seen through a dark filter from ${distance} away. It is a modest star with a grand past.`,
    'Five thousand years ago it was the north pole star. The whole sky turned around it.',
    'Around 2800 BC it sat closer to the pole than Polaris ever will. The Egyptians building the pyramids saw it there.',
    'Earth’s axis slowly wobbled away from it. It will be the pole star again in about 18,000 years.',
    'It is blue-white: about 10,100 K, with a smooth surface like Sirius.',
    'The smaller disc is a companion star. They circle each other every 51 days, on a stretched orbit drawn here far tighter than it is.',
    'In 2019 a planet-hunting satellite caught them eclipsing each other. Each just clips the other’s edge. Nobody had noticed before.',
    'Size: about 3.4 times as wide as the Sun and 2.8 times as heavy. It gives off some 250 times as much light.',
    'Type: A0 III. “A” is a hot white star. “III” marks a giant: it has used up the hydrogen in its core.',
    'Estimated age: a few hundred million years. It is not well measured.',
    'It is about 300 light-years away, which is why it looks faint. It is only the eighth-brightest star in its own constellation.',
    'Its name is Arabic for “the serpent”. It lies in the tail of Draco, the Dragon.',
    'In China it is the Right Pivot, one of the hinges the sky turns on.',
  ],
}
