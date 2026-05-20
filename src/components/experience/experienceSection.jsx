'use client';
import React from 'react';
import Image from 'next/image';
import { experiences } from '@/lib/data';
import ScrollReveal from '../animations/scrollReveal';

const ExperienceCard = ({ exp, isEven, isLast }) => {
  return (
    <div className="relative flex w-full md:w-[90%] mx-auto z-10 group">
      {/* Vertical Timeline Line */}
      {!isLast && (
        <div className="hidden md:block absolute top-[50px] left-[39px] bottom-[-20%] w-[2px] bg-gradient-to-b from-neutral-700 via-neutral-800 to-transparent" />
      )}

      {/* Floating Timeline Bullet */}
      <div className="hidden md:flex flex-col items-center mt-2 shrink-0 w-20 relative z-20">
        <div className="w-[80px] h-[80px] rounded-full p-[2px] bg-gradient-to-br from-yellow-400/80 to-teal-500/80 group-hover:from-yellow-300 group-hover:to-teal-400 transition-colors duration-500 shadow-xl overflow-hidden shrink-0">
          <div className="w-full h-full bg-neutral-900 rounded-full flex items-center justify-center p-2 relative overflow-hidden backdrop-blur-sm">
            <Image
              src={exp.logo}
              alt={exp.company}
              width={48}
              height={48}
              className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Content Card */}
      <div className="w-full ml-0 md:ml-8 mt-2 mb-12 flex-1">
        <div className="card-glow bg-neutral-900/60 backdrop-blur-md rounded-2xl border border-neutral-800 shadow-xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500 relative">
          
          {/* Subtle gradient splash */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-400/10 transition-colors duration-700 pointer-events-none" />

          <div className="p-6 md:p-8 relative z-10">
            {/* Header: Mobile Logo + Title + Duration */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
              <div className="flex gap-4 items-center">
                {/* Mobile Logo Fallback */}
                <div className="md:hidden w-14 h-14 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center overflow-hidden shrink-0">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-teal-400 font-medium">@{exp.company}</span>
                  </div>
                </div>
              </div>
              <span className="shrink-0 px-4 py-1.5 rounded-full bg-neutral-800 border border-neutral-700 text-gray-300 text-sm font-medium whitespace-nowrap shadow-inner">
                {exp.duration}
              </span>
            </div>

            {/* Separator line */}
            <div className="h-[1px] w-full bg-gradient-to-r from-neutral-800 via-neutral-700 to-transparent mb-6" />

            {/* Responsibilities list */}
            <ul className="flex flex-col gap-3">
              {exp.jobdesk.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-400">
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-yellow-500/80 group-hover:bg-yellow-400 group-hover:shadow-[0_0_8px_rgba(250,204,21,0.6)] transition-all duration-300" />
                  <span className="leading-relaxed text-[15px] group-hover:text-gray-300 transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <ScrollReveal animation="fadeUp" duration={600}>
      <div
        id="experience"
        className="section-experience gradient-border-top gradient-border-bottom rounded-2xl py-16 px-4 md:px-6 flex flex-col gap-12 justify-between w-full relative overflow-hidden"
      >
        {/* Ambient orbs */}
        <div className="glow-orb glow-orb-purple animate-float-slow" style={{ width: '400px', height: '400px', top: '10%', right: '-10%' }} />
        <div className="glow-orb glow-orb-blue animate-float-slower" style={{ width: '300px', height: '300px', bottom: '20%', left: '-5%' }} />

        {/* Section Header */}
        <ScrollReveal animation="fadeDown" className="text-white w-full flex flex-col items-center gap-4 relative-content z-10 mb-8">
          <h2 className="section-badge w-fit px-8 h-10 rounded-full text-center flex justify-center items-center text-sm font-medium border border-neutral-700/50 bg-neutral-900/60 backdrop-blur-md">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-center max-w-lg mb-4">
            A track record of crafting scalable applications, solving complex problems, and driving projects perfectly.
          </p>
        </ScrollReveal>

        {/* Experience Timeline */}
        <div className="w-full relative-content z-10 flex flex-col pt-4">
          {experiences.map((exp, i) => (
            <ScrollReveal
              key={exp.id}
              animation="fadeUp"
              delay={i * 150}
              duration={600}
            >
              <ExperienceCard
                exp={exp}
                isEven={i % 2 === 0}
                isLast={i === experiences.length - 1}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ExperienceSection;
