import type { CloseupStar } from '../star'

/** Figures: Mamajek 2012; Gáspár & Rieke 2020 (the "planet" as a dust cloud); Gáspár et al. 2023 (JWST belts). */
export const fomalhaut: CloseupStar = {
  id: 'fomalhaut',
  name: 'Fomalhaut',
  designation: 'α Piscis Austrini',
  radiusSun: 1.84,
  look: {
    color: '#d7e0ff', // 8,590 K
    limbColor: '#e0e6fb',
    limbDarkening: 0.5,
    radius: 0.095,
    spinSeconds: 60,
    axis: { rollDeg: -20 },
    // The ring of icy rubble: sharp-edged, and off-centre. Drawn thousands of times too close in.
    ring: { inner: 3.75, outer: 4.2, tilt: 0.41, color: '#ffd9b0', brightness: 0.5, offset: 0.45, sharp: 1 },
    companions: [
      // The "planet" that turned out to be a spreading cloud of dust
      { color: '#ffe2c0', radius: 0.023, brightness: 0.7, glare: 0.14, place: { at: [0.29, 0.2] } },
    ],
  },
  story: (distance) => [
    `This is Fomalhaut, seen through a dark filter from ${distance} away.`,
    'It is white with a touch of blue: 8,590 K. Like Sirius and Vega, it is too hot to boil, so its surface is smooth.',
    'Size: 1.8 times as wide as the Sun and almost twice as heavy. It gives off about 17 times as much light.',
    'Type: A3 V. “A” is a hot white star. “V” means it is in its prime, fusing hydrogen like the Sun.',
    'Estimated age: about 440 million years, a tenth of the Sun’s.',
    'It is 25 light-years away. In autumn it shines alone in an empty stretch of sky, and is often called the Lonely Star.',
    'It wears a sharp ring of icy rubble, 130 times as far out as Earth is from the Sun. Here it is drawn thousands of times closer in.',
    'In pictures the ring and star look like a great eye. Closer in, the Webb telescope has found two more belts of dust.',
    'The ring is off-centre. Something unseen, perhaps a planet, is tugging it to one side.',
    'In 2008 a dot beside the ring, the faint one drawn here, was announced as one of the first planets ever photographed.',
    'Then it spread out and faded. It now looks like a cloud of dust left by two icy bodies that collided.',
    'Its name is Arabic for “the mouth of the fish”: the Southern Fish, which drinks the water poured by Aquarius.',
    'In ancient Persia it was one of four royal stars. In China it is the North Gate of the Army Camp.',
  ],
}
