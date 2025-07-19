import React from 'react';
import { motion } from 'framer-motion';

interface Lanyard3DProps {
  className?: string;
}

export const Lanyard3D: React.FC<Lanyard3DProps> = ({ className = '' }) => {
  const letters = ['b', 'l', 'u', 'd', 's'];
  const colors = ['#9333ea', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <motion.div
      className={`w-full h-48 flex items-center justify-center ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex space-x-4">
        {letters.map((letter, index) => (
          <motion.div
            key={letter}
            className="relative"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut" 
            }}
          >
            <motion.div
              className="text-6xl font-bold relative z-10"
              style={{ color: colors[index] }}
              animate={{
                y: [0, -10, 0],
                rotateY: [0, 360],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                },
                rotateY: {
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "linear"
                }
              }}
            >
              {letter}
            </motion.div>
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 text-6xl font-bold opacity-50 blur-sm"
              style={{ color: colors[index] }}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            >
              {letter}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};