import type { CloseupStar } from '../star'

/** Figures: Przybilla et al. 2006 and Moravveji et al. 2012 (temperature, radius, mass, variability). */
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
    texture: { amplitude: 0.04, scale: 4, speed: 0.02 },
    pulse: { seconds: 11, radius: 0.004, brightness: 0.04 }, // slight, irregular in reality
    fuzz: 0.015, // a strong wind softens the edge
    glare: 1.25,
  },
  story: (distance) => [
    `This is Rigel, the blue-white foot of Orion, from ${distance} away. Placed where the Sun is, it would reach nearly to Mercury.`,
    'It is blue-white because it is very hot: about 12,100 K, twice the Sun’s temperature.',
    'The surface is smooth. A star this hot does not boil into grains and spots the way the Sun does.',
    'The glow around it is not only glare. Rigel blows a wind millions of times stronger than the Sun’s.',
    'It flickers slightly and irregularly, as the whole star quivers over days and weeks.',
    'Size: about 79 times as wide as the Sun and 21 times as heavy.',
    'It gives off around 120,000 times the Sun’s light. Placed as close as Sirius, it would shine nearly as bright as a half Moon.',
    'Type: B8 Ia. “B” is a very hot, blue-white star. “Ia” marks the most luminous kind of supergiant.',
    'Estimated age: about 8 million years. It has already used up the hydrogen in its core and swollen to this size.',
    'One day it will explode as a supernova, like its neighbour Betelgeuse.',
    'It is about 860 light-years away, and still the seventh-brightest star in the night sky.',
    'Its light makes a dust cloud 40 light-years from it shine blue: the Witch Head Nebula.',
    'At least three smaller stars travel with it, hidden in its glare.',
    'Its name is from the Arabic for “the foot”: the left foot of the figure we call Orion.',
    // How people have seen it. K'iche': Tedlock, "Popol Vuh" (1996). Wardaman: Harney & Cairns,
    // "Dark Sparklers" (2003).
    'For the K’iche’ Maya, Rigel and two other stars of Orion are the three hearthstones of creation.',
    'The Orion Nebula, glowing between them, is the smoke of the fire.',
    'The Lacandon Maya call Rigel tunsel, the little woodpecker.',
    'For some Māori it is Puanga. Its rising before dawn in midwinter marks the start of the new year.',
    'In Japan it is the Genji star, for the white banners of the Minamoto clan, facing red Betelgeuse across Orion.',
    'To the Wardaman people of Australia it is the Red Kangaroo Leader, who conducts the ceremonies of the sky.',
  ],
}
