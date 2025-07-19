import React from 'react';
import { motion } from 'framer-motion';

interface BentoItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  tech: string[];
  size: 'small' | 'medium' | 'large';
  color: 'purple' | 'cyan' | 'green';
  github?: string;
  demo?: string;
}

interface MagicBentoProps {
  items: BentoItem[];
  className?: string;
}

export const MagicBento: React.FC<MagicBentoProps> = ({ items, className = '' }) => {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small': return 'col-span-1 row-span-1 h-48';
      case 'medium': return 'col-span-2 row-span-1 h-48';
      case 'large': return 'col-span-2 row-span-2 h-96';
      default: return 'col-span-1 row-span-1 h-48';
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple': return 'from-portfolio-purple/40 to-portfolio-purple-light/20 border-portfolio-purple/40';
      case 'cyan': return 'from-portfolio-purple-light/40 to-portfolio-accent/20 border-portfolio-purple-light/40';
      case 'green': return 'from-portfolio-accent/40 to-portfolio-purple/20 border-portfolio-accent/40';
      default: return 'from-portfolio-purple/40 to-portfolio-purple-light/20 border-portfolio-purple/40';
    }
  };

  return (
    <div className={`grid grid-cols-4 gap-4 auto-rows-min ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className={`
            ${getSizeClasses(item.size)}
            bg-gradient-to-br ${getColorClasses(item.color)}
            border rounded-xl p-6 cursor-pointer
            backdrop-blur-sm overflow-hidden relative group
          `}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02, y: -5 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        >
          {/* Background gradient animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          <div className="relative z-10 h-full flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
              {item.title}
            </h3>
            
            <p className="text-gray-300 text-sm mb-4 flex-grow">
              {item.description}
            </p>

            {/* Project Links */}
            {(item.github || item.demo) && (
              <div className="flex gap-2 mb-4">
                {item.github && (
                  <motion.a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </motion.a>
                )}
                {item.demo && (
                  <motion.a
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs bg-portfolio-purple/30 hover:bg-portfolio-purple/40 text-white px-3 py-1.5 rounded-full transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                    Demo
                  </motion.a>
                )}
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {item.tech.map((tech) => (
                <motion.span
                  key={tech}
                  className="text-xs bg-white/10 text-white px-2 py-1 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Hover effect overlay */}
          <motion.div
            className="absolute inset-0 border-2 border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};