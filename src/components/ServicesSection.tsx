import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface CapabilityItem {
  num: string;
  title: string;
  description: string;
  tags: string[];
}

export const ServicesSection: React.FC = () => {
  const capabilities: CapabilityItem[] = [
    {
      num: '01',
      title: 'Full-Stack Web Development',
      description: 'Building robust and scalable web applications from end-to-end, leveraging modern frameworks and resilient architectures.',
      tags: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    },
    {
      num: '02',
      title: 'Sophisticated UI/UX Design',
      description: 'Crafting visually striking interfaces with geometric precision, premium minimalism, and functional excellence.',
      tags: ['Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      num: '03',
      title: 'Advanced Business Automation',
      description: 'Streamlining operations by integrating advanced development workflows and automated API-driven ecosystems.',
      tags: ['Workflows', 'API Integration', 'Cloud Functions'],
    },
    {
      num: '04',
      title: 'Resilient Digital Infrastructure',
      description: 'Deploying secure, high-performance cloud environments that empower businesses to confidently scale.',
      tags: ['DevOps', 'Cloud Architecture', 'Security'],
    },
    {
      num: '05',
      title: 'Creative-Tech Consultation',
      description: 'Bridging the gap between aesthetic precision and technical functionality to orchestrate hybrid creative-tech solutions.',
      tags: ['Strategy', 'System Architecture', 'Branding'],
    },
  ];

  return (
    <section 
      id="services" 
      className="relative w-full border-t border-primary/20 rounded-t-[40px] md:rounded-t-[80px] px-6 py-20 md:px-12 md:py-32 z-30"
    >
      <div className="max-w-6xl mx-auto glass-panel rounded-[3rem] p-8 md:p-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <FadeIn x={-30} duration={0.8} className="max-w-lg">
            <h2 className="text-secondary font-semibold text-xs sm:text-sm tracking-widest uppercase mb-4">
              SERVICES
            </h2>
            <h3 className="text-[#D7E2EA] font-black text-3xl sm:text-5xl md:text-6xl tracking-tight leading-none uppercase">
              HIGH-LEVEL CAPABILITIES
            </h3>
          </FadeIn>
          <FadeIn x={30} duration={0.8} className="max-w-xs">
            <p className="text-secondary/80 text-sm sm:text-base leading-relaxed">
              Delivering full-stack solutions by fusing advanced development workflows with sophisticated UI/UX design.
            </p>
          </FadeIn>
        </div>

        {/* Vertical Capabilities Listing */}
        <div className="flex flex-col border-t border-primary/20">
          {capabilities.map((item, index) => (
            <FadeIn 
              key={item.num}
              delay={index * 0.1}
              y={30}
              duration={0.7}
              className="group border-b border-primary/20 py-8 sm:py-12 flex flex-col md:flex-row items-start justify-between gap-6 hover:bg-primary/5 transition-colors duration-300 px-4 -mx-4 rounded-xl"
            >
              {/* Left Column: Number & Title */}
              <div className="flex items-start gap-6 md:gap-12 md:w-1/2">
                <span className="text-secondary/40 font-bold text-lg sm:text-2xl pt-1">
                  {item.num}
                </span>
                <div className="flex flex-col gap-3">
                  <h4 className="text-[#D7E2EA] font-black text-xl sm:text-2xl lg:text-3xl uppercase tracking-wide group-hover:translate-x-2 transition-transform duration-500 ease-out">
                    {item.title}
                  </h4>
                  <div className="flex flex-wrap gap-2 group-hover:translate-x-2 transition-transform duration-500 ease-out delay-75">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-secondary border border-secondary/30 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Description & Arrow */}
              <div className="flex items-end justify-between md:w-1/2 gap-6 pl-12 md:pl-0">
                <p className="text-secondary/90 text-sm sm:text-base leading-relaxed max-w-md">
                  {item.description}
                </p>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-darkBg transition-all duration-500 ease-out flex-shrink-0 group-hover:-rotate-45">
                  <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-darkBg transition-colors duration-500" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
