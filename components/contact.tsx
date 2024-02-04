'use client';

import React from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

import SectionHeader from './section-header';
import SubmitBtn from './submit-btn';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  return (
    // width: min(100%,38rem/* 608px */); 选择最小值作为宽，以实现响应式。兼容2020+的浏览器。
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 w-[min(100%,38rem)] text-center sm:mb-28'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeader>Contact Me</SectionHeader>
      <p className='-mt-6 text-gray-700 dark:text-white/80'>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:example@gmail.com'>
          example@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
          } else {
            toast.success('发送成功~');
          }
        }}
        className='mt-10 flex flex-col dark:text-black'
      >
        <input
          className='h-14 rounded-lg border border-black/10 px-4 transition-all 
                    dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100'
          name='senderEmail'
          type='email'
          placeholder='Your email'
          required
          maxLength={500}
        />
        <textarea
          className='my-3 h-52 rounded-lg border border-black/10 p-4 transition-all 
                    dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
