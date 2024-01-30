'use client';

import React from 'react';

import SectionHeader from './section-header';
import Project from './project';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.3);

  return (
    <section ref={ref} id='projects' className='mb-28 scroll-mt-28'>
      <SectionHeader>My Project</SectionHeader>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
