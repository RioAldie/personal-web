import React from 'react';
import CardProject from './cardProject';
import { projects } from '@/lib/data';

const ListProject = () => {
  return (
    <div
      id="projects"
      className="mt-56 flex flex-col px-2 md:px-36 gap-10 justify-between bg-neutral-950 w-full">
      <div className="text-white w-full p-3 gap-3 flex justify-center items-center flex-col">
        <h2 className="w-24 h-10 rounded-full bg-neutral-800 text-center flex justify-center items-center">
          Project
        </h2>
        <p>These are the projects I have completed</p>

        <div className="flex flex-row flex-wrap mt-10 h-fit py-14 justify-center border-t border-neutral-800 w-full gap-4">
          {projects.map((project, i) => {
            return (
              <CardProject
                key={i}
                name={project.name}
                image={project.image}
                about={project.about}
                stacks={project.stacks}
                url={project.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListProject;
