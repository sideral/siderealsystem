import type { CloseupStar } from '../star'

/** Figures: Cruzalèbes et al. 2013 (radius, temperature). Boorong: Stanbridge (1857). */
export const canopus: CloseupStar = {
  id: 'canopus',
  name: 'Canopus',
  designation: 'α Carinae',
  radiusSun: 71,
  look: {
    color: '#f4f2ff', // about 7,400 K
    limbColor: '#f3e6d2',
    limbDarkening: 0.55,
    whiten: 0.25,
    spinSeconds: 300,
    texture: { amplitude: 0.07, scale: 8, speed: 0.04 },
  },
  story: (distance) => [
    `This is Canopus, the second-brightest star in the night sky, seen through a dark filter from ${distance} away.`,
    'It is almost pure white, with a hint of yellow: about 7,400 K, hotter than the Sun’s 5,772 K but cooler than Sirius.',
    'At this temperature the outer layers have just begun to churn, so the surface is only faintly mottled.',
    'Size: about 71 times as wide as the Sun and 8 to 10 times as heavy. It gives off more than 10,000 times as much light.',
    'Type: A9 II. “A9” is a white star on the edge of yellow. “II” marks a bright giant, swollen after leaving its prime.',
    'Estimated age: about 25 to 30 million years. It has already burned through the hydrogen in its core.',
    'It is about 310 light-years away, 36 times farther than Sirius. It only comes second because of that distance.',
    'Spacecraft steer by it. Probes from Mariner to Voyager have locked a sensor on Canopus to keep their bearings.',
    'It lies far to the south and never rises for anyone north of about 37° latitude.',
    'The Greeks named it after the pilot of King Menelaus’s ship. To Arab travellers it was Suhayl, a guide across the desert.',
    'In China it is the Old Man of the South Pole, the god of long life. Seeing it was a sign of peace.',
    'The Navajo call it the Coyote Star.',
    'For Māori it is Atutahi, a star so sacred that it stands apart, outside the basket of the Milky Way.',
    'To the Boorong people of Australia it was War, the crow, who first brought fire to people.',
  ],
}
