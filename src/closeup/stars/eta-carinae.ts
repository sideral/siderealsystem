import type { CloseupStar } from '../star'

/**
 * Figures: Smith 2006 (Homunculus); Hillier et al. 2001 (wind, size and temperature ranges);
 * Hamacher & Frew 2010 (Boorong record of the Great Eruption).
 * Drawn from much farther away than the other stars: the star itself is hidden, so the view
 * shows the nebula it threw off. `radiusSun` is nominal and the story gives its own distance.
 */
export const etaCarinae: CloseupStar = {
  id: 'eta-carinae',
  name: 'Eta Carinae',
  designation: 'η Carinae',
  radiusSun: 240,
  look: {
    color: '#dfe6ff',
    limbColor: '#c9d2f5',
    limbDarkening: 0.3,
    whiten: 0.6,
    radius: 0.05,
    fuzz: 0.9, // no surface: a glowing ball of opaque wind
    glare: 2.2,
    nebula: { kind: 'homunculus' },
  },
  story: [
    'Eta Carinae is one of the heaviest and most violent stars in the galaxy. It could explode at any time.',
    'The star itself is hidden inside the glowing point at the centre. You are seeing it from about a light-year away.',
    'The two dusty lobes are the Homunculus Nebula. They are hollow bubbles of gas and dust that the star threw off in the 1840s.',
    'In 1843 that outburst made it the sky’s second-brightest star, after Sirius. Then it faded from sight.',
    'The lobes are still flying outward, and already span more than half a light-year. The dust is lit from within by the star.',
    'Even up close there is no surface to see. The star sheds gas so fast that it hides behind its own thick wind.',
    'It weighs about 100 Suns, close to the most a star can, and shines like 5 million. Its own light is pushing it apart.',
    'It is not alone in there. A second huge star swings past every five and a half years on a long, stretched orbit.',
    'It is under 3 million years old and will not get much older. It may blow tomorrow, or in 100,000 years.',
    'It is about 7,500 light-years away, too far to harm us. The light you see left before the first cities were built.',
    'The Boorong people of Australia watched the outburst. They took the new bright star into their sky as the wife of War the crow. War is the star Canopus.',
    'Researchers know of no other Indigenous record of the eruption.',
    'It has been brightening again ever since. Under dark southern skies it is back within naked-eye reach.',
    'More unstable giants: P Cygni and Rho Cassiopeiae. Another star stripped by its own wind: Gamma Velorum.',
  ],
}
