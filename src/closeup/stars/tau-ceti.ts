import type { CloseupStar } from '../star'

/**
 * Figures: Teixeira et al. 2009 (radius, mass); Greaves et al. 2004 (debris disc); Lawler et al.
 * 2014 (the disc's tilt); Feng et al. 2017 (planet candidates). The ring stands for the disc,
 * which really spans about 5 to 55 AU: thousands of times farther out than drawn.
 */
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
    radius: 0.2,
    spinSeconds: 170, // about 34 days in reality
    axis: { rollDeg: -14, inclinationDeg: 35 }, // seen nearly pole-on, as its belt of rubble is
    texture: { amplitude: 0.14, scale: 19, speed: 0.2, cells: 1 },
    // No spots: one of the quietest Sun-like stars known.
    // The belt of rubble, seen 35 degrees from face-on. The real one lies thousands of times farther out.
    ring: { inner: 1.5, outer: 2.05, tilt: 0.78, color: '#e9c9a4', brightness: 0.22 },
  },
  story: [
    'Tau Ceti is the nearest star that is alone, like the Sun, and much like it.',
    'That has made it a favourite. In 1960 it was one of the two stars in the first radio search for other civilisations. Nothing was heard.',
    'Calm, close and Sun-like, it is a favourite destination in science fiction.',
    'It is slightly cooler and yellower than the Sun, four-fifths as wide, and half as bright.',
    'It is calmer than the Sun, too, with almost no spots or flares.',
    'It was made with only about a third of the Sun’s share of heavy elements. Those are the raw material of rocky planets.',
    'Yet it is circled by ten times as much comet and asteroid rubble as the Sun. Any planet there would be hit often.',
    'The faint ring drawn here is that rubble. The real belt lies thousands of times farther out.',
    'Astronomers have reported signs of several planets a few times Earth’s mass. None has been confirmed.',
    'It is 12 light-years away and probably older than the Sun. You can see it faintly without a telescope.',
    'More quiet Sun-like stars: Delta Pavonis, 18 Scorpii and Zeta Reticuli. The other star in that first search: Epsilon Eridani.',
  ],
}
