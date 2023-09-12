"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { useScroll, useTransform } from 'framer-motion'
import { motion as m } from "framer-motion"
import { projectsData } from '@/lib/data'

type ProjectProps = (typeof projectsData)[number]

function Project({ title, description, tags, imageUrl }: ProjectProps) {

    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (
        <m.div ref={ref} style={{
            scale: scaleProgress,
            opacity: opacityProgress
        }}
            className='group mb-3 sm:m-8 last:mb-0'
        >
            <section className=' bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[22rem] even:pl-8 hover:bg-gray-200 transition rounded-lg dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
                <div className='pt-4 py-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[20rem]'>
                    <h3 className=' text-2xl font-semibold '>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                        {tags.map((tag, i) => (
                            <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70' key={i}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <Image src={imageUrl} alt={title} quality={90} className=' absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-xl transition group-hover:scale-105 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2  group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2  group-even:-right-[initial] group-even:-left-40' />
            </section>
        </m.div>
    )
}

export default Project