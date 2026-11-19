const GOOGLE_TRANSLATE_URL = 'https://translation.googleapis.com/language/translate/v2'

export function decodeTranslatedText(value) {
  return value.replace(/&(#(?:x[0-9a-f]+|[0-9]+)|amp|lt|gt|quot|apos|nbsp);/gi, (match, entity) => {
    if (entity[0] === '#') {
      const hexadecimal = entity[1]?.toLowerCase() === 'x'
      const codePoint = Number.parseInt(entity.slice(hexadecimal ? 2 : 1), hexadecimal ? 16 : 10)
      return Number.isInteger(codePoint) && codePoint >= 0 && codePoint <= 0x10ffff
        ? String.fromCodePoint(codePoint)
        : match
    }
    return { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: '\u00a0' }[entity.toLowerCase()] || match
  })
}

export function collectStrings(value, found = new Set()) {
  if (typeof value === 'string' && value.trim()) found.add(value)
  else if (Array.isArray(value)) value.forEach(item => collectStrings(item, found))
  else if (value && typeof value === 'object') Object.values(value).forEach(item => collectStrings(item, found))
  return [...found]
}

export function replaceStrings(value, translated) {
  if (typeof value === 'string') return translated.get(value) || value
  if (Array.isArray(value)) return value.map(item => replaceStrings(item, translated))
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, replaceStrings(item, translated)]))
  }
  return value
}

export async function translateStrings(strings, apiKey, fetcher = fetch) {
  const translated = new Map()
  let batch = []
  let characters = 0

  async function sendBatch() {
    if (!batch.length) return
    const response = await fetcher(GOOGLE_TRANSLATE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'X-goog-api-key': apiKey },
      body: JSON.stringify({ q: batch, source: 'en', target: 'it', format: 'text' }),
      signal: AbortSignal.timeout(10000),
    })
    if (!response.ok) throw new Error('Google Translate returned HTTP ' + response.status)
    const result = await response.json()
    const translations = result?.data?.translations
    if (!Array.isArray(translations) || translations.length !== batch.length) {
      throw new Error('Google Translate returned an incomplete response')
    }
    batch.forEach((source, index) => {
      const text = translations[index]?.translatedText
      if (typeof text !== 'string') throw new Error('Google Translate returned invalid text')
      translated.set(source, decodeTranslatedText(text))
    })
    batch = []
    characters = 0
  }

  for (const source of strings) {
    if (batch.length && characters + source.length > 4500) await sendBatch()
    batch.push(source)
    characters += source.length
  }
  await sendBatch()
  return translated
}

