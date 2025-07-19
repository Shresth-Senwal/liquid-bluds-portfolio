import React from 'react';
import SplashCursor from '@/components/animated/SplashCursor';
import { ClickSpark } from '@/components/animated/ClickSpark';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <ClickSpark>
      <div className="relative min-h-screen">
        {/* Global cursor effects */}
        <SplashCursor SPLAT_RADIUS={0.08} SPLAT_FORCE={3000} />
        
        {/* Header */}
        <Header />
        
        {/* Main content */}
        <main className="relative z-10 pt-20">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </ClickSpark>
  );
};

export default Index;
