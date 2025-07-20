import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ScrollStack, ScrollStackItem } from '../animated/ScrollStack';
import { CountUp } from '../animated/CountUp';
import ScrollReveal from '../animated/ScrollReveal';
import { ParticleCard, GlobalSpotlight } from '../animated/MagicBento';

interface EducationSectionProps {
  className?: string;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ className = '' }) => {
  const achievementsGridRef = useRef<HTMLDivElement>(null);
  
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
    <>
      <GlobalSpotlight
        gridRef={achievementsGridRef}
        enabled={true}
        spotlightRadius={250}
        glowColor="132, 0, 255"
      />
      <section id="skills" className={`py-6 ${className}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <ScrollReveal
              containerClassName="text-center"
              textClassName="text-4xl md:text-5xl font-bold text-white"
            >
              Education & Certifications
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Education ScrollStack */}
            <div className="flex flex-col space-y-8">
              <ScrollReveal
                baseRotation={-1}
                containerClassName="text-center mb-2"
                textClassName="text-2xl font-bold text-white"
                delay={0.4}
              >
                Academic Journey
              </ScrollReveal>
              <div className="flex justify-center mt-0">
                <ScrollStack
                  className="w-full max-w-lg"
                  itemDistance={60}
                  itemScale={0.05}
                  itemStackDistance={25}
                  stackPosition="25%"
                  scaleEndPosition="15%"
                  baseScale={0.88}
                  rotationAmount={1}
                  blurAmount={0.5}
                >
                  {educationItems.map((item, index) => {
                    // Determine the type of education item
                    const isUniversity = item.includes('Manipal University');
                    const isSchool = item.includes('Amity International');
                    const isCertification = !isUniversity && !isSchool;
                    
                    let icon = "🎓"; // Default graduation cap
                    let bgGradient = "from-portfolio-purple/20 to-portfolio-purple-light/30";
                    let borderGradient = "from-portfolio-purple/40 to-portfolio-purple-light/30";
                    
                    if (isUniversity) {
                      icon = "🏛️";
                      bgGradient = "from-portfolio-purple/30 to-portfolio-accent/20";
                      borderGradient = "from-portfolio-purple/50 to-portfolio-accent/40";
                    } else if (isSchool) {
                      icon = "🏫";
                      bgGradient = "from-portfolio-accent/20 to-portfolio-purple-light/20";
                      borderGradient = "from-portfolio-accent/40 to-portfolio-purple-light/40";
                    } else if (isCertification) {
                      icon = "📜";
                      bgGradient = "from-portfolio-purple-light/20 to-portfolio-purple/20";
                      borderGradient = "from-portfolio-purple-light/40 to-portfolio-purple/40";
                    }
                    
                    return (
                      <ScrollStackItem
                        key={index}
                        itemClassName={`group relative text-center p-16 min-h-[190px] min-w-[300px] bg-portfolio-purple/20 rounded-[56px] border-4 border-portfolio-purple/60 backdrop-blur-md overflow-hidden shadow-sm shadow-portfolio-purple/20 hover:shadow-md hover:shadow-portfolio-purple/30 transition-all duration-300 hover:scale-105`}
                      >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                          {/* Header with icon */}
                          <div className="flex items-start gap-4 mb-6">
                            <div className={`w-14 h-14 rounded-[32px] bg-gradient-to-r ${bgGradient} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                              {icon}
                            </div>
                            <div className="flex-1">
                              <div className={`w-full h-1 bg-gradient-to-r ${borderGradient} rounded-full mb-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                              <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                                {isUniversity ? 'University' : isSchool ? 'School' : 'Certification'}
                              </div>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 flex items-center">
                            <p className="text-white text-lg leading-relaxed font-semibold drop-shadow-md group-hover:text-portfolio-purple-light transition-colors duration-300">
                              {item}
                            </p>
                          </div>
                          
                          {/* Footer accent */}
                          <div className="mt-6 flex justify-between items-center">
                            <div className={`h-2 w-20 bg-gradient-to-r ${borderGradient} rounded-full opacity-40 group-hover:opacity-80 group-hover:w-32 transition-all duration-500`}></div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-white/10 to-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-3 h-3 rounded-full bg-portfolio-purple"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Removed overlay glow for cleaner appearance */}
                        
                        {/* Animated shine effect */}
                      </ScrollStackItem>
                    );
                  })}
                </ScrollStack>
              </div>
            </div>

            {/* Statistics */}
            <div className="flex flex-col space-y-8">
              <ScrollReveal
                baseRotation={1}
                containerClassName="text-center"
                textClassName="text-2xl font-bold text-white"
                delay={0.4}
              >
                Academic Achievements
              </ScrollReveal>
              
              <div className="flex justify-center">
                <div ref={achievementsGridRef} className="bento-section grid grid-cols-2 gap-y-16 gap-x-12 max-w-2xl w-full mx-auto place-items-center mt-8">
                  <style>
                    {`
                      .achievement-card--border-glow::after {
                        content: '';
                        position: absolute;
                        inset: 0;
                        padding: 6px;
                        background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                            rgba(132, 0, 255, calc(var(--glow-intensity) * 0.8)) 0%,
                            rgba(132, 0, 255, calc(var(--glow-intensity) * 0.4)) 30%,
                            transparent 60%);
                        border-radius: inherit;
                        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                        mask-composite: subtract;
                        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                        -webkit-mask-composite: xor;
                        pointer-events: none;
                        transition: opacity 0.3s ease;
                        z-index: 1;
                      }
                      
                      .achievement-card--border-glow:hover::after {
                        opacity: 1;
                      }
                      
                      .achievement-particle::before {
                        content: '';
                        position: absolute;
                        top: -2px;
                        left: -2px;
                        right: -2px;
                        bottom: -2px;
                        background: rgba(132, 0, 255, 0.2);
                        border-radius: 50%;
                        z-index: -1;
                      }
                    `}
                  </style>
                  {achievements.map((achievement, index) => (
                    <div key={achievement.label} className="card flex items-center justify-center">
                      <style>
                        {`
                          .achievement-card--border-glow::after {
                            content: '';
                            position: absolute;
                            inset: 0;
                            padding: 6px;
                            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                                rgba(132, 0, 255, calc(var(--glow-intensity) * 0.8)) 0%,
                                rgba(132, 0, 255, calc(var(--glow-intensity) * 0.4)) 30%,
                                transparent 60%);
                            border-radius: inherit;
                            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0, 0);
                            mask-composite: subtract;
                            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0, 0);
                            -webkit-mask-composite: xor;
                            pointer-events: none;
                            transition: opacity 0.3s ease;
                            z-index: 1;
                          }
                          
                          .achievement-card--border-glow:hover::after {
                            opacity: 1;
                          }
                          
                          .achievement-particle::before {
                            content: '';
                            position: absolute;
                            top: -2px;
                            left: -2px;
                            right: -2px;
                            bottom: -2px;
                            background: rgba(132, 0, 255, 0.2);
                            border-radius: 50%;
                            z-index: -1;
                          }
                        `}
                      </style>
                      <ParticleCard
                        className="group relative text-center p-16 min-h-[190px] min-w-[300px] bg-gradient-to-br from-portfolio-purple/20 to-portfolio-purple-light/30 rounded-xl border border-portfolio-purple/40 backdrop-blur-sm overflow-hidden hover:shadow-2xl hover:shadow-portfolio-purple/30 transition-all duration-300 hover:scale-105 achievement-card--border-glow"
                        style={{
                          '--glow-x': '50%',
                          '--glow-y': '50%',
                          '--glow-intensity': '0',
                          '--glow-radius': '200px',
                        } as React.CSSProperties}
                        enableTilt={true}
                        enableMagnetism={true}
                        clickEffect={true}
                        particleCount={6}
                        glowColor="132, 0, 255"
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
                      </ParticleCard>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};