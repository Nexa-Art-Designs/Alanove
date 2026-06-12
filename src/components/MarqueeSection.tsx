import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const MarqueeSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Dynamically map scroll progress to horizontal translation offsets
  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -200]);

  const row1Images = [
    '/designbynexa.jpg',
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    '/nexadesigns.jpg',
    'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80',
    '/bloomina.jpg',
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
  ];

  const row2Images = [
    '/microtech.jpg',
    'https://images.unsplash.com/photo-1618005198143-e528346d9a99?auto=format&fit=crop&w=600&q=80',
    '/nss.jpg',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    '/designbynexa.jpg',
    'https://images.unsplash.com/photo-1618005198143-e528346d9a99?auto=format&fit=crop&w=600&q=80',
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative w-full py-16 md:py-24 overflow-hidden flex flex-col gap-6 md:gap-10 border-b border-primary/20"
    >
      {/* Row 1: Moves Right on Scroll */}
      <div className="relative w-full flex overflow-hidden">
        <motion.div 
          style={{ x: x1 }} 
          className="flex gap-6 whitespace-nowrap will-change-transform"
        >
          {row1Images.map((src, index) => (
            <div 
              key={`row1-${index}`} 
              className="inline-block w-[240px] h-[160px] sm:w-[320px] sm:h-[200px] md:w-[400px] md:h-[250px] flex-shrink-0 rounded-2xl overflow-hidden border border-primary/20 bg-darkBg shadow-lg hover:border-primary/50 transition-colors duration-300"
            >
              <img 
                src={src} 
                alt={`Render Row 1 ${index}`} 
                className="w-full h-full object-cover hover:scale-[1.03] transition-all duration-700 ease-out" 
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Moves Left on Scroll */}
      <div className="relative w-full flex overflow-hidden">
        <motion.div 
          style={{ x: x2 }} 
          className="flex gap-6 whitespace-nowrap will-change-transform"
        >
          {row2Images.map((src, index) => (
            <div 
              key={`row2-${index}`} 
              className="inline-block w-[240px] h-[160px] sm:w-[320px] sm:h-[200px] md:w-[400px] md:h-[250px] flex-shrink-0 rounded-2xl overflow-hidden border border-primary/20 bg-darkBg shadow-lg hover:border-primary/50 transition-colors duration-300"
            >
              <img 
                src={src} 
                alt={`Render Row 2 ${index}`} 
                className="w-full h-full object-cover hover:scale-[1.03] transition-all duration-700 ease-out" 
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
