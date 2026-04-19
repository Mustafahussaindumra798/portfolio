'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import AnimatedCounter from './AnimatedCounter';
import { Code2, Briefcase, Users, Calendar } from 'lucide-react';

const stats = [
  { end: 8, suffix: '+', label: 'Projects Completed', icon: Code2 },
  { end: 14, suffix: '+', label: 'Technologies Known', icon: Briefcase },
  { end: 6, suffix: '+', label: 'Happy Clients', icon: Users },
  { end: 1, suffix: '+ Year', label: 'Experience', icon: Calendar },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-[var(--section-bg)]/50" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          subtitle="// About Me"
          title="Who I Am"
          description="A passionate developer crafting digital experiences that make a difference."
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
                I&apos;m <span className="text-primary font-semibold">Mustafa Hussain</span>, a
                BSc Software Engineering student with 1 year of professional experience in building
                innovative web solutions. I specialize in full-stack development using
                modern technologies like <span className="text-primary">React</span>,{' '}
                <span className="text-primary">Next.js</span>, and{' '}
                <span className="text-primary">Node.js</span>.
              </p>
              <p className="text-[var(--muted)] text-base md:text-lg leading-relaxed">
                Beyond web development, I&apos;m deeply interested in{' '}
                <span className="text-accent-300">AI chatbot development</span> and
                creating intelligent systems that enhance user experiences. I believe
                in writing clean, maintainable code and building products that solve
                real-world problems.
              </p>
              <p className="text-[var(--muted)] text-base md:text-lg leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                contributing to open-source projects, or helping businesses establish
                their digital presence through custom WordPress solutions and modern
                web applications.
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
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AI/ML'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono glass text-primary border border-primary/10"
                  >
                    {tech}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Right — Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl glass p-6 hover:border-primary/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.08)]"
              >
                <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors">
                  <stat.icon className="w-8 h-8" />
                </div>
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
