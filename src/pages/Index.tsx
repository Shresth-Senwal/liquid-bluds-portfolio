import React from 'react';
import { RippleGrid } from '@/components/animated/RippleGrid';
import { SplashCursor } from '@/components/animated/SplashCursor';
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
        {/* Global background grid */}
        <RippleGrid opacity={0.3} />
        
        {/* Global cursor effects */}
        <SplashCursor />
        
        {/* Header */}
        <Header />
        
        {/* Main content */}
        <main className="relative z-10">
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
