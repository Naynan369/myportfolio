import Image from 'next/image';
import Link from 'next/link';
import NavLogo from '../public/assets/logo.png';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter();

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
                setNavBg('#ffffff'); // Change background color when scrolled
                setLinkColor('#1f2937'); // Change link color
            } else {
                setShadow(false);
                setNavBg('#ecf0f3'); // Original background color
                setLinkColor('#1f2937'); // Original link color
            }
        };
        
        window.addEventListener('scroll', handleShadow);
        
        return () => {
            window.removeEventListener('scroll', handleShadow);
        };
    }, []);

    return (
        <div
            style={{ backgroundColor: navBg }}
            className={`fixed w-full h-20 ${shadow ? 'shadow-xl' : ''} z-50 transition-all duration-300`}
        >
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'>
                    <Image src={NavLogo} alt='Logo' width={80} height={50} className="cursor-pointer" />
                </Link>
                <div>
                    <ul style={{ color: linkColor }} className='hidden md:flex'>
                        {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
                            <li key={item} className='ml-10 text-sm uppercase hover:border-b border-transparent hover:border-b-[#5651e5]'>
                                <Link href={`/${item === 'Home' ? '' : item.toLowerCase()}`}>{item}</Link>
                            </li>
                        ))}
                    </ul>
                    <div onClick={handleNav} className='md:hidden cursor-pointer text-gray-700'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div className='flex w-full items-center justify-between'>
                        <Link href='/'>
                            <Image src={NavLogo} width={80} height={50} alt='Logo' />
                        </Link>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Lets build something special together!</p>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
                                <Link key={item} href={`/${item === 'Home' ? '' : item.toLowerCase()}`}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>{item}</li>
                                </Link>
                            ))}
                        </ul>
                        <div className='pt-5'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Lets connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaYoutube />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
