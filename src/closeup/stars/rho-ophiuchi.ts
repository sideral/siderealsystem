import type { CloseupStar } from '../star'

/**
 * Figures: Gaia distance; standard B2 V values. The close point is Rho Ophiuchi B, 3 arc seconds
 * away (some 400 AU; about 2,000 years to circle). The two farther points are its hot companions
 * C and D, a few arc minutes off. The blue haze is the reflection nebula IC 4604; the dark lanes
 * are the dust clouds where stars are forming (JWST, 2023). The amber at the edges stands for
 * the yellow nebula around Antares, which really lies a few degrees to the south.
 */
export const rhoOphiuchi: CloseupStar = {
  id: 'rho-ophiuchi',
  name: 'Rho Ophiuchi',
  designation: 'ρ Ophiuchi',
  radiusSun: 4.5,
  look: {
    color: '#adc1ff', // about 22,000 K
    limbColor: '#becdfd',
    limbDarkening: 0.35,
    whiten: 0.42,
    radius: 0.13,
    spinSeconds: 26,
    axis: { rollDeg: 20 },
    flattening: 0.06,
    glare: 1.4,
    nebula: { kind: 'cloud', color: '#5f8fff', outerColor: '#b9803f', brightness: 0.6, scale: 3, lanes: 0.95, falloff: 2.5 },
    companions: [
      { color: '#b0c4ff', radius: 0.017, brightness: 1, glare: 0.5, place: { at: [0.17, 0.09] } }, // B, its near twin
      { color: '#bccdff', radius: 0.017, brightness: 1, glare: 0.22, place: { at: [0.1, 0.38] } }, // C
      { color: '#b8caff', radius: 0.017, brightness: 1, glare: 0.24, place: { at: [-0.4, 0.07] } }, // D
    ],
  },
  story: [
    'Rho Ophiuchi lights the most colourful cloud in the sky. It is also one of the nearest places where stars are being born.',
    'The blue haze is dust, lit from inside by these hot stars. Dust scatters blue light best. The daytime sky is blue for the same reason.',
    'The dark lanes are where the dust is thickest. In there, hidden from view, gas is falling together into new stars. Hundreds have formed.',
    'In 2023 the James Webb Space Telescope looked into those lanes in infrared light. It found about fifty infant stars in one small patch.',
    'Just south of here Antares lights its own dust yellow. The amber at the edges stands for that glow. Photographs show blue, gold and red together.',
    'Rho Ophiuchi itself is two blue stars, near twins. They take about 2,000 years to circle each other. The close bright point is the second.',
    'The two farther points are hot stars that travel with them. All are drawn closer in than they really are. The cloud is light-years across.',
    'Each of the twins is nearly four times as hot as the Sun and eight or nine times as heavy.',
    'They are about 450 light-years away. To the eye they blur into one faint star just above Antares. The cloud itself needs a camera.',
    'More stars lighting up a nebula: Alcyone, AE Aurigae and Meissa. Its neighbour: Antares.',
  ],
}
