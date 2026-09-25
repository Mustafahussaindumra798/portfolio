'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    role: 'Co-Founder & COO',
    company: 'CloudExify',
    date: '2023 - Present',
    description: 'Leading operations and technical strategy. Coordinating development teams to build scalable web applications, managing client relationships, and steering product vision for digital solutions.',
    skills: ['Leadership', 'Product Strategy', 'Operations', 'Full-Stack Architecture'],
    link: 'https://cloudexify.site/',
  },
  {
    role: 'Web Development Intern',
    company: 'Arch Technologies',
    date: 'April 2026 - May 2026',
    description: 'Developed full-stack web applications using modern frameworks. Collaborated with senior developers to implement responsive UIs and robust backend architectures. Received a Letter of Recommendation for excellent performance.',
    skills: ['Web Development', 'React', 'Backend Integration', 'Team Collaboration'],
    link: null,
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          subtitle="// Professional Journey"
          title="Experience."
          description="A track record of building products, leading teams, and turning complex requirements into scalable software solutions."
        />

        <div className="mt-16 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline line for mobile */}
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-[var(--card-border)]" />
              
              <div className="group relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 md:p-8 hover:border-[var(--primary)] transition-all duration-300 shadow-sm hover:shadow-md">
                {/* Timeline dot for mobile */}
                <div className="md:hidden absolute -left-[4px] top-8 w-2 h-2 rounded-full bg-[var(--primary)] ring-4 ring-[var(--background)]" />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-1 group-hover:text-[var(--primary)] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-[var(--primary)] font-semibold">
                      <Briefcase className="w-4 h-4" />
                      {exp.link ? (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                          {exp.company} <ChevronRight className="w-3 h-3" />
                        </a>
                      ) : (
                        <span>{exp.company}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--muted)] whitespace-nowrap bg-[var(--section-bg)] border border-[var(--card-border)] px-4 py-1.5 rounded-full w-fit font-medium">
                    <Calendar className="w-4 h-4" />
                    {exp.date}
                  </div>
                </div>

                <p className="text-[var(--muted)] leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="text-xs font-medium px-3 py-1 bg-[var(--section-bg)] text-[var(--muted)] rounded-md border border-[var(--card-border)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
