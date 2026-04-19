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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative h-full"
            >
              <div
                className={`relative h-full rounded-[32px] glass overflow-hidden border border-primary/5 transition-all duration-500 ${
                  hoveredIndex === i ? 'border-primary/30 shadow-[0_30px_60px_-15px_rgba(14,165,233,0.15)] -translate-y-2' : ''
                }`}
              >
                {/* Decorative background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                
                <div className="relative p-8">
                  {/* Emoji / Icon Circle */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl border border-white/5">
                    {project.emoji}
                  </div>

                  <h3 className="font-syne text-2xl font-bold mb-4 group-hover:text-primary transition-colors tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-[var(--muted)] text-sm leading-relaxed mb-8 h-[72px] overflow-hidden">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-primary/5 text-primary border border-primary/10 tracking-wider uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-primary/5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Preview
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-primary/20 hover:border-primary/40 text-primary hover:bg-primary/5 transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
