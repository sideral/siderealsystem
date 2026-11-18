import type { CloseupStar } from '../star'

/**
 * Figures: Shulyak et al. 2010; Lueftinger et al. 2003 (surface maps). The green band drawn
 * stands for the belt of chromium around the magnetic equator; on the real star the zones differ
 * little in brightness.
 */
export const alioth: CloseupStar = {
  id: 'alioth',
  name: 'Alioth',
  designation: 'ε Ursae Majoris',
  radiusSun: 4.1,
  look: {
    color: '#d2ddff', // about 9,000 K
    limbColor: '#dde4fc',
    limbDarkening: 0.45,
    spinSeconds: 26, // 5.1 days in reality
    axis: { rollDeg: 20, inclinationDeg: 45 },
    // Chromium gathered in a band around the magnetic equator. The magnetic axis lies almost at
    // right angles to the spin, so the band swings round edge-on, then face-on.
    patches: { shape: 'belt', color: '#9fdccc', strength: 0.5, sizeDeg: 20, tiltDeg: 80, seed: 71 },
  },
  story: [
    'Alioth is the brightest star of the Big Dipper. Its surface is sorted into patches of different metals.',
    'Its magnetism does the sorting. Some regions are rich in chromium, others in oxygen or europium.',
    'The star turns once every five days. As those zones swing past, its light and its colours change in step.',
    'The green band drawn here stands for one such zone, a belt rich in chromium. On the real star it would hardly show.',
    'It travels with a family. Five of the Dipper’s seven stars were born together and still drift the same way.',
    'It is white, half again as hot as the Sun, four times as wide and as bright as 100 Suns.',
    'It is 83 light-years away, the third star from the end of the Dipper’s handle.',
    'Sailors and pilots still steer by it. It is one of the 58 stars used for navigation.',
    'Its name may come from the Arabic for “the fat tail of a sheep”.',
    'More stars with patchy chemistry: Cor Caroli, Alpheratz and Elnath.',
  ],
}
