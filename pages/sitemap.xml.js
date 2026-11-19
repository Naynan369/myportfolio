import { siteLocales, sitePaths, siteUrl } from '../lib/site'

const escapeXml = value => value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[character]))

export function getServerSideProps({ res }) {
  const urls = sitePaths.flatMap(path => siteLocales.map(locale => {
    const alternates = [...siteLocales, 'x-default'].map(language =>
      `<xhtml:link rel="alternate" hreflang="${language}" href="${escapeXml(siteUrl(path, language))}"/>`
    ).join('')
    return `<url><loc>${escapeXml(siteUrl(path, locale))}</loc>${alternates}</url>`
  })).join('\n')

  res.setHeader('Content-Type', 'application/xml; charset=utf-8')
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=3600')
  res.write(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>`)
  res.end()
  return { props: {} }
}

export default function Sitemap() {
  return null
}
