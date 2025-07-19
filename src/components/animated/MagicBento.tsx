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
      case 'purple': return 'from-purple-900/50 to-purple-700/30 border-purple-500/30';
      case 'cyan': return 'from-cyan-900/50 to-cyan-700/30 border-cyan-500/30';
      case 'green': return 'from-green-900/50 to-green-700/30 border-green-500/30';
      default: return 'from-purple-900/50 to-purple-700/30 border-purple-500/30';
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