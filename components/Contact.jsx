import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-2xl tracking-widest uppercase text-orange-500'>Contact</p>
                <h2>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" alt="" />
                            </div>
                            <div>
                                <h2 className='py-2'>Name here</h2>
                                <p>Full-stack Developer</p>
                                <p className='py-4'>Im availaible for freelance or full-time position contact me and lets talk.</p>
                            </div>

                            <div>
                                <p className='pt-8'>Connect With Me</p>
                                <div className='flex items-center justify-between py-4 '>
                                    <div className='rounded-full shadow-lg text-[#000fff] shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <a href='https://www.linkedin.com/in/samuel-zewge-a47a03271'>
                                            <FaLinkedinIn />
                                        </a>
                                    </div>
                                    <div className='rounded-full shadow-lg text-[#000fff] shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <a href='https://github.com/Naynan369'>
                                            <FaGithub />
                                        </a>
                                    </div>
                                    <div className='rounded-full shadow-lg text-[#000fff] shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <AiOutlineMail />
                                    </div>
                                    <div className='rounded-full shadow-lg text-[#000fff] shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaYoutube />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                    </div>

                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10 '></textarea>
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg text-[#000fff] shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Contact