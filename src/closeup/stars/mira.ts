import type { CloseupStar } from '../star'

/** Figures: Woodruff et al. 2004 (size, temperature); Martin et al. 2007 (GALEX tail); AAVSO light curves. */
export const mira: CloseupStar = {
  id: 'mira',
  name: 'Mira',
  designation: 'ο Ceti',
  radiusSun: 350,
  look: {
    color: '#ffa458', // about 3,000 K
    limbColor: '#c9501f',
    limbDarkening: 0.8,
    whiten: 0.05,
    radius: 0.2,
    spinSeconds: 1200,
    texture: { amplitude: 0.35, scale: 2.2, speed: 0.03, cells: 0.4 },
    // Real period 332 days; smallest and hottest near maximum light
    pulse: { seconds: 16, radius: -0.08, brightness: 0.5, skew: 0.3, dimColor: '#e0541f' },
    fuzz: 0.12,
    wobble: 0.07,
    glare: 0.8,
    envelope: { color: '#ff6a30', strength: 0.12, reach: 0.4, clumps: 0.6, speed: 0.05 },
    // It ploughs through the galaxy's gas: a shock ahead and a long tail of cast-off gas behind
    nebula: { kind: 'bowshock', color: '#8fb8ff', brightness: 0.25, angleDeg: 200, standoff: 0.4, tail: { brightness: 0.8, color: '#9cc0ff' } },
    companions: [
      {
        color: '#cfe0ff', // Mira B, a white dwarf, with the gas it has caught
        radius: 0.011,
        brightness: 1,
        glare: 0.3,
        place: { at: [-0.31, 0.22] },
        disc: { outer: 9, tilt: 0.4, color: '#a9c8ff', brightness: 0.35 },
      },
    ],
  },
  story: [
    'Mira is “the wonderful”: a star that vanishes for months and then comes back.',
    'In 1596 David Fabricius saw it and took it for a new star. It faded, and then it returned.',
    'It was the first star known to change brightness on a cycle. In 1662 Johannes Hevelius gave it its name.',
    'Watch it swell and fade. Mira pulses about every 11 months, sped up here to seconds.',
    'At its brightest it is easy to see with the naked eye. At its faintest it can be 1,500 times dimmer, and you need a telescope.',
    'Most of that is a trick of colour. As it cools, its light slides into the infrared. Molecules form that block visible light.',
    'It is a dying red giant, barely half as hot as the Sun. In the Sun’s place it would reach to the orbit of Mars.',
    'Yet it weighs only a little more than the Sun. This is what the Sun will look like near its end, some 5 billion years from now.',
    'It is racing through the galaxy and shedding its outer layers. Behind it trails a tail of cast-off gas 13 light-years long.',
    'The blue arc and the tail drawn here are that wake. The real ones are light-years across.',
    'The point with a small disc is its companion, probably a white dwarf. It is drawn closer in than it really is.',
    'It catches some of the gas Mira throws off, and the gas swirls around it.',
    'It is about 300 light-years away.',
    'More dying giants that pulse: Chi Cygni and La Superba. Another preview of the Sun’s end: Arcturus.',
  ],
}
