'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, X, ExternalLink, Code2, Layout, Database } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 'dental-clinic',
    title: 'Dental Clinic Website',
    category: 'Digital Experience',
    shortDesc: 'A modern digital experience for a dental practice.',
    description: 'A complete digital presence for a dental practice, focusing on patient experience, clear service communication, and a modern healthcare UI. The architecture ensures fast loading times and a responsive layout across all devices.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    liveUrl: 'https://dental-462u.vercel.app/',
    problem: 'Dental clinics often struggle with outdated web presences that do not reflect the quality of their care. Patients need an intuitive way to explore services and understand the practice environment before booking.',
    solution: 'Designed and developed a fast, clean, and responsive digital experience that presents treatments clearly, showcases the clinic gallery, and provides an accessible user interface.',
    features: ['Modern Healthcare UI', 'Treatment Presentation', 'Responsive Gallery', 'Appointment Experience', 'AI Assistant Integration'],
    contribution: 'Frontend Development & UI/UX implementation.',
  },
  {
    id: 'vital-gym',
    title: 'Vital Gym Website',
    category: 'Fitness Experience',
    shortDesc: 'A modern digital experience for a fitness/gym business.',
    description: 'A premium, high-energy digital platform for a modern fitness center, designed to convert visitors into members through strong visual hierarchy and clear class scheduling.',
    tech: ['HTML', 'CSS', 'TypeScript', 'Vercel'],
    liveUrl: 'https://vital-gym-bqlm.vercel.app/',
    problem: 'Fitness websites often suffer from cluttered information architectures, making it difficult for users to find schedules, pricing, and trainer information.',
    solution: 'Built a streamlined, high-contrast web experience that prioritizes membership conversion, class exploration, and high-quality visual presentation.',
    features: ['High-Energy UI', 'Class Presentation', 'Responsive Design', 'Membership Flow'],
    contribution: 'Frontend Architecture and Development.',
  },
  {
    id: 'restro-ai',
    title: 'Restro AI',
    category: 'Restaurant POS Product',
    shortDesc: 'Restaurant management and smart ordering platform.',
    description: 'A digital restaurant operations product aimed at streamlining POS workflows, improving restaurant management, and exploring scalable product direction.',
    tech: ['Next.js', 'React', 'Tailwind', 'AI Integration (In Development)'],
    liveUrl: 'https://restro-ai-2crv.vercel.app/',
    problem: 'Traditional POS systems are clunky, hard to train staff on, and lack intelligent forecasting or intuitive workflows.',
    solution: 'Developing a modern, fast, and scalable web-based POS experience with a focus on product thinking and restaurant workflow optimization.',
    features: ['Restaurant Workflow', 'POS Experience', 'Digital Operations', 'Intelligent UI'],
    contribution: 'Frontend Product Development.',
  },
  {
    id: 'medi-finder',
    title: 'Medi Finder',
    category: 'AI Healthcare Assistant',
    shortDesc: 'Project showcase: AI-powered healthcare accessibility.',
    description: 'An AI healthcare project focused on accessibility, medication information, and intelligent interaction for patients needing quick medical guidance.',
    tech: ['Python', 'AI Application Concepts', 'Frontend'],
    liveUrl: '#',
    problem: 'Patients often struggle to understand prescriptions, find alternative medicines, or check for drug interactions without immediate doctor access.',
    solution: 'Prototyped an AI healthcare assistant capable of scanning prescriptions and providing verified medicine information in multiple languages.',
    features: ['Prescription Scanning', 'Medicine Information', 'Alternatives Search', 'Urdu/English Experience'],
    contribution: 'Core Concept, AI Integration Planning & Development.',
  }
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="projects" className="py-24 md:py-32 bg-section-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-sm font-medium text-primary">02</span>
              <div className="h-px w-12 bg-primary/20" />
              <h2 className="font-syne text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase">Selected Work</h2>
            </div>
            <h3 className="font-syne text-3xl md:text-5xl font-bold text-foreground max-w-2xl leading-[1.1] tracking-tight">
              Featured products and technical case studies.
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              layoutId={`card-container-${project.id}`}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer bg-white border border-gray-200 overflow-hidden hover:border-primary transition-colors flex flex-col h-full shadow-sm hover:shadow-md"
            >
              <motion.div layoutId={`image-container-${project.id}`} className="aspect-[16/10] bg-gray-50 border-b border-gray-100 flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white opacity-50" />
                <motion.span layoutId={`title-text-${project.id}`} className="font-syne text-2xl md:text-3xl font-bold text-gray-300 group-hover:text-primary transition-colors z-10 text-center">
                  {project.title}
                </motion.span>
              </motion.div>
              <div className="p-8 flex-1 flex flex-col">
                <motion.span layoutId={`category-${project.id}`} className="font-mono text-[10px] font-bold tracking-widest text-primary uppercase mb-3 block">
                  {project.category}
                </motion.span>
                <p className="font-inter text-muted text-sm leading-relaxed mb-6 flex-1">
                  {project.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-1 bg-gray-50 text-[10px] font-mono text-muted uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            />
            <div className="fixed inset-0 flex items-center justify-center p-4 md:p-12 z-[101] pointer-events-none">
              <motion.div
                layoutId={`card-container-${selectedProject.id}`}
                className="w-full max-w-5xl max-h-[90vh] bg-white border border-gray-200 overflow-y-auto pointer-events-auto shadow-2xl rounded-sm"
              >
                <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 p-4 flex justify-between items-center z-20">
                  <span className="font-mono text-xs font-bold tracking-widest uppercase">Case Study</span>
                  <button onClick={() => setSelectedId(null)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 md:p-12">
                  <motion.div layoutId={`image-container-${selectedProject.id}`} className="w-full aspect-[21/9] bg-gray-50 border border-gray-100 flex items-center justify-center mb-12 rounded-sm overflow-hidden relative">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#f1f5f9_0%,transparent_100%)] opacity-50" />
                    <motion.span layoutId={`title-text-${selectedProject.id}`} className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 z-10 text-center">
                      {selectedProject.title}
                    </motion.span>
                  </motion.div>

                  <div className="grid lg:grid-cols-[1fr,300px] gap-12 lg:gap-24">
                    
                    <div>
                      <motion.span layoutId={`category-${selectedProject.id}`} className="font-mono text-sm font-bold tracking-widest text-primary uppercase mb-6 block">
                        {selectedProject.category}
                      </motion.span>
                      <p className="font-inter text-lg md:text-xl text-foreground font-light leading-relaxed mb-12">
                        {selectedProject.description}
                      </p>

                      <div className="space-y-12">
                        <div>
                          <h4 className="font-syne text-xl font-bold mb-4 uppercase tracking-wide">The Problem</h4>
                          <p className="text-muted leading-relaxed font-light text-sm md:text-base">{selectedProject.problem}</p>
                        </div>
                        <div>
                          <h4 className="font-syne text-xl font-bold mb-4 uppercase tracking-wide">The Solution</h4>
                          <p className="text-muted leading-relaxed font-light text-sm md:text-base">{selectedProject.solution}</p>
                        </div>
                        
                        {/* Visual Architecture */}
                        <div className="bg-gray-50 border border-gray-100 p-8 rounded-sm">
                          <h4 className="font-syne text-sm font-bold mb-8 uppercase tracking-widest text-center text-gray-500">Architecture Flow</h4>
                          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex flex-col items-center gap-2 text-center w-full md:w-auto">
                              <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                                <Layout className="w-5 h-5 text-primary" />
                              </div>
                              <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Interface</span>
                            </div>
                            <div className="hidden md:block h-px bg-gray-300 flex-1 relative">
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-gray-400 rotate-45" />
                            </div>
                            <div className="md:hidden w-px h-8 bg-gray-300 relative">
                              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b border-r border-gray-400 rotate-45" />
                            </div>
                            <div className="flex flex-col items-center gap-2 text-center w-full md:w-auto">
                              <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                                <Code2 className="w-5 h-5 text-primary" />
                              </div>
                              <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Logic / AI</span>
                            </div>
                            <div className="hidden md:block h-px bg-gray-300 flex-1 relative">
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-gray-400 rotate-45" />
                            </div>
                            <div className="md:hidden w-px h-8 bg-gray-300 relative">
                              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b border-r border-gray-400 rotate-45" />
                            </div>
                            <div className="flex flex-col items-center gap-2 text-center w-full md:w-auto">
                              <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                                <Database className="w-5 h-5 text-primary" />
                              </div>
                              <span className="font-mono text-[10px] font-bold uppercase tracking-widest">API / Data</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="flex flex-col gap-12">
                      <div>
                        <h4 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map(t => (
                            <span key={t} className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-xs font-mono font-medium text-foreground">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Key Features</h4>
                        <ul className="flex flex-col gap-3">
                          {selectedProject.features.map(f => (
                            <li key={f} className="flex items-start gap-3 text-sm font-light text-muted">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contribution</h4>
                        <p className="text-sm text-foreground font-medium">{selectedProject.contribution}</p>
                      </div>

                      <div className="pt-8 border-t border-gray-100 flex flex-col gap-4">
                        {selectedProject.liveUrl !== '#' && (
                          <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-foreground text-background font-semibold hover:bg-primary transition-colors">
                            Live Experience <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        <a href="#" className="flex items-center justify-center gap-2 w-full py-4 bg-white border border-gray-200 text-foreground font-semibold hover:bg-gray-50 transition-colors">
                          Source Code <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
