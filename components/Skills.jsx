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
    <div id="skills" className="w-full lg:h-screen p-4 bg-gradient-to-b from-white to-gray-200">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#0000ff] text-center">Skills</p>
        <h2 className="py-4 text-center text-4xl font-bold text-gray-800">What I Can Do?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative p-6 bg-white shadow-xl rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={skill.src}
                  width={64}
                  height={64}
                  alt={skill.title}
                  className="mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-700">{skill.title}</h3>
              </div>
              <div className="absolute inset-0 bg-indigo-500 opacity-0 transition-opacity duration-300 hover:opacity-30 rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;