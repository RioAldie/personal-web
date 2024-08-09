import Image from 'next/image';
import React from 'react';
import SkillsContainer from '../skills/skillsContainer';

const Stack = ({ imageUrl, title }) => {
  return (
    <div className="flex justify-between cursor-pointer items-center border-b border-neutral-950 hover:border-b hover:border-yellow-300 w-24 h-24 flex-col">
      <Image
        alt="l"
        src={`/images/stacks/${imageUrl}`}
        width={60}
        height={70}
      />
      <p className="text-white w-full text-center">{title}</p>
    </div>
  );
};
const Stacks = () => {
  return (
    <div
      id="skills"
      className="flex flex-col p-2 md:px-36 gap-10 justify-between bg-neutral-950 w-full">
      <div className="text-white w-full p-3 gap-3 flex justify-center items-center flex-col">
        <h2 className="w-24 h-10 rounded-full bg-neutral-800 text-center flex justify-center items-center">
          Skills
        </h2>
        <p className="text-center md:text-start">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="mt-10 flex gap-20 flex-row flex-wrap justify-center items-center">
        <Stack
          imageUrl={'icon-javascript.svg'}
          title={'Javascript'}
        />
        <Stack
          imageUrl={'icon-typescript.svg'}
          title={'Typescript'}
        />
        <Stack imageUrl={'icon-react.svg'} title={'React'} />
        <Stack imageUrl={'icon-nextjs.svg'} title={'NextJs'} />
        <Stack imageUrl={'icon-nodejs.svg'} title={'NodeJs'} />
        <Stack imageUrl={'icon-express.svg'} title={'ExpressJs'} />
        <Stack imageUrl={'icon-cypress.svg'} title={'Cypress'} />
        <Stack
          imageUrl={'icon-tailwindcss.svg'}
          title={'TailwindCSS'}
        />
        <Stack imageUrl={'mui.svg'} title={'Material UI'} />
        <Stack imageUrl={'icon-sass.svg'} title={'Sass'} />
        <Stack imageUrl={'figma.svg'} title={'Figma'} />
        <Stack imageUrl={'icon-git.svg'} title={'Git'} />
        <Stack imageUrl={'github.svg'} title={'Github'} />
        <Stack imageUrl={'laravel-2.svg'} title={'Laravel'} />
      </div>
      <SkillsContainer />
    </div>
  );
};

export default Stacks;
