import { dataAnalysisTools, databaseTools } from '../lib/dataTools'
import { useMessages } from '../lib/i18n'

export default function Skills() {
  const t = useMessages().skills
  const groups = [
    { number: '01', title: t.groups[0], items: ['React', 'Next.js', 'JavaScript', 'HTML & CSS', 'Tailwind CSS'] },
    { number: '02', title: t.groups[1], items: ['Node.js', 'Prisma', 'REST APIs', 'Firebase', 'Git & GitHub'] },
    { number: '03', title: t.groups[2], items: [...dataAnalysisTools, t.rfm, t.modelling] },
    { number: '04', title: t.groups[3], items: databaseTools },
  ]
  return (
    <section className='section skills-section' id='skills'>
      <div className='container skills-layout'><div className='skills-intro'><p className='eyebrow'>{t.label}</p><h2>{t.heading} <em>{t.emphasis}</em></h2><p>{t.intro}</p></div><div className='skill-rows'>{groups.map(group => <div className='skill-row' key={group.title}><span className='skill-number'>{group.number} /</span><div><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div></div>)}</div></div>
    </section>
  )
}
