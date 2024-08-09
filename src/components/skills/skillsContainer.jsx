'use client';
import { useEffect, useState } from 'react';
import SkillsBar from './skillsBar';
import { skillset } from '@/lib/data';
const content = {
  js: ['react', 'dom', 'node'],
  css: ['tailwind', 'boostrap', 'figma'],
};
const SkillsContainer = () => {
  const [contentActive, setContentActive] = useState('javascript');
  const [skill, setSkill] = useState([]);
  const {
    javascript,
    react,
    mongodb,
    NextJs,
    NodeJs,
    figma,
    laravel,
  } = skillset;
  useEffect(() => {
    if (contentActive === 'javascript') {
      setSkill(javascript);
    }
    if (contentActive === 'mongodb') {
      setSkill(mongodb);
    }
    if (contentActive === 'react') {
      setSkill(react);
    }
    if (contentActive === 'next') {
      setSkill(NextJs);
    }
    if (contentActive === 'node') {
      setSkill(NodeJs);
    }
    if (contentActive === 'figma') {
      setSkill(figma);
    }
    if (contentActive === 'laravel') {
      setSkill(laravel);
    }
  }, [contentActive]);
  return (
    <div className="flex flex-row mt-10 h-fit py-14 justify-center border-t border-neutral-800 w-full gap-4">
      <SkillsBar
        setContentActive={setContentActive}
        contentActive={contentActive}
      />

      <div className="w-3/4   h-72  text-white flex justify-center flex-row flex-wrap gap-5 items-start">
        {skill.map((item, i) => {
          return (
            <p
              className="w-[400px] h-16 p-2 border-b border-b-neutral-800 hover:border-b-yellow-400 cursor-pointer transition-opacity "
              key={i}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsContainer;
