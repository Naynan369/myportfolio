import Head from 'next/head'
import Link from 'next/link'
import Contact from '../components/Contact'
import { useMessages } from '../lib/i18n'

export default function NotFound() {
  const t = useMessages().notFound
  return <>
    <Head><title>{t.title}</title><meta name='robots' content='noindex' /></Head>
    <main id='main-content' tabIndex={-1} className='container not-found'>
      <p className='eyebrow'>404</p>
      <h1>{t.heading}</h1>
      <p>{t.body}</p>
      <Link className='button button-dark' href='/'>{t.back}</Link>
    </main>
    <Contact />
  </>
}
