import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ char, index, total, progress }) => {
  // Map index to a specific scroll percentage range
  const start = index / total;
  const end = Math.min(1, start + 0.12); // Slightly overlap transitions
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  // Non-breaking space for layout width preservation
  const displayChar = char === ' ' ? '\u00A0' : char;

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder */}
      <span className="opacity-0">{displayChar}</span>
      {/* Absolute positioned animated character */}
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {displayChar}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charIndexCounter = 0;

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap justify-center`}>
      {words.map((word, wordIdx) => {
        const wordChars = word.split('');
        return (
          <React.Fragment key={wordIdx}>
            <span className="inline-block whitespace-nowrap">
              {wordChars.map((char) => {
                const currentIndex = charIndexCounter++;
                return (
                  <Character
                    key={currentIndex}
                    char={char}
                    index={currentIndex}
                    total={totalChars}
                    progress={scrollYProgress}
                  />
                );
              })}
            </span>
            {wordIdx < words.length - 1 && (
              <Character
                key={charIndexCounter}
                char=" "
                index={charIndexCounter++}
                total={totalChars}
                progress={scrollYProgress}
              />
            )}
          </React.Fragment>
        );
      })}
    </p>
  );
};
