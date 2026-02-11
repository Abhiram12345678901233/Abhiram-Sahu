
import React from 'react';
import { PROJECTS } from '../constants';
import { ProjectCard } from './ProjectCard';

export const Works: React.FC = () => {
  return (
    <section id="works" className="py-24 px-6 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-widest">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">My Projects</h3>
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed">
            I have worked on end-to-end data analysis projects, ranging from data cleaning and exploration to visualization and actionable insights showcasing my ability to turn raw data into meaningful stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
