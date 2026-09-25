'use client';

import { motion } from 'framer-motion';
import { Github, Star, GitFork, ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const featuredRepos = [
  {
    name: 'Mustafahussaindumra798/portfolio',
    description: 'My personal portfolio and professional timeline built with Next.js, Tailwind CSS, and Framer Motion.',
    stars: 2,
    forks: 0,
    language: 'TypeScript',
    url: 'https://github.com/Mustafahussaindumra798cv',
  },
  {
    name: 'Mustafahussaindumra798/Medi-Finder',
    description: 'Hackathon project: A comprehensive healthcare application to find medical professionals based on location.',
    stars: 1,
    forks: 0,
    language: 'Python',
    url: 'https://github.com/Mustafahussaindumra798cv',
  },
  {
    name: 'Mustafahussaindumra798/Restro-AI',
    description: 'AI-integrated restaurant management and smart ordering platform frontend.',
    stars: 1,
    forks: 0,
    language: 'JavaScript',
    url: 'https://github.com/Mustafahussaindumra798cv',
  },
];

export default function GithubProfile() {
  return (
    <section className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          subtitle="// Open Source"
          title="GitHub Contributions."
          description="A glimpse into my open-source projects, experiments, and code repositories."
        />

        <div className="mt-12 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-6 md:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-12 border-b border-[var(--card-border)] pb-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-foreground/5 flex items-center justify-center p-1 border-2 border-primary/20">
                <Github className="w-10 h-10 md:w-12 md:h-12 text-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Mustafahussaindumra798cv</h3>
                <p className="text-[var(--muted)] mt-1">Building software and exploring AI.</p>
                <div className="flex gap-4 mt-3">
                  <span className="text-sm font-medium text-foreground bg-foreground/5 px-3 py-1 rounded-full">Python</span>
                  <span className="text-sm font-medium text-foreground bg-foreground/5 px-3 py-1 rounded-full">TypeScript</span>
                </div>
              </div>
            </div>
            
            <a 
              href="https://github.com/Mustafahussaindumra798cv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded-xl hover:bg-foreground/90 transition-colors shrink-0"
            >
              Follow on GitHub
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <h4 className="font-syne text-xl font-bold mb-6">Pinned Repositories</h4>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredRepos.map((repo, index) => (
              <motion.a
                key={index}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col justify-between p-5 rounded-2xl bg-[var(--background)] border border-[var(--card-border)] hover:border-primary/50 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Github className="w-4 h-4 text-[var(--muted)]" />
                    <h5 className="font-semibold text-primary text-sm truncate group-hover:underline">
                      {repo.name.split('/')[1]}
                    </h5>
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-relaxed line-clamp-3 mb-4">
                    {repo.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs text-[var(--muted)] font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${repo.language === 'Python' ? 'bg-blue-500' : repo.language === 'TypeScript' ? 'bg-blue-600' : 'bg-yellow-400'}`} />
                    {repo.language}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" /> {repo.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" /> {repo.forks}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
