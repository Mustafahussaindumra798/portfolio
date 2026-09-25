'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Eye } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--background)] pt-20"
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
        <div className="grid lg:grid-cols-[1fr,0.8fr] gap-12 items-center">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block text-xs md:text-sm font-semibold tracking-widest text-[var(--primary)] uppercase mb-6">
                Web Developer &bull; Full-Stack Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-[var(--foreground)] mb-6 tracking-tight"
            >
              Building Modern Digital Experiences That Move Businesses Forward.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[var(--muted)] text-base md:text-lg max-w-xl leading-relaxed mb-10"
            >
              I am Mustafa Hussain. I design and develop modern, responsive web applications focused on performance, usability, and real business goals. Specialized in Python development and intelligent technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[var(--primary)] text-white font-medium text-sm hover:bg-[var(--primary)]/90 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Eye className="w-4 h-4" />
                View My Work
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] font-medium text-sm hover:bg-[var(--section-bg)] transition-all duration-300"
              >
                Let&apos;s Talk
              </a>
            </motion.div>
          </div>

          {/* Right Column — Professional Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-end items-center relative"
          >
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-[var(--section-bg)] border border-[var(--card-border)] shadow-sm flex items-center justify-center group hover:border-[var(--primary)]/30 transition-colors duration-500">
              {/* Minimalist abstract representation of UI/Code */}
              <div className="w-3/4 h-3/4 flex flex-col gap-4 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                 <div className="w-full h-6 bg-[var(--card-border)] rounded-md"></div>
                 <div className="w-2/3 h-6 bg-[var(--card-border)] rounded-md"></div>
                 <div className="w-full h-32 bg-[var(--card-border)] rounded-md mt-4"></div>
                 <div className="flex gap-4 mt-2">
                   <div className="w-1/2 h-24 bg-[var(--card-border)] rounded-md"></div>
                   <div className="w-1/2 h-24 bg-[var(--card-border)] rounded-md"></div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-[var(--muted)] hover:text-[var(--primary)] transition-colors cursor-pointer"
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
