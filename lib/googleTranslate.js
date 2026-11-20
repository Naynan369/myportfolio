import { englishMessages } from './i18n'
import { projects } from './projects'
import { collectStrings, replaceStrings, translateStrings } from './googleTranslateEngine.mjs'

let cachedBundle
const brandedTitles = new Set(['Evently', 'Habesha Brokers', 'MovieSphere', 'Telegram MFA'])

function translatableProject(project) {
  return {
    title: project.title,
    category: project.category,
    imageAlt: project.imageAlt,
    summary: project.summary,
    description: project.description,
    imageCaption: project.imageCaption,
    proof: project.proof,
    walkthrough: project.walkthrough,
    accessNote: project.accessNote,
    highlights: project.highlights,
    gallery: project.gallery?.map(({ alt, caption }) => ({ alt, caption })),
    links: project.links.map(({ label }) => ({ label })),
  }
}

export async function buildGoogleTranslationBundle(apiKey, fetcher = fetch) {
  const sourceProjects = projects.map(translatableProject)
  const strings = collectStrings({ messages: englishMessages, projects: sourceProjects })
  const translated = await translateStrings(strings, apiKey, fetcher)
  const messages = replaceStrings(englishMessages, translated)
  messages.nav.displays = messages.nav.displays.map(label => label.toLocaleUpperCase('it'))
  // A standalone "Close" is ambiguous; this control closes the navigation menu.
  messages.nav.close = 'Chiudi'

  const localizedProjects = projects.map((project, index) => {
    const text = replaceStrings(sourceProjects[index], translated)
    return {
      ...project,
      ...text,
      title: brandedTitles.has(project.title) ? project.title : text.title,
      image: project.slug === 'ecommerce' ? '/assets/projects/retail-analysis-it.png' : project.image,
      gallery: project.gallery?.map((item, galleryIndex) => ({ ...item, ...text.gallery[galleryIndex] })),
      links: project.links.map((link, linkIndex) => ({
        ...link,
        ...text.links[linkIndex],
        href: project.slug === 'ecommerce' && link.href === '/assets/projects/retail-analysis-en.png'
          ? '/assets/projects/retail-analysis-it.png'
          : link.href,
      })),
    }
  })

  return { source: 'google', messages, projects: localizedProjects }
}

export async function getGoogleTranslationBundle() {
  const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY
  if (!apiKey) return null
  if (!cachedBundle) {
    cachedBundle = buildGoogleTranslationBundle(apiKey).catch(error => {
      cachedBundle = null
      console.error('Google Translate is unavailable:', error.message)
      return null
    })
  }
  return cachedBundle
}

export async function getTranslationPageProps({ locale, res }) {
  const translationBundle = locale === 'it' ? await getGoogleTranslationBundle() : null
  if (translationBundle) res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
  return { props: { translationBundle: translationBundle ? JSON.parse(JSON.stringify(translationBundle)) : null } }
}

