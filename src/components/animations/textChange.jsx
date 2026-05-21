'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AutoTextChangeAnimation = ({ texts, color = 'text-yellow-300', intervalTime = 2000, justify = 'start' }) => {
  const [textIndex, setTextIndex] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, intervalTime); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [texts.length]);

  return (
    <div className={`${color} w-[180px] flex justify-${justify}`}>
      <AnimatePresence mode="wait">
        {/* Wrapping the text with motion.div for animation */}
        <motion.div
          key={textIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}>
          <span>{texts[textIndex]}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AutoTextChangeAnimation;
