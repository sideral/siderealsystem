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
    spinSeconds: 60,
  },
  story: (distance) => [
    `This is Fomalhaut, seen through a dark filter from ${distance} away.`,
    'It is white with a touch of blue: 8,590 K. Like Sirius and Vega, it is too hot to boil, so its surface is smooth.',
    'Size: 1.8 times as wide as the Sun and almost twice as heavy. It gives off about 17 times as much light.',
    'Type: A3 V. “A” is a hot white star. “V” means it is in its prime, fusing hydrogen like the Sun.',
    'Estimated age: about 440 million years, a tenth of the Sun’s.',
    'It is 25 light-years away. In autumn it shines alone in an empty stretch of sky, and is often called the Lonely Star.',
    'Far beyond this view, 130 times as far out as Earth is from the Sun, it wears a sharp ring of icy rubble.',
    'In pictures the ring and star look like a great eye. Closer in, the Webb telescope has found two more belts of dust.',
    'In 2008 a dot beside the ring was announced as one of the first planets ever photographed around another star.',
    'Then it spread out and faded. It now looks like a cloud of dust left by two icy bodies that collided.',
    'Its name is Arabic for “the mouth of the fish”: the Southern Fish, which drinks the water poured by Aquarius.',
    'In ancient Persia it was one of four royal stars. In China it is the North Gate of the Army Camp.',
  ],
}
