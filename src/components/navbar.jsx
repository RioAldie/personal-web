'use client';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className="bg-white w-full fixed border-gray-200 dark:bg-neutral-800/30 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src={'/images/rio.png'}
            alt="rio"
            width={30}
            height={15}
          />
          <span className="self-center text-xl font-medium whitespace-nowrap dark:text-white">
            rioaldie
          </span>
        </div>
        <button
          data-collapse-toggle="N-default"
          onClick={() => setActive(!active)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-neutral-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false">
          <Bars3Icon className="size-6 text-white" />
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            active ? 'block' : 'hidden'
          }`}
          id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  bg-neutral-500/50 md:bg-neutral-500/0  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md">
            <li>
              <a
                href="#about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 dark:text-white md:dark:hover:text-yellow-300 dark:hover:bg-neutral-900 dark:hover:text-yellow-300 md:dark:hover:bg-transparent">
                About
              </a>
            </li>
            <li>
              <Link
                href="#skills"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 dark:text-white md:dark:hover:text-yellow-300 dark:hover:bg-neutral-900 dark:hover:text-yellow-300 md:dark:hover:bg-transparent">
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 dark:text-white md:dark:hover:text-yellow-300 dark:hover:bg-neutral-900 dark:hover:text-yellow-300 md:dark:hover:bg-transparent">
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#certificates"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 dark:text-white md:dark:hover:text-yellow-300 dark:hover:bg-neutral-900 dark:hover:text-yellow-300 md:dark:hover:bg-transparent">
                Certificates
              </Link>
            </li>
            <li>
              <Link
                href="mailto:rioaldierwanto@gmail.com"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 dark:text-white md:dark:hover:text-yellow-300 dark:hover:bg-neutral-900 dark:hover:text-yellow-300 md:dark:hover:bg-transparent">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
