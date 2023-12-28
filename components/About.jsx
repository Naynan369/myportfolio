import React from 'react'
import Link from 'next/link'
function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='py-4 uppercase text-3xl tracking-widest'>About</p>
          <h2>Who I am!</h2>
          <p className='text-[#ffa500] text-2xl'>*** Im not your ordinary developer ***</p>
          <p>I am a full stack developer with years of experience in the industry. I have a passion for building innovative and user-friendly web applications from scratch, and I thrive in fast-paced and collaborative environments.
            My journey into web development started when I was 16 years old, and I discovered my love for coding. Since then, I have honed my skills in various programming languages and frameworks, including Reactjs,Tailwind css, Firebase, Java, MSSQL and javascript. I am constantly learning and staying up-to-date with the latest industry trends, and I enjoy experimenting with new tools and technologies to find the best solutions for my clients.
            Over the years, I have worked on a wide range of projects, from small-scale applications to complex enterprise systems. I take pride in my ability to deliver high-quality code that meets the specific needs of my clients while adhering to best practices and coding standards. I also value clear communication and collaboration with my team members, and I believe that building strong relationships is key to successful project outcomes.</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-110 ease-in duration-300'>
          <img className='rounded-xl' src="https://images.wondershare.com/mockitt/ui-design/gui-python-introduction.jpg" alt="/" />
        </div>
        <Link href='/#projects'>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Check out some of my latest projects.
          </p>
        </Link>
      </div>
    </div>
  )
}

export default About