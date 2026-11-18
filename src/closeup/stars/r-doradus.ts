import type { CloseupStar } from '../star'

/**
 * Figures: Bedding et al. 1997 (the largest angular size of any star but the Sun); Vlemmings et
 * al. 2024 (ALMA images of the surface in 2023: granules about 75 times the Sun's width that
 * change within a month). Drawn larger on screen than any other star here, for the same reason.
 * The churning is sped up.
 */
export const rDoradus: CloseupStar = {
  id: 'r-doradus',
  name: 'R Doradus',
  designation: 'HR 1492',
  radiusSun: 298,
  look: {
    color: '#ff9a52', // about 2,700 K
    limbColor: '#b8401a',
    limbDarkening: 0.8,
    whiten: 0.02,
    radius: 0.3,
    spinSeconds: 600,
    axis: { rollDeg: 8 },
    texture: { amplitude: 0.7, scale: 3.4, speed: 0.14, cells: 0.95 }, // the bubbles ALMA followed
    pulse: { seconds: 21, radius: -0.03, brightness: 0.22, irregular: 0.3, dimColor: '#e2581f' },
    fuzz: 0.08,
    wobble: 0.05,
    glare: 0.7,
    envelope: { color: '#e04a20', strength: 0.1, reach: 0.25 }, // loose outer layers
  },
  story: [
    'R Doradus has the largest disc of any star in our sky but the Sun. Astronomers have watched it boil.',
    'It is not the biggest star. It is a big one that is close: about 180 light-years away. No other star looks as wide from Earth.',
    'In 2023 an array of radio dishes in Chile photographed its surface over a month. The pictures were days apart.',
    'They showed giant bubbles of hot gas rising, spreading and sinking back. Each bubble is about 75 times as wide as the Sun.',
    'The Sun’s surface boils the same way. Its cells are the size of a country and last minutes. These last about a month.',
    'That churning is what you see here, sped up. It was the first time such motion was followed on a star other than the Sun.',
    'R Doradus weighs about as much as the Sun but is some 300 times as wide. In the Sun’s place it would swallow Earth and nearly reach Mars.',
    'This is the Sun’s own future, about five billion years from now.',
    'It is deep red and less than half as hot as the Sun. Most of its light is infrared. In that light it is one of the brightest stars in the sky.',
    'Its light swells and fades over about a year, sometimes over half a year. At its brightest it is easy to see; at its faintest, barely.',
    'It lies in the far southern sky, in the Swordfish, beside the Large Magellanic Cloud.',
    'More dying red giants: Mira, Chi Cygni and La Superba. Another star with a boiling face: Betelgeuse.',
  ],
}
