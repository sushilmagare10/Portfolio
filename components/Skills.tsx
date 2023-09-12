"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion as m } from 'framer-motion'
import Image from 'next/image'

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.06 * i,
        }
    })
}

function Skills() {

    const { ref } = useSectionInView("Skills")

    return (
        <section className='scroll-mt-28 mt-32 mb-28'
            id='skills'
            ref={ref}
        >
            <SectionHeading>Skills</SectionHeading>
            <div className='flex flex-wrap max-w-[46rem] justify-center items-center gap-1 overflow-hidden  '
            >
                {skillsData.map((skill, i) => (
                    <React.Fragment key={i}>
                        <m.section className='flex flex-col justify-center items-center text-center p-3'
                            key={i}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true
                            }}
                            custom={i}
                        >
                            <div className='flex items-center justify-center w-24 h-24 p-4 mx-2 my-4 border border-black/5 rounded-full bg-gray-50 object-cover dark:bg-white/5'>
                                <Image
                                    src={skill.iconImg}
                                    alt={skill.name}

                                />
                            </div>
                            <div className='text-center leading-[1rem] mt-4'>
                                {skill.name}
                            </div>
                        </m.section>
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

export default Skills