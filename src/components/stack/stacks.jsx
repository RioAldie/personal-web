'use client';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import ScrollReveal from '../animations/scrollReveal';
import { skillset } from '@/lib/data';

/* ── Stack data with categories ── */
const stacksRow1 = [
  { imageUrl: 'icon-javascript.svg', title: 'Javascript' },
  { imageUrl: 'icon-typescript.svg', title: 'Typescript' },
  { imageUrl: 'icon-react.svg', title: 'React' },
  { imageUrl: 'icon-nextjs.svg', title: 'NextJs' },
  { imageUrl: 'icon-nodejs.svg', title: 'NodeJs' },
  { imageUrl: 'icon-express.svg', title: 'ExpressJs' },
  { imageUrl: 'icon-cypress.svg', title: 'Cypress' },
];

const stacksRow2 = [
  { imageUrl: 'icon-tailwindcss.svg', title: 'TailwindCSS' },
  { imageUrl: 'mui.svg', title: 'Material UI' },
  { imageUrl: 'icon-sass.svg', title: 'Sass' },
  { imageUrl: 'figma.svg', title: 'Figma' },
  { imageUrl: 'icon-git.svg', title: 'Git' },
  { imageUrl: 'github.svg', title: 'Github' },
  { imageUrl: 'laravel-2.svg', title: 'Laravel' },
];

const skillTabs = [
  { key: 'javascript', label: 'Javascript', icon: 'icon-javascript.svg', color: '#f7df1e' },
  { key: 'react', label: 'React', icon: 'icon-react.svg', color: '#61dafb' },
  { key: 'next', label: 'NextJs', icon: 'icon-nextjs.svg', color: '#ffffff' },
  { key: 'node', label: 'NodeJs', icon: 'icon-nodejs.svg', color: '#68a063' },
  { key: 'mongodb', label: 'MongoDB', icon: 'icon-mongodb.svg', color: '#4db33d' },
  { key: 'figma', label: 'Figma', icon: 'icon-figma.svg', color: '#a259ff' },
  { key: 'laravel', label: 'Laravel', icon: 'laravel-2.svg', color: '#ff2d20' },
  {key: 'postgree', label: 'Postgree', icon: 'icon-postgree.svg', color: '#61a4fbff'},
  {key: 'adonisjs', label: 'AdonisJS', icon: 'icon-adonis.svg', color: '#5A45FF'},
  {key: 'redis', label: 'Redis', icon: 'icon-redis.svg', color: '#dc2718'},
  {key: 'docker', label: 'Docker', icon: 'icon-docker.svg', color: '#23C2EE'},
  {key: 'golang', label: 'Golang', icon: 'icon-golang.svg', color: '#00acd7'},
];

/* ── Marquee Row ── */
const MarqueeRow = ({ items, direction = 'left', speed = 30 }) => {
  const duplicated = [...items, ...items, ...items];

  return (
    <div className="marquee-container overflow-hidden w-full">
      <div
        className={`marquee-track flex gap-8 items-center ${direction === 'left' ? 'marquee-left' : 'marquee-right'}`}
        style={{ '--marquee-speed': `${speed}s` }}
      >
        {duplicated.map((item, i) => (
          <div
            key={i}
            className="marquee-item flex-shrink-0 flex flex-col items-center justify-center gap-2 w-28 h-28 rounded-xl border border-neutral-800/50 bg-neutral-900/40 backdrop-blur-sm hover:border-yellow-400/50 hover:bg-neutral-800/60 transition-all duration-300 cursor-pointer group"
          >
            <div className="relative">
              <Image
                alt={item.title}
                src={`/images/stacks/${item.imageUrl}`}
                width={44}
                height={44}
                className="group-hover:scale-110 transition-transform duration-300"
                sizes="44px"
              />
              <div className="absolute inset-0 rounded-full bg-yellow-400/0 group-hover:bg-yellow-400/10 blur-xl transition-all duration-500" />
            </div>
            <span className="text-gray-400 text-xs font-medium group-hover:text-yellow-300 transition-colors duration-300">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Animated skill chip ── */
const SkillChip = ({ text, index, color }) => {
  return (
    <div
      className="skill-chip group relative overflow-hidden"
      style={{
        animationDelay: `${index * 80}ms`,
        '--chip-color': color,
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at center, ${color}15, transparent 70%)` }}
      />
      <div className="relative flex items-center gap-3 px-5 py-3">
        <div
          className="w-1.5 h-1.5 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300"
          style={{ backgroundColor: color }}
        />
        <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
          {text}
        </span>
      </div>
    </div>
  );
};

/* ── Skill Detail Panel ── */
const SkillDetailPanel = ({ activeTab, color }) => {
  const skillMap = {
    javascript: skillset.javascript,
    react: skillset.react,
    next: skillset.NextJs,
    node: skillset.NodeJs,
    mongodb: skillset.mongodb,
    figma: skillset.figma,
    laravel: skillset.laravel,
    postgree: skillset.postgree,
    adonisjs: skillset.adonisjs,
    redis: skillset.redis,
    docker: skillset.docker,
    golang: skillset.golang,
  };

  const skills = skillMap[activeTab] || [];
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, [activeTab]);

  return (
    <div className={`skill-panel-grid transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
      {skills.map((skill, i) => (
        <SkillChip key={`${activeTab}-${i}`} text={skill} index={i} color={color} />
      ))}
    </div>
  );
};

/* ── Main Stacks Component ── */
const Stacks = () => {
  const [activeTab, setActiveTab] = useState('javascript');
  const activeTabData = skillTabs.find(t => t.key === activeTab);

  return (
    <ScrollReveal animation="fadeUp" duration={600}>
      <div
        id="skills"
        className="section-skills gradient-border-top gradient-border-bottom py-14 px-6 flex flex-col gap-12 justify-between w-full"
      >
        {/* Ambient orbs */}
        <div className="glow-orb glow-orb-gold animate-float-slower" style={{ width: '350px', height: '350px', top: '20%', right: '-10%' }} />
        <div className="glow-orb glow-orb-gold animate-float-slow" style={{ width: '250px', height: '250px', bottom: '10%', left: '-5%' }} />

        {/* Section Header */}
        <ScrollReveal animation="fadeDown" className="text-white w-full gap-3 flex justify-center items-center flex-col relative-content">
          <h2 className="section-badge w-24 h-10 rounded-full text-center flex justify-center items-center text-sm font-medium">
            Skills
          </h2>
          <p className="text-center text-gray-400 max-w-md">
            The skills, tools and technologies I am really good at
          </p>
        </ScrollReveal>

        {/* ── Infinite Marquee ── */}
        <ScrollReveal animation="fadeIn" delay={200} className="relative-content flex flex-col gap-4">
          <MarqueeRow items={stacksRow1} direction="left" speed={35} />
          <MarqueeRow items={stacksRow2} direction="right" speed={40} />
        </ScrollReveal>

        {/* ── Interactive Skill Explorer ── */}
        <ScrollReveal animation="fadeUp" delay={300} className="relative-content mt-8">
          <div className="skill-explorer rounded-2xl border border-neutral-800/50 bg-neutral-900/30 backdrop-blur-md overflow-hidden">
            {/* Explorer Header */}
            <div className="px-6 pt-6 pb-4 border-b border-neutral-800/50">
              <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                Click to explore my expertise
              </p>

              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-2">
                {skillTabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`skill-tab flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.key
                        ? 'bg-neutral-800 text-white border border-neutral-700 shadow-lg'
                        : 'text-gray-500 hover:text-gray-300 hover:bg-neutral-800/40 border border-transparent'
                    }`}
                    style={activeTab === tab.key ? { boxShadow: `0 0 20px ${tab.color}15` } : {}}
                  >
                    <Image
                      src={`/images/stacks/${tab.icon}`}
                      alt={tab.label}
                      width={18}
                      height={18}
                      className={`transition-all duration-300 ${activeTab === tab.key ? 'scale-110' : 'opacity-50 grayscale'}`}
                      sizes="18px"
                    />
                    <span className="hidden md:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Skill Content */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${activeTabData?.color}15` }}
                >
                  <Image
                    src={`/images/stacks/${activeTabData?.icon}`}
                    alt={activeTabData?.label || ''}
                    width={24}
                    height={24}
                    sizes="24px"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{activeTabData?.label}</h3>
                  <p className="text-gray-500 text-xs">
                    {(skillset[activeTab === 'next' ? 'NextJs' : activeTab === 'node' ? 'NodeJs' : activeTab] || []).length} competencies
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full transition-all duration-500"
                      style={{
                        backgroundColor: i < 4 ? activeTabData?.color : 'rgb(64, 64, 64)',
                        opacity: i < 4 ? 0.8 : 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>
              <SkillDetailPanel activeTab={activeTab} color={activeTabData?.color || '#eab308'} />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </ScrollReveal>
  );
};

export default Stacks;
