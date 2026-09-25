'use client';

import { motion } from 'framer-motion';

const journey = [
  { label: 'CURRENT', text: 'Software Engineering Student' },
  { label: 'BUILDING', text: 'Python & AI-Powered Applications' },
  { label: 'LEADING', text: 'Co-Founder & COO @ CloudExify' },
  { label: 'EXPERIENCE', text: 'Site Supervisor \u2014 CloudExify Internship 2026' },
  { label: 'FUTURE', text: 'Aspiring AI Engineer' },
];

export default function Roadmap() {
  return (
    <section className="py-24 bg-section-bg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start md:items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-1/3"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-sm font-medium text-primary">07</span>
              <div className="h-px w-12 bg-primary/20" />
              <h2 className="font-syne text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase">Where I&apos;m Heading</h2>
            </div>
            <h3 className="font-syne text-3xl md:text-4xl font-bold text-foreground leading-[1.2] tracking-tight">
              A continuous journey of technical learning and product leadership.
            </h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-2/3 flex flex-col gap-8 border-l border-gray-200 pl-8 md:pl-12"
          >
            {journey.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 group">
                <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest w-28 shrink-0">
                  {item.label}
                </span>
                <span className="font-inter text-base md:text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
