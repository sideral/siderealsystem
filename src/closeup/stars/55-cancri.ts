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
    texture: { amplitude: 0.07, scale: 18, speed: 0.2 },
    spots: { darkness: 0.5, size: 0.04, seed: 55 },
    glare: 0.8,
    companion: {
      color: '#ff8a4a',
      radius: 0.04,
      brightness: 0.3,
      glare: 0,
      place: { orbit: { distance: 3.5, seconds: 8, inclinationDeg: 83 } },
    },
  },
  story: (distance) => [
    `This is 55 Cancri, from ${distance} away. Watch the small dot. That is a planet, and its year lasts under 18 hours.`,
    'The planet is called Janssen. It is about twice as wide as Earth and eight times as heavy.',
    'It circles so close that its orbit is drawn here at true scale. The planet itself is drawn twice its real size.',
    'It likely keeps one face to the star. That side is around 2,000 °C: hot enough to melt rock. It may be an ocean of lava.',
    'Seen from Earth it crosses the star’s face on every orbit, dimming it very slightly. That is how its size is known.',
    'In 2024 the James Webb Space Telescope found signs that it has an atmosphere, perhaps gas bubbling out of the lava.',
    'Four more planets circle farther out. In 2007 this became the first star known to have five.',
    'The star is yellow-orange, a little cooler than the Sun: about 5,200 K.',
    'Size: slightly smaller and lighter than the Sun. It gives off about 60 percent as much light.',
    'Type: G8 V. “G” is a yellow star like the Sun. “V” means it is in its prime.',
    'Estimated age: about 8 to 10 billion years, twice the Sun’s age.',
    'It is 41 light-years away, and barely visible to the naked eye. A faint red dwarf circles far out.',
    'The star’s official name is Copernicus. The planets are Galileo, Brahe, Lipperhey, Janssen and Harriot.',
  ],
}
