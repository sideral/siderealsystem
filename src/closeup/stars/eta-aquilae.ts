import type { CloseupStar } from '../star'

/**
 * Figures: Pigott 1785 (discovery); period 7.177 days; distance is uncertain, roughly 900 to 1,400 light-years.
 * Evans 1991 (the hot companion, from ultraviolet spectra). Where the companion sits on screen is a guess.
 */
export const etaAquilae: CloseupStar = {
  id: 'eta-aquilae',
  name: 'Eta Aquilae',
  designation: 'η Aquilae',
  radiusSun: 60,
  look: {
    color: '#fff3e2', // about 6,300 K at its brightest
    limbColor: '#f2c284',
    limbDarkening: 0.62,
    whiten: 0.2,
    spinSeconds: 500,
    axis: { rollDeg: 35 },
    texture: { amplitude: 0.13, scale: 10, speed: 0.06, cells: 0.5 },
    // A very quick rise and a long fall, cooling to about 5,300 K at its dimmest
    pulse: { seconds: 8, radius: -0.05, brightness: 0.3, skew: 0.85, dimColor: '#ffd296' },
    companions: [
      {
        color: '#c0d0ff', // a hot companion, found from its ultraviolet light
        radius: 0.0085,
        brightness: 1,
        glare: 0.3,
        place: { at: [-0.34, 0.16] },
      },
    ],
  },
  story: (distance) => [
    `This is Eta Aquilae, in Aquila the Eagle, from ${distance} away. Watch it beat.`,
    'Every 7.177 days it swells and shrinks, and its light doubles and falls again. You can follow it with the naked eye.',
    'Here the beat is sped up, but its size is true to life.',
    'It is a Cepheid: a yellow supergiant that pulses like a slow heart. The class is named after Delta Cephei.',
    'Yet this one was found first. Edward Pigott, an English amateur, caught it changing on 10 September 1784.',
    'His friend and neighbour John Goodricke found Delta Cephei a few weeks later. The two worked together in York.',
    'Size: about 60 times as wide as the Sun and nearly 6 times as heavy. It gives off some 3,000 times as much light.',
    'Its colour shifts with the beat, from yellow-white at its brightest to deeper yellow at its dimmest.',
    'The blue-white point is a smaller, hotter companion. Astronomers found it from its ultraviolet light, where the supergiant is faint.',
    'Type: F6 Ib to G4 Ib. A yellow supergiant whose type changes as it pulses.',
    'Estimated age: about 50 million years.',
    'It is roughly 1,000 light-years away.',
    'A Cepheid’s beat reveals its true power, and so its distance. Stars like this one are how we measure the way to other galaxies.',
    'It once belonged to Antinous, a constellation the Roman emperor Hadrian created. Astronomers dropped it in 1930.',
  ],
}
