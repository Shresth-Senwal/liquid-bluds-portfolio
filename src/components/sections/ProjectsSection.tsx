/**
 * ProjectsSection Component
 * 
 * Showcases Divye Bisaria's projects in a modern grid layout with glassmorphic cards.
 * Features hover effects, gradient animations, and direct links to repositories.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '../animated/GradientText';
import { ProjectCard } from '../ui/ProjectCard';

interface ProjectsSectionProps {
  className?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className = '' }) => {
  // Updated with correct GitHub links from the provided information
  const projects = [
    {
      id: '1',
      title: 'Chat with PDF Assistant',
      description: 'An intelligent Streamlit chatbot that allows users to upload PDF documents and interact with them using natural language queries. Built with Gemini AI for accurate document analysis and question answering.',
      tech: ['Streamlit', 'Gemini AI', 'Python', 'PDF Processing'],
      github: 'https://github.com/rockerperfect/chat-with-pdf_Streamlit_Gemini',
      demo: undefined,
    },
    {
      id: '2',
      title: 'MedSecure Enterprise',
      description: 'HIPAA-compliant web platform for secure medical record exchange with end-to-end encryption (AES-GCM), multi-factor authentication, and role-based access control for healthcare professionals.',
      tech: ['Vanilla JavaScript', 'AES-GCM', 'HIPAA Compliance', 'Security'],
      github: 'https://github.com/rockerperfect/MedSecure',
      demo: undefined,
    },
    {
      id: '3',
      title: 'SEO Page Generator',
      description: 'Dynamic SEO-optimized page generator using React, PostgreSQL, and Node.js, achieving <1.5s load times for 20+ auto-generated templates with comprehensive SEO optimization.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'SEO'],
      github: 'https://github.com/rockerperfect/Seo_Page_Generation',
      demo: undefined,
    },
    {
      id: '4',
      title: 'Node Farm',
      description: 'Node.js & Express web server that reads from JSON, dynamically generates HTML templates, and implements routing with basic file-system operations for farm product management.',
      tech: ['Node.js', 'Express', 'HTML Templating', 'Routing'],
      github: 'https://github.com/rockerperfect/Node-Farm',
      demo: undefined,
    }
  ];

  return (
    <section id="projects" className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GradientText className="text-4xl md:text-5xl font-bold mb-6" animate={false}>
            Projects & Creations
          </GradientText>
          <motion.p
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A showcase of innovative solutions and creative implementations across various technologies, 
            featuring full-stack applications, AI integrations, and secure enterprise platforms.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                github={project.github}
                demo={project.demo}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="inline-block w-24 h-1 bg-gradient-to-r from-transparent via-portfolio-purple to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.div>
      </div>
    </section>
  );
};