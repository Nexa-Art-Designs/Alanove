import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';

interface ProjectCardData {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  leftTopImage: string;
  leftBottomImage: string;
  rightTallImage: string;
  color: string;
  specs: { label: string; value: string }[];
}

const ProjectCard: React.FC<{ project: ProjectCardData; index: number; range: number[]; targetScale: number; progress: any }> = ({ project, index, range, targetScale, progress }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate scaling for stacked effect
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-[80px] w-full min-h-[550px] sm:min-h-[650px] md:min-h-[750px] flex items-center justify-center pb-12 z-20"
    >
      <motion.div
        style={{
          scale,
          top: `calc(80px + ${index * 25}px)`,
          backgroundColor: project.color,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)'
        }}
        className="relative w-full rounded-[32px] p-6 sm:p-10 md:p-12 flex flex-col justify-between gap-8 shadow-[0_-15px_40px_rgba(0,0,0,0.5)] origin-top border border-white/10"
      >
        {/* Card Header Info */}
        <div className="w-full flex items-start justify-between border-b border-primary/20 pb-6">
          <div className="flex flex-col gap-1">
            <span className="text-secondary text-xs font-semibold uppercase tracking-widest">
              {project.category}
            </span>
            <h4 className="text-[#D7E2EA] font-black text-2xl sm:text-4xl uppercase tracking-wide">
              {project.title}
            </h4>
          </div>
          <span className="text-secondary/50 font-bold text-lg sm:text-2xl">
            {project.year}
          </span>
        </div>

        {/* Card Main: 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch flex-grow">
          {/* Left Column: Stacked Images (Left) + Description */}
          <div className="md:col-span-5 flex flex-col justify-between gap-6">
            <p className="text-secondary/80 text-sm sm:text-base leading-relaxed tracking-wide">
              {project.description}
            </p>

            {/* Tech Specs Panel */}
            <div className="grid grid-cols-3 gap-2 border border-primary/10 rounded-xl bg-darkBg/50 p-3">
              {project.specs.map((spec) => (
                <div key={spec.label} className="flex flex-col border-r border-primary/10 last:border-r-0 px-2">
                  <span className="text-[10px] text-secondary/60 uppercase tracking-widest font-semibold">{spec.label}</span>
                  <span className="text-xs text-[#D7E2EA] uppercase font-bold tracking-wider truncate">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Two Stacked Images */}
            <div className="grid grid-cols-2 gap-4 flex-grow min-h-[160px] sm:min-h-[220px]">
              <div className="rounded-2xl overflow-hidden border border-primary/20 bg-darkBg">
                <img
                  src={project.leftTopImage}
                  alt="Detail top"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-all duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-primary/20 bg-darkBg">
                <img
                  src={project.leftBottomImage}
                  alt="Detail bottom"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-all duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="pt-4">
              <LiveProjectButton onClick={() => window.open('#', '_blank')} />
            </div>
          </div>

          {/* Right Column: Tall Image */}
          <div className="md:col-span-7 rounded-2xl overflow-hidden border border-primary/20 bg-darkBg min-h-[240px] sm:min-h-[300px]">
            <img
              src={project.rightTallImage}
              alt="Main showcase"
              className="w-full h-full object-cover hover:scale-[1.02] transition-all duration-700 ease-out"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitor overall scroll progress of the projects section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const projects: ProjectCardData[] = [
    {
      id: 1,
      title: 'Design by Nexa',
      category: 'Agency Website & Branding',
      year: '2026',
      description: 'Our official agency portfolio showcasing hybrid creative-tech developments, blending high-end aesthetic precision with robust software engineering.',
      leftTopImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80',
      leftBottomImage: 'https://images.unsplash.com/photo-1541462608141-2ff580dd0e4e?auto=format&fit=crop&w=400&q=80',
      rightTallImage: '/designbynexa.jpg',
      color: 'rgba(6, 32, 36, 0.95)',
      specs: [
        { label: 'Architecture', value: 'Vite / TS' },
        { label: 'Rendering', value: 'SSR / Client' },
        { label: 'Animation', value: 'Framer Motion' }
      ]
    },
    {
      id: 2,
      title: 'Bloomina Lingerie',
      category: 'eCommerce Platform',
      year: '2026',
      description: 'A luxurious, fully-responsive eCommerce store built with React and Tailwind CSS. Features optimized search filters, cart systems, and secure checkout mechanisms.',
      leftTopImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80',
      leftBottomImage: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=400&q=80',
      rightTallImage: '/bloomina.jpg',
      color: 'rgba(46, 10, 24, 0.95)',
      specs: [
        { label: 'Core Tech', value: 'React / TW' },
        { label: 'State', value: 'Redux Toolkit' },
        { label: 'Database', value: 'MongoDB' }
      ]
    },
    {
      id: 3,
      title: 'Nexa Designs Portal',
      category: 'Product Catalog & Vector Assets',
      year: '2025',
      description: 'A clean showcase portal featuring product mockup templates, logo design collections, and digital branding assets for modern corporate setups.',
      leftTopImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&q=80',
      leftBottomImage: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=400&q=80',
      rightTallImage: '/nexadesigns.png',
      color: 'rgba(10, 46, 54, 0.95)',
      specs: [
        { label: 'UI Toolkit', value: 'Shadcn UI' },
        { label: 'Asset Type', value: 'SVG Vector' },
        { label: 'Storage', value: 'AWS S3' }
      ]
    },
    {
      id: 4,
      title: 'Microtech Solutions',
      category: 'Business Automation Dashboard',
      year: '2025',
      description: 'An enterprise dashboard mapping automated API workflows and industrial tech integrations, lowering operations overhead for tech firms.',
      leftTopImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80',
      leftBottomImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80',
      rightTallImage: '/microtech.jpg',
      color: 'rgba(4, 26, 28, 0.95)',
      specs: [
        { label: 'Backend', value: 'Node / Express' },
        { label: 'Automations', value: 'Webhook APIs' },
        { label: 'Hosting', value: 'Vercel Pro' }
      ]
    },
    {
      id: 5,
      title: 'NSS Management Portal',
      category: 'Web Infrastructure',
      year: '2026',
      description: 'A high-performance management portal built for NSS systems. Serves high concurrent user requests while maintaining sub-second latency.',
      leftTopImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80',
      leftBottomImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
      rightTallImage: '/nss.jpg',
      color: 'rgba(20, 24, 30, 0.95)',
      specs: [
        { label: 'Database', value: 'PostgreSQL' },
        { label: 'Infrastructure', value: 'Docker' },
        { label: 'CDN Cache', value: 'Cloudflare' }
      ]
    },
  ];

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative w-full rounded-t-[40px] md:rounded-t-[80px] -mt-[40px] md:-mt-[80px] px-6 py-20 md:px-12 md:py-32 z-40 overflow-visible border-t border-primary/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col mb-16">
          <FadeIn x={-30} duration={0.8}>
            <h2 className="text-secondary font-semibold text-xs sm:text-sm tracking-widest uppercase mb-4">
              PORTFOLIO
            </h2>
            <h3 className="text-[#D7E2EA] font-black text-3xl sm:text-5xl md:text-6xl tracking-tight leading-none uppercase mb-6">
              DIGITAL INFRASTRUCTURE
            </h3>
          </FadeIn>
          <div className="w-20 h-[2px] bg-primary/20" />
        </div>

        {/* Stacked Cards Container */}
        <div className="relative flex flex-col w-full gap-0">
          {projects.map((project, index) => {
            const targetScale = 1 - ((projects.length - index) * 0.05);
            const startVal = index / projects.length;
            const endVal = (index + 1) / projects.length;
            return (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                range={[startVal, endVal]}
                targetScale={targetScale}
                progress={scrollYProgress}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
