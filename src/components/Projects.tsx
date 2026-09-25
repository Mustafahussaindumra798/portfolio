'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { ExternalLink, Github, FileText } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  category: 'AI' | 'Web' | 'Python' | 'Applications';
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  isCaseStudy?: boolean;
}

const projects: Project[] = [
  {
    title: 'Medi Finder',
    description: 'A comprehensive healthcare application designed during a Hackathon. It streamlines finding medical professionals and facilities based on user location and specific healthcare needs.',
    category: 'Applications',
    stack: ['Python', 'Data Processing', 'API Integration', 'Location Services'],
    isCaseStudy: true,
  },
  {
    title: 'Restro AI',
    description: 'An AI-integrated restaurant management and ordering platform. Features smart recommendations and automated inventory tracking to streamline hospitality operations.',
    category: 'AI',
    stack: ['Next.js', 'React', 'Tailwind', 'AI Integration'],
    liveUrl: 'https://restro-ai-taupe.vercel.app/',
    githubUrl: 'https://github.com/Mustafahussaindumra798cv',
  },
  {
    title: 'Dental Clinic Portal',
    description: 'A modern, high-performance web portal for dental clinics. Includes patient appointment scheduling, service showcasing, and responsive design for mobile accessibility.',
    category: 'Web',
    stack: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
    liveUrl: 'https://dental-sigma-sand.vercel.app/',
    githubUrl: 'https://github.com/Mustafahussaindumra798cv',
  },
  {
    title: 'Vital Gym',
    description: 'A fitness center application offering membership management, class scheduling, and trainer profiles with a premium, high-energy UI.',
    category: 'Web',
    stack: ['Next.js', 'TypeScript', 'TailwindCSS'],
    liveUrl: 'https://vital-gym.vercel.app/',
    githubUrl: 'https://github.com/Mustafahussaindumra798cv',
  },
];

const filters = ['All', 'AI', 'Web', 'Python', 'Applications'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'All' || project.category === activeFilter
  );

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-[var(--section-bg)]/50" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          subtitle="// Selected Work"
          title="Featured Projects."
          description="A showcase of web applications, AI integrations, and practical software solutions I have built."
        />

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-foreground text-background shadow-md'
                  : 'bg-[var(--card-bg)] text-[var(--muted)] hover:text-foreground border border-[var(--card-border)]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className={`group relative h-full ${i === 0 ? 'md:col-span-2' : ''}`}
              >
                <div
                  className="relative h-full flex flex-col p-8 md:p-10 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--primary)] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-syne text-2xl font-bold group-hover:text-[var(--primary)] transition-colors tracking-tight text-[var(--foreground)]">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 text-xs font-semibold rounded-md bg-[var(--section-bg)] text-[var(--muted)] border border-[var(--card-border)]">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-[var(--muted)] text-base leading-relaxed mb-8 flex-grow max-w-3xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md text-[11px] font-medium bg-[var(--section-bg)] text-[var(--muted)] border border-[var(--card-border)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-[var(--card-border)]">
                    {project.isCaseStudy ? (
                      <div className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[var(--section-bg)] text-[var(--muted)] border border-[var(--card-border)] text-sm font-semibold">
                        <FileText className="w-4 h-4" />
                        Hackathon Case Study
                      </div>
                    ) : (
                      <>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[var(--primary)] text-white text-sm font-semibold hover:bg-[var(--primary)]/90 transition-colors shadow-sm"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Preview
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-md border border-[var(--card-border)] bg-[var(--card-bg)] hover:bg-[var(--section-bg)] text-[var(--foreground)] transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
