import React from 'react'
import WeatherImg from '../public/assets/projects/Wather.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
import Image from 'next/image'
const Weather = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={WeatherImg} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Weather app</h2>
                    <p>Javascript / Weather</p>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>This Weather app made by using Javascript and Weather api.</p>
                    <a
                        href='https://naynan369.github.io/weather-app/'
                    >
                        <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                    </a>
                    <a href="https://github.com/Naynan369/weather-app">
                        <button className='px-8 py-2 mt-4 '>Code</button>
                    </a>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' />HTML5
                            </p>
                        </div>
                        <div>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' />CSS3
                            </p>
                        </div>
                        <div>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' />JAVASCRIPT
                            </p>
                        </div>
                        <div>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' />Weather API
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <Link href='/#projects'>
                <p className='underline cursor-pointer'>Back</p>
            </Link>
        </div>
    )
}

export default Weather