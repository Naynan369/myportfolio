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
    const [navBg, setNavBg] = useState('rgba(236, 240, 243, 0.8)');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter();

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
                setNavBg('#ffffff');
                setLinkColor('#1f2937');
            } else {
                setShadow(false);
                setNavBg('rgba(236, 240, 243, 0.8)');
                setLinkColor('#1f2937');
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
            className={`fixed w-full h-20 ${shadow ? 'shadow-lg' : 'shadow-none'} z-50 transition-all duration-300`}
        >
            <div className='flex justify-between items-center w-full h-full px-4 md:px-16'>
                <Link href='/'>
                    <Image
                        src={NavLogo}
                        alt='Logo'
                        width={80}
                        height={50}
                        className="cursor-pointer transition-transform duration-300 hover:scale-110"
                    />
                </Link>
                <div>
                    <ul style={{ color: linkColor }} className='hidden md:flex space-x-10'>
                        {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
                            <li key={item} className='relative text-sm uppercase transition duration-300 ease-in-out group'>
                                <Link href={`/${item === 'Home' ? '' : `#${item.toLowerCase()}`}`}>{item}</Link>
                                <span className='absolute left-0 -bottom-1 h-0.5 bg-[#5651e5] transition-all duration-300 group-hover:w-full w-0' />
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
                        <p className='w-[85%] md:w-[90%] py-4'>Let's build something special together!</p>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
                                <Link key={item} href={`/${item === 'Home' ? '' : `#${item.toLowerCase()}`}`}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm transition duration-300 ease-in-out hover:text-[#5651e5]'>{item}</li>
                                </Link>
                            ))}
                        </ul>
                        <div className='pt-5'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Let's connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                {[
                                    { icon: <FaLinkedinIn />, href: '#', color: '#0e76a8' },
                                    { icon: <FaGithub />, href: '#', color: '#171515' },
                                    { icon: <AiOutlineMail />, href: '#', color: '#D44638' },
                                    { icon: <FaYoutube />, href: '#', color: '#FF0000' }
                                ].map(({ icon, href, color }, index) => (
                                    <a key={index} href={href} className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer transition duration-300 hover:scale-105' style={{ color }}>
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
