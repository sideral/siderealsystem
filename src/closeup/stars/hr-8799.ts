import type { CloseupStar } from '../star'

/** Figures: Marois et al. 2008 and 2010 (the planets, imaged); Baines et al. 2012 (radius); Gaia distance. */
export const hr8799: CloseupStar = {
  id: 'hr-8799',
  name: 'HR 8799',
  designation: 'V342 Pegasi',
  radiusSun: 1.44,
  look: {
    color: '#eef0ff', // about 7,430 K
    limbColor: '#efe3cc',
    limbDarkening: 0.54,
    radius: 0.075,
    spinSeconds: 30,
    texture: { amplitude: 0.04, scale: 22, speed: 0.15 },
    waves: [{ l: 1, m: 1, amplitude: 0.03, seconds: 5 }],
    glare: 0.9,
    // The four planets, glowing with the heat of their birth, on nearly face-on orbits whose
    // periods run close to 1 : 2 : 4 : 8. Spacing is in proportion, but far closer in than true.
    companions: [
      { color: '#ff8a5c', radius: 0.03, brightness: 1, glare: 0.25, place: { orbit: { distance: 1.4, seconds: 9, inclinationDeg: 27, nodeDeg: 60 } } },
      { color: '#ff7d50', radius: 0.03, brightness: 1, glare: 0.25, place: { orbit: { distance: 2.27, seconds: 18, inclinationDeg: 27, nodeDeg: 60, phase: 0.3 } } },
      { color: '#ff9466', radius: 0.03, brightness: 1, glare: 0.25, place: { orbit: { distance: 3.47, seconds: 36, inclinationDeg: 27, nodeDeg: 60, phase: 0.55 } } },
      { color: '#ffa070', radius: 0.03, brightness: 1, glare: 0.25, place: { orbit: { distance: 5.87, seconds: 72, inclinationDeg: 27, nodeDeg: 60, phase: 0.8 } } },
    ],
  },
  story: [
    'HR 8799 is the star in the first family portrait of planets around another sun.',
    'In 2008 astronomers released a photograph of it with three faint dots beside it. The dots were planets. A fourth showed up in 2010.',
    'Almost every other planet we know of was found indirectly, by its effect on its star. These you can simply see.',
    'They are young and still glowing with the heat of their birth. Each is several times as heavy as Jupiter.',
    'They circle far out. The nearest is nearly as far as Uranus is from the Sun. The farthest is almost twice as far as Pluto.',
    'Here they are drawn far closer in than they really are. Their years, decades to centuries long, are sped up to seconds.',
    'Astronomers have kept taking pictures. Strung together, they make a film of four worlds moving along their orbits.',
    'Belts of dust and rubble lie inside and outside the planets. They are like our asteroid belt and Kuiper belt.',
    'The star is white, hotter than the Sun, half again as wide and five times as bright. It pulses slightly, a few times a day.',
    'It is about 30 to 40 million years old. The dinosaurs never lived under this star’s light.',
    'It is about 130 light-years away, at the very limit of naked-eye sight, in Pegasus. It has no proper name.',
    'More stars with planets: 51 Pegasi, Upsilon Andromedae and Beta Pictoris.',
  ],
}
