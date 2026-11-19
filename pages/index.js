import { getTranslationPageProps } from '../lib/googleTranslate'
import Seo from '../components/Seo'
import Main from '../components/Main'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import { useMessages } from '../lib/i18n'

export default function Home() {
  const t = useMessages().home
  return <>
    <Seo title={t.title} description={t.description} />
    <main id='main-content' tabIndex={-1}><Main /><Projects /><About /><Skills /></main>
    <Contact />
  </>
}

export async function getServerSideProps(context) {
  return getTranslationPageProps(context)
}
