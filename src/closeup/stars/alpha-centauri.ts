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
  story: [
    'Alpha Centauri is the nearest star system to the Sun: just over four light-years away.',
    'Even so, the fastest probe to leave the Solar System would need 70,000 years to get there.',
    'It is three stars. The one filling the view is almost a copy of the Sun. It has the same colour, and is a little larger and brighter.',
    'The bright point is its partner, a slightly smaller, more orange star. The two circle each other every 80 years.',
    'They swing in as close as Saturn is to the Sun, then out nearly as far as Pluto.',
    'The faint red point is the third star, Proxima: a red dwarf far outside the pair. It is the single nearest star to us.',
    'Both points are drawn closer in than they really are.',
    'Proxima has at least one planet where water could stay liquid.',
    'From Earth the pair blur into one point, the third-brightest star of the night. From most of the northern hemisphere it never rises.',
    'With its neighbour Hadar it forms the Pointers. They lead the eye to the Southern Cross.',
    // How people have seen it. Andes: Urton, "At the Crossroads of the Earth and the Sky" (1981).
    // Boorong: Stanbridge (1857).
    'In the Andes, the Inca saw animals in the dark clouds of the Milky Way. Alpha Centauri and Hadar are the eyes of the llama.',
    'To the Boorong people of Australia the two stars were the Bermbermgle. These brothers speared Tchingal, the giant emu.',
    'More near twins of the Sun: 18 Scorpii, Tau Ceti and Eta Cassiopeiae. More close neighbours: Sirius and Epsilon Eridani.',
  ],
}
