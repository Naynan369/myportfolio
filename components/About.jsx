import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-4 flex items-center py-16 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-10 items-center'>
        {/* Left Content */}
        <div className='col-span-2 p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105'>
          <p className='uppercase text-3xl tracking-widest text-gray-800 py-2'>About Me</p>
          <h2 className='text-4xl font-bold text-gray-900 mb-2'>
            Who I Am{' '}
            <span className='text-[#ffa500]'>
              <Typewriter
                words={['A Full-Stack Developer', 'A Problem Solver', 'A Tech Enthusiast']}
                loop={false}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>
          <p className='text-gray-700 text-lg py-2 leading-relaxed'>
            I’m a passionate full-stack developer with expertise in crafting modern web applications.
            My journey began at 16, diving deep into technologies like React, Tailwind CSS, Firebase, Java, and MSSQL.
          </p>
          <p className='text-gray-700 text-lg leading-relaxed'>
            I thrive in collaborative environments and continually explore innovative tools and methodologies to enhance my projects.
          </p>
          <Link href='/#projects'>
            <p className='text-lg text-indigo-600 mt-4 underline cursor-pointer hover:text-indigo-400 transition duration-200'>
              Check out my latest projects.
            </p>
          </Link>
        </div>

        {/* Right Image */}
        <div className='w-full h-auto m-auto shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-xl mt-6 md:mt-0'>
          <Image
            className='rounded-lg'
            src="https://images.wondershare.com/mockitt/ui-design/gui-python-introduction.jpg"
            alt="Developer working"
            width={400} // Adjust width
            height={300} // Adjust height
            layout="responsive" // Ensures the image is responsive
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
