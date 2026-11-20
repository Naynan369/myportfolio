const realFetch = globalThis.fetch
const endpoint = 'https://translation.googleapis.com/language/translate/v2'

globalThis.fetch = (url, options) => {
  if (String(url) !== endpoint) return realFetch(url, options)
  if (options.headers['X-goog-api-key'] !== 'ci-fixture-key') {
    throw new Error('Translation key was not sent in the API header')
  }
  const { q, source, target, format } = JSON.parse(options.body)
  if (source !== 'en' || target !== 'it' || format !== 'text') {
    throw new Error('Unexpected translation request')
  }
  return Promise.resolve(new Response(JSON.stringify({
    data: { translations: q.map(text => ({ translatedText: text === 'Close' ? 'Vicino' : `IT ${text}` })) },
  }), { status: 200, headers: { 'content-type': 'application/json' } }))
}
