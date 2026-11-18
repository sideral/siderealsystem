import type { CloseupStar } from '../star'

/** Figures: Yoon et al. 2010 (shape, pole and equator temperatures); Aufdenberg et al. 2006. */
export const vega: CloseupStar = {
  id: 'vega',
  name: 'Vega',
  designation: 'α Lyrae',
  radiusSun: 2.82, // at the equator; 2.36 pole to pole
  look: {
    color: '#cfdaff', // about 9,600 K averaged over the surface
    limbColor: '#dbe3fd',
    limbDarkening: 0.5,
    spinSeconds: 22, // spins in well under a day; the Sun takes almost a month
    flattening: 0.16,
    gravityDarkening: 0.38,
  },
  story: (distance) => [
    `This is Vega, seen side-on through a dark filter from ${distance} away. From Earth we look straight down on its pole.`,
    'It is blue-white, about 9,600 K on average. But it is not the same all over.',
    'Vega spins once in well under a day. The Sun takes nearly a month. The spin flings its equator outward, so the star bulges.',
    'The bulging equator sits farther from the hot core, so it is cooler and dimmer than the poles, by roughly 2,000 K.',
    'It turns at more than two-thirds of the speed that would pull it apart.',
    'The surface is smooth: a star this hot does not boil into grains and spots the way the Sun does.',
    'Size: 2.8 times as wide as the Sun at the equator, 2.4 times from pole to pole. It weighs a little over 2 Suns.',
    'It gives off about 40 times the Sun’s light.',
    'Type: A0 V. “A” is a hot, blue-white star. “V” means it is in its prime, fusing hydrogen like the Sun.',
    'Estimated age: about 450 million years, a tenth of the Sun’s. It is already about halfway through its life.',
    'It is 25 light-years away, and ringed by a wide disc of dust: the rubble of colliding comets and asteroids.',
    'Astronomers set their scales by it. For a century, Vega defined zero on the brightness scale used for every other star.',
    'In 1850 it became the first star other than the Sun ever photographed.',
    'Around 12,000 BC it was the north pole star. Earth’s slow wobble will bring it back around the year 13,700.',
    'Its name is from the Arabic for “the swooping eagle”.',
    // How people have seen it. Boorong: Stanbridge (1857).
    'In China it is Zhinü, the Weaver Girl, parted from her Cowherd, the star Altair, by the river of the Milky Way.',
    'They may meet one night a year. That night is the Qixi festival in China and Tanabata in Japan.',
    'For Māori it is Whānui. Its rising before dawn told them the kūmara, the sweet potato, was ready to harvest.',
    'To the Boorong people of Australia it was Neilloan, the mallee fowl. It appeared when the birds began building their nests.',
  ],
}
