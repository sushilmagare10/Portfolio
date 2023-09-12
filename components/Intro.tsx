"use client"

import Image from 'next/image'
import React from 'react'
import { motion as m } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { useSectionInView } from '@/lib/hooks'
import { useActiveLinkContext } from '@/context/ActiveLinkContext'

function Intro() {

    const { ref } = useSectionInView("Home", 0.5)
    const { setActiveLink, setTimeOfLastLink } = useActiveLinkContext()

    return (
        <section ref={ref} id='home' className=' mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
            <div className='flex items-center justify-center'>
                <div className=' relative'>
                    <m.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'tween',
                            duration: 0.2
                        }}
                    >
                        <Image

                            src="https://m.media-amazon.com/images/M/MV5BMDkwZmEyYzktMTI1NS00NDBjLThhZTctMGRjMmIyYjFhNWYyXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_QL75_UY281_CR155,0,190,281_.jpg"
                            alt='Profile image'
                            width='192'
                            height='192'
                            quality='95'
                            priority={true}
                            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                        />
                    </m.div>
                    <m.span className=' absolute text-4xl bottom-0 right-0'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7

                        }}
                    >
                        👋
                    </m.span>
                </div>
            </div>
            <m.h1 className='mx-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className='font-bold'>Hello, I'm Sushil.</span> I'm a {' '}
                <span className='font-bold'>Web Developer.</span> I enjoy building{' '}
                <span className='italic'>sites & apps.</span> My Focus is {' '}
                <span className='underline'>React (NextJS)</span>
            </m.h1>
            <m.div className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium mt-5 cursor-pointer'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1
                }}
            >
                <Link
                    href='#contact'
                    onClick={() => {
                        setActiveLink('Contact')
                        setTimeOfLastLink(Date.now())
                    }}
                    className='group bg-gray-900 text-white px-7 py-3 rounded-3xl flex items-center justify-center gap-2 outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition'
                >
                    Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>
                <a className='group bg-white text-black px-7 py-3 rounded-3xl flex items-center justify-center gap-2 outline-none focus:scale-105 hover:scale-105  active:scale-105 transition border border-black/10 dark:bg-white/10'
                    href='/sushil_magare_resume.pdf'
                    download
                >
                    Download Resume <HiDownload className="opacity-60 group-hover:translate-y-1" />
                </a>
                <a className='bg-white p-4 rounded-full text-gray-700  focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10  dark:bg-white/10 dark:text-white/60' href='https://www.linkedin.com/in/sushil-magare-7a3bba252/' target='_blank'><BsLinkedin /></a>
                <a className='bg-white p-4 rounded-full  text-gray-700  focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10  dark:bg-white/10 dark:text-white/60' href='https://github.com/sushilmagare10' target='_blank'><BsGithub /></a>
            </m.div>
        </section>
    )
}

export default Intro