"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from './Project'
import { useSectionInView } from '@/lib/hooks'

export const Projects = () => {
    const { ref } = useSectionInView("Projects", 0.5)

    return (
        <section ref={ref} id='projects' className=' scroll-mt-28 ' >
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {projectsData.map((project, i) => (
                    <React.Fragment key={i}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

