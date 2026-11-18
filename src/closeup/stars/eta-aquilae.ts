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
  story: [
    'Eta Aquilae is a star with a heartbeat you can follow with the naked eye.',
    'Every week it swells and shrinks, and its light doubles and falls again.',
    'Here the beat is sped up, but the swing in size is true to life. Its colour shifts too, from yellow-white to a deeper yellow.',
    'It is a Cepheid: a yellow supergiant that pulses like a slow heart. The class is named after Delta Cephei.',
    'Yet this one was found first. Edward Pigott, an English amateur, caught it changing in September 1784.',
    'His friend and neighbour John Goodricke found Delta Cephei a few weeks later. The two worked together in York.',
    'A Cepheid’s beat reveals its true power, and so its distance. Stars like this one are how we measure the way to other galaxies.',
    'It is about 60 times as wide as the Sun and as bright as 3,000 Suns. It lies roughly 1,000 light-years away.',
    'The blue-white point is a smaller, hotter companion, found from its ultraviolet light. Where it sits here is a guess.',
    'It once belonged to Antinous. The Roman emperor Hadrian made that constellation for a youth he loved. Astronomers dropped it in 1930.',
    'More Cepheids: Delta Cephei and Polaris.',
  ],
}
