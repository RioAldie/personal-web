import Image from 'next/image';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import Sidebar from '@/components/sidebar';
import SkillsContainer from '@/components/skills/skillsContainer';
import Stacks from '@/components/stack/stacks';
import ListProject from '@/components/projects/listProject';
import CertificateContainer from '@/components/certificates/container';
import ContactContainer from '@/components/contacts/container';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-screen   flex flex-col gap-40 ">
      <div
        id="about"
        className="flex flex-col md:flex-row mt-20 md:p-36 p-2 justify-between gap-11 items-center">
        <div className="md:w-2/4 w-full flex flex-col gap-5 p-4 md:p-0">
          <Image
            src={'/icon/mahkota.svg'}
            width={20}
            height={20}
            alt="mahkota"
          />
          <h2 className="text-4xl text-yellow-300 font-semibold">
            Hi, Im Rio Aldi Erwanto
          </h2>
          <p className="text-5xl text-gray-100 font-bold">
            Fullstack Javascript Developer
          </p>
          <p className="text-gray-300">
            I am a fresh graduate of informatics engineering,
            passionate about web development, particularly in
            full-stack web development. I have honed my technical
            skills through online platforms like Dicoding and Skilvul.
            My expertise includes React, Nextjs, Nodejs, Expressjs,
            and TypeScript. I am dedicated to documenting my coding
            projects on GitHub, making it easy for others to see my
            work. I thrive in a team environment and enjoy
            collaborative projects that allow me to apply and expand
            my web development skills.
          </p>
          <Link
            href={
              'https://drive.google.com/file/d/11u0mc3U-V38WcUOwW4OMfj7KPuPXSvD2/view?usp=sharing'
            }
            target="_blank">
            <button
              type="button"
              className="py-2.5 w-52 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-yellow-500 dark:bg-yellow-400 dark:text-black dark:border-yellow-600 dark:hover:text-black dark:hover:bg-yellow-500 flex items-center justify-center">
              <ArrowDownIcon className="h-4 w-4  font-bold" />
              Download CV
            </button>
          </Link>
          <ContactContainer />
        </div>

        <div className="w-2/4 hidden md:flex justify-center items-center">
          <Image
            src={'/images/rio-fix.png'}
            alt="rio-profile"
            width={300}
            height={300}
          />
        </div>
      </div>
      <Stacks />
      <ListProject />
      <CertificateContainer />
    </main>
  );
}
