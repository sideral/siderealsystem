import type { CloseupStar } from '../star'

/** Figures: Kraus et al. 2009 (mass, orbit); Menten et al. 2007 (distance to the nebula); O'Dell et al. (proplyds). */
export const theta1OrionisC: CloseupStar = {
  id: 'theta1-orionis-c',
  name: 'Theta¹ Orionis C',
  designation: 'θ¹ Orionis C',
  radiusSun: 10.6,
  look: {
    color: '#a2b9ff', // about 39,000 K
    limbColor: '#b5c6fd',
    limbDarkening: 0.3,
    whiten: 0.5,
    radius: 0.17,
    spinSeconds: 70, // 15.4 days in reality
    axis: { rollDeg: 30, inclinationDeg: 60 },
    glare: 1.5,
    envelope: { color: '#9bb4ff', strength: 0.3, reach: 0.25, streaks: 2 }, // wind held by its magnetic field
    // The Orion Nebula: gas set glowing by this star, with a hollow blown around it
    nebula: { kind: 'cloud', color: '#7fe6d2', outerColor: '#ff6f8f', brightness: 0.4, scale: 3.2, lanes: 0.7, falloff: 0.4, hollow: 0.3 },
    companions: [
      { color: '#b4c7ff', radius: 0.013, brightness: 1, glare: 0.4, place: { at: [-0.32, 0.2] } }, // the other three Trapezium stars
      { color: '#bccdff', radius: 0.013, brightness: 1, glare: 0.28, place: { at: [-0.12, 0.37] } },
      { color: '#b0c4ff', radius: 0.013, brightness: 1, glare: 0.4, place: { at: [0.34, 0.24] } },
    ],
  },
  story: (distance) => [
    `This is Theta¹ Orionis C, seen through a very dark filter from ${distance} away. This star lights the Orion Nebula.`,
    'Look at Orion’s sword and the middle “star” is a fuzzy patch: a cloud of gas where stars are being born.',
    'At its heart sit four young stars in a tight group, the Trapezium. This is the most powerful. The three points are the others.',
    'It is one of the hottest stars visible to the naked eye: about 39,000 K, nearly seven times the Sun’s temperature.',
    'Most of its light is ultraviolet. That light makes the whole nebula glow, for light-years around.',
    'Size: about 10 times as wide as the Sun and 33 times as heavy. It gives off some 200,000 times as much light.',
    'Its light and wind have blown a hollow in the cloud it was born in. That is why we can see inside.',
    'They are also hard on its neighbours. Young stars nearby have discs of dust that could form planets, and it is boiling them away.',
    'It has a strong magnetic field, rare for a star this hot, which traps its wind and heats it until it glows in X-rays.',
    'Type: O6 V. “O” is the hottest and rarest class. “V” means it is in its prime, fusing hydrogen.',
    'Estimated age: under a million years. Humans are older than this star.',
    'It is about 1,340 light-years away. It will live only a few million years, and end as a supernova.',
  ],
}
