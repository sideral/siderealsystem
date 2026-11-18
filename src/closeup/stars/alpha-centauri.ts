import type { CloseupStar } from '../star'

/**
 * Figures: Kervella et al. 2017 (radii); Akeson et al. 2021 (masses, orbit).
 * Shows Alpha Centauri A, with B as a point in the background. At 11 to 36 AU, B would look
 * like a star hundreds of times brighter than the full Moon, not a disc. The faint red point is
 * Proxima, about 13,000 AU out: from there, an ordinary dim star.
 */
export const alphaCentauri: CloseupStar = {
  id: 'alpha-centauri',
  name: 'Alpha Centauri',
  designation: 'α Centauri',
  radiusSun: 1.22,
  look: {
    color: '#fff0e6', // 5,790 K
    limbColor: '#f5bf85',
    limbDarkening: 0.6,
    whiten: 0.2,
    spinSeconds: 150, // about 22 days in reality
    axis: { rollDeg: 12, inclinationDeg: 79 }, // tipped as the pair's orbit is
    texture: { amplitude: 0.15, scale: 24, speed: 0.24, cells: 1 }, // fine Sun-like grain
    // Sun-like spots in two belts, on a slow cycle of their own
    spots: { darkness: 0.72, size: 0.05, seed: 9, count: 7, beltDeg: 20, cycleSeconds: 56, faculae: 0.45 },
    companions: [
      { color: '#ffd9b0', radius: 0.0085, brightness: 1, glare: 0.55, place: { at: [0.35, 0.22] } }, // B: 5,260 K
      { color: '#ff8a4f', radius: 0.0085, brightness: 0.8, glare: 0.06, place: { at: [-0.41, 0.33] } }, // Proxima: about 3,000 K
    ],
  },
  story: (distance) => [
    `This is Alpha Centauri A, the larger of the Sun’s two nearest bright neighbours, from ${distance} away.`,
    'It looks almost exactly like the Sun because it almost is one: 5,790 K, barely hotter.',
    'Like the Sun, its surface is a fine grain of rising and sinking gas with a few dark spots, and its edge is dimmer than its centre.',
    'The bright point beside it is its partner, Alpha Centauri B: a slightly smaller, cooler, more orange star at 5,260 K.',
    'The two circle each other every 80 years. They come as close as Saturn is to the Sun and swing out nearly as far as Pluto.',
    'From here, B is a dazzling point, hundreds of times brighter than our full Moon.',
    'Size: A is 1.22 times as wide as the Sun and 1.1 times as heavy. B is 0.86 times as wide and 0.9 times as heavy.',
    'A gives off 1.5 times the Sun’s light. B gives off about half.',
    'Types: G2 V, the same as the Sun, and K1 V. Both are in their prime, fusing hydrogen.',
    'Estimated age: about 5 billion years, a little older than the Sun.',
    'They are 4.37 light-years away. The faint red point is a third star, Proxima. It orbits far outside the pair and is slightly nearer to us.',
    'Proxima has at least one planet where water could stay liquid. It is far too dim to see without a telescope.',
    'From Earth the pair blur into one point, the third-brightest star of the night. It never rises for most of the northern hemisphere.',
    'With its neighbour Beta Centauri it forms the Pointers, which lead the eye to the Southern Cross.',
    // How people have seen it. Andes: Urton, "At the Crossroads of the Earth and the Sky" (1981).
    // Boorong: Stanbridge (1857). /Xam: Bleek & Lloyd, "Specimens of Bushman Folklore" (1911).
    'In the Andes, the Inca saw animals in the dark clouds of the Milky Way. Alpha and Beta Centauri are Llamaq Ñawin, the eyes of the llama.',
    'To the Boorong people of Australia the two stars were the Bermbermgle, brothers who speared Tchingal, the giant emu.',
    'The /Xam of southern Africa said they were two men who became lions.',
    'Its old names survive: Rigil Kentaurus, Arabic for “the foot of the centaur”, for A, and Toliman, “the ostriches”, for B.',
    'In China it is the Second Star of the Southern Gate.',
  ],
}
