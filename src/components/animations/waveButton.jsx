'use client';

import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/solid';

const WaveButton = () => {
  return (
    <motion.button
      type="button"
      className="py-2.5 w-52 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-yellow-500 dark:bg-yellow-400 dark:text-black dark:border-yellow-600 dark:hover:text-black dark:hover:bg-yellow-500 flex items-center justify-center"
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
