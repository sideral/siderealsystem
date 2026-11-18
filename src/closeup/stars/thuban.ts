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
  story: [
    'Thuban was the North Star when the pyramids were built.',
    'Five thousand years ago the whole sky turned around it. It sat closer to the pole than Polaris ever will.',
    'Earth’s axis slowly wobbled away from it. It will be the pole star again in about 20,000 years.',
    'Otherwise it is a modest star, only the eighth-brightest in Draco the Dragon.',
    'It still held a surprise. In 2019 a planet-hunting satellite caught it being eclipsed by a companion. Nobody had noticed before.',
    'The smaller disc is that companion. They circle each other every 51 days, and each just clips the other’s edge.',
    'Here the orbit is sped up, and drawn far tighter than it really is.',
    'Thuban is blue-white and nearly twice as hot as the Sun. It is over three times as wide, and as bright as 250 Suns.',
    'It is about 300 light-years away, which is why it looks faint.',
    'Its name is Arabic for “the serpent”. In China it is the Right Pivot, one of the hinges the sky turns on.',
    'More pole stars, past and future: Polaris, Kochab and Vega.',
  ],
}
