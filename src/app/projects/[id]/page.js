import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ScrollReveal from '@/components/animations/scrollReveal';
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'; // Need to make sure heroicons is installed, it is used in Navbar (Bars3Icon) and page (ArrowDownIcon)

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetail({ params }) {
  const { id } = params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="max-w-screen-xl mx-auto w-full px-4 pt-28 pb-10 flex flex-col min-h-screen relative-content">
        
        {/* Floating Ambient Orbs */}
        <div className="glow-orb glow-orb-gold animate-float-slow" style={{ width: '400px', height: '400px', top: '10%', right: '-10%' }} />
        <div className="glow-orb glow-orb-purple animate-float-slower" style={{ width: '300px', height: '300px', top: '40%', left: '-5%' }} />

        {/* Back Button */}
        <ScrollReveal animation="fadeIn" duration={400} className="mb-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors">
            <ArrowLeftIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </Link>
        </ScrollReveal>

        {/* Hero Section */}
        <ScrollReveal animation="fadeUp" duration={600} className="relative w-full h-auto md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-16 group">
          <div className="absolute inset-0 bg-neutral-900/40 z-10" />
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-top opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent z-20" />
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-30 flex flex-col justify-end h-full">
            <span className="px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold tracking-widest uppercase w-fit mb-4 backdrop-blur-md">
              {project.timeline || '2023'}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
              {project.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8 font-light">
              {project.about}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {project.url && (
                <a href={project.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-neutral-950 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:-translate-y-1">
                  View Live Site
                  <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-bold rounded-xl border border-neutral-700 transition-all hover:-translate-y-1">
                  <Image src="/icon/github-brands-solid.svg" alt="GitHub" width={20} height={20} className="filter invert" />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 relative-content z-10">
          
          {/* Main Description */}
          <div className="md:col-span-2 space-y-8">
            <ScrollReveal animation="fadeUp">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-yellow-500 rounded-full" />
                Project Overview
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4 text-lg font-light">
                {project.longDescription ? (
                  <p>{project.longDescription}</p>
                ) : (
                  <p>Detailed description is currently being updated for {project.name}.</p>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Tech Stack Sidebar */}
          <div className="md:col-span-1">
            <ScrollReveal animation="fadeLeft" delay={200}>
              <div className="bg-neutral-900/60 backdrop-blur-md rounded-2xl p-8 border border-neutral-800">
                <h3 className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stacks.split(',').map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-neutral-800 border border-neutral-700 rounded-lg text-sm text-gray-300 font-medium">
                      {tech.trim().replace(/^\(MERN Stack\)\s*/, '')}
                    </span>
                  ))}
                  {project.stacks.includes('MERN Stack') && (
                    <span className="px-3 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-lg text-sm text-teal-400 font-bold">
                      MERN Stack
                    </span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Features / Breakdown */}
        {project.features && project.features.length > 0 && (
          <div className="mb-20 relative-content z-10">
            <ScrollReveal animation="fadeUp">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Process & Key Features</h2>
            </ScrollReveal>
            
            <div className="flex flex-col gap-16">
              {project.features.map((feature, idx) => (
                <ScrollReveal 
                  key={idx} 
                  animation={idx % 2 === 0 ? "fadeRight" : "fadeLeft"} 
                  className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
                >
                  <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl border border-neutral-800 group relative">
                    <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="w-full md:w-1/2 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-500 font-bold text-xl mb-6">
                      0{idx + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

      </main>

    </>
  );
}
