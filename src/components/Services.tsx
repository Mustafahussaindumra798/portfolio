'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import {
  Code,
  Brain,
  Globe,
  Rocket,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Full-Stack Web Development',
    description:
      'Designing and engineering fast, responsive, and modern web applications using Next.js, React, and Tailwind CSS.',
  },
  {
    icon: Code,
    title: 'Python Development & Scripting',
    description:
      'Building robust backend logic, data extraction scripts, and custom automation tools tailored to technical requirements.',
  },
  {
    icon: Brain,
    title: 'AI & API Integration',
    description:
      'Connecting web applications with OpenAI APIs, machine learning models, and smart automated workflows.',
  },
  {
    icon: Rocket,
    title: 'Digital Product Strategy',
    description:
      'Leveraging my experience as CloudExify COO to help plan, architect, and execute web solutions for clients.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          subtitle="// What I Do"
          title="Services & Capabilities."
          description="Focused technical capabilities to build, scale, and deliver digital products."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-8 hover:border-[var(--primary)] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/5 flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[var(--muted)] text-sm font-medium opacity-50 group-hover:opacity-100 transition-opacity">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-syne text-xl font-bold mb-3 text-[var(--foreground)]">
                  {service.title}
                </h3>

                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
