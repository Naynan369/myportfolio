import Image from 'next/image';

function Skills() {
  const skills = [
    { src: '/assets/skills/html.png', title: 'HTML' },
    { src: '/assets/skills/css.png', title: 'CSS' },
    { src: '/assets/skills/javascript.png', title: 'JavaScript' },
    { src: '/assets/skills/github.png', title: 'GitHub' },
    { src: '/assets/skills/nodejs.png', title: 'Node.js' },
    { src: '/assets/skills/react.png', title: 'React' },
    { src: '/assets/skills/firebase.png', title: 'Firebase' },
    { src: '/assets/skills/Java.png', title: 'Java' },
    { src: '/assets/skills/MySQL.png', title: 'MySQL' },
    { src: '/assets/skills/Python.png', title: 'Python' },
    { src: '/assets/skills/MongoDB.png', title: 'MongoDB' },
    { src: '/assets/skills/Neo4j.png', title: 'Neo4j' },
  ];

  return (
    <section id='skills' className='w-full scroll-mt-24 bg-gradient-to-b from-white to-slate-200 py-20'>
      <div className='mx-auto max-w-[1140px] px-4'>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='text-xl tracking-widest uppercase text-indigo-600'>Skills</p>
          <h2 className='py-4 text-4xl font-bold text-slate-900'>What I Excel At</h2>
          <p className='text-slate-600'>Experience with clean front-end systems, strong back-end fundamentals, and modern tooling for fast development.</p>
        </div>

        <div className='grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-4'>
          {skills.map((skill, index) => (
            <div key={index} className='group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl'>
              <div className='relative mx-auto mb-4 h-16 w-16 rounded-3xl bg-slate-50 p-3 transition duration-300 group-hover:bg-indigo-50'>
                <Image src={skill.src} width={56} height={56} alt={skill.title} className='object-contain' />
              </div>
              <h3 className='text-lg font-semibold text-slate-900'>{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;