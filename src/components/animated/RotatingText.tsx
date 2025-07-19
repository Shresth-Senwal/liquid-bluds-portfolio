import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

export const RotatingText: React.FC<RotatingTextProps> = ({
  texts,
  className = '',
  interval = 3000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  const textVariants = {
    enter: {
      y: 20,
      opacity: 0,
      scale: 0.9,
    },
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: {
      y: -20,
      opacity: 0,
      scale: 0.9,
    },
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={textVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="bg-gradient-to-r from-portfolio-cyan to-portfolio-green bg-clip-text text-transparent">
            {texts[currentIndex]}
          </span>
        </motion.div>
      </AnimatePresence>
      {/* Invisible placeholder to maintain height */}
      <div className="invisible">{texts[0]}</div>
    </div>
  );
};