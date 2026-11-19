import Head from 'next/head'
import { useRouter } from 'next/router'
import { siteLocales, siteOrigin, siteUrl } from '../lib/site'
import { useTranslationBundle } from '../lib/TranslationContext'

export default function Seo({ title, description, path = '/', image = '/assets/backgrounds/code-screen.jpg', imageAlt }) {
  const { locale = 'en' } = useRouter()
  const translationBundle = useTranslationBundle()
  const canonical = siteUrl(path, locale)
  const absoluteImage = `${siteOrigin}${image}`
  const socialLocale = locale === 'it' ? 'it_IT' : 'en_GB'
  const alternateLocale = locale === 'it' ? 'en_GB' : 'it_IT'
  const alt = imageAlt || (locale === 'it' ? 'Codice sullo schermo di un computer' : 'Code on a computer screen')

  return <Head>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel='icon' href='/favicon.svg' />
    <link rel='canonical' href={canonical} />
    {siteLocales.map(language => <link key={`alternate-${language}`} rel='alternate' hrefLang={language} href={siteUrl(path, language)} />)}
    <link key='alternate-default' rel='alternate' hrefLang='x-default' href={siteUrl(path)} />
    {locale === 'it' && translationBundle?.source === 'google' && <link rel='alternate machine-translated-from' hrefLang='en' href={siteUrl(path)} />}
    <meta property='og:type' content='website' />
    <meta property='og:site_name' content='Samuel Z. Tadesse' />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:url' content={canonical} />
    <meta property='og:locale' content={socialLocale} />
    <meta property='og:locale:alternate' content={alternateLocale} />
    <meta property='og:image' content={absoluteImage} />
    <meta property='og:image:alt' content={alt} />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:title' content={title} />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:image' content={absoluteImage} />
    <meta name='twitter:image:alt' content={alt} />
  </Head>
}
