import React from 'react';
import { motion } from 'framer-motion';
import { ShinyText } from '../animated/ShinyText';
import { ScrollReveal } from '../animated/ScrollReveal';
import { ModelViewer } from '../animated/ModelViewer';

interface AboutSectionProps {
  className?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ className = '' }) => {
  return (
    <section id="about" className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Model Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ModelViewer />
          </motion.div>

          {/* Text Column */}
          <div className="space-y-6">
            <ShinyText className="text-4xl md:text-5xl font-bold">
              About Me
            </ShinyText>

            <ScrollReveal delay={0.2}>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate full-stack developer and member of the <span className="text-portfolio-purple font-semibold">bluds</span> team, 
                dedicated to creating exceptional digital experiences. With a strong foundation in modern web technologies, 
                I specialize in building scalable applications that solve real-world problems.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My journey in technology began with curiosity and has evolved into a deep passion for innovation. 
                I believe in the power of clean code, thoughtful design, and collaborative development to create 
                solutions that make a difference.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div className="flex flex-wrap gap-4">
                {[
                  'React & Next.js',
                  'TypeScript',
                  'Node.js',
                  'Python',
                  'Cloud Architecture',
                  'UI/UX Design'
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-portfolio-purple/20 to-portfolio-cyan/20 border border-portfolio-purple/30 rounded-full text-sm text-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};