import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '../animated/GradientText';
import { Magnet } from '../animated/Magnet';
import { StarBorder } from '../animated/StarBorder';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface ContactSectionProps {
  className?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ className = '' }) => {
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com', 
      color: 'hover:text-white' 
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com', 
      color: 'hover:text-blue-400' 
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      url: 'https://twitter.com', 
      color: 'hover:text-cyan-400' 
    },
    { 
      name: 'Email', 
      icon: Mail, 
      url: 'mailto:alex@bluds.dev', 
      color: 'hover:text-green-400' 
    },
  ];

  const handleDownloadCV = () => {
    // In a real application, this would trigger a download
    console.log('Downloading CV...');
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
          I'm always interested in new opportunities and collaborations. 
          Whether you have a project in mind or just want to connect, 
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
            <Magnet key={link.name}>
              <motion.a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-white/5 rounded-full border border-white/10 text-gray-400 transition-all duration-300 ${link.color} backdrop-blur-sm group`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-6 h-6" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            </Magnet>
          ))}
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <StarBorder>
            <Button
              onClick={handleDownloadCV}
              className="bg-transparent hover:bg-white/10 text-white border-none text-lg px-8 py-6 rounded-lg transition-all duration-300 group"
            >
              <motion.span
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <span>Download CV</span>
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.div>
              </motion.span>
            </Button>
          </StarBorder>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-500 text-sm">
            © 2024 Alex Developer | bluds team member | Built with React & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
};