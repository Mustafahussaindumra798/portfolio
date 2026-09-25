'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Medi Finder',
    category: 'Applications',
    description: 'A comprehensive healthcare application designed to streamline the process of finding and booking medical professionals. Built with a focus on seamless user experience, reliable data management, and secure patient-doctor interactions.',
    tech: ['React', 'Next.js', 'Node.js', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Restro AI',
    category: 'AI & Machine Learning',
    description: 'An intelligent restaurant management platform leveraging AI to optimize operations, forecast demand, and enhance customer service. Integrates advanced data analytics directly into the hospitality workflow.',
    tech: ['Python', 'Machine Learning', 'React', 'Data Analytics'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Dental Clinic Portal',
    category: 'Web Platforms',
    description: 'A specialized digital portal for dental clinics. Features include appointment scheduling, patient record management, and integrated communication tools, tailored specifically for dental practices.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'API Integration'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Vital Gym',
    category: 'Applications',
    description: 'A modern fitness and gym management application. Provides members with class scheduling, progress tracking, and personalized fitness insights while offering administrators robust operational tools.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 bg-section-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-sm font-medium text-primary">05</span>
              <div className="h-px w-12 bg-primary/20" />
              <h2 className="font-syne text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase">Selected Work</h2>
            </div>
            <h3 className="font-syne text-3xl md:text-5xl font-bold text-foreground max-w-2xl leading-[1.1] tracking-tight">
              Featured projects and technical case studies.
            </h3>
          </div>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-3/5 group relative">
                  {/* Clean browser frame */}
                  <div className="w-full aspect-[16/10] bg-white border border-gray-200 shadow-sm overflow-hidden flex flex-col relative transition-shadow duration-500 group-hover:shadow-xl">
                    
                    {/* Browser Header */}
                    <div className="h-8 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-1.5 z-10">
                      <div className="w-2 h-2 rounded-full bg-gray-300" />
                      <div className="w-2 h-2 rounded-full bg-gray-300" />
                      <div className="w-2 h-2 rounded-full bg-gray-300" />
                    </div>
                    
                    {/* Image / Placeholder */}
                    <div className="relative flex-1 bg-gray-100 overflow-hidden">
                      {/* 
                        Placeholder for real image. 
                        To use real image: <Image src={project.image} alt={project.title} fill className="object-cover" /> 
                      */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-50 group-hover:scale-105 transition-transform duration-700 ease-out">
                        <span className="font-syne text-2xl md:text-4xl font-bold text-gray-300 tracking-tight">{project.title}</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-2/5 flex flex-col">
                  <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase mb-4">
                    {String(index + 1).padStart(2, '0')} &mdash; {project.category}
                  </span>
                  
                  <h4 className="font-syne text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {project.title}
                  </h4>
                  
                  <p className="text-muted text-base md:text-lg leading-relaxed font-inter font-light mb-8">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white border border-gray-200 text-xs font-medium text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <a 
                      href={project.liveUrl} 
                      className="group/btn flex items-center gap-2 font-inter text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      View Project
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="group/btn flex items-center gap-2 font-inter text-sm font-medium text-muted hover:text-foreground transition-colors"
                    >
                      Source Code
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
