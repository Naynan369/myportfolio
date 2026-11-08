import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  return <>
    <Head>
      <title>Samuel Z. Tadesse — Software Developer & Data Analysis Student</title>
      <meta name='description' content='Portfolio of Samuel Z. Tadesse, a software developer and data analysis student. Explore web applications, analytics projects, and ways to connect.' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.svg' />
    </Head>
    <main><Main /><About /><Projects /><Skills /></main>
    <Contact />
  </>
}
