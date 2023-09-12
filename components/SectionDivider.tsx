"use client"

import React from 'react'
import { motion as m } from 'framer-motion'

function SectionDivider() {
    return (
        <m.div className='bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
        ></m.div>
    )
}

export default SectionDivider