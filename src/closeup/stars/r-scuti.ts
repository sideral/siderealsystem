import type { CloseupStar } from '../star'

/**
 * Figures: AAVSO light curve (about 71 days from dip to dip, deep and shallow in turn; 146 days
 * for the full pattern); Matsuura et al. 2002 (the star). Found by
 * Edward Pigott in 1795. The real pattern is rough: dips vary in depth and the alternation
 * sometimes breaks down. Here it is regular. Distance and size are uncertain.
 */
export const rScuti: CloseupStar = {
  id: 'r-scuti',
  name: 'R Scuti',
  designation: 'HR 7066',
  radiusSun: 100,
  look: {
    color: '#ffdcae', // about 4,800 K at its brightest
    limbColor: '#e39048',
    limbDarkening: 0.7,
    whiten: 0.12,
    radius: 0.2,
    spinSeconds: 900,
    axis: { rollDeg: -8 },
    texture: { amplitude: 0.3, scale: 4, speed: 0.04, cells: 0.5 },
    // The RV Tauri beat: every other dip is shallow. Largest, coolest and reddest when faintest.
    pulse: { seconds: 7, radius: -0.07, brightness: 0.6, alternate: 0.4, dimColor: '#e8642a' },
    fuzz: 0.07,
    glare: 0.9,
    envelope: { color: '#e8733a', strength: 0.12, reach: 0.3 }, // loose outer layers
  },
  story: [
    'R Scuti is a dying star with a double beat: it dips deep, then shallow, then deep again.',
    'About every 71 days it fades and recovers. But the dips take turns. One is slight. The next can take it out of sight.',
    'Only a few stars beat this way, and this is the brightest of them. At its best it is easy to see. In a deep dip you need binoculars.',
    'Nobody is sure what sets the double beat. The star may ring in two rhythms at once, one exactly twice as long as the other.',
    'The real pattern is rough, and now and then it stumbles. Here it is sped up, and drawn more regular than it really is.',
    'As it fades it swells, cools and reddens. As it brightens it shrinks and turns yellow.',
    'It was once a star like the Sun. It has been a red giant and has blown much of itself away. Barely half the Sun’s weight is left.',
    'Yet it is about a hundred times as wide as the Sun. It gives off the light of some 9,000 Suns.',
    'What comes next is quick. Within a few thousand years its hot core will probably be laid bare. Its light will set the cast-off gas glowing.',
    'Edward Pigott found its changes in 1795. He was the friend and neighbour of John Goodricke, who timed Algol and Delta Cephei.',
    'It is a few thousand light-years away, in the Shield. Beside it lies one of the richest star clouds of the Milky Way.',
    'More dying giants that pulse: Mira and Chi Cygni. More yellow stars that pulse: Delta Cephei and Eta Aquilae.',
  ],
}
