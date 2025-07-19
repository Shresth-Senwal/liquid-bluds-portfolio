import React from 'react';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  className?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ className = '' }) => {
  return (
    <section id="about" className={`py-20 ${className}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* About Me Content - Centered */}
        <div className="space-y-8">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              I am a 3rd-year B.Tech CSE student at Manipal University Jaipur with a strong foundation in both front-end and back-end technologies. Skilled in HTML, CSS, JavaScript, Node.js, Java, and OOP concepts, I'm passionate about web development and programming.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Currently working as an intern at SURGE PV (Solar SaaS Company), where I'm building scalable data pipelines, developing SEO-optimized web applications, and implementing CI/CD workflows. I'm eager to apply my technical knowledge to real-world projects and enhance my problem-solving abilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8"
          >
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
                <motion.div
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-portfolio-purple/20 to-portfolio-purple-light/20 border border-portfolio-purple/30 rounded-full text-sm text-white backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};