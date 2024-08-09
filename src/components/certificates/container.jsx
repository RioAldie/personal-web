import React from 'react';
import Certificate from './card';
import { certificates } from '@/lib/data';

const CertificateContainer = () => {
  return (
    <div
      id="certificates"
      className="mt-56 flex flex-col px-2 md:px-36 gap-10 justify-between bg-neutral-950 w-full">
      <div className="text-white w-full p-3 gap-3 flex justify-center items-center flex-col">
        <h2 className="w-24 h-10 rounded-full bg-neutral-800 text-center flex justify-center items-center">
          Certificates
        </h2>
        <p>Certificates from My Web Development Studies</p>

        <div className="flex flex-row flex-wrap mt-10 h-fit py-14 justify-center border-t border-neutral-800 w-full gap-4">
          {certificates.map((certificate, i) => {
            const { url, title, imageCompany, companyName } =
              certificate;
            return (
              <Certificate
                key={i}
                url={url}
                title={title}
                imageCompany={imageCompany}
                companyName={companyName}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CertificateContainer;
