import type { CloseupStar } from '../star'

/** Figures: Teixeira et al. 2009 (radius, mass); Greaves et al. 2004 (debris disc); Feng et al. 2017 (planet candidates). */
export const tauCeti: CloseupStar = {
  id: 'tau-ceti',
  name: 'Tau Ceti',
  designation: 'τ Ceti',
  radiusSun: 0.79,
  look: {
    color: '#ffe6cf', // 5,340 K
    limbColor: '#f0b071',
    limbDarkening: 0.62,
    whiten: 0.18,
    spinSeconds: 170, // about 34 days in reality
    texture: { amplitude: 0.07, scale: 18, speed: 0.2 },
    spots: { darkness: 0.5, size: 0.045, seed: 37 }, // a very quiet star
  },
  story: (distance) => [
    `This is Tau Ceti, from ${distance} away. It is the nearest star that is alone, like the Sun, and much like it.`,
    'It is slightly cooler than the Sun, about 5,340 K, and so slightly more yellow.',
    'Its surface is the same fine grain of rising and sinking gas. It is calmer than the Sun, with few spots and few flares.',
    'Size: about four-fifths as wide as the Sun and four-fifths as heavy. It gives off half as much light.',
    'Type: G8 V. “G” is the Sun’s own class of star. “V” means it is in its prime, fusing hydrogen.',
    'Estimated age: uncertain, but probably older than the Sun, at 6 billion years or more.',
    'It is 11.9 light-years away, and faintly visible without a telescope.',
    'It was made with only about a third of the Sun’s share of heavy elements, the raw material of rocky planets.',
    'Yet it is circled by ten times as much comet and asteroid rubble as the Sun. Any planet there would be hit often.',
    'Astronomers have reported signs of several planets a few times Earth’s mass. None has been confirmed.',
    'In 1960 it was one of the two stars in the first radio search for other civilisations. Nothing was heard.',
    'It has no traditional name. But as a calm, close, Sun-like star, it has been a destination in a great many stories.',
  ],
}
