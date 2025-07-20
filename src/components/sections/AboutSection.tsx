import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animated/ScrollReveal';

interface AboutSectionProps {
  className?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ className = '' }) => {
  return (
    <section id="about" className={`py-12 ${className}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* About Me Content - Centered */}
        <div className="space-y-6">
          <ScrollReveal
            containerClassName="text-center"
            textClassName="text-4xl md:text-5xl font-bold text-white mb-6"
            delay={0.01} // Reduced from 0.1 to 0.02 (20ms)
          >
            About Me
          </ScrollReveal>

          <div className="space-y-4">
            <ScrollReveal
              baseOpacity={0.1}
              baseRotation={0.1}
              blurStrength={1}
              textClassName="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto"
              delay={0.01} // Reduced from 0.1 to 0.03 (30ms)
            >
              I am a 3rd-year B.Tech CSE student at Manipal University Jaipur with a strong foundation in both front-end and back-end technologies. Skilled in HTML, CSS, JavaScript, Node.js, Java, and OOP concepts, I'm passionate about web development and programming.
            </ScrollReveal>

            <ScrollReveal
              baseOpacity={0.1}
              baseRotation={-0.5}
              blurStrength={1}
              textClassName="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto"
              delay={0.01} // Reduced from 0.1 to 0.04 (40ms)
            >
              Currently working as an intern at SURGE PV (Solar SaaS Company), where I'm building scalable data pipelines, developing SEO-optimized web applications, and implementing CI/CD workflows. I'm eager to apply my technical knowledge to real-world projects and enhance my problem-solving abilities.
            </ScrollReveal>
          </div>

          <div className="pt-8">
            <div className="flex flex-wrap gap-4 justify-center max-w-2xl mx-auto">
              {[
                'Java',
                'JavaScript',
                'HTML & CSS',
                'Node.js',
                'React',
                'PostgreSQL',
                'Data Structures',
                'OOP Concepts'
              ].map((skill, index) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-portfolio-purple/20 to-portfolio-purple-light/20 border border-portfolio-purple/30 rounded-full text-sm text-white backdrop-blur-sm hover:scale-105 transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};