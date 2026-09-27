'use client';

import { motion } from 'framer-motion';
import { Github, Star, GitFork, ArrowUpRight } from 'lucide-react';

const featuredRepos = [
  {
    name: 'Mustafahussaindumra798/portfolio',
    description: 'My personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.',
    stars: 2,
    forks: 0,
    language: 'TypeScript',
    url: 'https://github.com/Mustafahussaindumra798',
  },
  {
    name: 'Mustafahussaindumra798/Medi-Finder',
    description: 'Hackathon project: A comprehensive healthcare application to find medical professionals based on location.',
    stars: 1,
    forks: 0,
    language: 'Python',
    url: 'https://github.com/Mustafahussaindumra798',
  },
  {
    name: 'Mustafahussaindumra798/Restro-AI',
    description: 'AI-integrated restaurant management and smart ordering platform frontend.',
    stars: 1,
    forks: 0,
    language: 'JavaScript',
    url: 'https://github.com/Mustafahussaindumra798',
  },
];

export default function GithubProfile() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-sm font-medium text-primary">10</span>
              <div className="h-px w-12 bg-primary/20" />
              <h2 className="font-syne text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase">Open Source</h2>
            </div>
            <h3 className="font-syne text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight text-foreground">
              Code & Contributions
            </h3>
          </div>
          
          <a 
            href="https://github.com/Mustafahussaindumra798" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-foreground text-sm font-semibold hover:border-foreground hover:bg-gray-50 transition-all"
          >
            <Github className="w-4 h-4" />
            View GitHub Profile
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredRepos.map((repo, index) => (
            <motion.a
              key={index}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group flex flex-col justify-between p-6 bg-white border border-gray-200 hover:border-primary transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h5 className="font-syne font-bold text-foreground group-hover:text-primary transition-colors">
                    {repo.name.split('/')[1]}
                  </h5>
                </div>
                <p className="text-sm text-muted leading-relaxed font-inter font-light mb-8">
                  {repo.description}
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-muted uppercase tracking-wider">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${repo.language === 'Python' ? 'bg-blue-500' : repo.language === 'TypeScript' ? 'bg-blue-600' : 'bg-yellow-400'}`} />
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
    </section>
  );
}
