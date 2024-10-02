import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

function Main() {
    return (
        <div id='home' className='w-full h-screen bg-gray-50 flex justify-center items-center text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto px-4 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-500'>
                        Lets build something special together
                    </p>
                    <h1 className='py-4 text-gray-700'>
                        Hi, Im <span className='text-[#321]'>Samuel</span>
                    </h1>
                    <h2 className='py-4 text-gray-700 text-xl'>
                        A Full-Stack Developer
                    </h2>
                    <p className='py-4 text-gray-800 max-w-[75%] mx-auto text-xl leading-relaxed'>
                        Im an experienced full-stack developer working on specialized projects. Currently, Im focusing on enhancing my backend development skills to build exceptional mobile applications and powerful APIs.
                    </p>
                    <div className='flex items-center justify-center space-x-6 py-6'>
                        <a href='https://www.linkedin.com/in/samuel-zewge-a47a03271' target='_blank' rel='noopener noreferrer'>
                            <div className='rounded-full shadow-md text-[#0077b5] shadow-gray-300 p-5 cursor-pointer hover:scale-110 hover:bg-[#0077b5] hover:text-white transition-all duration-300 ease-in-out'>
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a href='https://github.com/Naynan369' target='_blank' rel='noopener noreferrer'>
                            <div className='rounded-full shadow-md text-gray-900 shadow-gray-300 p-5 cursor-pointer hover:scale-110 hover:bg-gray-900 hover:text-white transition-all duration-300 ease-in-out'>
                                <FaGithub />
                            </div>
                        </a>
                        <div className='rounded-full shadow-md text-gray-700 shadow-gray-300 p-5 cursor-pointer hover:scale-110 hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out'>
                            <AiOutlineMail />
                        </div>
                        <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
                            <div className='rounded-full shadow-md text-[#FF0000] shadow-gray-300 p-5 cursor-pointer hover:scale-110 hover:bg-[#FF0000] hover:text-white transition-all duration-300 ease-in-out'>
                                <FaYoutube />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
