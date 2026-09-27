'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroCanvas from './HeroCanvas';

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-center">
          
          {/* LEFT: Typography & CTAs */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-[10px] sm:text-xs font-mono font-medium tracking-widest text-muted uppercase mb-8 border border-gray-200 px-3 py-1.5 rounded-full">
                SOFTWARE ENGINEERING STUDENT &middot; PYTHON DEVELOPER &middot; ASPIRING AI ENGINEER
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-syne text-[2.5rem] leading-[1.1] md:text-5xl lg:text-[4rem] font-bold text-foreground mb-6 tracking-tight"
            >
              Building AI-Powered Applications While Growing Toward AI Engineering.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted text-base md:text-lg max-w-xl leading-relaxed mb-10 font-inter font-light"
            >
              Software Engineering Student at COMSATS University Islamabad (Wah Campus), focused on Python development, AI-powered applications, product development, and continuous learning across modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => handleScroll('#projects')}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background text-sm font-semibold hover:bg-primary transition-colors duration-300"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleScroll('#ask-ai')}
                className="flex items-center justify-center px-8 py-4 bg-background border border-gray-200 text-foreground text-sm font-semibold hover:border-foreground hover:bg-gray-50 transition-all duration-300"
              >
                Ask My AI
              </button>
              <a
                href="/resume"
                className="flex items-center justify-center px-8 py-4 bg-background border border-gray-200 text-foreground text-sm font-semibold hover:border-foreground hover:bg-gray-50 transition-all duration-300"
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* RIGHT: Professional Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative w-full"
          >
            <HeroCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
