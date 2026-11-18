import type { CloseupStar } from '../star'

/**
 * Figures: Hummel et al. 2013. Its distance is uncertain. Lore: Snedegar 1995 (Tswana).
 * The two companions are points, drawn far closer in than they are (about 10 and 900 AU).
 * The Flame Nebula really lies beside the star, a few light-years off; here it fills the background.
 */
export const alnitak: CloseupStar = {
  id: 'alnitak',
  name: 'Alnitak',
  designation: 'ζ Orionis',
  radiusSun: 20,
  look: {
    color: '#a6bdff', // about 29,500 K
    limbColor: '#b8c9fd',
    limbDarkening: 0.3,
    whiten: 0.45,
    radius: 0.2,
    spinSeconds: 80,
    axis: { rollDeg: -20 },
    texture: { amplitude: 0.04, scale: 4, speed: 0.03 },
    fuzz: 0.02,
    glare: 1.5,
    envelope: { color: '#8aa8ff', strength: 0.26, reach: 0.3, streaks: 5, clumps: 0.6, speed: 0.35 }, // its wind
    // The Flame Nebula: gas set glowing by this star's ultraviolet light, crossed by dark dust
    nebula: { kind: 'cloud', color: '#ffb46a', outerColor: '#e2603c', brightness: 0.24, scale: 3.6, streak: 0.35, angleDeg: 75, lanes: 0.9, falloff: 0.5, hollow: 0.26 },
    companions: [
      {
        color: '#abc0ff', // the seven-year companion
        radius: 0.011,
        brightness: 1,
        glare: 0.4,
        place: { orbit: { distance: 1.95, seconds: 40, inclinationDeg: 52, nodeDeg: 20 } },
      },
      { color: '#adc2ff', radius: 0.011, brightness: 1, glare: 0.3, place: { at: [-0.36, 0.34] } }, // Alnitak B, farther out
    ],
  },
  story: (distance) => [
    `This is Alnitak, the eastern star of Orion’s Belt, seen through a dark filter from ${distance} away.`,
    'It is the brightest star of the hottest class, O, anywhere in the night sky.',
    'Its surface is about 29,500 K, five times the Sun’s temperature, and it shines blue.',
    'It blows a fierce wind of gas. That is the blue haze around its edge.',
    'It is a triple. A second blue star circles the main one every seven years, and a third lies farther out. Both are points here, drawn closer in.',
    'Size: about 20 times as wide as the Sun and some 30 times as heavy. It gives off around 250,000 times as much light.',
    'Type: O9.5 Ib. “O” is the hottest class of star. “Ib” marks a supergiant.',
    'Estimated age: about 6 or 7 million years. It will explode as a supernova.',
    'It is roughly 1,200 light-years away.',
    'Its ultraviolet light sets the Flame Nebula glowing beside it: the orange cloud here, crossed by lanes of dark dust.',
    'The dark Horsehead Nebula stands just to its south.',
    'Its name is Arabic for “the girdle”.',
    'In Spain and Latin America the three Belt stars are the Three Marys. Elsewhere in Europe they are the Three Kings.',
    'Among the Tswana of southern Africa they are three pigs, chased by three dogs: the stars of Orion’s Sword.',
  ],
}
