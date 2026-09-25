'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import AnimatedCounter from './AnimatedCounter';
import { Code2, BrainCircuit, Rocket } from 'lucide-react';

const focuses = [
  {
    title: 'Software Development',
    description: 'Building responsive, scalable web applications with Next.js, Python, and modern architectures.',
    icon: Code2,
  },
  {
    title: 'Artificial Intelligence',
    description: 'Exploring machine learning models, predictive analytics, and integrating LLMs into practical tools.',
    icon: BrainCircuit,
  },
  {
    title: 'Tech Leadership',
    description: 'Managing operations and driving product vision as Co-Founder & COO at CloudExify.',
    icon: Rocket,
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-[var(--section-bg)]/50" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          subtitle="// About Me"
          title="More Than Just Code."
          description="A Software Engineering student dedicated to bridging the gap between theoretical computer science and practical, business-ready applications."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="space-y-5">
              <p className="text-[var(--muted)] text-base md:text-lg leading-relaxed">
                I am <span className="text-primary font-semibold">Mustafa Hussain</span>, a
                Software Engineering student with a deep passion for building
                intelligent systems. I specialize in <span className="text-primary">Python Development</span>,{' '}
                <span className="text-primary">Full-Stack Web Architectures</span>, and integrating{' '}
                <span className="text-primary">AI Models</span> into everyday applications.
              </p>
              <p className="text-[var(--muted)] text-base md:text-lg leading-relaxed">
                Beyond my academic coursework, I focus on{' '}
                <span className="text-accent">practical application and continuous learning</span>. 
                Whether I am engineering a robust backend for a new web app, training predictive models, 
                or streamlining prompt engineering workflows, I am driven by the desire to create technology that actually matters.
              </p>
              <p className="text-[var(--muted)] text-base md:text-lg leading-relaxed">
                As the <span className="text-primary">Co-Founder and COO of CloudExify</span>, I also 
                manage operations, coordinate development teams, and help steer our product strategy 
                to deliver scalable digital solutions to our clients.
              </p>
            </div>

            {/* Tech stack inline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {['Python', 'Next.js', 'Machine Learning', 'Data Science', 'React', 'TailwindCSS'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-md border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground)]"
                  >
                    {tech}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Right — Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-50px' }}
            className="flex flex-col gap-4"
          >
            {focuses.map((focus, i) => (
              <motion.div
                key={focus.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex gap-4 p-5 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--primary)] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-[var(--primary)]/5 flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
                  <focus.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-semibold mb-1">{focus.title}</h4>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{focus.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
