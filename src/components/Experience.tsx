'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Co-Founder & COO',
    company: 'CloudExify',
    period: '2023 — Present',
    description: 'Leading operational technology strategies and product development. Architecting robust systems and overseeing the technical lifecycle of core products.'
  },
  {
    role: 'Web Development Intern',
    company: 'Arch Technologies',
    period: 'April 2026 — May 2026',
    description: 'Contributed to front-end architecture and UI development using modern JavaScript frameworks. Collaborated with senior engineers to optimize application performance.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
          
          {/* Left Column: Header */}
          <div className="w-full md:w-1/3">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-sm font-medium text-primary">06</span>
              <div className="h-px w-12 bg-primary/20" />
              <h2 className="font-syne text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase">Experience</h2>
            </div>
            <h3 className="font-syne text-3xl md:text-4xl font-bold text-foreground leading-[1.2] tracking-tight sticky top-32">
              Professional Timeline
            </h3>
          </div>

          {/* Right Column: Timeline */}
          <div className="w-full md:w-2/3 flex flex-col">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col py-10 ${index !== experiences.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                  <h4 className="font-syne text-2xl font-bold text-foreground">
                    {exp.role}
                  </h4>
                  <span className="font-mono text-sm font-semibold text-primary uppercase tracking-widest">
                    {exp.period}
                  </span>
                </div>
                
                <h5 className="font-inter text-lg font-medium text-foreground mb-6">
                  {exp.company}
                </h5>
                
                <p className="text-muted text-base md:text-lg leading-relaxed font-inter font-light">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
