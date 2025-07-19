import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '../animated/GradientText';
import { Magnet } from '../animated/Magnet';
import { GlassButton } from '@/components/ui/glass-button';
import { Github, Linkedin, Mail } from 'lucide-react';

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
    <section id="contact" className={`py-20 ${className}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GradientText className="text-4xl md:text-5xl font-bold mb-8" animate={false}>
            Get In Touch
          </GradientText>
        </motion.div>

        <motion.p
          className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm always excited about new opportunities and collaborations in web development. 
          Whether you have an internship opportunity, project idea, or just want to connect, 
          feel free to reach out!
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-4 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg text-gray-400 transition-all duration-300 ${link.color} shadow-lg hover:shadow-purple-glow hover:border-white/30 hover:bg-gradient-to-r hover:from-portfolio-purple/20 hover:to-portfolio-purple-light/20 overflow-hidden`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-portfolio-purple/30 to-portfolio-purple-light/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
              />
              <link.icon className="w-6 h-6 relative z-10" />
              <span className="sr-only">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <GlassButton
            onClick={handleDownloadCV}
            size="lg"
            variant="primary"
          >
            <span>Download CV</span>
            <span>↓</span>
          </GlassButton>
        </motion.div>
      </div>
    </section>
  );
};