'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  gradient: string;
  emoji: string;
}

const projects: Project[] = [
  {
    title: 'EduConnect',
    description:
      'A comprehensive student management system with enrollment tracking, grade management, and real-time dashboards for educational institutions.',
    stack: ['Java', 'MySQL', 'JDBC', 'Swing'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    emoji: '🎓',
  },
  {
    title: 'ShopSphere',
    description:
      'Modern e-commerce platform with product filtering, shopping cart, Stripe payments, and admin dashboard for inventory management.',
    stack: ['Next.js', 'Supabase', 'Tailwind', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-emerald-500/10 to-teal-500/10',
    emoji: '🛒',
  },
  {
    title: 'ChatBot Pro',
    description:
      'AI-powered customer support chatbot with natural language processing, context awareness, and seamless integration for business websites.',
    stack: ['OpenAI API', 'Node.js', 'React', 'Socket.io'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-purple-500/10 to-pink-500/10',
    emoji: '🤖',
  },
  {
    title: 'PortfolioGen',
    description:
      'Drag-and-drop portfolio generator that lets developers create stunning personal websites with customizable themes and live preview.',
    stack: ['React', 'Tailwind', 'Firebase', 'DnD Kit'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-orange-500/10 to-amber-500/10',
    emoji: '✨',
  },
  {
    title: 'WordPress Blog',
    description:
      'Custom WordPress theme with modern design, optimized performance, SEO integration, and advanced content management for a tech blog.',
    stack: ['WordPress', 'PHP', 'MySQL', 'CSS'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-sky-500/10 to-indigo-500/10',
    emoji: '📝',
  },
  {
    title: 'TaskFlow',
    description:
      'Collaborative project management app with Kanban boards, real-time updates, team workspaces, and deadline tracking features.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-rose-500/10 to-red-500/10',
    emoji: '📋',
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-[var(--section-bg)]/50" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          subtitle="// My Projects"
          title="Featured Work"
          description="A showcase of projects that demonstrate my skills and passion for building great software."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-30px' }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div
                className={`relative h-full rounded-2xl glass overflow-hidden transition-all duration-500 hover:border-primary/20 hover:shadow-[0_0_40px_rgba(0,212,255,0.08)] ${
                  hoveredIndex === i ? 'scale-[1.02]' : ''
                }`}
              >
                {/* Top gradient bar */}
                <div
                  className={`h-1 w-full bg-gradient-to-r ${project.gradient.replace('/10', '/60')}`}
                />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{project.emoji}</span>
                      <h3 className="font-syne text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--muted)] text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-primary/5 text-primary/80 border border-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-200"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border border-[var(--card-border)] hover:border-primary/30 text-[var(--muted)] hover:text-primary transition-all duration-200"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Hover background glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
