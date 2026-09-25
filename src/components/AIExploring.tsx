'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Lightbulb, BookOpen, Microscope, Sparkles } from 'lucide-react';

const exploringAreas = [
  {
    icon: BookOpen,
    title: 'Foundational ML',
    description: 'Deepening understanding of core algorithms, statistical modeling, and data preprocessing techniques using Scikit-Learn and Pandas.',
    status: 'Solidifying',
  },
  {
    icon: Microscope,
    title: 'Deep Learning',
    description: 'Experimenting with neural network architectures, primarily focusing on computer vision and basic NLP tasks.',
    status: 'Exploring',
  },
  {
    icon: Sparkles,
    title: 'Generative AI & LLMs',
    description: 'Learning how to integrate and fine-tune Large Language Models. Exploring RAG architectures and prompt engineering to build intelligent applications.',
    status: 'Current Focus',
  },
];

export default function AIExploring() {
  return (
    <section className="section-padding relative bg-[var(--section-bg)]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          subtitle="// Continuous Learning"
          title="Currently Exploring Intelligence."
          description="A transparent look into my active learning journey in the fields of Artificial Intelligence and Machine Learning."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {exploringAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <area.icon className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium border border-primary/20 text-primary bg-primary/5">
                  {area.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground">{area.title}</h3>
              <p className="text-[var(--muted)] leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
