'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-section-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-sm font-medium text-primary">03</span>
          <div className="h-px w-12 bg-primary/20" />
          <h2 className="font-syne text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase">About</h2>
        </div>

        <div className="grid lg:grid-cols-[0.8fr,1fr] gap-16 lg:gap-24">
          
          {/* LEFT: Large Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-syne text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.2] tracking-tight">
              Bridging the gap between complex engineering and elegant product design.
            </h3>
          </motion.div>

          {/* RIGHT: Concise Paragraphs & Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 text-muted text-base md:text-lg leading-relaxed font-inter font-light"
          >
            <p>
              I am a Software Engineer and Co-Founder with a strong foundation in both frontend architecture and deep backend AI integrations. My work focuses on solving real business problems through highly optimized, maintainable code.
            </p>
            <p>
              Currently pursuing my BSc in Software Engineering, I bring hands-on experience from my role as COO at CloudExify, where I oversee operational technology strategies. I thrive in environments that demand technical rigor and product ownership.
            </p>

            <div className="pt-8 border-t border-gray-200 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
              <div className="flex flex-col gap-1">
                <span className="text-primary font-mono text-xs font-bold">01</span>
                <span className="font-semibold text-foreground text-sm uppercase tracking-wider">Software Engineering</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-primary font-mono text-xs font-bold">02</span>
                <span className="font-semibold text-foreground text-sm uppercase tracking-wider">Full-Stack Web Development</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-primary font-mono text-xs font-bold">03</span>
                <span className="font-semibold text-foreground text-sm uppercase tracking-wider">AI & Intelligent Systems</span>
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
