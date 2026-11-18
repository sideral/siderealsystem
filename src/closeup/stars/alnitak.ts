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
  story: [
    'Alnitak is the eastern star of Orion’s Belt. It is the brightest star of the hottest kind in the whole sky.',
    'Stars this hot are rare. Its surface is five times as hot as the Sun’s, and it shines blue.',
    'Its ultraviolet light sets a whole cloud glowing. This is the Flame Nebula, the orange cloud drawn here, crossed by lanes of dark dust.',
    'The real nebula is light-years across and lies off to one side of the star. Here it is drawn all around it.',
    'The dark Horsehead Nebula stands just to its south.',
    'It blows a fierce wind of gas. That is the blue haze around its edge.',
    'It is a triple. A second blue star circles it every seven years and a third lies farther out. Both are drawn closer in than they really are.',
    'It is about 20 times as wide as the Sun and gives off the light of some 250,000 Suns. It will explode as a supernova.',
    'It is roughly 1,200 light-years away. The light you see left when Vikings were raiding Europe.',
    'Among the Tswana of southern Africa the Belt stars are three pigs. Three dogs chase them: the stars of Orion’s Sword.',
    'The rest of the Belt: Alnilam and Mintaka. More stars lighting up a nebula: Theta¹ Orionis C and AE Aurigae.',
  ],
}
