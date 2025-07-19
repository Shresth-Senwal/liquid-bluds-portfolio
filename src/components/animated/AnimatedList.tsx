import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedListProps {
  items: string[];
  className?: string;
}

export const AnimatedList: React.FC<AnimatedListProps> = ({ items, className = '' }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1
    },
  };

  return (
    <motion.ul
      className={`space-y-3 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          className="flex items-center space-x-3 group"
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-cyan"
            whileHover={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
            {item}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
};