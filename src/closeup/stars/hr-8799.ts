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
    spinSeconds: 30,
    texture: { amplitude: 0.04, scale: 22, speed: 0.15 },
    pulse: { seconds: 5, radius: 0.002, brightness: 0.02 },
  },
  story: (distance) => [
    `This is HR 8799, from ${distance} away. It is a faint star in Pegasus with no proper name, and it made history.`,
    'In 2008 astronomers released a photograph of it with three faint dots beside it. The dots were planets.',
    'It was the first picture ever taken of a family of planets around another star. A fourth planet showed up in 2010.',
    'Almost every other planet we know of was found indirectly, from its effect on its star. These you can simply see.',
    'They are young and still glowing with the heat of their birth. Each is several times the mass of Jupiter.',
    'They circle far out: from about 16 to 70 times as far as Earth is from the Sun. Their years last from 45 to over 400 Earth years.',
    'Astronomers have kept taking pictures. Strung together, they make a film of four worlds moving along their orbits.',
    'Belts of dust and rubble lie inside and outside the planets, like our asteroid belt and Kuiper belt.',
    'The star is white: about 7,400 K. It pulses slightly, a few times a day.',
    'Size: about 1.4 times as wide as the Sun and one and a half times as heavy. It gives off 5 times as much light.',
    'Type: A5 V. “A” is a white star, hotter than the Sun. “V” means it is in its prime.',
    'Estimated age: about 30 to 40 million years. The dinosaurs never lived under this star’s light.',
    'It is about 133 light-years away, at the very limit of naked-eye sight.',
  ],
}
