import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from './ContactButton';
import { FadeIn } from './FadeIn';

const NavMenu: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navLinks = ['Vision', 'Services', 'Projects', 'Contact'];

  return (
    <div className="flex items-center gap-1 bg-[#041A1C]/60 border border-white/10 rounded-full p-1.5 relative z-0 shadow-2xl backdrop-blur-[20px]">
      {navLinks.map((link, index) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`relative px-2.5 md:px-5 py-1.5 md:py-2 text-[10px] md:text-sm font-semibold uppercase tracking-widest transition-all duration-300 z-10 ${hoveredIndex === index ? 'text-white scale-[1.05] drop-shadow-md' : 'text-[#D7E2EA] hover:text-white'}`}
        >
          {link}
          {hoveredIndex === index && (
            <motion.span
              layoutId="nav-hover-pill"
              className="absolute inset-0 rounded-full -z-10"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
                boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2), 0 4px 15px rgba(0,0,0,0.4)',
                backdropFilter: 'blur(12px) brightness(1.2) contrast(120%)',
                WebkitBackdropFilter: 'blur(12px) brightness(1.2) contrast(120%)',
                border: '1px solid rgba(255,255,255,0.15)'
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            />
          )}
        </a>
      ))}
    </div>
  );
};

export const HeroSection: React.FC = () => {
  return (
    <section 
      className="hero-container relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-darkBg px-6 py-6 md:px-12 md:py-8"
      style={{
        backgroundImage: 'url(/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* 1. Navbar */}
      <FadeIn as="nav" y={-20} duration={0.8} className="w-full flex items-center justify-between z-50">
        <a href="#" className="text-primary font-extrabold text-xl tracking-widest uppercase hover:opacity-85 transition-opacity">
          ALANOVE
        </a>
        <NavMenu />
      </FadeIn>

      {/* 2. Main content area (Two columns) */}
      <div className="w-full flex-grow flex flex-row items-center justify-between gap-4 md:gap-12 z-20 py-4 md:py-0">
        
        {/* Left Side: Name and Stats Card */}
        <div className="w-7/12 md:w-1/2 flex flex-col items-start gap-4 md:gap-8 select-none text-left">
          <FadeIn delay={0.2} duration={1} y={40} className="w-full pointer-events-auto">
            <h1 className="hero-name hero-heading liquid-glass-text font-black uppercase leading-none tracking-tighter pl-6 -ml-6">
              ALANOVE JENNY
            </h1>
            <h2 className="hero-bazil liquid-glass-text font-black uppercase leading-none tracking-tighter mt-1 text-transparent [-webkit-text-stroke:1px_rgba(107,163,163,0.5)] md:[-webkit-text-stroke:1.5px_rgba(107,163,163,0.5)] hover:text-[#6BA3A3]/10 hover:[-webkit-text-stroke-color:#BBCCD7] transition-all duration-500 ease-out select-none pl-6 -ml-6">
              BAZIL
            </h2>
            <p className="text-[#D7E2EA] tracking-widest uppercase mt-2 font-medium text-[10px] sm:text-xs md:text-base">
              Architect of Hybrid Creative-Tech
            </p>
          </FadeIn>

          <FadeIn delay={0.6} duration={0.8} x={-30} className="w-full max-w-md glass-panel p-3 md:p-6 shadow-xl pointer-events-auto">
            <div className="flex gap-4 md:gap-8 mb-2 md:mb-4 border-b border-[#167A8A]/30 pb-2 md:pb-4">
              <div>
                <p className="text-[#D7E2EA] text-sm md:text-2xl font-bold tracking-tight">2+</p>
                <p className="text-[#6BA3A3] text-[8px] md:text-xs uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <p className="text-[#D7E2EA] text-sm md:text-2xl font-bold tracking-tight">Full-Stack</p>
                <p className="text-[#6BA3A3] text-[8px] md:text-xs uppercase tracking-wider">Solutions Delivered</p>
              </div>
            </div>
            <p className="text-[#D7E2EA]/90 text-[10px] md:text-base leading-relaxed tracking-wide">
              I'm a multi-disciplinary professional based in Kozhikode, Kerala, operating at the intersection of high-level design, software engineering, and business automation.
            </p>
          </FadeIn>
        </div>

        {/* Right Side: Portrait and Contact CTA */}
        <div className="w-5/12 md:w-1/2 flex flex-col items-center md:items-end justify-end relative pointer-events-none self-end mt-auto min-h-[250px] md:min-h-[580px]">
          <div className="pointer-events-auto relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
              className="relative w-[180px] h-[230px] sm:w-[220px] sm:h-[280px] md:w-[480px] md:h-[580px] -mb-6 md:-mb-8"
            >
              <img
                src="/Gemini_Generated_Image_jguue1jguue1jguu-removebg-preview.png"
                alt="Alanove Jenny Bazil"
                className="w-full h-full object-contain"
                draggable={false}
              />
            </motion.div>
          </div>

          <FadeIn delay={0.8} duration={0.8} x={30} className="w-full md:w-auto flex justify-center md:justify-end pointer-events-auto absolute bottom-0 right-0 z-30">
            <ContactButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
