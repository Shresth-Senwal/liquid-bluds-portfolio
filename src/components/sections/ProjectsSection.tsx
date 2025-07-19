import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '../animated/GradientText';
import { MagicBento } from '../animated/MagicBento';

interface ProjectsSectionProps {
  className?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className = '' }) => {
  const projects = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time order tracking.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      size: 'large' as const,
      color: 'purple' as const,
    },
    {
      id: '2',
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI integration using OpenAI API and WebSocket connections.',
      tech: ['Next.js', 'OpenAI', 'WebSocket', 'Prisma'],
      size: 'medium' as const,
      color: 'cyan' as const,
    },
    {
      id: '3',
      title: 'Task Manager',
      description: 'Productivity app with drag-and-drop functionality and team collaboration features.',
      tech: ['Vue.js', 'Firebase', 'Vuex'],
      size: 'small' as const,
      color: 'green' as const,
    },
    {
      id: '4',
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with interactive charts and location-based forecasting.',
      tech: ['React', 'D3.js', 'Weather API'],
      size: 'small' as const,
      color: 'purple' as const,
    },
    {
      id: '5',
      title: 'Social Media Analytics',
      description: 'Comprehensive analytics dashboard for social media performance tracking with real-time data visualization.',
      tech: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
      size: 'medium' as const,
      color: 'cyan' as const,
    },
    {
      id: '6',
      title: 'Crypto Tracker',
      description: 'Real-time cryptocurrency tracking application with portfolio management.',
      tech: ['React Native', 'Redux', 'CoinGecko API'],
      size: 'small' as const,
      color: 'green' as const,
    },
  ];

  return (
    <section id="projects" className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <GradientText className="text-4xl md:text-5xl font-bold" animate={false}>
            Projects & Creations
          </GradientText>
          <motion.p
            className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A showcase of my recent work, featuring innovative solutions and creative implementations
            across various technologies and domains.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MagicBento items={projects} />
        </motion.div>
      </div>
    </section>
  );
};