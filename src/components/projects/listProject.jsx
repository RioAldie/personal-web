'use client';
import React from 'react';
import CardProject from './cardProject';
import { projects } from '@/lib/data';
import ScrollReveal from '../animations/scrollReveal';

const ListProject = () => {
  return (
    <ScrollReveal animation="fadeUp" duration={600}>
      <div
        id="projects"
        className="section-projects gradient-border-top rounded-2xl py-16 px-6 flex flex-col gap-12 justify-between w-full">
        {/* Ambient orbs */}
        <div className="glow-orb glow-orb-gold animate-float-slow animate-pulse-glow" style={{ width: '280px', height: '280px', top: '30%', left: '-8%' }} />
        <div className="glow-orb glow-orb-purple animate-float-slower" style={{ width: '200px', height: '200px', bottom: '10%', right: '-5%' }} />

        {/* Section Header */}
        <ScrollReveal animation="fadeDown" className="text-white w-full flex flex-col items-center gap-4 relative-content z-10">
          <h2 className="section-badge w-fit px-8 h-10 rounded-full text-center flex justify-center items-center text-sm font-medium border border-neutral-700/50 bg-neutral-900/60 backdrop-blur-md">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-center max-w-lg mb-4">
            A selection of my recent work focusing on full-stack development, interactive UI, and complex problem solving.
          </p>
        </ScrollReveal>

        {/* Projects List */}
        <div className="flex flex-col mt-8 pt-12 border-t border-neutral-800/50 w-full gap-10 relative-content z-10">
          {projects.map((project, i) => {
            return (
              <ScrollReveal
                key={i}
                animation="fadeUp"
                delay={i * 150}
                duration={600}
              >
                <CardProject
                  id={project.id}
                  name={project.name}
                  image={project.image}
                  about={project.about}
                  stacks={project.stacks}
                  url={project.url}
                />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ListProject;
