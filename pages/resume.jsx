import Head from 'next/head'
import Link from 'next/link'
import Contact from '../components/Contact'
import { projects } from '../lib/projects'

const featuredSlugs = ['ecommerce', 'habesha-brokers', 'evently']
const featuredProjects = featuredSlugs.map(slug => projects.find(project => project.slug === slug))

const skillGroups = [
  { title: 'Data & analytics', items: 'Python, Pandas, NumPy, Jupyter, SQL, Power BI, Excel, RFM segmentation, statistical modelling' },
  { title: 'Software', items: 'JavaScript, Java, React, Next.js, Node.js, Express.js, REST APIs, Firebase, HTML, CSS, Tailwind CSS' },
  { title: 'Databases & tools', items: 'PostgreSQL, MySQL, Microsoft SQL Server, MongoDB, Neo4j, Git, Docker, Linux' },
]

export default function Resume() {
  return <>
    <Head>
      <title>Résumé — Samuel Z. Tadesse</title>
      <meta name='description' content='Education, skills, and selected projects of Samuel Z. Tadesse, data analysis student and software developer.' />
      <link rel='icon' href='/favicon.svg' />
    </Head>
    <main id='home' className='resume-page'>
      <div className='container'>
        <Link href='/'><a className='back-link'>Back to home</a></Link>
        <div className='resume-header'>
          <div>
            <p className='eyebrow'>Résumé / Samuel Z. Tadesse</p>
            <h1>Data, software, <em>and curiosity.</em></h1>
          </div>
          <div className='resume-header-aside'>
            <p>Data Analysis student at the University of Messina, seeking a curricular internship in data or BI analytics.</p>
            <a className='button button-light' href='/Samuel_Tadesse_CV.pdf' download>Download CV (PDF)</a>
          </div>
        </div>
        <div className='resume-layout'>
          <div className='resume-main'>
            <section>
              <p className='eyebrow'>01 / Profile</p>
              <h2>What I bring</h2>
              <p>I turn raw data into dashboards and customer insights with Python, SQL, and Power BI. My software background helps me build useful tools around the analysis, from React interfaces to full-stack applications.</p>
              <p>Based in Messina, Italy. Available for a curricular internship on-site in Sicily or remotely in Italy or the EU.</p>
            </section>
            <section>
              <p className='eyebrow'>02 / Education</p>
              <h2>Studies</h2>
              <div className='resume-education'>
                <div><div className='resume-education-head'><h3>University of Messina</h3><span>2023 – present</span></div><p>B.Sc. Data Analysis · Messina, Italy · Expected graduation 2027</p><p>Statistical Methods &amp; Models, Machine Learning, Data Structures &amp; Algorithms, Databases, and Programming Languages.</p></div>
                <div><div className='resume-education-head'><h3>American College of Technology</h3><span>2022 – 2023</span></div><p>Computer Science · Addis Ababa, Ethiopia</p><p>Completed one year before transferring to the University of Messina. Coursework included Web Programming, Databases, and Computer Networks.</p></div>
              </div>
            </section>
            <section>
              <p className='eyebrow'>03 / Selected projects</p>
              <h2>Work</h2>
              <div className='resume-projects'>
                {featuredProjects.map(project => <div key={project.slug}><Link href={project.route}><a>{project.title}</a></Link><p>{project.summary}</p></div>)}
              </div>
              <Link href='/#projects'><a className='text-link'>Explore all projects</a></Link>
            </section>
          </div>
          <aside>
            <p className='eyebrow'>04 / Capabilities</p>
            {skillGroups.map(group => <div className='resume-skills' key={group.title}><h3>{group.title}</h3><p>{group.items}</p></div>)}
            <div className='resume-skills'><h3>Languages</h3><p>Amharic: native · English: C1 · Italian: B1</p></div>
            <div className='resume-connect'>
              <p className='eyebrow'>Connect</p>
              <a href='mailto:samuel.zewge@icloud.com'>samuel.zewge@icloud.com</a>
              <a href='https://github.com/Naynan369' target='_blank' rel='noopener noreferrer'>GitHub</a>
              <a href='https://www.linkedin.com/in/samuel369' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
            </div>
          </aside>
        </div>
      </div>
    </main>
    <Contact />
  </>
}
