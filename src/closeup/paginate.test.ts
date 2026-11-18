import { describe, expect, it } from 'vitest'
import { paginate } from './paginate'

const upTo = (max: number) => (text: string) => text.length <= max

describe('paginate', () => {
  it('keeps a beat whole when it fits', () => {
    expect(paginate(['Short beat. Two sentences.'], upTo(40))).toEqual([
      { text: 'Short beat. Two sentences.', beat: 0 },
    ])
  })

  it('breaks between sentences before breaking inside one', () => {
    const pages = paginate(['First sentence here. Second one follows. Third.'], upTo(30))
    expect(pages.map((p) => p.text)).toEqual(['First sentence here.', 'Second one follows. Third.'])
  })

  it('breaks a too-long sentence between words and never exceeds the limit', () => {
    const beat = 'one two three four five six seven eight nine ten'
    const pages = paginate([beat], upTo(14))
    expect(pages.every((p) => p.text.length <= 14)).toBe(true)
    expect(pages.map((p) => p.text).join(' ')).toBe(beat)
  })

  it('does not split decimals or mix beats on one page', () => {
    const pages = paginate(['It is 1.71 times wider.', 'Next.'], upTo(100))
    expect(pages).toEqual([
      { text: 'It is 1.71 times wider.', beat: 0 },
      { text: 'Next.', beat: 1 },
    ])
  })

  it('keeps a single over-long word rather than dropping it', () => {
    expect(paginate(['supercalifragilistic ok'], upTo(5)).map((p) => p.text)).toEqual([
      'supercalifragilistic',
      'ok',
    ])
  })
})
