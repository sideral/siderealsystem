import type { CloseupStar } from '../star'

/**
 * Figures: Kervella et al. 2003; Liebert et al. 2005; Bond et al. 2017 (rounded).
 * Shows Sirius A, with the white dwarf Sirius B as a point in the background, 8 to 31 AU away.
 */
export const sirius: CloseupStar = {
  id: 'sirius',
  name: 'Sirius',
  designation: 'α Canis Majoris',
  radiusSun: 1.711,
  look: {
    color: '#cad7ff', // 9,940 K
    limbColor: '#d6dffc',
    limbDarkening: 0.5,
    whiten: 0.45,
    spinSeconds: 120,
    glare: 1.45, // the brightest star of the night sky: smooth, spotless, dazzling
    companions: [
      // Sirius B, the white dwarf: about 25,000 K, and so small that it is only a point
      { color: '#eef2ff', radius: 0.0085, brightness: 1, glare: 0.26, place: { at: [-0.37, 0.15] } },
    ],
  },
  story: [
    'Sirius is the brightest star in the night sky.',
    'It is not the most powerful star you can see, only one of the nearest. It lies under 9 light-years away.',
    'That nearness, more than its power, is why it outshines every other star at night.',
    'It hides a secret. The small white point is Sirius B, a white dwarf. It is a burnt-out star the size of Earth, yet as heavy as the Sun.',
    'A teaspoon of it would weigh several tons. It circles Sirius every 50 years, and is drawn here closer in than it really is.',
    'It was once the heavier star of the two. It burned out first, long before there were people to see it.',
    'Sirius is nearly twice as hot as the Sun, which is why it shines blue-white. A star that hot does not boil, so its face is smooth and spotless.',
    'It is about twice the Sun’s width and weight, and gives off 25 times as much light.',
    'It is young. It first lit up around when the earliest dinosaurs appeared. The Sun is twenty times older.',
    // How people have seen it. North American names follow Holberg, "Sirius: Brightest Diamond
    // in the Night Sky" (2007).
    'Ancient Egyptians watched for its first rising before dawn each year. It told them the Nile was about to flood.',
    'To the Greeks it was the Dog Star, blamed for the hottest weeks of the year. These are the “dog days” of summer.',
    'Peoples who never met saw a dog or a wolf in it too. In China it is the Celestial Wolf. To the Pawnee it is the Wolf Star.',
    'More stars with a white dwarf in tow: Procyon, 40 Eridani and Mira.',
  ],
}
