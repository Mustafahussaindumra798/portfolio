'use client';

import { motion } from 'framer-motion';
import { Code2, TrendingUp, Settings, PenTool } from 'lucide-react';

const pillars = [
  {
    icon: Code2,
    title: 'BUILD',
    description: 'Development and AI applications. Shipping production-ready software and digital experiences.'
  },
  {
    icon: TrendingUp,
    title: 'GROW',
    description: 'Marketing and lead generation. Ensuring the products reach and resonate with the right audience.'
  },
  {
    icon: Settings,
    title: 'OPERATE',
    description: 'Business and operations. Orchestrating teams, workflows, and business strategy at CloudExify.'
  },
  {
    icon: PenTool,
    title: 'CREATE',
    description: 'Social media and digital content. Building personal brand and communicating technical concepts.'
  }
];

export default function BeyondCode() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-sm font-medium text-white/50">03</span>
              <div className="h-px w-12 bg-white/20" />
              <h2 className="font-syne text-xl md:text-2xl font-bold tracking-tight uppercase">Beyond Code</h2>
            </div>
            <h3 className="font-syne text-3xl md:text-4xl font-bold leading-[1.2] tracking-tight max-w-2xl">
              An engineering mindset applied to the entire product lifecycle.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col p-8 border border-white/10 hover:border-white/30 transition-colors bg-white/[0.02]"
              >
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-syne text-lg font-bold mb-3 tracking-wide">{pillar.title}</h4>
                <p className="font-inter text-white/60 text-sm leading-relaxed font-light">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
