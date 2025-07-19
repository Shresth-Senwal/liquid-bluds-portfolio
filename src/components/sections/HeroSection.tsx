import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '../animated/GradientText';
import { RotatingText } from '../animated/RotatingText';
import { Lanyard3D } from '../animated/Lanyard3D';
import { StarBorder } from '../animated/StarBorder';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  const roles = [
    'Full-Stack Developer',
    'UI/UX Enthusiast', 
    'Creative Coder',
    'Problem Solver',
    'Tech Innovator'
  ];

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${className}`}>
      {/* Background effects */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-portfolio-purple/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-portfolio-cyan/20 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-portfolio-green/10 rounded-full filter blur-3xl" />
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <GradientText className="text-5xl md:text-7xl font-bold mb-6">
            Alex Developer
          </GradientText>
        </motion.div>

        {/* Rotating role text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <RotatingText 
            texts={roles}
            className="text-xl md:text-2xl h-8"
          />
        </motion.div>

        {/* 3D Lanyard for team name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-12"
        >
          <Lanyard3D />
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <StarBorder>
            <Button
              onClick={scrollToProjects}
              className="bg-transparent hover:bg-white/10 text-white border-none text-lg px-8 py-6 rounded-lg transition-all duration-300"
            >
              View My Work
            </Button>
          </StarBorder>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};