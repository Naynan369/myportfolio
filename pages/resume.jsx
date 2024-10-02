import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Resume = () => {
    return (
        <>
            <Head>
                <title>Samuel | Resume</title>
                <meta
                    name='description'
                    content='I’m a front-end web developer specializing in building exceptional digital experiences.'
                />
                <link rel='icon' href='/fav.png' />
            </Head>

            <div className='max-w-[900px] mx-auto p-8 pt-[100px] bg-white shadow-2xl rounded-lg'>
                {/* Header */}
                <header className='text-center mb-12'>
                    <h1 className='text-5xl font-extrabold mb-4 text-gray-900'>Samuel Zewge</h1>
                    <p className='text-2xl text-gray-700 font-light'>Front-End Web Developer</p>
                    <div className='flex justify-center mt-6 space-x-8'>
                        <a
                            href='https://www.linkedin.com/in/samuel-zewge-a47a03271'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:text-blue-600 transition-colors duration-300'
                        >
                            <FaLinkedinIn size={30} />
                        </a>
                        <a
                            href='https://github.com/Naynan369'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:text-gray-900 transition-colors duration-300'
                        >
                            <FaGithub size={30} />
                        </a>
                    </div>
                </header>

                {/* Summary */}
                <section className='mb-12'>
                    <h2 className='text-3xl font-semibold text-gray-900 border-b-4 border-gray-300 pb-3 mb-6'>Summary</h2>
                    <p className='text-lg text-gray-700 leading-relaxed'>
                        Highly motivated and results-driven Front-End Developer with a passion for crafting
                        responsive, visually stunning web applications. Proven ability to collaborate effectively
                        in team environments while delivering top-notch results in fast-paced, high-pressure
                        settings. Skilled in bridging the gap between design and technical implementation to
                        produce user-friendly and engaging digital experiences.
                    </p>
                </section>

                {/* Skills */}
                <section className='mb-12'>
                    <h2 className='text-3xl font-semibold text-gray-900 border-b-4 border-gray-300 pb-3 mb-6'>Skills</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                        <div className='bg-gray-50 p-6 rounded-lg shadow-md'>
                            <h3 className='text-xl font-semibold mb-4 text-gray-800'>Technical Skills</h3>
                            <ul className='space-y-2 text-gray-700'>
                                <li>HTML5, CSS3, JavaScript (ES6+)</li>
                                <li>React.js, Next.js</li>
                                <li>Tailwind CSS, Firebase</li>
                                <li>Responsive Web Design</li>
                            </ul>
                        </div>
                        <div className='bg-gray-50 p-6 rounded-lg shadow-md'>
                            <h3 className='text-xl font-semibold mb-4 text-gray-800'>Development Expertise</h3>
                            <ul className='space-y-2 text-gray-700'>
                                <li>User Interface (UI) Design</li>
                                <li>User Experience (UX) Optimization</li>
                                <li>Cross-Browser Compatibility</li>
                                <li>Website Performance Optimization</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Professional Experience */}
                <section className='mb-12'>
                    <h2 className='text-3xl font-semibold text-gray-900 border-b-4 border-gray-300 pb-3 mb-6'>Professional Experience</h2>
                    <div className='bg-gray-50 p-8 rounded-lg shadow-md'>
                        <h3 className='text-2xl font-bold text-gray-900'>INFINITE TECH</h3>
                        <p className='text-gray-600 italic'>Messina, Italy | Front-End Web Developer & Web Master (2021 - Present)</p>
                        <ul className='list-disc list-outside mt-6 ml-6 space-y-3 text-gray-700 leading-relaxed'>
                            <li>Developed dynamic, responsive UI components using HTML, CSS, and JavaScript to enhance user experience.</li>
                            <li>Collaborated with cross-functional teams to ensure seamless functionality and high-quality web interfaces.</li>
                            <li>Led website redesigns to improve performance, accessibility, and visual appeal.</li>
                            <li>Managed DNS and MX records during website migration for multiple client platforms.</li>
                        </ul>
                    </div>
                </section>

                {/* Footer */}
                <footer className='text-center text-sm text-gray-500 mt-12'>
                    <p>© {new Date().getFullYear()} Samuel Zewge. All Rights Reserved.</p>
                </footer>
            </div>
        </>
    );
};

export default Resume;
