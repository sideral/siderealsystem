import type { CloseupStar } from '../star'

/**
 * Figures: Izumiura et al. 2011 (the detached dust shell, about 110 arc seconds out, from a
 * helium flash a few thousand years ago); Sanchez et al. 2015 (GALEX: the shell glowing in
 * ultraviolet light); Gaia distance. Radius and temperature are rough. The shell is a third of a
 * light-year out; it is drawn far closer in and far brighter, in blue to stand for ultraviolet.
 */
export const uHydrae: CloseupStar = {
  id: 'u-hydrae',
  name: 'U Hydrae',
  designation: 'HR 4163',
  radiusSun: 260,
  look: {
    color: '#ff6a36', // about 3,000 K, reddened further by carbon molecules
    limbColor: '#99230f',
    limbDarkening: 0.82,
    whiten: 0,
    radius: 0.14,
    spinSeconds: 1200,
    axis: { rollDeg: -15 },
    texture: { amplitude: 0.45, scale: 2.8, speed: 0.03, cells: 0.4 },
    pulse: { seconds: 18, radius: -0.02, brightness: 0.14, irregular: 0.45, dimColor: '#e04a1e' },
    fuzz: 0.08,
    wobble: 0.05,
    glare: 0.7,
    // One shell, thrown off in a single burst and now far from the star
    nebula: { kind: 'shells', color: '#9db2ff', brightness: 0.6, spacing: 0.74, speed: 0.002 },
  },
  story: [
    'U Hydrae is a deep red carbon star. It sits inside a shell of gas that it threw off in one burst.',
    'Deep inside, a layer of helium builds up around its core. Every few tens of thousands of years the layer ignites all at once.',
    'For a few centuries the star swells and brightens, and its wind turns into a gale. Then it settles. The gust keeps travelling outward as a thin shell.',
    'The ring here is the shell from the last such flash, a few thousand years ago. Only a handful of stars are known to have one.',
    'It has now coasted a third of a light-year out. Here it is drawn closer in and far brighter than it really is.',
    'The shell was photographed in ultraviolet light. It glows as it ploughs into older gas. The blue stands for that light.',
    'Each flash also stirs freshly made carbon up to the surface. That is why the star is so red. That story is told at La Superba.',
    'It carries a rarer clue too: technetium. That metal decays away within a few million years. The star must have made it recently.',
    'It is about half as hot as the Sun and a couple of hundred times as wide. Its light wavers slowly, with no fixed beat.',
    'It is about 700 light-years away, in the Water Snake. Few carbon stars are bright enough to see without a telescope. This is one.',
    'More carbon stars: La Superba and R Coronae Borealis. More dying red giants: Mira and R Doradus.',
  ],
}
