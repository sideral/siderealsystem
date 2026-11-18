import type { CloseupStar } from '../star'

/**
 * Figures: Roettenbacher et al. 2016 (CHARA images of the surface: a lasting polar spot and
 * passing spots at lower latitudes; shape, tilt and sizes). Sizes and spacing are to scale: the
 * unseen partner circles 2.7 star radii out every 17.8 days, and the giant turns in step with
 * it. The partner's look is a guess.
 */
export const zetaAndromedae: CloseupStar = {
  id: 'zeta-andromedae',
  name: 'Zeta Andromedae',
  designation: 'ζ Andromedae',
  radiusSun: 16,
  look: {
    color: '#ffd29c', // about 4,600 K
    limbColor: '#de8540',
    limbDarkening: 0.7,
    whiten: 0.12,
    radius: 0.15,
    spinSeconds: 22, // once per orbit
    axis: { rollDeg: -14, inclinationDeg: 70 },
    tide: 0.07, // pulled a little out of round, as measured
    texture: { amplitude: 0.2, scale: 7, speed: 0.05, cells: 0.6 },
    // The dark cap on the pole, there in every image
    patches: { shape: 'caps', color: '#5e2c12', strength: 0.8, sizeDeg: 30, seed: 5 },
    // The spots lower down, which come and go, with no belts
    spots: { darkness: 0.75, size: 0.2, seed: 37, count: 4, cycleSeconds: 33 },
    companions: [
      {
        color: '#ff9c66',
        radius: 0.045,
        brightness: 0.5,
        glare: 0.05,
        place: { orbit: { distance: 2.7, seconds: 22, inclinationDeg: 70, nodeDeg: -14 } },
      },
    ],
  },
  story: [
    'Zeta Andromedae is a giant star with a dark cap on its pole. Astronomers have photographed its spots.',
    'In 2016 six telescopes on Mount Wilson, in California, were linked to work as one. Their images were sharp enough to show its face.',
    'Every image showed a dark patch sitting on the pole. Lower down, other spots came and went from month to month.',
    'The Sun never does this. Its spots keep to two tidy belts either side of the equator, and it has none at its poles.',
    'The spots are huge because the star spins fast for a giant: once in 18 days. A small partner star, circling in the same 18 days, keeps it turning.',
    'The partner’s pull also draws the giant into a slight egg shape. The small orange dot is that partner. Nobody has seen it: its look is a guess.',
    'Sizes and spacing are to scale. The spin and the orbit are sped up.',
    'The giant is cooler than the Sun, 16 times as wide and about a hundred times as bright.',
    'Its spots swing in and out of view as it turns. So its light rises and falls a little every 18 days.',
    'It is about 190 light-years away: a modest star in the southern part of Andromeda.',
    'More stars with stormy surfaces: Epsilon Eridani and Capella. More of Andromeda: Mirach and Almach.',
  ],
}
