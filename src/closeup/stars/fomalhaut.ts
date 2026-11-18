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
  story: [
    'Fomalhaut wears a sharp ring of icy rubble. In pictures, the ring and star look like a great eye.',
    'The real ring lies more than three times as far out as Pluto is from the Sun. Here it is drawn thousands of times closer in.',
    'It is off-centre. Something unseen, perhaps a planet, is tugging it to one side.',
    'In 2008 a dot beside the ring was announced as one of the first planets photographed. It is the faint one drawn here.',
    'Then it spread out and faded. It now looks like a cloud of dust left by two icy bodies that collided.',
    'Closer in, the Webb telescope has found two more belts of dust.',
    'The star is white and half again as hot as the Sun. It is nearly twice as wide and 17 times as bright. Too hot to boil, its surface is smooth.',
    'It is young, about a tenth of the Sun’s age, and close: 25 light-years away.',
    'In autumn it shines alone in an empty stretch of sky, and is often called the Lonely Star.',
    'Its name is Arabic for “the mouth of the fish”. This is the Southern Fish, which drinks the water poured by Aquarius.',
    'More stars with dust rings: Vega, Denebola and Beta Pictoris.',
  ],
}
