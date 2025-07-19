import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MetallicPaint } from '../animated/MetallicPaint';
import { Magnet } from '../animated/Magnet';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 ${className}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="backdrop-blur-md bg-portfolio-bg/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <MetallicPaint className="text-2xl font-bold cursor-pointer">
            BD
          </MetallicPaint>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Magnet key={item.id} strength={0.2}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-portfolio-purple to-portfolio-cyan group-hover:w-full transition-all duration-300" />
                </button>
              </Magnet>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-white"
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-white" />
              <div className="w-full h-0.5 bg-white" />
              <div className="w-full h-0.5 bg-white" />
            </div>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};