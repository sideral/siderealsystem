/** One screenful of narration, and the index of the beat it came from. */
export interface Page {
  text: string
  beat: number
}

/**
 * Splits narration beats into pages that each satisfy `fits` (e.g. "wraps to at most two lines").
 * A beat that fits stays whole. Otherwise it breaks between sentences where possible, and between
 * words only when a single sentence is too long. A page never mixes text from two beats.
 */
export function paginate(beats: readonly string[], fits: (text: string) => boolean): Page[] {
  return beats.flatMap((beat, index) =>
    pack(beat.trim().split(SENTENCE_BREAK), fits).map((text) => ({ text, beat: index })),
  )
}

/** Whitespace that follows sentence-ending punctuation (and an optional closing quote). */
const SENTENCE_BREAK = /(?<=[.!?]["”’]?)\s+/

function pack(units: readonly string[], fits: (text: string) => boolean): string[] {
  const pages: string[] = []
  let current = ''
  for (const unit of units) {
    const joined = current ? `${current} ${unit}` : unit
    if (fits(joined)) {
      current = joined
      continue
    }
    if (current) pages.push(current)
    current = unit
    if (fits(unit)) continue

    // The unit alone is too long: break it between words. A lone word that still
    // doesn't fit is kept as its own page rather than dropped.
    const words = unit.split(/\s+/)
    if (words.length > 1) {
      const parts = pack(words, fits)
      current = parts.pop() ?? ''
      pages.push(...parts)
    }
  }
  if (current) pages.push(current)
  return pages
}
