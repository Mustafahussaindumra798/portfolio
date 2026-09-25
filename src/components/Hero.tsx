'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Terminal } from 'lucide-react';
import Image from 'next/image';

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
                onClick={() => handleScroll('#work')}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background text-sm font-semibold hover:bg-primary transition-colors duration-300"
              >
                View Selected Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleScroll('#contact')}
                className="flex items-center justify-center px-8 py-4 bg-background border border-gray-200 text-foreground text-sm font-semibold hover:border-foreground hover:bg-gray-50 transition-all duration-300"
              >
                Let&apos;s Talk
              </button>
            </motion.div>
          </div>

          {/* RIGHT: Professional Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative h-[600px] w-full"
          >
            {/* Main Visual Frame */}
            <div className="absolute inset-0 bg-section-bg border border-card-border overflow-hidden flex flex-col shadow-sm">
              {/* Fake Browser Header */}
              <div className="h-10 bg-white border-b border-card-border flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
              </div>
              {/* Content Area */}
              <div className="flex-1 relative overflow-hidden">
                <Image 
                  src="/profile.jpg" 
                  alt="Mustafa Hussain - Software Engineering Student & Python Developer" 
                  fill 
                  className="object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
                  priority
                />
                
                {/* Subtle gradient overlay to ensure tech labels remain readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Tech Labels */}
                <div className="absolute bottom-8 right-8 flex flex-col gap-3">
                  <div className="flex items-center gap-3 bg-white px-4 py-2 border border-gray-100 shadow-sm">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span className="text-xs font-mono font-medium text-foreground">Python Developer</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white px-4 py-2 border border-gray-100 shadow-sm translate-x-4">
                    <Code2 className="w-4 h-4 text-primary" />
                    <span className="text-xs font-mono font-medium text-foreground">AI-Powered Applications</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white px-4 py-2 border border-gray-100 shadow-sm">
                    <Database className="w-4 h-4 text-primary" />
                    <span className="text-xs font-mono font-medium text-foreground">Aspiring AI Engineer</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Subtle decorative grid behind the visual */}
            <div className="absolute -inset-4 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
