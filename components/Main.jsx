import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function Main() {
    return (
        <div id='home' className='w-full h-screen bg-gray-50 flex justify-center items-center text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto px-4 flex flex-col justify-center items-center'>
                <p className='uppercase text-sm tracking-widest text-gray-500 mb-2'>
                    Lets build something special together
                </p>
                <h1 className='py-4 text-gray-700 text-4xl font-bold'>
                    Hi, Im <span className='text-[#321]'>Samuel</span>
                </h1>
                <h2 className='py-4 text-gray-700 text-2xl font-semibold'>
                    A Full-Stack Developer
                </h2>
                <p className='py-4 text-gray-800 max-w-[90%] mx-auto text-lg leading-relaxed'>
                    Im an experienced full-stack developer working on specialized projects. Currently, Im focusing on enhancing my backend development skills to build exceptional mobile applications and powerful APIs.
                </p>
                <div className='flex items-center justify-center space-x-6 py-6'>
                    <a href='https://www.linkedin.com/in/samuel-zewge-a47a03271' target='_blank' rel='noopener noreferrer'>
                        <div className='rounded-full shadow-lg text-[#0077b5] shadow-gray-300 p-5 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-[#0077b5] hover:text-white'>
                            <FaLinkedinIn className='text-xl' />
                        </div>
                    </a>
                    <a href='https://github.com/Naynan369' target='_blank' rel='noopener noreferrer'>
                        <div className='rounded-full shadow-lg text-gray-900 shadow-gray-300 p-5 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-900 hover:text-white'>
                            <FaGithub className='text-xl' />
                        </div>
                    </a>
                    <div className='rounded-full shadow-lg text-gray-700 shadow-gray-300 p-5 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-700 hover:text-white'>
                        <AiOutlineMail className='text-xl' />
                    </div>
                    <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
                        <div className='rounded-full shadow-lg text-[#FF0000] shadow-gray-300 p-5 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-[#FF0000] hover:text-white'>
                            <FaYoutube className='text-xl' />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Main;
