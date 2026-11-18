import type { CloseupStar } from '../star'

/**
 * Figures: Przybilla et al. 2006 and Moravveji et al. 2012 (temperature, radius, mass, variability).
 * The point is Rigel B, itself three stars, drawn nearer than it would appear.
 */
export const rigel: CloseupStar = {
  id: 'rigel',
  name: 'Rigel',
  designation: 'β Orionis',
  radiusSun: 79,
  look: {
    color: '#bfd0ff', // 12,100 K
    limbColor: '#ccd8fd',
    limbDarkening: 0.4,
    whiten: 0.35,
    spinSeconds: 300,
    axis: { rollDeg: -30 },
    texture: { amplitude: 0.04, scale: 4, speed: 0.02 },
    pulse: { seconds: 11, radius: 0.004, brightness: 0.04, irregular: 0.6 }, // slight and irregular
    fuzz: 0.02, // a strong wind softens the edge
    glare: 1.3,
    envelope: { color: '#8fb0ff', strength: 0.26, reach: 0.35, streaks: 6, clumps: 0.5, speed: 0.25 }, // the wind, in streamers
    companions: [
      // Rigel B: three small stars that blur into one point, about 2,200 AU away
      { color: '#c9d7ff', radius: 0.0085, brightness: 1, glare: 0.14, place: { at: [0.36, -0.2] } },
    ],
  },
  story: [
    'Rigel is the blue-white foot of Orion, a supergiant as bright as 120,000 Suns.',
    'Placed as close as Sirius, it would shine nearly as bright as a half Moon.',
    'It is really about 860 light-years away. Even so, it is the seventh-brightest star in the night sky.',
    'The light you see left in the days of the Crusades.',
    'It is blue-white because it is hot: twice as hot as the Sun. A star this hot does not boil, so its surface is smooth.',
    'It is about 80 times as wide as the Sun. In the Sun’s place it would reach nearly to Mercury.',
    'The glow around it is not only glare. Rigel blows a wind millions of times stronger than the Sun’s.',
    'It flickers slightly and irregularly, as the whole star quivers over days and weeks.',
    'Its light makes a dust cloud 40 light-years from it shine blue: the Witch Head Nebula.',
    'The small point beside it is really three stars, almost lost in its glare from Earth. It is drawn closer in than it really is.',
    'It is only about 8 million years old. One day it will explode as a supernova, like its neighbour Betelgeuse.',
    // How people have seen it. K'iche': Tedlock, "Popol Vuh" (1996).
    'For the K’iche’ Maya, Rigel is one of three hearthstones of creation, all stars of Orion.',
    'The Orion Nebula, glowing between them, is the smoke of the fire.',
    'In Japan white Rigel is the Genji star and red Betelgeuse the Heike star. They are the banners of two warring clans, facing each other across Orion.',
    'For some Māori it is Puanga. Its rising before dawn in midwinter marks the start of the new year.',
    'More blue supergiants: Deneb, Alnilam and Naos.',
  ],
}
