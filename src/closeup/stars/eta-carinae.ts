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
    nebula: true,
  },
  story: () => [
    'This is Eta Carinae, seen from about a light-year away. The star itself is hidden inside the glowing point at the centre.',
    'The two dusty lobes are the Homunculus Nebula. Each is a hollow bubble of gas and dust that the star threw off in the 1840s.',
    'They are still flying outward at over 2 million km/h, and already span more than half a light-year.',
    'The dust is lit from within. It scatters and reddens the fierce blue-white light of the star.',
    'Even up close there is no surface to see. The star sheds gas so fast that it hides behind its own thick wind.',
    'So its size and temperature are estimates: somewhere from 60 to 800 Suns wide, and from 9,000 to 35,000 K.',
    'Mass: about 100 Suns, close to the heaviest a star can be. It shines with the light of 5 million Suns.',
    'Type: a luminous blue variable, a rare kind of star so bright that its own light is pushing it apart.',
    'It is not alone in there. A second star of some 30 Suns swings past every 5.5 years on a long, stretched orbit.',
    'Estimated age: under 3 million years. It will not get much older: stars this heavy last only a few million.',
    'It could explode at any time, tomorrow or in 100,000 years. At 7,500 light-years, it is too far to harm us.',
    'In 1843 it flared to become the second-brightest star in the sky, behind only Sirius.',
    'Then it faded. By the 1860s it could no longer be seen without a telescope.',
    'It has been brightening again ever since, and is back within naked-eye reach under dark southern skies.',
    'The Boorong people of Australia watched that outburst. They took the new bright star into their sky as Collowgullouric War, wife of the crow.',
    'Researchers know of no other Indigenous record of the eruption.',
    'In China it is the Second Star of Sea and Mountain.',
    'It lies deep in the southern sky and never rises for anyone north of about 30° latitude.',
  ],
}
