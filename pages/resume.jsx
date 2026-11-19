import { getTranslationPageProps } from '../lib/googleTranslate'
import Seo from '../components/Seo'
import Link from 'next/link'
import Contact from '../components/Contact'
import { featuredProjectSlugs } from '../lib/projects'
import { useProjects } from '../lib/TranslationContext'
import { useMessages } from '../lib/i18n'

export default function Resume() {
  const t = useMessages().resume
  const projects = useProjects()
  const featuredProjects = featuredProjectSlugs.map(slug => projects.find(project => project.slug === slug))

  return <>
    <Seo title={t.title} description={t.description} path='/resume' />
    <main id='main-content' tabIndex={-1} className='resume-page'>
      <div className='container'>
        <Link href='/' className='back-link'>{t.back}</Link>
        <div className='resume-header'>
          <div>
            <p className='eyebrow'>{t.label}</p>
            <h1>{t.heading} <em>{t.emphasis}</em></h1>
          </div>
          <div className='resume-header-aside'>
            <p>{t.intro}</p>
            <a className='button button-light' href='/Samuel_Tadesse_CV.pdf' hrefLang='en' download>{t.download}</a>
          </div>
        </div>
        <div className='resume-layout'>
          <div className='resume-main'>
            <section>
              <p className='eyebrow'>{t.profileLabel}</p>
              <h2>{t.profile}</h2>
              <p>{t.profile1}</p>
              <p>{t.profile2}</p>
            </section>
            <section>
              <p className='eyebrow'>{t.educationLabel}</p>
              <h2>{t.education}</h2>
              <div className='resume-education'>
                <div><div className='resume-education-head'><h3>{t.messina}</h3><span>{t.present}</span></div><p>{t.messinaDegree}</p><p>{t.messinaCourses}</p></div>
                <div><div className='resume-education-head'><h3>{t.act}</h3><span>2022 – 2023</span></div><p>{t.actDegree}</p><p>{t.actCourses}</p></div>
              </div>
            </section>
            <section>
              <p className='eyebrow'>{t.projectsLabel}</p>
              <h2>{t.projects}</h2>
              <div className='resume-projects'>
                {featuredProjects.map(project => <div key={project.slug}><Link href={project.route}>{project.title}</Link><p>{project.summary}</p></div>)}
              </div>
              <Link href='/#projects' className='text-link'>{t.all}</Link>
            </section>
          </div>
          <aside>
            <p className='eyebrow'>{t.capabilities}</p>
            {t.groups.map((group, index) => <div className='resume-skills' key={group}><h3>{group}</h3><p>{t.skillItems[index]}</p></div>)}
            <div className='resume-skills'><h3>{t.languages}</h3><p>{t.languageList}</p></div>
            <div className='resume-connect'>
              <p className='eyebrow'>{t.connect}</p>
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

export async function getServerSideProps(context) {
  return getTranslationPageProps(context)
}
