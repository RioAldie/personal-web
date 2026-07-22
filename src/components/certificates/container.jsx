'use client';
import React from 'react';
import Certificate from './card';
import { certificates } from '@/lib/data';
import ScrollReveal from '../animations/scrollReveal';

const CertificateContainer = () => {
  return (
    <ScrollReveal animation="fadeUp" duration={600}>
      <div
        id="certificates"
        className="section-certificates gradient-border-top gradient-border-bottom py-16 px-6 flex flex-col gap-12 justify-between w-full relative"
      >
        {/* Ambient orbs */}
        <div className="glow-orb glow-orb-blue animate-float-slow" style={{ width: '350px', height: '350px', bottom: '10%', right: '-10%' }} />
        <div className="glow-orb glow-orb-purple animate-float-slower" style={{ width: '250px', height: '250px', top: '15%', left: '5%' }} />

        {/* Section Header */}
        <ScrollReveal animation="fadeDown" className="text-white w-full flex flex-col items-center gap-4 relative-content z-10">
          <h2 className="section-badge w-fit px-6 h-10 rounded-full text-center flex justify-center items-center text-sm font-medium border border-neutral-700/50 bg-neutral-900/60 backdrop-blur-md">
            Certifications & Awards
          </h2>
          <p className="text-gray-400 text-center max-w-lg mb-4">
            A testament to my continuous learning journey and commitment to mastering web development technologies.
          </p>
        </ScrollReveal>

        {/* Certificates Visual Grid */}
        <div className="mt-8 pt-12 border-t border-neutral-800/50 w-full relative-content z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {certificates.map((certificate, i) => {
            const { url, title, imageCompany, companyName } = certificate;
            return (
              <ScrollReveal
                key={i}
                animation="scaleUp"
                delay={i * 120}
                duration={600}
                className="h-full flex"
              >
                <Certificate
                  url={url}
                  title={title}
                  imageCompany={imageCompany}
                  companyName={companyName}
                />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default CertificateContainer;
