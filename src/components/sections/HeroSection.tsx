import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '../animated/GradientText';
import { RotatingText } from '../animated/RotatingText';
import { GlassButton } from '@/components/ui/glass-button';
import RippleGrid from '@/components/animated/RippleGrid';
import BlurText from '../ui/BlurText';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  const roles = [
    'B.Tech CSE Student',
    'Full-Stack Developer',
    'Web Development Enthusiast',
    'Java & Node.js Developer',
    'Problem Solver'
  ];

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${className}`}>
      {/* Background grid - only in hero section */}
      <div className="absolute inset-0 w-full h-full">
        <RippleGrid
          enableRainbow={false}
          gridColor="#9333ea"
          rippleIntensity={0.15}
          gridSize={6}
          gridThickness={25}
          mouseInteraction={true}
          mouseInteractionRadius={2.5}
          opacity={0.9}
          glowIntensity={0.3}
          fadeDistance={2.5}
          vignetteStrength={1.2}
        />
      </div>

      {/* Background effects */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-portfolio-purple/25 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-portfolio-purple-light/20 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-portfolio-accent/15 rounded-full filter blur-3xl" />
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Divye Bisaria
          </h1>
          <BlurText
            text="3rd-year B.Tech CSE student passionate about web development"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8 text-white"
          />
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
            className="text-xl md:text-2xl h-8 text-white font-medium"
          />
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <GlassButton
            onClick={scrollToProjects}
            size="lg"
            variant="primary"
          >
            View My Work
          </GlassButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-portfolio-purple-light/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-portfolio-purple-light/80 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};