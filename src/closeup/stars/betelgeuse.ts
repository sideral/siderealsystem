import type { CloseupStar } from '../star'

/** Figures: Joyce et al. 2020 (radius, mass, distance); Montargès et al. 2021 (the 2019 Great Dimming). */
export const betelgeuse: CloseupStar = {
  id: 'betelgeuse',
  name: 'Betelgeuse',
  designation: 'α Orionis',
  radiusSun: 764,
  look: {
    color: '#ffa55c', // about 3,600 K
    limbColor: '#c0431a',
    limbDarkening: 0.75,
    whiten: 0.06,
    spinSeconds: 900, // one real rotation takes about 30 years
    texture: { amplitude: 0.85, scale: 1.7, speed: 0.035, cells: 0.4 }, // a handful of giant convection cells
    pulse: { seconds: 24, radius: 0.02, brightness: 0.08, irregular: 0.35 },
    fuzz: 0.06,
    wobble: 0.08,
    glare: 0.9,
    // The Great Dimming of 2019: a cloud of fresh dust over the southern half, come and gone
    dust: { darkness: 0.8, scale: 1.3, cover: 0.9, seconds: 50, patch: { at: [0.25, -0.5], radius: 0.95 }, seed: 4 },
    envelope: { color: '#ff7a3c', strength: 0.1, reach: 0.35, streaks: 5, clumps: 0.7, speed: 0.05 }, // slow wind, in plumes
  },
  story: (distance) => [
    `This is Betelgeuse, the red shoulder of Orion, seen from ${distance} away. Placed where the Sun is, it would swallow Mars.`,
    'It glows orange-red because its surface is only about 3,600 K, far cooler than the Sun’s 5,772 K.',
    'The surface boils. The Sun has millions of small bubbling cells. Betelgeuse has only a handful, each about as wide as Earth’s orbit.',
    'That is why it looks lumpy and patchy. Its edge is blurred too: the outer gas is so thin there is no sharp surface.',
    'Its brightness drifts up and down over about 400 days as the whole star slowly pulses.',
    'In late 2019 it faded to about a third of its normal brightness, and people wondered if it was about to blow.',
    'It had coughed out a cloud of gas, which cooled into dust and hid part of the star for a few months.',
    'Here that cloud gathers over the lower half and clears, again and again. The real one came once.',
    'Size: roughly 760 times as wide as the Sun, though its fuzzy edge makes that hard to pin down. It weighs about 17 Suns.',
    'It gives off around 100,000 times the Sun’s light, most of it as infrared heat we cannot see.',
    'Type: M2 Iab. “M” is the coolest, reddest class of star. “Iab” marks a supergiant.',
    'Estimated age: 8 to 10 million years. It is already near the end: stars this heavy burn out fast.',
    'Within about 100,000 years it will explode as a supernova. For months it would rival a half Moon and show in daylight.',
    'It is roughly 550 light-years away, far enough that the blast would be a spectacle and not a danger.',
    'The name is Arabic: “the hand of al-Jauzā”, the figure we call Orion. A medieval copying slip turned the Y into a B.',
    // How people have seen it. Americas and Australia: as summarised in the literature on Orion
    // lore (Lakota, Taulipang, Lacandon; Hamacher on Nyeeruna and variable stars in oral tradition).
    'Across the Americas it is a wound. The Lakota saw a chief whose arm was cut off; the Taulipang of Brazil, a hero who lost a leg.',
    'The Lacandon Maya of Mexico call it chäk tulix, the red butterfly.',
    'In Japan it is the Heike star, for the red banners of the Taira clan. White Rigel, across Orion, stands for their rivals.',
    'Aboriginal Australians noticed that it changes. In one desert tradition, the fire magic in the hunter Nyeeruna’s hand flares and fades.',
  ],
}
