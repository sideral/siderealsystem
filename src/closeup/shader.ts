/**
 * The one fragment shader that draws any `StarLook`. Every block below draws one physical
 * thing and is skipped when its uniform is zero, so a plain star costs little.
 * The numbers come from `frameUniforms`; nothing here knows about time except small drifts.
 */
import { DEFAULT_RADIUS, MAX_COMPANIONS, MAX_WAVES } from './star'

export const VERT = `attribute vec2 aPos; void main(){ gl_Position = vec4(aPos, 0.0, 1.0); }`

export const FRAG = `
precision highp float;

// The view
uniform vec2 uRes;          // size of the view, px
uniform vec2 uOrigin;       // lower-left corner of the view within the canvas, px
uniform float uCenterY;     // disc centre, as a fraction of the view height from the top
uniform float uTime;

// The star
uniform float uRadius;      // disc radius (pulse applied), fraction of the short side
uniform vec3 uColor;        // centre of the disc
uniform vec3 uLimbColor;    // edge of the disc
uniform vec3 uEquatorTint;  // what the equator's colour is multiplied by (gravity darkening)
uniform vec4 uLight;        // limb darkening, whiten, brightness (pulse applied), glare
uniform float uSpin;        // rotation angle now, rad
uniform vec4 uAxis;         // spin axis: cos and sin of its roll on the screen, cos and sin of its lean toward us
uniform vec4 uShape;        // flattening as seen, gravity darkening, edge softness (disc radii), outline wobble
uniform vec3 uTide;         // unit direction of the pull on the screen, and how far the star stretches that way
uniform vec4 uTexture;      // amplitude, scale, speed, cells
uniform vec4 uSpots;        // darkness, size, seed, count
uniform vec4 uSpotsB;       // sine of the belt latitude (0 = scattered), faculae, flares, prominences
uniform vec4 uPatch;        // strength, shape (0 caps, 1 belt, 2 clouds), size, seed
uniform vec3 uPatchColor;
uniform vec3 uPatchAxis;    // magnetic axis, in the star's own turning frame
uniform vec4 uWave[${MAX_WAVES}];      // l, m, amplitude, phase

// Around the star
uniform vec4 uEnv;          // envelope: strength, reach (disc radii), streaks, clumps
uniform vec4 uEnvColor;     // rgb, outward speed
uniform vec4 uDust;         // darkness, clump scale, cover now, seed
uniform vec3 uDustAt;       // centre (disc radii) and radius of the dusty patch; radius 0 = everywhere
uniform vec4 uRing;         // inner, outer (disc radii), tilt, brightness
uniform vec4 uRingB;        // offset, sharpness, spiral arm, warp (rad)
uniform vec3 uRingColor;
uniform vec4 uNeb;          // kind (0 none, 1 homunculus, 2 cloud, 3 shells, 4 bow shock), brightness, angle, scale
uniform vec4 uNebB;         // cloud: streak, lanes, falloff, hollow. shells: speed. bow shock: tail
uniform vec3 uNebColor;
uniform vec3 uNebColor2;

// Companions
uniform vec4 uCompPos[${MAX_COMPANIONS}];   // centre from the star's centre (short-side units; z > 0 in front), radius (0 = none)
uniform vec4 uCompColor[${MAX_COMPANIONS}]; // rgb, own brightness
uniform vec4 uCompLook[${MAX_COMPANIONS}];  // glare, light reflected from the star, flattening, roll of the long axis
uniform float uCompTide;    // how far companion 0 stretches toward the star
uniform vec4 uPartDisc;     // disc around companion 0: outer edge (its radii), tilt, brightness, roll
uniform vec3 uPartDiscColor;
uniform vec4 uStream;       // gas crossing between the star and companion 0: rgb, brightness
uniform vec4 uJet;          // jets from companion 0: unit direction on the screen, brightness, length
uniform vec3 uJetColor;
uniform vec4 uShock;        // shock beside companion 0 where two winds meet: rgb, brightness
uniform float uShockGap;    // distance from companion 0 to the nose of that shock

float hash(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
vec3 hash3(vec3 p){ return vec3(hash(p), hash(p + 19.19), hash(p + 47.77)); }
float noise(vec3 x){
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * noise(p); p *= 2.03; a *= 0.5; } return s; }
float fbm3(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 3; i++) { s += a * noise(p); p *= 2.03; a *= 0.5; } return s / 0.875; }

// Convection cells: 0 in the dark lanes where gas sinks, 1 inside a cell where it rises.
// The cell centres wander, so cells grow, merge and die.
float granules(vec3 x, float t){
  vec3 i = floor(x), f = fract(x);
  float d1 = 8.0, d2 = 8.0;
  for (int a = -1; a <= 1; a++) for (int b = -1; b <= 1; b++) for (int c = -1; c <= 1; c++) {
    vec3 o = vec3(float(a), float(b), float(c));
    vec3 h = hash3(i + o);
    vec3 d = o + 0.5 + 0.4 * sin(6.2832 * h + t * (0.6 + h.yzx)) - f;
    float dd = dot(d, d);
    if (dd < d1) { d2 = d1; d1 = dd; } else if (dd < d2) { d2 = dd; }
  }
  return smoothstep(0.0, 0.75, sqrt(d2) - sqrt(d1));
}

// Round starspots at fixed places on the surface, each a dark core with a soft rim and a ragged
// outline. Also returns the bright faculae around them, and any flare going off beside one.
float starspots(vec3 q, out float faculae, out float flare){
  float dark = 0.0;
  faculae = 0.0;
  flare = 0.0;
  float rag = noise(q * 9.0) - 0.5;
  for (int i = 0; i < 12; i++) {
    if (float(i) >= uSpots.w) break;
    float k = float(i) * 7.31 + uSpots.z;
    vec3 c;
    if (uSpotsB.x > 0.0) {                                 // two belts, either side of the equator
      float lon = 6.2832 * hash(vec3(k, 1.3, 2.1));
      float lat = (hash(vec3(k, 5.7, 0.4)) > 0.5 ? 1.0 : -1.0) * (uSpotsB.x + 0.16 * (hash(vec3(k, 9.2, 3.3)) - 0.5));
      float cl = sqrt(max(0.0, 1.0 - lat * lat));
      c = vec3(cl * cos(lon), lat, cl * sin(lon));
    } else {
      c = vec3(hash(vec3(k, 1.3, 2.1)), hash(vec3(k, 5.7, 0.4)), hash(vec3(k, 9.2, 3.3))) * 2.0 - 1.0;
      c.y *= 0.5;                                          // keep them away from the poles
      c = normalize(c);
    }
    float s = uSpots.y * (0.55 + 0.9 * hash(vec3(k, 4.4, 8.8)));
    float d = distance(q, c) + 0.35 * s * rag;
    dark = max(dark, 0.55 * (1.0 - smoothstep(0.6 * s, s, d)) + 0.45 * (1.0 - smoothstep(0.35 * s, 0.6 * s, d)));
    faculae = max(faculae, (1.0 - smoothstep(1.3 * s, 2.8 * s, d)) * smoothstep(0.7 * s, 1.1 * s, d));
    if (i < 3 && uSpotsB.z > 0.0) {
      float period = 9.0 + 14.0 * hash(vec3(k, 2.7, 6.1));
      float ph = fract(uTime / period + hash(vec3(k, 8.1, 1.9)));
      float burst = exp(-ph * period * 1.4) * smoothstep(0.0, 0.01, ph);
      float away = distance(q, normalize(c + vec3(s, 0.0, s) * 0.9)) / (0.5 * s + 0.02);
      flare += uSpotsB.z * burst * exp(-away * away);
    }
  }
  faculae *= 0.35 + 1.3 * noise(q * 34.0);
  return dark;
}

// Light scattered around a bright source, falling off with distance d
float halo(float d){ return 0.30 * exp(-d * 10.0) + 0.10 / (1.0 + 26.0 * d * d); }

// A bow shock around a body at the origin: a curved sheet with its nose \`gap\` ahead along
// \`axis\`, sharp on the outside and trailing off behind.
float bow(vec2 d, vec2 axis, float gap){
  float u = dot(d, axis), v = dot(d, vec2(-axis.y, axis.x));
  float t = (u - gap + v * v / (2.6 * gap)) / (0.14 * gap);
  return exp(-t * t * (t > 0.0 ? 5.0 : 0.5)) * exp(-v * v / (3.2 * gap * gap));
}

// How much of a ring of gas or dust lies at a point in its own flattened plane
float ringBand(vec2 rp, float inner, float outer, float sharp){
  float rr = length(rp);
  return smoothstep(inner, inner * mix(1.2, 1.03, sharp), rr) * (1.0 - smoothstep(outer * mix(0.6, 0.95, sharp), outer, rr));
}

void main(){
  float shortSide = min(uRes.x, uRes.y);
  vec2 p = (gl_FragCoord.xy - uOrigin - vec2(0.5, 1.0 - uCenterY) * uRes) / shortSide;
  float dist = length(p);

  // Tides: a close companion pulls the star into a teardrop that points at it
  vec2 pt = p;
  if (uTide.z > 0.0) {
    float along = dot(p, uTide.xy);
    pt -= uTide.xy * along * (1.0 - 1.0 / (1.0 + uTide.z * (along > 0.0 ? 1.0 : 0.3)));
  }

  // Turn the view so the spin axis points up
  vec2 ps = vec2(uAxis.x * pt.x - uAxis.y * pt.y, uAxis.y * pt.x + uAxis.x * pt.y);

  // Outline: lumpy where the outer layers are loose, flattened where the star spins fast
  float lump = 1.0;
  if (uShape.w > 0.0) {
    float ang = atan(ps.y, ps.x + 1e-7);
    lump += 2.0 * uShape.w * (fbm(vec3(cos(ang), sin(ang), uTime * 0.03) * 1.6) - 0.5);
  }
  float R = uRadius * lump;
  vec2 pe = vec2(ps.x, ps.y / (1.0 - uShape.x));
  float r = length(pe) / R;

  // Photosphere. mu = cos(angle between the surface normal and the line of sight).
  // n is the normal as we see it, nb the same in the star's frame (y along the spin axis),
  // q the point on the turning surface.
  float mu = sqrt(max(0.0, 1.0 - r * r));
  vec3 n = vec3(pe / R, mu);
  vec3 nb = vec3(n.x, n.y * uAxis.z + n.z * uAxis.w, n.z * uAxis.z - n.y * uAxis.w);
  float cs = cos(uSpin), sn = sin(uSpin);
  vec3 q = vec3(nb.x * cs + nb.z * sn, nb.y, nb.z * cs - nb.x * sn);
  float lat2 = nb.y * nb.y;

  float edge = max(1.5 / (R * shortSide), uShape.z);
  float inside = 1.0 - smoothstep(1.0 - edge, 1.0 + edge, r);

  // Dust above the surface: clouds that gather and clear
  float veil = 0.0;
  if (uDust.x > 0.0) {
    vec2 dp = p / uRadius;
    float th = 1.0 - uDust.z;
    // Bend the pattern first, so the gaps between clouds are ragged and not square
    vec2 dq = dp * uDust.y;
    dq += 0.7 * (vec2(noise(vec3(dq * 1.7, uDust.w + 3.0)), noise(vec3(dq * 1.7, uDust.w + 17.0))) - 0.5);
    veil = smoothstep(th - 0.1, th + 0.14, 1.5 * fbm3(vec3(dq, uTime * 0.04 + uDust.w)) - 0.25);
    veil *= 0.78 + 0.22 * fbm3(vec3(dq * 2.5, uDust.w + 9.0));
    veil *= smoothstep(0.0, 0.08, uDust.z);
    if (uDustAt.z > 0.0) veil *= 1.0 - smoothstep(0.55 * uDustAt.z, uDustAt.z, distance(dp, uDustAt.xy));
  }

  vec3 disc = vec3(0.0);
  if (inside > 0.0) {
    vec3 tq = q * uTexture.y;
    float churn = uTime * uTexture.z;
    float cells = fbm(tq + vec3(0.0, 0.0, churn)) - 0.5;
    if (uTexture.w > 0.0) {
      // Bend the pattern so the lanes between cells are not straight lines
      vec3 bent = tq + 0.55 * (vec3(noise(tq * 1.9 + 11.0), noise(tq * 1.9 + 23.0), noise(tq * 1.9 + 37.0)) - 0.5);
      cells = mix(cells, 1.15 * granules(bent, churn) - 0.62 + 0.5 * cells, uTexture.w);
    }
    cells *= mix(0.45, 1.0, mu);                                 // seen at a slant near the limb, the pattern washes out

    float faculae = 0.0, flare = 0.0, spots = 0.0;
    if (uSpots.x > 0.0) spots = uSpots.x * starspots(q, faculae, flare);

    // Non-radial pulsation: zones that are hotter and cooler in turn, travelling round the star
    float wave = 0.0;
    for (int i = 0; i < ${MAX_WAVES}; i++) {
      vec4 w = uWave[i];
      if (w.z > 0.0) {
        float st = sqrt(max(0.0, 1.0 - lat2));
        float across = w.y > 0.5 ? pow(st, w.y) : 1.0;
        wave += w.z * across * cos((w.x - w.y) * acos(clamp(nb.y, -1.0, 1.0))) * cos(w.y * atan(nb.z, nb.x + 1e-7) - w.w);
      }
    }

    float intensity = (1.0 - uLight.x * (1.0 - mu)) * (1.0 + uTexture.x * cells) * (1.0 - 0.75 * spots);
    intensity *= 1.0 + 1.2 * uSpotsB.y * faculae * (1.0 - mu);
    intensity *= mix(1.0 - 0.55 * uShape.y, 1.0 + 0.6 * uShape.y, lat2) * uLight.z; // a fast spinner's poles are brighter
    disc = mix(uLimbColor, uColor, mu) * intensity;
    disc *= mix(vec3(1.0), vec3(1.0, 0.82, 0.62), clamp(-2.0 * cells * uTexture.x - 0.05, 0.0, 1.0)); // cool lanes are redder
    disc *= mix(uEquatorTint, vec3(1.0), lat2);                                                      // and so is a cool equator

    // Patches of odd chemistry, arranged around the magnetic axis or drifting near the equator
    if (uPatch.x > 0.0) {
      float cm = abs(dot(q, uPatchAxis));
      float rag = fbm(q * 3.0 + uPatch.w) - 0.5;
      float m;
      if (uPatch.y < 0.5) m = smoothstep(uPatch.z - 0.14, uPatch.z + 0.14, cm + 0.35 * rag);
      else if (uPatch.y < 1.5) m = 1.0 - smoothstep(uPatch.z - 0.16, uPatch.z + 0.16, cm + 0.3 * rag);
      else m = smoothstep(0.46, 0.7, fbm(q * 2.2 + vec3(0.0, uPatch.w, 0.0))) * (1.0 - smoothstep(uPatch.z, uPatch.z + 0.25, abs(q.y)));
      disc = mix(disc, uPatchColor * intensity, m * uPatch.x);
    }

    disc *= 1.0 + wave * vec3(0.8, 1.0, 1.3);                                                        // hotter is bluer
    disc = mix(disc, vec3(1.0), uLight.y * mu * mu * clamp(uLight.z, 0.0, 1.0));                     // centre saturates
    disc += vec3(0.85, 0.92, 1.0) * flare;
    disc *= mix(vec3(1.0), (1.0 - uDust.x) * vec3(1.0, 0.7, 0.45), veil);                            // dust dims and reddens
  }

  vec3 back = uColor * uLight.w * uLight.z * halo(max(r - 1.0, 0.0));                                // glare in the lens
  back += vec3(0.5, 0.3, 0.16) * 0.06 * uDust.x * veil * uLight.z * exp(-3.0 * max(r - 1.0, 0.0));   // dust lit from below

  // Envelope: a chromosphere, a corona or a wind glowing beyond the limb
  if (uEnv.x > 0.0) {
    float h = max(r - 1.0, 0.0);
    vec2 dir = ps / (length(ps) + 1e-6);
    float streamers = uEnv.z > 0.0 ? 0.3 + 1.4 * fbm3(vec3(dir * uEnv.z * 0.5, 2.0 + uTime * 0.015)) : 1.0;
    float clumps = uEnv.w > 0.0 ? mix(1.0, 2.2 * fbm3(vec3(dir * 8.0, h / uEnv.y - uTime * uEnvColor.a)), uEnv.w) : 1.0;
    back += uEnvColor.rgb * uEnv.x * uLight.z * exp(-h / uEnv.y) * streamers * clumps;
  }

  // Prominences: loops of glowing hydrogen held above the limb by magnetism
  if (uSpotsB.w > 0.0 && r > 0.9 && r < 1.7) {
    float prom = 0.0;
    for (int i = 0; i < 5; i++) {
      float k = float(i) * 5.13 + uSpots.z + 40.0;
      vec3 c = vec3(hash(vec3(k, 1.1, 2.3)), hash(vec3(k, 6.3, 0.9)), hash(vec3(k, 3.9, 7.7))) * 2.0 - 1.0;
      c.y *= 0.6;
      c = normalize(c);
      vec3 v = vec3(c.x * cs - c.z * sn, c.y, c.z * cs + c.x * sn);                  // undo the spin
      v = vec3(v.x, v.y * uAxis.z - v.z * uAxis.w, v.z * uAxis.z + v.y * uAxis.w);   // and the lean
      float size = R * (0.05 + 0.09 * hash(vec3(k, 9.9, 4.2)));
      float life = 0.55 + 0.45 * sin(uTime * (0.1 + 0.15 * hash(vec3(k, 0.3, 5.5))) + k);
      float loop = abs(distance(ps, vec2(v.x, v.y * (1.0 - uShape.x)) * R) - size * life);
      prom += (1.0 - smoothstep(0.25, 0.7, abs(v.z))) * life * (1.0 - smoothstep(0.0, 0.22 * size, loop));
    }
    back += vec3(1.0, 0.36, 0.42) * uSpotsB.w * prom;
  }

  // Disc of gas or dust in the star's equatorial plane, seen at a tilt
  vec3 ring = vec3(0.0);
  float ringFront = 0.0;
  if (uRing.w > 0.0) {
    vec2 rs = vec2(uAxis.x * p.x - uAxis.y * p.y, uAxis.y * p.x + uAxis.x * p.y) / uRadius;
    float tilt = max(uRing.z, 0.02);
    vec2 rp = vec2(rs.x - uRingB.x, rs.y / tilt);
    float band = ringBand(rp, uRing.x, uRing.y, uRingB.y);
    if (uRingB.w != 0.0) {                                                           // the inner half is warped
      float cw = cos(uRingB.w), sw = sin(uRingB.w);
      vec2 rw = vec2(cw * rs.x - sw * rs.y, (sw * rs.x + cw * rs.y) / tilt);
      band = max(band, 0.8 * ringBand(rw, uRing.x, mix(uRing.x, uRing.y, 0.5), uRingB.y));
    }
    float arm = 1.0 + uRingB.z * cos(atan(rp.y, rp.x + 1e-7) - 2.5 * log(length(rp) + 1e-4) - uTime * 0.4);
    ring = uRingColor * uRing.w * band * arm * (0.7 + 0.6 * fbm(vec3(rp * 1.5, uTime * 0.02)));
    ringFront = step(rs.y, 0.0);                                                     // the near half passes in front of the star
    back += ring;
  }

  // Nebula: gas and dust the star has thrown off, ploughs through or lights up
  if (uNeb.x > 0.5 && uNeb.x < 1.5) {
    // Homunculus: two hollow lobes along a tilted axis, plus a thin skirt between them
    vec2 axis = normalize(vec2(0.62, 0.78));
    float along = dot(p, axis), across = dot(p, vec2(-axis.y, axis.x));
    float rl = length(vec2(abs(along) - 0.165, across * 1.12)) / 0.155;
    float shell = (1.0 - smoothstep(0.82, 1.0, rl)) * (0.35 + 0.65 * pow(clamp(rl, 0.0, 1.0), 3.0)); // bright rims: the lobes are hollow
    float coarse = fbm(vec3(p * 14.0, uTime * 0.01)), fine = fbm(vec3(p * 40.0, 3.0));
    float skirt = exp(-abs(along) * 38.0) * (1.0 - smoothstep(0.02, 0.24, abs(across))) * 0.35 * (0.5 + coarse);
    vec3 dustColor = mix(vec3(0.55, 0.22, 0.10), vec3(1.0, 0.72, 0.48), coarse);
    back += dustColor * (shell * (0.55 + 0.9 * coarse) * (0.75 + 0.5 * fine) * 0.8 + skirt) * uNeb.y;
  } else if (uNeb.x < 2.5 && uNeb.x > 1.5) {
    // Cloud: billows or streaks of glowing gas, crossed by dark dust
    float ca = cos(uNeb.z), sa = sin(uNeb.z);
    vec2 st = vec2(ca * p.x + sa * p.y, ca * p.y - sa * p.x) * uNeb.w * vec2(1.0 / (1.0 + 5.0 * uNebB.x), 1.0);
    vec2 warp = vec2(fbm3(vec3(st * 0.8, 1.0 + uTime * 0.008)), fbm3(vec3(st * 0.8 + 5.2, 2.0))) - 0.5;
    float n1 = fbm(vec3(st + 1.8 * warp, uTime * 0.006));
    float n2 = fbm3(vec3(st * 2.1 - 1.2 * warp, 4.0));
    float gas = smoothstep(0.3, 0.72, n1);
    float lanes = 1.0 - uNebB.y * smoothstep(0.45, 0.7, n2);
    float lit = 1.0 / (1.0 + uNebB.z * dist * dist);
    float hollow = smoothstep(0.6 * uNebB.w, 1.5 * uNebB.w + 0.001, dist);
    vec3 tint = mix(uNebColor, uNebColor2, smoothstep(0.15, 0.55, dist + 0.3 * (n2 - 0.5)));
    back += tint * uNeb.y * gas * lanes * lit * hollow;
  } else if (uNeb.x > 2.5 && uNeb.x < 3.5) {
    // Shells thrown off one after another, each broken into arcs, drifting outward
    vec2 dir = p / (dist + 1e-6);
    float s = dist * (0.85 + 0.3 * fbm3(vec3(dir * 1.2, 3.0))) / uNeb.w - uTime * uNebB.x;   // no shell is a perfect circle
    float k = floor(s), f = fract(s) - 0.5;
    float arcs = smoothstep(0.3, 0.62, fbm3(vec3(dir * 1.5 + k * 1.3, k * 3.1)));
    float fade = smoothstep(uRadius * 1.05, uRadius * 1.7, dist) * exp(-2.2 * dist);
    back += uNebColor * uNeb.y * exp(-(9.0 + 22.0 * hash(vec3(k, 1.0, 2.0))) * f * f) * arcs * fade * (0.35 + 1.3 * fbm3(vec3(p * 16.0, k)));
  } else if (uNeb.x > 3.5) {
    // Bow shock ahead of a star on the move, and the wake it leaves
    vec2 axis = vec2(cos(uNeb.z), sin(uNeb.z));
    back += uNebColor * uNeb.y * bow(p, axis, uNeb.w) * (0.25 + 1.5 * fbm3(vec3(p * 7.0, uTime * 0.02)));
    if (uNebB.x > 0.0) {
      float u = -dot(p, axis), v = dot(p, vec2(-axis.y, axis.x));
      float w = 0.05 + 0.16 * max(u, 0.0);
      float wake = smoothstep(0.0, 0.12, u) * exp(-v * v / (w * w)) * (0.4 + 1.2 * fbm3(vec3(u * 6.0 + uTime * 0.05, v * 14.0, 2.0)));
      back += uNebColor2 * uNeb.y * uNebB.x * wake * exp(-1.2 * u);
    }
  }

  // Companions: each a second, simpler disc, or a point with a glow when it is far away
  vec3 front = vec3(0.0), frontGlow = vec3(0.0);
  float frontCover = 0.0;
  for (int i = 0; i < ${MAX_COMPANIONS}; i++) {
    vec4 cp = uCompPos[i];
    if (cp.w <= 0.0) continue;
    vec4 cc = uCompColor[i];
    vec4 lk = uCompLook[i];
    vec2 pc = p - cp.xy;
    vec2 pcs = pc;
    if (lk.z > 0.0) {                                             // a flat disc seen at a slant
      float cr = cos(lk.w), sr = sin(lk.w);
      pcs = vec2(cr * pc.x + sr * pc.y, (cr * pc.y - sr * pc.x) / (1.0 - lk.z));
    }
    if (i == 0 && uCompTide > 0.0) {                              // a teardrop pointing at the star
      vec2 toStar = -cp.xy / (length(cp.xy) + 1e-6);
      float along = dot(pcs, toStar);
      pcs -= toStar * along * (1.0 - 1.0 / (1.0 + uCompTide * (along > 0.0 ? 1.0 : 0.3)));
    }
    float rc = length(pcs) / cp.w;
    float muc = sqrt(max(0.0, 1.0 - rc * rc));
    vec3 body;
    if (lk.y > 0.0) {                                             // a planet: lit on the side that faces the star
      float lam = max(dot(vec3(pcs / cp.w, muc), normalize(-cp.xyz)), 0.0);
      body = cc.rgb * (cc.a + lk.y * lam);
    } else {
      body = mix(cc.rgb * 0.75, cc.rgb, muc) * (1.0 - 0.6 * (1.0 - muc)) * cc.a;
      body = mix(body, vec3(1.0), 0.3 * muc * muc * clamp(cc.a, 0.0, 1.0));
    }
    float cpx = 1.5 / (cp.w * shortSide);
    float cin = 1.0 - smoothstep(1.0 - cpx, 1.0 + cpx, rc);
    float dc = max(length(pc) - cp.w, 0.0) / ${DEFAULT_RADIUS.toFixed(2)};
    vec3 glow = cc.rgb * lk.x * (halo(dc) + 0.9 * exp(-dc * 45.0));
    if (cp.z > 0.0) {
      front = front * (1.0 - cin) + body * cin;
      frontCover = frontCover * (1.0 - cin) + cin;
      frontGlow += glow;
    } else {
      back = mix(back + glow, body, cin);
    }
  }

  // What ties the first companion to the star: glowing gas, drawn on whichever side it is
  vec3 gas = vec3(0.0);
  vec4 c0 = uCompPos[0];
  vec2 p0 = p - c0.xy;
  if (uPartDisc.z > 0.0) {                                        // a disc of gas circling the companion
    float c1 = cos(uPartDisc.w), s1 = sin(uPartDisc.w);
    vec2 dq = vec2(c1 * p0.x + s1 * p0.y, (c1 * p0.y - s1 * p0.x) / max(uPartDisc.y, 0.03)) / c0.w;
    float rr = length(dq);
    float band = smoothstep(0.9, 1.4, rr) * (1.0 - smoothstep(uPartDisc.x * 0.55, uPartDisc.x, rr));
    float swirl = 0.6 + 0.8 * fbm3(vec3(dq * 1.3 + vec2(cos(uTime * 0.5), sin(uTime * 0.5)), 5.0));
    gas += uPartDiscColor * uPartDisc.z * band * swirl;
  }
  if (uStream.a > 0.0) {                                          // a stream crossing from one to the other, curved by the orbit
    float sep = length(c0.xy) + 1e-6;
    vec2 u = c0.xy / sep, v = vec2(-u.y, u.x);
    float s = dot(p, u) / sep;
    float off = dot(p, v) - 0.13 * sep * sin(3.1416 * clamp(s, 0.0, 1.0));
    float w = uRadius * mix(0.3, 0.1, clamp(s, 0.0, 1.0));
    float span = smoothstep(0.0, 0.12, s) * (1.0 - smoothstep(0.9, 1.02, s));
    float flow = 0.5 + fbm3(vec3(s * 9.0 - uTime * 0.9, off / w, 1.0));
    gas += uStream.rgb * uStream.a * exp(-off * off / (w * w)) * span * flow;
  }
  if (uJet.z > 0.0) {                                             // twin jets at right angles to the orbit
    float along = dot(p0, uJet.xy), across = dot(p0, vec2(-uJet.y, uJet.x));
    float w = 0.1 * c0.w + 0.07 * abs(along);
    gas += uJetColor * uJet.z * exp(-across * across / (w * w)) * exp(-abs(along) / uJet.w) * (1.0 - smoothstep(2.0 * uJet.w, 4.0 * uJet.w, abs(along)))
         * (0.6 + 0.8 * fbm3(vec3(across / w, abs(along) * 30.0 - uTime * 1.5, 7.0)));
  }
  if (uShock.a > 0.0) {                                           // where the two winds collide
    vec2 toStar = -c0.xy / (length(c0.xy) + 1e-6);
    gas += uShock.rgb * uShock.a * bow(p0, toStar, uShockGap) * (0.6 + 0.8 * fbm3(vec3(p0 * 30.0, uTime * 0.2)));
  }
  if (c0.z > 0.0) frontGlow += gas; else back += gas;

  vec3 col = mix(back, disc, inside);
  col += 0.45 * ring * ringFront * inside;                        // thin gas barely shows against the star itself
  col = col * (1.0 - frontCover) + front + frontGlow;
  col += (hash(vec3(gl_FragCoord.xy, 1.0 + fract(uTime) * 37.0)) - 0.5) * (1.5 / 255.0);   // dither, so faint glows don't band
  gl_FragColor = vec4(col, 1.0);
}`
