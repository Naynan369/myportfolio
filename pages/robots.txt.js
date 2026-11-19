import { siteOrigin } from '../lib/site'

export function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=3600')
  res.write(`User-agent: *\nAllow: /\n\nSitemap: ${siteOrigin}/sitemap.xml\n`)
  res.end()
  return { props: {} }
}

export default function Robots() {
  return null
}
