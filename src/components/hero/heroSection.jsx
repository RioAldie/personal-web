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
          <div className="text-2xl flex flex-row text-gray-100 font-bold gap-2">
            <TextChangeAnimation intervalTime={5000} texts={['Full Stack Dev', 'Software Dev', 'System Analyst']} color='text-white' justify='start' /> | <TextChangeAnimation justify='center' texts={['Javascript','Golang','ReactJS','NextJS','NodeJS','Typescript',]}/>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={300} duration={700}>
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
