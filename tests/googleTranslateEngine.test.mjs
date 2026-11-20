import assert from 'node:assert/strict'
import test from 'node:test'
import { collectStrings, decodeTranslatedText, replaceStrings, translateStrings } from '../lib/googleTranslateEngine.mjs'

test('translates each distinct string and keeps the API key out of the URL', async () => {
  const source = { intro: 'Hello & welcome', navigation: ['Read more', 'Hello & welcome'] }
  const requests = []
  const fetcher = async (url, options) => {
    requests.push({ url, options })
    const { q, source, target, format } = JSON.parse(options.body)
    assert.deepEqual([source, target, format], ['en', 'it', 'text'])
    return {
      ok: true,
      json: async () => ({ data: { translations: q.map(text => ({ translatedText: `IT ${text.replaceAll('&', '&amp;')}` })) } }),
    }
  }

  const translated = await translateStrings(collectStrings(source), 'fixture-key', fetcher)
  assert.deepEqual(replaceStrings(source, translated), {
    intro: 'IT Hello & welcome',
    navigation: ['IT Read more', 'IT Hello & welcome'],
  })
  assert.equal(requests.length, 1)
  assert.equal(requests[0].options.headers['X-goog-api-key'], 'fixture-key')
  assert.equal(requests[0].url.includes('fixture-key'), false)
  assert.deepEqual(JSON.parse(requests[0].options.body).q, ['Hello & welcome', 'Read more'])
})

test('batches long text and rejects an incomplete translation response', async () => {
  const calls = []
  const fetcher = async (_url, options) => {
    const q = JSON.parse(options.body).q
    calls.push(q)
    return { ok: true, json: async () => ({ data: { translations: q.map(translatedText => ({ translatedText })) } }) }
  }
  const strings = ['A'.repeat(3000), 'B'.repeat(3000)]
  await translateStrings(strings, 'fixture-key', fetcher)
  assert.equal(calls.length, 2)
  assert.deepEqual(calls.flat(), strings)
  await assert.rejects(
    translateStrings(['Hello'], 'fixture-key', async () => ({ ok: true, json: async () => ({ data: { translations: [] } }) })),
    /incomplete response/,
  )
})

test('decodes common HTML entities in API text', () => {
  assert.equal(decodeTranslatedText('L&#39;arte &amp; la citt&#224;'), "L'arte & la città")
  assert.equal(decodeTranslatedText('&quot;ciao&quot; &lt;tag&gt;'), '"ciao" <tag>')
})
