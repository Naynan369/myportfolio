import { dataAnalysisTools, databaseTools } from '../lib/dataTools'

const groups = [
  { number: '01', title: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'HTML & CSS', 'Tailwind CSS'] },
  { number: '02', title: 'Backend & tools', items: ['Node.js', 'Prisma', 'REST APIs', 'Firebase', 'Git & GitHub'] },
  { number: '03', title: 'Data & analysis', items: [...dataAnalysisTools, 'RFM analysis', 'Statistical modelling'] },
  { number: '04', title: 'Databases', items: databaseTools },
]

export default function Skills() {
  return (
    <section className='section skills-section' id='skills'>
      <div className='container skills-layout'><div className='skills-intro'><p className='eyebrow'>03 / Capabilities</p><h2>Built to keep <em>learning.</em></h2><p>A practical toolkit for making interfaces feel clear and data feel useful.</p></div><div className='skill-rows'>{groups.map(group => <div className='skill-row' key={group.title}><span className='skill-number'>{group.number} /</span><div><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div></div>)}</div></div>
    </section>
  )
}
