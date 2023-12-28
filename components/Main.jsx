import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebook, FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>Lets build something special together</p>
                    <h1 className='py-4 text-gray-700'>Hi, Im <span className='text-[#321]'>Samuel</span></h1>
                    <h1 className='py-4 text-gray-700'>A Full-Stack-Developer</h1>
                    <p className='py-4 text-gray-900 max-w-[70%] mx-auto'>Im an experienced full stack developer working on some special projects, currently im focusing on developing my skills with backend-developement to build an amazing mobile applications besides to build an api</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg text-[#000fff] shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <a href='https://www.linkedin.com/in/samuel-zewge-a47a03271'>
                                <FaLinkedinIn />
                            </a>
                        </div>
                        <div className='rounded-full shadow-lg text-[#000000] shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <a href='https://github.com/Naynan369'>
                                <FaGithub />
                            </a>
                        </div>
                        <div className='rounded-full shadow-lg text-[#000fff] shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg text-[#ff000d] shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaYoutube />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main