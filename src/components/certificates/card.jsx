import Image from 'next/image';
import React from 'react';

const Certificate = (props) => {
  const { url, title, imageCompany, companyName } = props;
  return (
    <div className="max-w-md p-6 bg-neutral-800   rounded-lg shadow ">
      <div className="w-fit bg-gray-100 p-2 px-4 rounded-full">
        <Image
          src={imageCompany}
          alt={companyName}
          width={100}
          height={50}
        />
      </div>
      <h5 className="mb-2  text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {companyName}
      </p>
      <a
        href={url}
        className="inline-flex font-medium items-center text-gray-200 hover:underline">
        Show Credentials
        <svg
          className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </a>
    </div>
  );
};

export default Certificate;
