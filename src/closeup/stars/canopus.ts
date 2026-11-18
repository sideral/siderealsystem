import type { CloseupStar } from '../star'

/** Figures: Cruzalèbes et al. 2013 (radius, temperature). */
export const canopus: CloseupStar = {
  id: 'canopus',
  name: 'Canopus',
  designation: 'α Carinae',
  radiusSun: 71,
  look: {
    color: '#f4f2ff', // about 7,400 K
    limbColor: '#f3e6d2',
    limbDarkening: 0.55,
    whiten: 0.35,
    spinSeconds: 300,
    axis: { rollDeg: -10 },
    texture: { amplitude: 0.07, scale: 16, speed: 0.06, cells: 0.4 }, // convection has only just begun: fine, faint grain
    glare: 1.45,
  },
  story: [
    'Canopus is the second-brightest star in the night sky, and the one spacecraft steer by.',
    'Probes from Mariner to Voyager have locked a sensor on Canopus to keep their bearings.',
    'It comes second only because of distance. It is about 310 light-years away, 36 times farther than Sirius.',
    'It is far more powerful. It gives off the light of more than 10,000 Suns. Sirius manages 25.',
    'It is almost pure white, a little hotter than the Sun, and about 70 times as wide. In the Sun’s place it would reach most of the way to Mercury.',
    'At this temperature its outer layers have only just begun to churn. Its surface is faintly mottled.',
    'It is young, under 30 million years old, but heavy. It has already left its prime and swollen.',
    'It lies far to the south. North of a line through San Francisco, Athens and Seoul, it never rises.',
    'The Greeks named it after the pilot of King Menelaus’s ship. To Arab travellers it was Suhayl, a guide across the desert.',
    'In China it is the Old Man of the South Pole, the god of long life. Seeing it was a sign of peace.',
    'For Māori it is Atutahi, a star so sacred that it stands apart. It hangs outside the basket of the Milky Way.',
    'More white and yellow supergiants: Mirfak, Wezen and Polaris.',
  ],
}
