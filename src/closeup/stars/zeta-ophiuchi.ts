import type { CloseupStar } from '../star'

/** Figures: Howarth & Smith 2001; Villamariz & Herrero 2005; Neuhäuser et al. 2020 (runaway history). */
export const zetaOphiuchi: CloseupStar = {
  id: 'zeta-ophiuchi',
  name: 'Zeta Ophiuchi',
  designation: 'ζ Ophiuchi',
  radiusSun: 8.5,
  look: {
    color: '#a4bcff', // about 32,000 K
    limbColor: '#b6c8fd',
    limbDarkening: 0.3,
    whiten: 0.4,
    radius: 0.2,
    spinSeconds: 9,
    axis: { rollDeg: 20 },
    flattening: 0.14,
    gravityDarkening: 0.3,
    glare: 1.5,
    nebula: { kind: 'bowshock', color: '#ff9a5c', brightness: 0.5, angleDeg: 150, standoff: 0.38 },
  },
  story: [
    'Zeta Ophiuchi is a runaway star, flung across the galaxy by an explosion.',
    'It once circled a heavier partner. About a million years ago that partner blew up as a supernova, and this star was let go.',
    'It left at the speed it had been orbiting. It is still moving about as fast as Earth circles the Sun.',
    'Ahead of it, its wind piles the gas between the stars into a great curved shock wave. It is like the wave at the bow of a ship.',
    'That is the orange arc drawn here. The real one is light-years across.',
    'Before it died, its partner fed it gas, and with it spin. It turns once a day and bulges at the equator.',
    'It is one of the hottest stars you can see, more than five times as hot as the Sun. No star of the hottest class is nearer.',
    'It gives off the light of some 80,000 Suns. It would be one of the sky’s brightest stars. But thick dust in front of it dims and reddens it.',
    'It is about 370 light-years away, and only about 3 million years old. It too will explode.',
    'More runaway stars: AE Aurigae and Naos. Another of the hottest stars: Theta¹ Orionis C.',
  ],
}
