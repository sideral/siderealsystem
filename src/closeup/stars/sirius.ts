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
  story: (distance) => [
    `This is Sirius, the brightest star in the night sky, seen through a dark filter from ${distance} away.`,
    'It glows blue-white because its surface is 9,940 K. The Sun, at 5,772 K, is cooler and looks yellow-white.',
    'The middle is brightest. Toward the edge you look through shallower, cooler gas, so the star dims and softens.',
    'The surface is smooth. The Sun’s skin churns into grains and dark spots, but a star this hot does not boil that way.',
    'The soft halo around it is only glare in the lens. Stars like Sirius have almost no glowing outer atmosphere.',
    'Size: 1.71 times as wide as the Sun and about twice as heavy. It gives off 25 times as much light.',
    'Type: A1V. The “A” marks a hot, blue-white star. The “V” means it is in its prime, fusing hydrogen like the Sun.',
    'Estimated age: about 240 million years. It first lit up around when the earliest dinosaurs appeared.',
    'The Sun is 4.6 billion years old and only middle-aged. Sirius burns faster and will swell into a red giant within a billion years.',
    'It is close: 8.6 light-years away. That nearness, more than its power, is why it outshines every other star at night.',
    'Sirius is not alone. The small white point is Sirius B, a white dwarf: a burnt-out star the size of Earth, as heavy as the Sun.',
    'It circles Sirius every 50 years. It was once the heavier of the two, about five Suns. It ran out of fuel roughly 120 million years ago.',
    'It spins slowly for a star of its kind, at least 16 km/s at the equator, so it stays almost perfectly round.',
    // How people have seen it. North American names follow Holberg, "Sirius: Brightest Diamond
    // in the Night Sky" (2007); the Boorong name was recorded by Stanbridge (1857).
    'Ancient Egyptians watched for its first rising before dawn each year. It told them the Nile was about to flood.',
    'Its name comes from the Greek for “scorching”. It is also the Dog Star, which gave us the “dog days” of summer.',
    'Peoples far from Greece saw a dog or a wolf in it too. In China it is Tiānláng, the Celestial Wolf.',
    'In North America, the Skidi Pawnee of the plains called it the Wolf Star. Other Pawnee bands knew it as the Coyote Star.',
    'For the Cherokee, Sirius and Antares were two dogs guarding the ends of the Milky Way, the Path of Souls.',
    'The Tohono O’odham and the Seri of the Sonoran Desert saw a dog following mountain sheep across the sky.',
    'The Blackfoot named it Dog-face. Far to the north, Inuit of the Bering Strait called it the Moon Dog.',
    'Polynesian navigators steered by it across the Pacific. For Māori it is Takurua, the star that gives winter its name.',
    'To the Boorong people of Australia it was Warepil, the wedge-tailed eagle.',
    'In ancient Persia it was Tishtrya, the star that brings rain. In Norse lands it was Lokabrenna, Loki’s torch.',
  ],
}
