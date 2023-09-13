"use client"

import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import SectionHeading from './SectionHeading'
import { motion as m } from 'framer-motion'
import { sendEmail } from '@/actions/SendEmail'
import SubmitButton from './SubmitButton'
import { toast } from "react-toastify";

function Contact() {

    const { ref } = useSectionInView('Contact')

    return (
        <m.section id='contact' ref={ref} className='scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)]'
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            viewport={{
                once: true
            }}
        >
            <SectionHeading>Contact Me</SectionHeading>
            <p className='text-gray-700 -mt-6 dark:text-white/30'>Please contact me directly at <a className='underline cursor-pointer' href='mailto:sushilmagare10@gmail.com'>sushilmagare10@gmail.com</a> or
                {" "}
                through this form
            </p>
            <form className='mt-10 flex flex-col gap-3'
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);
                    if (error) {
                        toast.error(error);
                        return;
                    }
                    toast.success("Email sent successfully!", {
                        position: 'top-right'
                    });
                }}


            >
                <input
                    name='senderEmail'
                    type='email'
                    placeholder='Your Email'
                    required
                    maxLength={500}
                    className='h-14 rounded-lg border border-black/10 p-4 dark:outline-none dark:text-gray-700' />
                <textarea
                    name='message'
                    placeholder='Your Message...'
                    required
                    maxLength={5000}
                    className='h-52 rounded-lg border border-black/10 p-4 dark:outline-none dark:text-gray-700' />
                <SubmitButton />
            </form>
        </m.section>
    )
}

export default Contact