import Image from 'next/image';
import React from 'react';

const Certificate = (props) => {
  const { url, title, imageCompany, companyName } = props;
  return (
    <a
      href={url}
      target="_blank"
      className="card-glow group block w-full max-w-[400px] p-6 bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-2xl transition-all duration-300 hover:border-yellow-400/50 flex flex-col relative overflow-hidden"
    >
      {/* Decorative background gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-400/20 transition-all duration-500 pointer-events-none" />

      {/* Top Section: Logo and Company Tag */}
      <div className="flex justify-between items-start mb-6">
        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-neutral-700/50 p-2 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
          <Image
            src={imageCompany}
            alt={companyName}
            width={50}
            height={50}
            className="object-contain drop-shadow-md"
          />
        </div>
        <span className="px-3 py-1 text-xs font-semibold tracking-wider text-teal-400 bg-teal-400/10 border border-teal-400/20 rounded-full">
          {companyName}
        </span>
      </div>

      {/* Content Section: Title */}
      <div className="flex-grow">
        <h5 className="mb-3 text-xl font-bold tracking-tight text-white group-hover:text-yellow-300 transition-colors duration-300 line-clamp-2">
          {title}
        </h5>
        <div className="h-0.5 w-12 bg-neutral-700 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-teal-500 transition-all duration-500 ease-out mb-4" />
      </div>

      {/* Bottom Section: Action Link */}
      <div className="mt-auto flex items-center text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
        <span className="relative">
          View Detail
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-yellow-400 group-hover:w-full transition-all duration-300" />
        </span>
        <svg
          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:text-yellow-400 transition-all duration-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </div>
    </a>
  );
};

export default Certificate;
