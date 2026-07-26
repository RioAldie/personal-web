'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WaveButton from '@/components/animations/waveButton';
import ContactContainer from '@/components/contacts/container';
import ScrollReveal from '@/components/animations/scrollReveal';

export default function HeroSection() {
  const [orbits, setOrbits] = useState([]);

  const handleHeroClick = (e) => {
    // Ignore clicks on links or buttons so they still function normally
    if (e.target.closest('a') || e.target.closest('button')) return;

    const colors = [
      { border: 'border-blue-500/30', dot: 'bg-blue-400 shadow-[0_0_20px_6px_rgba(96,165,250,0.8)]' },
      { border: 'border-purple-500/30', dot: 'bg-purple-400 shadow-[0_0_20px_6px_rgba(192,132,252,0.8)]' },
      { border: 'border-teal-500/30', dot: 'bg-teal-400 shadow-[0_0_20px_6px_rgba(45,212,191,0.8)]' },
      { border: 'border-pink-500/30', dot: 'bg-pink-400 shadow-[0_0_20px_6px_rgba(244,114,182,0.8)]' },
      { border: 'border-red-500/30', dot: 'bg-red-400 shadow-[0_0_20px_6px_rgba(248,113,113,0.8)]' },
      { border: 'border-green-500/30', dot: 'bg-green-400 shadow-[0_0_20px_6px_rgba(74,222,128,0.8)]' },
      { border: 'border-yellow-500/30', dot: 'bg-yellow-400 shadow-[0_0_20px_6px_rgba(234,179,8,0.8)]' },
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const duration = 8 + Math.random() * 25; // Random spin speed between 8s and 33s
    const direction = Math.random() > 0.5 ? 'normal' : 'reverse';
    const scale = 0.3 + Math.random() * 1.2; // Random size from 30% to 150%
    const tilt = Math.floor(Math.random() * 360); // Random rotation offset
    const showLine = Math.random() > 0.3; // 70% chance to show line, 30% chance to hide it

    setOrbits(prev => [...prev, {
      id: Date.now() + Math.random(),
      color: randomColor,
      duration,
      direction,
      scale,
      tilt,
      showLine
    }]);
  };

  return (
    <div
      id="about"
      onClick={handleHeroClick}
      className="section-hero flex flex-col md:flex-row mt-20 md:py-20 justify-between items-center p-6 md:p-10 relative cursor-crosshair group">
      
      {/* Easter Egg Hint */}
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 flex flex-col items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none z-20">
        <div className="text-xs md:text-sm font-mono text-yellow-400/80 tracking-widest uppercase animate-pulse">
          Click to ignite
        </div>
        <div className="w-10 h-10 rounded-full border border-yellow-400/30 flex items-center justify-center animate-bounce">
          <div className="w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_15px_3px_rgba(234,179,8,0.8)]"></div>
        </div>
      </div>

      {/* Background Dot Pattern matching the right side of the design */}
      <div className="absolute inset-0 right-0 top-0 opacity-20 hidden md:block pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, #eab308 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        backgroundPosition: 'right center',
        maskImage: 'radial-gradient(ellipse 50% 50% at 80% 50%, black 20%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 80% 50%, black 20%, transparent 80%)'
      }}></div>

      {/* Floating ambient orbs */}
      <div className="glow-orb glow-orb-gold animate-float-slow pointer-events-none" style={{ width: '300px', height: '300px', top: '-50px', right: '10%' }} />
      <div className="glow-orb glow-orb-gold animate-float-slower pointer-events-none" style={{ width: '200px', height: '200px', bottom: '10%', left: '-5%' }} />

      <div className="md:w-1/2 w-full flex flex-col gap-6 p-4 md:p-0 relative-content z-10">
        <ScrollReveal animation="fadeDown" duration={500}>
          <Image
            src={'/icon/mahkota.svg'}
            width={24}
            height={24}
            alt="mahkota"
          />
        </ScrollReveal>

        <ScrollReveal animation="fadeLeft" delay={100} duration={600}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Hi, I&apos;m
          </h2>
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-400">
            Rio Aldi Erwanto
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="fadeLeft" delay={200} duration={600}>
          <div className="text-xl md:text-2xl flex flex-row font-bold gap-3 items-center">
            <span className="text-white">Software Developer</span>
            <span className="text-gray-500">|</span>
            <span className="text-yellow-400">NextJS</span>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={300} duration={700}>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg font-medium">
            Full-stack developer with hands-on experience building 
            and maintaining internal business systems in a manufacturing environment. 
            Experienced in working across development, troubleshooting, testing, and system flow discussions to 
            support operational processes and feature implementation.<br/><br/>
            Passionate about modern web technologies and AI-assisted development workflows, 
            with practical experience using React, Next.js, Node.js, Express.js, TypeScript, and PostgreSQL.
            Comfortable working in collaborative teams and interested in growing further in system analysis, product thinking, and scalable application development.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={400} duration={600} className="mt-4">
          <Link
            href={
              'https://drive.google.com/file/d/11u0mc3U-V38WcUOwW4OMfj7KPuPXSvD2/view?usp=sharing'
            }
            target="_blank">
            <WaveButton />
          </Link>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={500} duration={600} className="mt-4">
          <ContactContainer />
        </ScrollReveal>
      </div>

      {/* Right Side: Animated Glowing Arc (Responsive) */}
      <div className="absolute md:relative right-0 top-0 w-full h-full md:h-[600px] md:w-1/2 flex justify-end items-center relative-content z-0 overflow-visible opacity-30 md:opacity-100 pointer-events-none">
        
        {/* Render dynamically added orbits */}
        {orbits.map((orbit) => (
          <div key={orbit.id} 
               className="absolute right-[-40%] md:right-[-20%] top-1/2 transform -translate-y-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] pointer-events-none"
               style={{
                 transform: `translateY(-50%) scale(${orbit.scale}) rotate(${orbit.tilt}deg)`
               }}
          >
            {/* The Orbit Track */}
            {orbit.showLine && (
              <div className={`absolute inset-0 rounded-full border-[1px] ${orbit.color.border}`}></div>
            )}
            
            {/* Orbiting Dot */}
            <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: `${orbit.duration}s`, animationDirection: orbit.direction }}>
               <div className={`absolute top-1/2 left-0 w-2 h-2 md:w-3 md:h-3 rounded-full ${orbit.color.dot} -translate-x-1 -translate-y-1 md:-translate-x-1.5 md:-translate-y-1.5`}></div>
            </div>
          </div>
        ))}

        {/* The Original Default Arc */}
        <div className="absolute right-[-40%] md:right-[-20%] top-1/2 transform -translate-y-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full border-[1px] border-yellow-500/30"
          style={{
            maskImage: 'linear-gradient(to right, black 10%, transparent 60%)',
            WebkitMaskImage: 'linear-gradient(to right, black 10%, transparent 60%)',
          }}>
        </div>
        
        {/* The Original Glowing Arc Highlight */}
        <div className="absolute right-[-40%] md:right-[-20%] top-1/2 transform -translate-y-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full border-[2px] border-yellow-400 shadow-[0_0_50px_10px_rgba(234,179,8,0.3)]"
          style={{
            clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
            maskImage: 'linear-gradient(to bottom, transparent 10%, black 50%, transparent 90%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 10%, black 50%, transparent 90%)',
          }}>
        </div>

        {/* The Original Orbiting Dot */}
        <div className="absolute right-[-40%] md:right-[-20%] top-1/2 transform -translate-y-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] animate-spin-slow">
           <div className="absolute top-1/2 left-0 w-2 h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full shadow-[0_0_20px_6px_rgba(234,179,8,0.8)] -translate-x-1 -translate-y-1 md:-translate-x-1.5 md:-translate-y-1.5"></div>
        </div>

      </div>
    </div>
  );
}
