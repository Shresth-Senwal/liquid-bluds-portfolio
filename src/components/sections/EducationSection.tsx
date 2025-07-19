import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedList } from '../animated/AnimatedList';
import { CountUp } from '../animated/CountUp';

interface EducationSectionProps {
  className?: string;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ className = '' }) => {
  const educationItems = [
    'Manipal University Jaipur - B.Tech CSE (2023-2027) - CGPA: 8.2',
    'Amity International School, Noida - Class XII (CBSE) - 89.6%',
    'Amity International School, Noida - Class X (CBSE) - 95.6%',
    'Master Node by building a real-world RESTful API and web app (Udemy)',
    'NPTEL Data Structures & Algorithms in Java',
    'Oracle Academy Database Design',
    'Object-Oriented Programming in Java (GeeksforGeeks)',
    'DSA Certification (CodeChef)',
    'Oracle Database Programming with SQL'
  ];

  const achievements = [
    { number: 8.2, suffix: '', label: 'Current CGPA' },
    { number: 95.6, suffix: '%', label: 'Class X Score' },
    { number: 89.6, suffix: '%', label: 'Class XII Score' },
    { number: 10, suffix: 'K+', label: 'Lines of Code' },
  ];

  return (
    <section id="skills" className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Education & Certifications
          </h2>
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
              Academic Journey
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
              Academic Achievements
            </motion.h3>
            
            <div className="grid grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="group relative text-center p-6 bg-gradient-to-br from-portfolio-purple/20 to-portfolio-purple-light/30 rounded-xl border border-portfolio-purple/40 backdrop-blur-sm overflow-hidden hover:shadow-2xl hover:shadow-portfolio-purple/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-portfolio-purple/30 via-transparent to-portfolio-purple-light/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Animated border gradient */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  
                  <div className="relative z-10">
                    <CountUp
                      end={achievement.number}
                      suffix={achievement.suffix}
                      className="text-3xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-portfolio-purple-light group-hover:bg-clip-text transition-all duration-300"
                    />
                    <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{achievement.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};