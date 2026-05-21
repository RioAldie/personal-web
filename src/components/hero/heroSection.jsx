'use client';
import Image from 'next/image';
import Link from 'next/link';
import TextChangeAnimation from '@/components/animations/textChange';
import WaveButton from '@/components/animations/waveButton';
import ContactContainer from '@/components/contacts/container';
import ScrollReveal from '@/components/animations/scrollReveal';

export default function HeroSection() {
  return (
    <div
      id="about"
      className="section-hero dot-pattern flex flex-col md:flex-row mt-20 md:py-20 justify-between gap-11 items-center rounded-2xl p-6 md:p-10">
      {/* Floating ambient orbs */}
      <div className="glow-orb glow-orb-gold animate-float-slow" style={{ width: '300px', height: '300px', top: '-50px', right: '10%' }} />
      <div className="glow-orb glow-orb-gold animate-float-slower" style={{ width: '200px', height: '200px', bottom: '10%', left: '-5%' }} />

      <div className="md:w-2/4 w-full flex flex-col gap-5 p-4 md:p-0 relative-content">
        <ScrollReveal animation="fadeDown" duration={500}>
          <Image
            src={'/icon/mahkota.svg'}
            width={20}
            height={20}
            alt="mahkota"
          />
        </ScrollReveal>

        <ScrollReveal animation="fadeLeft" delay={100} duration={600}>
          <h2 className="text-4xl text-yellow-300 font-semibold">
            Hi, Im Rio Aldi Erwanto
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fadeLeft" delay={200} duration={600}>
          <div className="text-xl flex flex-row text-gray-100 font-bold gap-2">
            <TextChangeAnimation intervalTime={5000} texts={['Full Stack Dev', 'Software Dev', 'System Analyst']} color='text-white' justify='start' /> | <TextChangeAnimation justify='center' texts={['Javascript','Golang','ReactJS','NextJS','NodeJS','Typescript',]}/>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={300} duration={700}>
          <p className="text-gray-300">
         Full-stack developer with hands-on experience building 
            and maintaining internal 
            business systems in a manufacturing environment. 
            Experienced in working across development, 
            troubleshooting, testing, and system flow discussions to 
            support operational processes and feature implementation.
            Passionate about modern web technologies 
            and AI-assisted development workflows, 
            with practical experience using React, Next.js, Node.js, Express.js, TypeScript, and PostgreSQL.
            Comfortable working in collaborative teams and interested in growing further in system analysis,
            product thinking, and scalable application development.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={400} duration={600}>
          <Link
            href={
              'https://drive.google.com/file/d/11u0mc3U-V38WcUOwW4OMfj7KPuPXSvD2/view?usp=sharing'
            }
            target="_blank">
            <WaveButton />
          </Link>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={500} duration={600}>
          <ContactContainer />
        </ScrollReveal>
      </div>

      <ScrollReveal animation="scaleUp" delay={300} duration={800} className="w-2/4 hidden md:flex justify-center items-center relative-content">
        <Image
          src={'/images/rio-fix.png'}
          alt="rio-profile"
          width={300}
          height={300}
        />
      </ScrollReveal>
    </div>
  );
}
