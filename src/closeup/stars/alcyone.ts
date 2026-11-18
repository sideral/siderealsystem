import type { CloseupStar } from '../star'

/**
 * Figures: Touhami et al. 2013 (size and disc). Pleiades lore: Momaday, "The Way to Rainy
 * Mountain" (Kiowa); Sahagún (Aztec New Fire); Orlove, Chiang & Cane 2000 (Andean forecasting).
 */
export const alcyone: CloseupStar = {
  id: 'alcyone',
  name: 'Alcyone',
  designation: 'η Tauri',
  radiusSun: 9.3,
  look: {
    color: '#bccdff', // about 12,300 K
    limbColor: '#cad6fd',
    limbDarkening: 0.4,
    radius: 0.2,
    spinSeconds: 40,
    axis: { rollDeg: -25 },
    flattening: 0.08,
    gravityDarkening: 0.2,
    glare: 1.2,
    ring: { inner: 1.3, outer: 2.2, tilt: 0.3, color: '#ffd9e6', brightness: 0.1 },
    // The blue haze of the Pleiades: dust the cluster is drifting through, lit by its stars
    nebula: { kind: 'cloud', color: '#7da2ff', outerColor: '#4f6fd6', brightness: 0.16, scale: 5, streak: 0.8, angleDeg: 35, falloff: 1.5 },
    companions: [
      { color: '#c3d2ff', radius: 0.011, brightness: 1, glare: 0.45, place: { at: [-0.34, 0.3] } }, // Atlas
      { color: '#c8d6ff', radius: 0.011, brightness: 1, glare: 0.3, place: { at: [0.36, 0.12] } }, // Merope
      { color: '#c6d4ff', radius: 0.011, brightness: 1, glare: 0.35, place: { at: [0.22, 0.38] } }, // Maia
      { color: '#c0d0ff', radius: 0.011, brightness: 1, glare: 0.4, place: { at: [-0.4, -0.2] } }, // Electra
    ],
  },
  story: [
    'Alcyone is the brightest star of the Pleiades. People all over the world tell stories about this little cluster.',
    'In Greek myth the Pleiades are seven sisters chased by Orion. Aboriginal Australian stories tell of sisters and a hunter too.',
    'The Kiowa tell of seven girls chased by a giant bear. The rock they stood on rose to the sky, and they became these stars.',
    'Every 52 years the Aztecs watched the Pleiades cross overhead at midnight. Then they lit the New Fire to begin time again.',
    'In the Andes, farmers still watch them in June. If they look dim, less rain is coming, and potatoes are planted late.',
    'Scientists checked: high thin cloud in El Niño years does dim them. The forecast works.',
    'For Māori the cluster is Matariki, and its return at dawn begins the new year. In Japan it is Subaru, the badge on the cars.',
    'The bright points here are four of the sisters. They are drawn closer in than they really are. The blue haze is dust the cluster is drifting through.',
    'The cluster holds over a thousand stars, all born together about 100 million years ago. Dinosaurs still walked the Earth.',
    'Alcyone is blue-white, twice as hot as the Sun, and shines like 2,000 Suns. It spins fast enough to shed a thin, faint ring of gas.',
    'It is about 440 light-years away. Most people can count six or seven of the sisters without a telescope.',
    'More stars in glowing clouds: Theta¹ Orionis C, AE Aurigae and Alnitak. More with a ring of shed gas: Achernar.',
  ],
}
