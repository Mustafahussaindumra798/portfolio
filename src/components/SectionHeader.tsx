'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ subtitle, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-50px' }}
      className="text-center mb-16 md:mb-20"
    >
      <span className="font-mono text-sm md:text-base text-primary tracking-widest uppercase">
        {subtitle}
      </span>
      <h2 className="font-syne text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
        {title}
        <motion.span
          className="block h-1 w-16 md:w-24 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: '6rem' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </h2>
      {description && (
        <p className="text-[var(--muted)] max-w-2xl mx-auto text-base md:text-lg leading-relaxed mt-4">
          {description}
        </p>
      )}
    </motion.div>
  );
}
