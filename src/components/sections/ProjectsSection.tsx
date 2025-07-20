/**
 * ProjectsSection Component
 * 
 * Showcases Divye Bisaria's projects in a modern grid layout with glassmorphic cards.
 * Features hover effects, gradient animations, and direct links to repositories.
 */

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../ui/ProjectCard';
import ScrollReveal from '../animated/ScrollReveal';
import { GlobalSpotlight } from '../animated/MagicBento';

interface ProjectsSectionProps {
  className?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className = '' }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  
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
    <>
      <GlobalSpotlight
        gridRef={gridRef}
        enabled={true}
        spotlightRadius={300}
        glowColor="132, 0, 255"
      />
      <section id="projects" className={`py-8 sm:py-12 lg:py-16 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div 
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <ScrollReveal
              containerClassName="text-center"
              textClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-portfolio-purple to-portfolio-accent px-2"
              delay={0.4}
            >
              Projects & Creations
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={0.1}
              baseRotation={-0.5}
              blurStrength={3}
              containerClassName="text-center"
              textClassName="text-gray-300 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed px-2"
              delay={0.4}
            >
              A showcase of innovative solutions and creative implementations across various technologies, 
              featuring full-stack applications, AI integrations, and secure enterprise platforms.
            </ScrollReveal>
          </div>

          {/* Projects Grid */}
          <div ref={gridRef} className="bento-section grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="card">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  github={project.github}
                  demo={project.demo}
                  className="h-full"
                  delay={1.6 + (index * 0.2)}
                />
              </div>
            ))}
          </div>

          {/* Bottom decoration */}
          <div className="mt-12 sm:mt-14 md:mt-16 text-center">
            <div className="inline-block w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-portfolio-purple to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
};