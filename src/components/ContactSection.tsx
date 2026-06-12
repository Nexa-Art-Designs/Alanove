import React from 'react';
import { Mail, MapPin, Globe, ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const ContactSection: React.FC = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! Jack will get back to you shortly.');
  };

  return (
    <section 
      id="contact" 
      className="relative w-full px-6 py-20 md:px-12 md:py-32 z-50 border-t border-primary/20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Info */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-12 h-full">
          <FadeIn x={-30} duration={0.8}>
            <h2 className="text-secondary font-semibold text-xs sm:text-sm tracking-widest uppercase mb-4">
              GET IN TOUCH
            </h2>
            <h3 className="text-[#D7E2EA] font-black text-3xl sm:text-5xl md:text-6xl tracking-tight leading-none uppercase mb-6">
              LET'S BUILD RESILIENT DIGITAL INFRASTRUCTURE
            </h3>
            <p className="text-secondary/80 text-sm sm:text-base leading-relaxed max-w-sm">
              Currently accepting bookings for full-stack development, UI/UX design, and business automation projects.
            </p>
          </FadeIn>

          {/* Contact details list */}
          <FadeIn x={-30} delay={0.2} duration={0.8} className="flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center bg-glassBg group-hover:border-primary/50 transition-colors duration-300">
                <Mail className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-secondary/70 text-xs uppercase tracking-wider">Email Me</p>
                <a href="mailto:hello@alanove.design" className="text-[#D7E2EA] font-semibold tracking-wide hover:underline">
                  hello@alanove.design
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center bg-glassBg group-hover:border-primary/50 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-secondary/70 text-xs uppercase tracking-wider">Location</p>
                <p className="text-[#D7E2EA] font-semibold tracking-wide">
                  Kozhikode, Kerala (IST)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center bg-glassBg group-hover:border-primary/50 transition-colors duration-300">
                <Globe className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-secondary/70 text-xs uppercase tracking-wider">Follow</p>
                <div className="flex gap-4 mt-0.5">
                  <a href="#" className="text-[#D7E2EA] text-sm font-semibold hover:text-primary transition-colors">LinkedIn</a>
                  <span className="text-primary/40">/</span>
                  <a href="#" className="text-[#D7E2EA] text-sm font-semibold hover:text-primary transition-colors">GitHub</a>
                  <span className="text-primary/40">/</span>
                  <a href="#" className="text-[#D7E2EA] text-sm font-semibold hover:text-primary transition-colors">Twitter</a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Minimal Form Panel */}
        <div className="lg:col-span-7 w-full glass-panel border border-white/10 rounded-[32px] p-6 sm:p-10 md:p-12 pointer-events-auto">
          <FadeIn x={30} duration={0.8}>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-secondary/80 text-xs uppercase tracking-wider font-semibold">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder="Enter your name"
                  required 
                  className="w-full bg-darkBg/50 border border-primary/30 rounded-xl px-4 py-3.5 text-[#D7E2EA] placeholder-secondary/50 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-secondary/80 text-xs uppercase tracking-wider font-semibold">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="Enter your email"
                  required 
                  className="w-full bg-darkBg/50 border border-primary/30 rounded-xl px-4 py-3.5 text-[#D7E2EA] placeholder-secondary/50 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-secondary/80 text-xs uppercase tracking-wider font-semibold">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  required 
                  className="w-full bg-darkBg/50 border border-primary/30 rounded-xl px-4 py-3.5 text-[#D7E2EA] placeholder-secondary/50 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full mt-4 liquid-pill-btn flex items-center justify-between text-[#D7E2EA] font-semibold uppercase tracking-wider text-xs sm:text-sm px-6 py-4"
              >
                <span className="relative z-10 flex items-center justify-between w-full">
                  Send Message
                  <ArrowRight className="w-5 h-5 text-[#D7E2EA]" />
                </span>
              </button>
            </form>
          </FadeIn>
        </div>
      </div>

      {/* Elegant Footer line */}
      <div className="max-w-6xl mx-auto border-t border-primary/20 mt-20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary uppercase tracking-wider">
        <p>&copy; {new Date().getFullYear()} Alanove Jenny Bazil. All rights reserved.</p>
        <p>Design by Nexa</p>
      </div>
    </section>
  );
};
