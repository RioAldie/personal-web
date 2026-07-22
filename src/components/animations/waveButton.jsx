'use client';

import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/solid';

const WaveButton = () => {
  return (
    <motion.button
      type="button"
      className="py-3 px-8 w-max text-sm font-bold text-black focus:outline-none bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20"
      whileHover={{
        scale: 1.08, // Slightly increase size on hover
        transition: {
          duration: 0.3,
          ease: 'easeInOut',
        },
      }}
      whileTap={{ scale: 0.95 }} // Slightly shrink on tap
      animate={{
        y: [0, -3, 0], // Subtle bounce effect
        transition: {
          duration: 1,
          repeat: Infinity, // Repeat the bounce indefinitely
          repeatType: 'reverse', // Reverse the bounce for a smooth loop
          ease: 'easeInOut',
        },
      }}>
      <ArrowDownIcon className="h-4 w-4 font-bold mr-2" />
      Download CV
    </motion.button>
  );
};

export default WaveButton;
