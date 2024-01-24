import React from 'react';
import SectionHeader from './section-header';
import Project from './project';
import { projectsData } from '@/lib/data';

export default function Projects() {
  return (
    <section id='projects' className='mb-28 scroll-mt-28'>
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
