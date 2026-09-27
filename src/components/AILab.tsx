'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, FlaskConical, Github } from 'lucide-react';

const experiments = [
  {
    id: 'exp-1',
    title: 'Basic RAG Implementation',
    category: 'RAG',
    status: 'Exploring',
    tech: ['Python', 'LangChain', 'OpenAI'],
    description: 'Investigating how to build a basic Retrieval-Augmented Generation pipeline to chat with personal PDF documents.',
    date: '2026',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'exp-2',
    title: 'Automated Lead Scraper Agent',
    category: 'AI Agents',
    status: 'Building',
    tech: ['Python', 'BeautifulSoup', 'LLMs'],
    description: 'Developing a small autonomous agent that can navigate local business directories and summarize contact information for CloudExify marketing.',
    date: '2026',
    demoUrl: '#',
    githubUrl: '#'
  }
];

export default function AILab() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'Building': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Exploring': return 'bg-amber-100 text-amber-700 border-amber-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="ailab" className="py-24 md:py-32 bg-section-bg border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 shadow-sm">
            <FlaskConical className="w-6 h-6 text-primary" />
          </div>
          <span className="font-mono text-sm font-medium text-primary mb-4 block">05 &middot; EXPERIMENTS & LEARNING</span>
          <h2 className="font-syne text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground uppercase mb-6">
            Mustafa&apos;s AI Lab
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl font-inter font-light">
            A transparent look into my ongoing learning journey. These are raw experiments, prototypes, and concepts I am currently exploring in the field of AI Engineering.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {experiments.map((exp, i) => {
            const isExpanded = expandedId === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  className="w-full flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 text-left gap-4"
                >
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-xs font-bold text-muted uppercase tracking-widest">{exp.category}</span>
                    <h3 className="font-syne text-xl md:text-2xl font-bold text-foreground">{exp.title}</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest border rounded-full ${getStatusColor(exp.status)}`}>
                      {exp.status}
                    </span>
                    <span className="font-mono text-xs text-muted">{exp.date}</span>
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 md:p-8 pt-0 border-t border-gray-100 mt-2 bg-gray-50/50">
                        <div className="pt-6 grid md:grid-cols-[1fr,250px] gap-8">
                          <div>
                            <p className="text-foreground font-inter leading-relaxed text-sm md:text-base mb-6">
                              {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {exp.tech.map(t => (
                                <span key={t} className="px-2 py-1 bg-white border border-gray-200 text-xs font-mono text-muted">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-col gap-3">
                            <a href={exp.githubUrl} className="flex items-center justify-between p-3 bg-white border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors group">
                              <span className="flex items-center gap-2"><Github className="w-4 h-4" /> Source Code</span>
                              <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-foreground" />
                            </a>
                            <a href={exp.demoUrl} className="flex items-center justify-between p-3 bg-foreground text-background text-sm font-medium hover:bg-primary transition-colors group">
                              <span className="flex items-center gap-2"><FlaskConical className="w-4 h-4" /> View Demo</span>
                              <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
