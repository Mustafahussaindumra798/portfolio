'use client';

import { motion } from 'framer-motion';

const techGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'Backend',
    skills: ['Python', 'Node.js', 'REST APIs', 'PostgreSQL', 'FastAPI']
  },
  {
    category: 'AI & Data',
    skills: ['Machine Learning', 'Pandas', 'Scikit-Learn', 'OpenAI API', 'Data Analytics']
  },
  {
    category: 'Tools & Cloud',
    skills: ['Git', 'Docker', 'Vercel', 'AWS', 'Linux']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-section-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-sm font-medium text-primary">08</span>
          <div className="h-px w-12 bg-primary/20" />
          <h2 className="font-syne text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase">Technology</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {techGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: groupIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-syne text-lg font-bold text-foreground mb-8 pb-4 border-b border-gray-200">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-4">
                {group.skills.map((skill) => (
                  <li key={skill} className="font-inter text-base text-muted hover:text-foreground transition-colors font-light">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
