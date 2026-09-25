'use client';

import { motion } from 'framer-motion';

const capabilities = [
  'FULL-STACK DEVELOPMENT',
  'AI & MACHINE LEARNING',
  'MODERN WEB EXPERIENCES',
  'PRODUCT ENGINEERING'
];

export default function Trust() {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start md:items-center">
          
          {/* Main Intro Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-1/2"
          >
            <h2 className="font-syne text-3xl md:text-4xl font-semibold text-foreground leading-[1.3] tracking-tight">
              Software Engineer focused on building modern web applications, intelligent systems, and scalable digital products.
            </h2>
          </motion.div>

          {/* Capabilities List */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-1/2 flex flex-col gap-6 border-l border-gray-200 pl-8 md:pl-12"
          >
            {capabilities.map((cap, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-primary font-mono text-xs font-bold w-4">{(i + 1).toString().padStart(2, '0')}</span>
                <span className="font-inter text-sm md:text-base font-semibold tracking-widest text-foreground uppercase">{cap}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
