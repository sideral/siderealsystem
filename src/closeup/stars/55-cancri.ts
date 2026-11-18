import type { CloseupStar } from '../star'

/**
 * Figures: Fischer et al. 2008 (five planets); Winn et al. 2011 and Demory et al. 2011 (planet e
 * crossing the star); Hu et al. 2024 (JWST). The orbit of planet e is drawn to scale; the planet
 * itself is drawn about twice its true size so it shows.
 */
export const cancri55: CloseupStar = {
  id: '55-cancri',
  name: '55 Cancri',
  designation: 'Copernicus',
  radiusSun: 0.94,
  look: {
    color: '#ffe3c8', // about 5,200 K
    limbColor: '#eeab6b',
    limbDarkening: 0.64,
    whiten: 0.16,
    radius: 0.11,
    spinSeconds: 180, // about 39 days in reality
    texture: { amplitude: 0.15, scale: 20, speed: 0.22, cells: 1 },
    spots: { darkness: 0.5, size: 0.04, seed: 55 },
    glare: 0.8,
    companions: [
      {
        color: '#ff7a3c', // planet e: a night side of glowing rock, a day side lit white-hot
        radius: 0.045,
        brightness: 0.35,
        glare: 0.02,
        lit: 0.9,
        place: { orbit: { distance: 3.5, seconds: 8, inclinationDeg: 83 } },
      },
    ],
  },
  story: [
    '55 Cancri has a planet whose year lasts under 18 hours.',
    'Watch the small dot. That is the planet, Janssen: about twice as wide as Earth and eight times as heavy.',
    'Its orbit is drawn to scale, though sped up. The planet itself is drawn twice as large as it really is.',
    'It likely keeps one face to the star. That side is hot enough to melt rock, and may be an ocean of lava.',
    'Seen from Earth it crosses the star’s face on every orbit, dimming it very slightly. That is how its size is known.',
    'In 2024 the James Webb Space Telescope found signs of an atmosphere. It may be gas bubbling out of the lava.',
    'Four more planets circle farther out. This was the first star known to have five.',
    'The star is a little cooler, smaller and dimmer than the Sun, and about twice as old.',
    'It is 41 light-years away, and barely visible to the naked eye.',
    'The star is officially named Copernicus. Its planets are Galileo, Brahe, Lipperhey, Janssen and Harriot.',
    'More stars with planets: 51 Pegasi, Upsilon Andromedae and HR 8799.',
  ],
}
