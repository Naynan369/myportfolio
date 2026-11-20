import { useMessages } from '../lib/i18n'
import Navbar from '../components/Navbar'
import { TranslationContext } from '../lib/TranslationContext'
import '../styles/globals.css'

function AppContent({ Component, pageProps }) {
  const t = useMessages().nav
  return (
    <>
      <a className='skip-link' href='#main-content'>{t.skip}</a>
      <Navbar />
      <div id='page-content'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default function MyApp({ Component, pageProps }) {
  return <TranslationContext.Provider value={pageProps.translationBundle || null}>
    <AppContent Component={Component} pageProps={pageProps} />
  </TranslationContext.Provider>
}
