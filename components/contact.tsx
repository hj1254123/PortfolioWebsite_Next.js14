'use client';

import React from 'react';
import SectionHeader from './section-header';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

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
        action={(formData) => {
          console.log(formData.get('senderEmail'));
          console.log(formData.get('message'));
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
        <button
          className='group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full 
                    bg-gray-900 text-white outline-none transition-all hover:scale-110 
                    hover:bg-gray-950 active:scale-105 disabled:scale-100 
                      disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10'
          type='submit'
        >
          Submit
          <FaPaperPlane
            className='text-xs opacity-70 transition-all 
                        group-hover:-translate-y-1 group-hover:translate-x-1'
          />
        </button>
      </form>
    </motion.section>
  );
}
