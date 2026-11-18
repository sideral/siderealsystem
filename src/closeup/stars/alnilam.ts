import type { CloseupStar } from '../star'

/**
 * Figures: Puebla et al. 2016; Searle et al. 2008. Its distance is uncertain (1,200 to 2,000 ly).
 * Lakota: Goodman, "Lakota Star Knowledge" (1992). Yolŋu: Norris & Norris (2009).
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
  story: [
    'Alnilam is the middle star of Orion’s Belt. It is one of the most powerful stars you can see.',
    'It gives off several hundred thousand times the Sun’s light. Most of it is ultraviolet, invisible to us.',
    'It only looks like an ordinary bright star because it is so far away. It lies somewhere between 1,200 and 2,000 light-years from us.',
    'It blows a wind fast enough to cross from Earth to the Moon in about three minutes.',
    'The blue haze streaming off it is that wind, drawn brighter than it really is.',
    'It is blue-white, nearly five times as hot as the Sun, and about 30 times as wide.',
    'It is under 6 million years old and already ageing. Within a million more it will swell into a red supergiant, then explode.',
    'Its name is from the Arabic for “string of pearls”.',
    'The Belt is three stars in a row, and almost every people has named it. The Three Kings, the Three Marys, the Three Sisters.',
    'For the Lakota the Belt is the backbone of a bison. The Pleiades are its head.',
    'For the Yolŋu of northern Australia the Belt is three brothers in a canoe. They were swept into the sky for eating a forbidden fish.',
    'The rest of the Belt: Alnitak and Mintaka. More blue supergiants: Rigel and Deneb.',
  ],
}
