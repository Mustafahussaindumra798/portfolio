'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-sm font-medium text-primary">01</span>
          <div className="h-px w-12 bg-primary/20" />
          <h2 className="font-syne text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase">About</h2>
        </div>

        <div className="grid lg:grid-cols-[0.8fr,1fr] gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-syne text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.2] tracking-tight">
              Learning, building, and leading in the world of intelligent software.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 text-muted text-base md:text-lg leading-relaxed font-inter font-light"
          >
            <p>
              I am a Software Engineering student at COMSATS University Islamabad (Wah Campus). I am continuously learning and experimenting with technologies that move me toward my long-term goal of becoming an AI Engineer.
            </p>
            <p>
              Beyond the classroom, I have gained substantial organizational and product experience as the Co-Founder & COO at CloudExify, and practical leadership experience serving as a Site Supervisor for the CloudExify Internship 2026 program.
            </p>
            <p>
              My current technical focus includes Python development, Java OOP, C++, and exploring how AI can be integrated into practical products using modern web frameworks and Vibe Coding workflows.
            </p>

            <div className="pt-8 border-t border-gray-200 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
              <div className="flex flex-col gap-1">
                <span className="text-primary font-mono text-xs font-bold">01</span>
                <span className="font-semibold text-foreground text-sm uppercase tracking-wider">Python Development</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-primary font-mono text-xs font-bold">02</span>
                <span className="font-semibold text-foreground text-sm uppercase tracking-wider">AI Product Development</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-primary font-mono text-xs font-bold">03</span>
                <span className="font-semibold text-foreground text-sm uppercase tracking-wider">Java OOP & C++</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-primary font-mono text-xs font-bold">04</span>
                <span className="font-semibold text-foreground text-sm uppercase tracking-wider">Product Leadership</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
