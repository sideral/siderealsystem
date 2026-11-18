import type { CloseupStar } from '../star'

/**
 * Figures: Lobel et al. 2003 (the 2000 outburst); Kraus et al. 2019. Its size and distance are uncertain.
 * The reddening stands for its outbursts, which really come decades apart.
 */
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
    radius: 0.24,
    spinSeconds: 900,
    axis: { rollDeg: -30 },
    texture: { amplitude: 0.3, scale: 3, speed: 0.04, cells: 0.45 },
    // Its outbursts: it swells, cools toward 4,000 K and reddens, then recovers. Far more often here than in life
    pulse: { seconds: 26, radius: -0.04, brightness: 0.32, irregular: 0.45, dimColor: '#ffa860' },
    fuzz: 0.06,
    wobble: 0.06,
    glare: 1.2,
    envelope: { color: '#ffd9a0', strength: 0.12, reach: 0.25, clumps: 0.5, speed: 0.08 }, // it barely holds on to its outer layers
    // Shells of gas blown off in past eruptions
    nebula: { kind: 'shells', color: '#ffd08a', brightness: 0.45, spacing: 0.17, speed: 0.035 },
  },
  story: [
    'Rho Cassiopeiae is a yellow hypergiant, one of the rarest kinds of star there is.',
    'Only about a dozen are known in our whole galaxy. A star spends very little time looking like this.',
    'It is close to the Sun’s colour. But it is hundreds of times wider. It is so bright that it can barely hold on to its outer layers.',
    'About every 50 years it erupts. In 2000 it blew off a shell of gas weighing as much as 10,000 Earths in under a year.',
    'During that outburst it cooled, turned red, and then recovered.',
    'Here it swells and reddens again and again, far more often than it really does. The faint arcs are shells of gas it has blown off.',
    'In the Sun’s place it would reach past Mars. It gives off the light of half a million Suns.',
    'It is only a few million years old, and it will explode as a supernova.',
    'Given its distance, that may already have happened, with the light still on its way.',
    'It is thousands of light-years away, perhaps 3,400. Even so, you can see it without a telescope under a dark sky.',
    'More unstable giants: P Cygni and Eta Carinae. More yellow supergiants: Wezen and Sadr.',
  ],
}
