/**
 * ProjectCard Component
 * 
 * A modern, glassmorphic project card with hover effects and gradients.
 * Features smooth animations, tech stack display, and interactive buttons.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  github,
  demo,
  image,
  className = ''
}) => {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.05] backdrop-blur-sm border border-white/20 p-6 transition-all duration-300 hover:border-portfolio-purple/60 hover:shadow-2xl hover:shadow-portfolio-purple/20 hover:scale-[1.02] ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Enhanced gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/15 via-portfolio-purple-light/10 to-portfolio-purple/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Animated shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

      <div className="relative z-10">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-portfolio-purple-light group-hover:to-white group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((technology, index) => (
            <span
              key={technology}
              className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-gray-300 group-hover:bg-gradient-to-r group-hover:from-portfolio-purple/20 group-hover:to-portfolio-purple-light/20 group-hover:text-white transition-all duration-300 hover:scale-105"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-white/10 to-white/5 hover:from-portfolio-purple/40 hover:to-portfolio-purple-light/40 text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg hover:shadow-portfolio-purple/30 overflow-hidden group/btn"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
              <Github className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Code</span>
            </a>
          )}
          
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-portfolio-purple/30 to-portfolio-purple-light/30 hover:from-portfolio-purple/50 hover:to-portfolio-purple-light/50 text-white transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg hover:shadow-portfolio-purple/40 overflow-hidden group/btn"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
              <ExternalLink className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
