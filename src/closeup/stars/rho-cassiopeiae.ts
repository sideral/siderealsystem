import type { CloseupStar } from '../star'

/** Figures: Lobel et al. 2003 (the 2000 outburst); Kraus et al. 2019. Its size and distance are uncertain. */
export const rhoCassiopeiae: CloseupStar = {
  id: 'rho-cassiopeiae',
  name: 'Rho Cassiopeiae',
  designation: 'ρ Cassiopeiae',
  radiusSun: 600,
  look: {
    color: '#fff1d6', // about 7,000 K in quiet times
    limbColor: '#f0bd78',
    limbDarkening: 0.6,
    whiten: 0.2,
    spinSeconds: 900,
    texture: { amplitude: 0.25, scale: 3, speed: 0.04 },
    pulse: { seconds: 22, radius: 0.02, brightness: 0.12 },
    fuzz: 0.05,
    wobble: 0.05,
    glare: 1.2,
  },
  story: (distance) => [
    `This is Rho Cassiopeiae, from ${distance} away: a yellow hypergiant, one of the rarest kinds of star there is.`,
    'It is yellow-white, about 7,000 K, close to the Sun’s colour. But it is hundreds of times wider and unstable.',
    'Its surface heaves, and it is so large and so bright that it can barely hold on to its outer layers.',
    'About every 50 years it erupts. In 2000 it blew off a shell of gas weighing as much as 10,000 Earths in under a year.',
    'During that outburst it cooled from 7,000 K to 4,000 K, turned red, and then recovered.',
    'Size: several hundred times as wide as the Sun, perhaps 600. It weighs up to 40 Suns.',
    'It gives off around 500,000 times the Sun’s light.',
    'Type: G2 Ia0. “G2” is the Sun’s own colour class. “Ia0” marks a hypergiant, the most extreme size there is.',
    'Estimated age: 4 to 6 million years.',
    'Only about a dozen yellow hypergiants are known in our whole galaxy. A star spends very little time looking like this.',
    'It will explode as a supernova. Given its distance, that may already have happened, with the light still on its way.',
    'It is thousands of light-years away, perhaps 3,400. Even so, you can see it without a telescope under a dark sky.',
  ],
}
