'use client';

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiencesData } from '@/lib/data';
import SectionHeader from './section-header';
import { useSectionInView } from '@/lib/hooks';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@/context/theme-context';

export default function Experience() {
  const { ref } = useSectionInView('Experience');
  const { theme } = useTheme();
  // 当前版本 react-vertical-timeline-component 与 next.14 存在兼容问题，这里采用该方式修复。也可降级到 next.js 13.4.8
  const { ref: ref2, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <section ref={ref} id='experience' className='mb-28 scroll-mt-28 sm:mb-40'>
      <SectionHeader>My experience</SectionHeader>
      <div ref={ref2}>
        <VerticalTimeline lineColor=''>
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={inView}
                contentStyle={{
                  background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === 'light'
                      ? '0.4rem solid #9ca3af'
                      : '0.4rem solid rgba(255, 255, 255, 0.5)',
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                  fontSize: '1.5rem',
                }}
              >
                <h3 className='font-semibold capitalize'>{item.title}</h3>
                <p className='!mt-0 font-normal'>{item.location}</p>
                <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
