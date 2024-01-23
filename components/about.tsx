'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    // scroll-mt-28 是 scroll-margin-top: 7rem/* 112px */;
    // 在本项目点击导航栏需要滚动到对应区域，默认会对齐视口顶部，
    // 但是会被 header 遮挡，用该属性可以给一个偏移距离。
    <motion.section
      id='about'
      className='mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <h2 className='mb-8 text-3xl font-medium'>About me</h2>
      <p className='mb-3'>
        {' '}
        After graduating with a degree in <span className='font-medium'>Accounting</span>, I decided
        to pursue my passion for programming. I enrolled in a coding bootcamp and learned{' '}
        <span className='font-medium'>full-stack web development</span>.{' '}
        <span className='italic'>My favorite part of programming</span> is the problem-solving
        aspect. I <span className='underline'>love</span> the feeling of finally figuring out a
        solution to a problem. My core stack is{' '}
        <span className='font-medium'>React, Next.js, Node.js, and MongoDB</span>. I am also
        familiar with TypeScript and Prisma. I am always looking to learn new technologies. I am
        currently looking for a <span className='font-medium'>full-time position</span> as a
        software developer.
      </p>
      <p>
        {' '}
        <span className='italic'>When I&apos;m not coding</span>, I enjoy playing video games,
        watching movies, and playing with my dog. I also enjoy{' '}
        <span className='font-medium'>learning new things</span>. I am currently learning about{' '}
        <span className='font-medium'>history and philosophy</span>. I&apos;m also learning how to
        play the guitar.
      </p>
    </motion.section>
  );
}
