import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { FadeIn } from './FadeIn';

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="about-container relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20 md:py-32"
    >
      {/* 3D Decorative Corner Assets (Floating Animation) */}
      
      {/* Top Left: Moon */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-4 md:top-20 md:left-20 w-[120px] sm:w-[180px] md:w-[240px] opacity-25 md:opacity-40 z-10 pointer-events-none select-none"
      >
        <img src="/media__1780396439443.png" alt="3D Moon Asset" className="w-full h-auto object-contain grayscale" />
      </motion.div>

      {/* Top Right: Lego */}
      <motion.div 
        animate={{ y: [0, 15, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-10 right-4 md:top-20 md:right-20 w-[110px] sm:w-[170px] md:w-[220px] opacity-25 md:opacity-40 z-10 pointer-events-none select-none"
      >
        <img src="/media__1780396478802.png" alt="3D Lego Asset" className="w-full h-auto object-contain grayscale" />
      </motion.div>

      {/* Bottom Left: 3D Object */}
      <motion.div 
        animate={{ y: [0, -12, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 left-4 md:bottom-20 md:left-20 w-[130px] sm:w-[190px] md:w-[250px] opacity-25 md:opacity-40 z-10 pointer-events-none select-none"
      >
        <img src="/media__1780398145695.jpg" alt="3D Geometric Object" className="w-full h-auto object-contain grayscale" />
      </motion.div>

      {/* Bottom Right: Group */}
      <motion.div 
        animate={{ y: [0, 12, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-10 right-4 md:bottom-20 md:right-20 w-[120px] sm:w-[180px] md:w-[240px] opacity-25 md:opacity-40 z-10 pointer-events-none select-none"
      >
        <img src="/media__1780398177732.png" alt="3D Group Construct" className="w-full h-auto object-contain grayscale" />
      </motion.div>

      {/* Content Container */}
      <div className="max-w-4xl w-full flex flex-col items-center justify-center text-center z-20 glass-panel p-8 md:p-16 rounded-[2.5rem]">
        <FadeIn y={30} duration={0.8}>
          <h2 className="text-secondary font-medium uppercase text-xs sm:text-sm tracking-widest mb-6">
            THE CORE VISION
          </h2>
        </FadeIn>

        {/* Serif Reveal Headline */}
        <div className="w-full mb-10 px-4">
          <AnimatedText 
            text="Design by Nexa is a hybrid creative-tech brand where advanced development workflows meet sophisticated UI/UX design."
            className="text-[#D7E2EA] font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight tracking-tight text-center"
          />
        </div>

        {/* Secondary description paragraph */}
        <FadeIn delay={0.6} y={30} duration={0.8} className="max-w-2xl px-6 mb-12">
          <p className="text-secondary/80 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide">
            Built on a philosophy of minimalism, geometric precision, and functional excellence, we deliver full-stack solutions and resilient digital infrastructure that empowers businesses to scale. Every project is both visually striking and technically robust.
          </p>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.8} y={20} duration={0.8}>
          <ContactButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
        </FadeIn>
      </div>
    </section>
  );
};
