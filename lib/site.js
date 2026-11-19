import { projects } from './projects'

export const siteOrigin = 'https://myportfolio-7g53.vercel.app'
export const siteLocales = ['en', 'it']
export const sitePaths = ['/', '/resume', ...projects.map(project => project.route)]

export function siteUrl(path = '/', locale = 'en') {
  const localizedPath = locale === 'it' ? `/it${path === '/' ? '' : path}` : path
  return `${siteOrigin}${localizedPath}`
}
