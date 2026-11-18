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
  story: [
    'Betelgeuse is the red shoulder of Orion. In the Sun’s place it would swallow Mars and the asteroid belt too.',
    'And it is close to death. Within about 100,000 years it will explode as a supernova.',
    'For months it would rival a half Moon and show in daylight. At about 550 light-years, it is too far to harm us.',
    'In late 2019 it faded to about a third of its normal brightness. People wondered if the time had come.',
    'It had only coughed out a cloud of gas. That cooled into dust and hid part of the star for a few months.',
    'Here that cloud gathers over the lower half and clears, again and again. The real one came once.',
    'The surface boils. The Sun has millions of small bubbling cells. Betelgeuse has only a handful, each about as wide as Earth’s orbit.',
    'That is why it looks lumpy. Its edge is blurred too: the outer gas is so thin that there is no sharp surface.',
    'It is red because it is cool, more than a third cooler than the Sun. Yet it gives off the light of 100,000 Suns, mostly as heat.',
    'It is under 10 million years old. Stars this heavy burn out fast.',
    'The name is Arabic: “the hand of al-Jauzā”, the figure we call Orion. A medieval copying slip turned the Y into a B.',
    // How people have seen it. Americas and Australia: as summarised in the literature on Orion
    // lore (Lakota, Taulipang; Hamacher on Nyeeruna and variable stars in oral tradition).
    'Across the Americas it is a wound. The Lakota saw a chief whose arm was cut off. The Taulipang of Brazil saw a hero who lost a leg.',
    'Aboriginal Australians noticed that it changes. In one desert tradition, the fire magic in the hunter Nyeeruna’s hand flares and fades.',
    'More red supergiants: Antares, the Garnet Star and VV Cephei.',
  ],
}
