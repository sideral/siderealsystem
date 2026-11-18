import type { CloseupStar } from '../star'

/**
 * Figures: Pablo et al. 2017 (the heartbeat, masses, sizes, orbit: 29.1 days, e = 0.75, tilted
 * 63°); Hoogerwerf et al. 2001 (the encounter that made the orbit). The real orbit reaches from
 * about 3.7 to 25 star radii; it is drawn closer in and rounder so that it fits, with the true
 * tilt. The tide is raised only near closest approach, as in reality, but drawn far stronger.
 */
export const iotaOrionis: CloseupStar = {
  id: 'iota-orionis',
  name: 'Iota Orionis',
  designation: 'ι Orionis · Hatysa',
  radiusSun: 9.1,
  look: {
    color: '#a4bbff', // about 31,000 K
    limbColor: '#b7c8fd',
    limbDarkening: 0.3,
    whiten: 0.48,
    radius: 0.05,
    spinSeconds: 40,
    tide: 0.3, // the heartbeat: it stretches only while its partner sweeps past
    glare: 1.3,
    companions: [
      {
        color: '#b2c6ff', // about 18,300 K
        radius: 0.54,
        brightness: 0.6,
        glare: 0.15,
        tide: 0.22,
        // Closest approach is side-on, to the upper right, so the stretch shows in full
        place: { orbit: { distance: 5.6, seconds: 18, inclinationDeg: 62.9, eccentricity: 0.66, nodeDeg: 30, phase: 0.9 } },
      },
    ],
  },
  story: [
    'Iota Orionis is a pair of heavyweight stars with a heartbeat.',
    'Their orbit is long and narrow. For most of a month they keep well apart. Then they fall together and whip past each other.',
    'At that moment each raises a tide on the other and pulls it out of round. The light jumps, like a blip on a heart monitor.',
    'Astronomers call such pairs heartbeat stars. When this one was caught, in 2017, it was the heaviest known.',
    'After each pass the big star keeps ringing, like a struck bell, until the next one.',
    'Here the pair is drawn closer in, on a rounder orbit, and sped up. The stretching is drawn far stronger than it really is.',
    'The orbit may be a scar. Some 2.5 million years ago two pairs of stars met here and swapped partners. That story is told at AE Aurigae.',
    'The larger star is blue and over five times as hot as the Sun. It is nine times as wide and 23 times as heavy. Its partner weighs 13 Suns.',
    'It is the brightest star of Orion’s sword, just below the Orion Nebula. It is about 1,300 light-years away.',
    'Its Arabic name, Na’ir al-Saif, means “the bright one of the sword”.',
    'More close pairs pulled out of shape: Spica and Beta Lyrae. More of Orion’s hot young stars: Theta¹ Orionis C and Meissa.',
  ],
}
