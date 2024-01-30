'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { projectsData } from '@/lib/data';
import Image from 'next/image';

type Props = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // 这里描述的是 target 与 container 相交的点
    // arr[0]: '0 1' = 'start end' 描述 target 的开头与 container 结尾相交
    // arr[1]: '1.33 1' 描述 target 结尾 × 1.33 的偏移量与 container 结尾相交
    // 所以该例你会看到，页面向上滚动，project 接触到视口才开始放大。
    // 页面向下滚动会提前一段距离，提前开始缩小。
    offset: ['0 1', '1.33 1'],
  });
  // 从范围 0-1 映射到 0.8-1
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className='group mb-3 last:mb-0 sm:mb-8'
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <section
        className='relative max-w-[42rem] overflow-hidden 
                    rounded-lg border border-black/5 bg-gray-100 transition 
                  hover:bg-gray-200 sm:h-[20rem] sm:pr-8 sm:group-even:pl-8
                  dark:bg-white/10 dark:text-white dark:hover:bg-white/20'
      >
        <div
          className='flex h-full flex-col px-5 pb-7 pt-4 
                      sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]'
        >
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
          <ul className='mt-4 flex flex-wrap gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li
                className='rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider 
                          text-white dark:text-white/70'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt='Project I worked on'
          className='absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg
                      shadow-2xl
                      transition 
                      group-even:-left-40
                      group-even:right-[initial]
                      group-hover:-translate-x-3
                      group-hover:translate-y-3
                      group-hover:-rotate-2
                      group-hover:scale-[1.04]
                      group-even:group-hover:translate-x-3
                      group-even:group-hover:translate-y-3 
                      group-even:group-hover:rotate-2 sm:block'
        />
      </section>
    </motion.div>
  );
}
