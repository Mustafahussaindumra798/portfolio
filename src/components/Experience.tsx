'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Co-Founder & COO',
    company: 'CloudExify',
    period: '2023 - Present',
    description: 'Leading operations, product strategy, and business growth. Focused on building digital tools, managing lead generation, and orchestrating technical teams.'
  },
  {
    role: 'Site Supervisor (Internship)',
    company: 'CloudExify',
    period: '2026',
    description: 'Supervised the 2026 technical internship program, mentoring junior developers, and coordinating project deliveries.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-section-bg border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col items-center text-center mb-24">
          <span className="font-mono text-sm font-medium text-primary mb-4 block">07 &middot; PROFESSIONAL TIMELINE</span>
          <h2 className="font-syne text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground uppercase">
            Experience.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-12 py-12 border-t border-gray-200 first:border-t-0"
            >
              <div className="md:w-1/3 shrink-0">
                <span className="font-mono text-sm font-bold tracking-widest text-muted uppercase block mb-2">{exp.period}</span>
                <h3 className="font-syne text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                <h4 className="font-inter text-primary font-medium">{exp.company}</h4>
              </div>
              <div className="md:w-2/3">
                <p className="text-muted text-base md:text-lg leading-relaxed font-light font-inter">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
