"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { motion as m } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

function About() {
    const { ref } = useSectionInView("About")

    return (
        <m.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.175
            }}
            id='about'
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                I have compeleted my graduation in{" "}
                <span className="font-medium">Information Technology</span>, And I decided to pursue my
                interest for web development. I have compeleted bootcamp course and learned{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                    React, Next.js, Node.js, and MongoDB
                </span>
                . I am currently learning TypeScript. I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing
                video games, watching movies & animeI also enjoy{" "}
                <span className="font-medium">learning new things</span>.
            </p>
        </m.section>
    )
}

export default About