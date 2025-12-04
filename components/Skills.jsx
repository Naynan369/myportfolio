import Image from 'next/image';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import Nodejs from '../public/assets/skills/nodejs.png';
import Github from '../public/assets/skills/github.png';
import React from '../public/assets/skills/react.png';
import Firebase from '../public/assets/skills/firebase.png';
import Java from '../public/assets/skills/Java.png';
import Python from '../public/assets/skills/Python.png';
import Neo4j from '../public/assets/skills/Neo4j.png';
import MongoDB from '../public/assets/skills/MongoDB.png';
import MySQL from '../public/assets/skills/MySQL.png';

function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-4 bg-gradient-to-b from-white to-gray-200'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#0000ff] text-center'>Skills</p>
        <h2 className='py-4 text-center text-4xl font-bold text-gray-800'>What I Can Do?</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
          {[
            { src: Html, title: 'HTML' },
            { src: Css, title: 'CSS' },
            { src: Javascript, title: 'JavaScript' },
            { src: Github, title: 'GitHub' },
            { src: Nodejs, title: 'Node.js' },
            { src: React, title: 'React' },
            { src: Firebase, title: 'Firebase' },
            {src: Java, title: 'Java'},
            {src: MySQL, title: 'MySQL'},
            {src: Python, title: 'Python'},
            {src: MongoDB, title: 'MongoDB'},
            {src: Neo4j, title: 'Neo4j'},
          ].map((skill, index) => (
            <div
              key={index}
              className='relative p-6 bg-white shadow-xl rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl'
            >
              <div className='flex flex-col items-center justify-center'>
                <Image src={skill.src} width='64px' height='64px' alt={skill.title} className='mb-4' />
                <h3 className='text-lg font-semibold text-gray-700'>{skill.title}</h3>
              </div>
              <div className='absolute inset-0 bg-indigo-500 opacity-0 transition-opacity duration-300 hover:opacity-30 rounded-xl' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
