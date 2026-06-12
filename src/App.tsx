import React from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

const App: React.FC = () => {
  return (
    <>
      <div className="liquid-bg-wrapper">
        {/* Dynamic Ambient Glow Blobs */}
        <div className="absolute top-[10%] left-[5%] w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-[#167A8A]/25 rounded-full blur-[100px] pointer-events-none select-none z-0 animate-blob-1" />
        <div className="absolute top-[50%] right-[5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#6BA3A3]/20 rounded-full blur-[120px] pointer-events-none select-none z-0 animate-blob-2" />
        <div className="absolute bottom-[5%] left-[8%] w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-[#167A8A]/20 rounded-full blur-[110px] pointer-events-none select-none z-0 animate-blob-1" />
      </div>

      <div className="relative z-10 w-full overflow-x-clip">
        {/* Scrollable landing sections */}
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
};

export default App;
