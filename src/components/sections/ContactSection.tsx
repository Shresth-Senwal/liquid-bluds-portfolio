import React from 'react';
import { motion } from 'framer-motion';
import { Magnet } from '../animated/Magnet';
import { GlassButton } from '@/components/ui/glass-button';
import { Github, Linkedin, Mail } from 'lucide-react';
import ScrollReveal from '../animated/ScrollReveal';

interface ContactSectionProps {
  className?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ className = '' }) => {
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/rockerperfect', 
      color: 'hover:text-white' 
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/in/divye-bisaria-bb572b28b', 
      color: 'hover:text-portfolio-purple-light' 
    },
    { 
      name: 'Email', 
      icon: Mail, 
      url: 'mailto:divyebisaria4106@gmail.com', 
      color: 'hover:text-portfolio-accent' 
    },
  ];

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'Divye_Bisaria_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className={`py-12 ${className}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div>
          <ScrollReveal
            containerClassName="text-center"
            textClassName="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-portfolio-purple to-portfolio-accent"
            delay={0.4}
          >
            Get In Touch
          </ScrollReveal>
        </div>

        <ScrollReveal
          baseOpacity={0.1}
          baseRotation={0}
          blurStrength={3}
          containerClassName="text-center"
          textClassName="text-gray-300 text-lg mb-12 max-w-2xl mx-auto"
          delay={0.4}
        >
          I'm always excited about new opportunities and collaborations in web development. 
          Whether you have an internship opportunity, project idea, or just want to connect, 
          feel free to reach out!
        </ScrollReveal>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-4 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg text-gray-400 transition-all duration-300 ${link.color} shadow-lg hover:shadow-purple-glow hover:border-white/30 hover:bg-gradient-to-r hover:from-portfolio-purple/20 hover:to-portfolio-purple-light/20 overflow-hidden hover:scale-110 hover:-translate-y-1`}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-purple/30 to-portfolio-purple-light/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <link.icon className="w-6 h-6 relative z-10" />
              <span className="sr-only">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Download CV Button */}
        <div>
          <GlassButton
            onClick={handleDownloadCV}
            size="lg"
            variant="primary"
          >
            <span>Download CV</span>
            <span>↓</span>
          </GlassButton>
        </div>
      </div>
    </section>
  );
};