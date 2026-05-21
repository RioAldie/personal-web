import Image from 'next/image';
import Link from 'next/link';

const CardProject = (props) => {
  const { id, name, about, stacks, image } = props;
  
  return (
    <Link
      href={`/projects/${id}`}
      className="card-glow group flex flex-col bg-neutral-900/60 backdrop-blur-md rounded-2xl border border-neutral-800 shadow-xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500 w-full md:flex-row md:max-w-4xl mx-auto"
    >
      <div className="relative w-full h-56 md:w-2/5 md:h-auto overflow-hidden">
        <Image
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          src={image}
          alt={name}
          width={600}
          height={400}
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-900/20 to-transparent opacity-80 md:bg-gradient-to-r" />
      </div>
      
      <div className="flex flex-col justify-center p-6 md:p-8 w-full md:w-3/5 bg-neutral-900/40">
        <div className="flex justify-between items-start mb-2">
          <h5 className="text-2xl font-bold tracking-tight text-white group-hover:text-yellow-300 transition-colors duration-300">
            {name}
          </h5>
          <svg className="w-5 h-5 text-gray-500 group-hover:text-yellow-400 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
        
        <p className="text-gray-400 text-sm md:text-base font-medium mb-6">
          {about}
        </p>
        
        <div className="mt-auto pt-4 border-t border-neutral-800/50">
          <span className="text-xs uppercase tracking-widest text-yellow-500/80 font-bold block mb-2">Tech Stack</span>
          <p className="text-gray-300 text-sm leading-relaxed">
            {stacks}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardProject;
