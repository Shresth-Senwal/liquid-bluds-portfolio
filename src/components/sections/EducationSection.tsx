import React from 'react';
import { motion } from 'framer-motion';
import { ShinyText } from '../animated/ShinyText';
import { AnimatedList } from '../animated/AnimatedList';
import { CountUp } from '../animated/CountUp';

interface EducationSectionProps {
  className?: string;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ className = '' }) => {
  const educationItems = [
    'Bachelor of Science in Computer Science - Tech University (2020-2024)',
    'Advanced React Development Certification - Tech Academy',
    'AWS Cloud Practitioner Certification',
    'UI/UX Design Fundamentals - Design Institute',
    'Full-Stack JavaScript Bootcamp - Code Academy',
  ];

  const achievements = [
    { number: 50, suffix: '+', label: 'Projects Completed' },
    { number: 3, suffix: '', label: 'Years Experience' },
    { number: 95, suffix: '%', label: 'Client Satisfaction' },
    { number: 10, suffix: 'K+', label: 'Lines of Code' },
  ];

  return (
    <section id="skills" className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <ShinyText className="text-4xl md:text-5xl font-bold">
            Education & Achievements
          </ShinyText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education List */}
          <div>
            <motion.h3
              className="text-2xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Education & Certifications
            </motion.h3>
            <AnimatedList items={educationItems} />
          </div>

          {/* Statistics */}
          <div>
            <motion.h3
              className="text-2xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Key Statistics
            </motion.h3>
            
            <div className="grid grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <CountUp
                    end={achievement.number}
                    suffix={achievement.suffix}
                    className="text-3xl font-bold mb-2"
                  />
                  <p className="text-gray-300 text-sm">{achievement.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};