import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import { useMessages } from '../lib/i18n'

export default function Home() {
  const t = useMessages().home
  return <>
    <Head>
      <title>{t.title}</title>
      <meta name='description' content={t.description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.svg' />
    </Head>
    <main><Main /><About /><Projects /><Skills /></main>
    <Contact />
  </>
}
