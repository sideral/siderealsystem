import type { CloseupStar } from '../star'

/**
 * Figures: Puebla et al. 2016; Searle et al. 2008. Its distance is uncertain (1,200 to 2,000 ly).
 * Lakota: Goodman, "Lakota Star Knowledge" (1992). Seri: Moser & Marlett (2005). Yolŋu: Norris & Norris (2009).
 */
export const alnilam: CloseupStar = {
  id: 'alnilam',
  name: 'Alnilam',
  designation: 'ε Orionis',
  radiusSun: 32,
  look: {
    color: '#a9c0ff', // about 27,000 K
    limbColor: '#b9cafd',
    limbDarkening: 0.35,
    whiten: 0.4,
    radius: 0.24,
    spinSeconds: 200,
    axis: { rollDeg: 12 },
    texture: { amplitude: 0.04, scale: 4, speed: 0.02 },
    // It flickers with no fixed rhythm, as the most luminous supergiants do
    pulse: { seconds: 14, radius: 0.008, brightness: 0.04, irregular: 0.5 },
    fuzz: 0.03,
    glare: 1.45,
    envelope: { color: '#86a6ff', strength: 0.3, reach: 0.4, streaks: 3, clumps: 0.7, speed: 0.3 }, // the wind, in clumps
  },
  story: (distance) => [
    `This is Alnilam, the middle star of Orion’s Belt, seen through a dark filter from ${distance} away.`,
    'It is intensely blue-white: about 27,000 K, nearly five times the Sun’s temperature. Most of its light is ultraviolet.',
    'The surface is smooth, and it blows a wind at 2,000 km/s that carries off gas millions of times faster than the Sun’s does.',
    'The blue haze streaming off it here is that wind, drawn brighter than it would look.',
    'Size: around 30 times as wide as the Sun and some 40 times as heavy.',
    'It gives off several hundred thousand times the Sun’s light, making it one of the most powerful stars you can see.',
    'Type: B0 Ia. “B0” is among the hottest blue stars. “Ia” marks the most luminous kind of supergiant.',
    'Estimated age: under 6 million years. Within a million more it will swell into a red supergiant and then explode.',
    'It is somewhere between 1,200 and 2,000 light-years away, probably farther than the two Belt stars beside it.',
    'Its name is from the Arabic for “string of pearls”.',
    'The Belt is three stars in a row, and almost every people has named it: the Three Kings, the Three Marys, the Three Sisters.',
    'For the Lakota the Belt is the backbone of a bison. The Pleiades are its head.',
    'The Seri of Mexico see three animals shot by a hunter. The middle one, Alnilam, is a mule deer.',
    'For the Yolŋu of northern Australia the Belt is three brothers in a canoe, swept into the sky for eating a forbidden fish.',
    'For Māori it is Tautoru, “the three”.',
  ],
}
