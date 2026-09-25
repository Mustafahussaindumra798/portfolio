'use client';

import { motion } from 'framer-motion';

const techGroups = [
  {
    category: 'Programming',
    status: 'Confident',
    skills: ['Python', 'Java', 'C++']
  },
  {
    category: 'Object-Oriented Programming',
    status: 'Confident',
    skills: ['Java OOP', 'Object-Oriented Programming concepts', 'C++ programming']
  },
  {
    category: 'Python Development',
    status: 'Confident',
    skills: ['Python development', 'Python libraries', 'Python-based application development']
  },
  {
    category: 'AI & Product Development',
    status: 'Currently Exploring',
    description: 'Exploring how AI can be integrated into practical products, applications, and user experiences.',
    skills: ['AI-powered applications', 'AI product development', 'AI experimentation', 'API integration']
  },
  {
    category: 'Web Development',
    status: 'Confident',
    skills: ['HTML & CSS', 'JavaScript', 'React & Next.js', 'Tailwind CSS']
  },
  {
    category: 'Development Approach',
    status: 'Workflow',
    description: 'Rapid experimentation and AI-assisted development workflows used to prototype, iterate, and build products faster.',
    skills: ['Vibe Coding', 'Rapid prototyping', 'Problem solving', 'Product experimentation']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-section-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-sm font-medium text-primary">03</span>
          <div className="h-px w-12 bg-primary/20" />
          <h2 className="font-syne text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase">Skills & Learning</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {techGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: groupIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <div className="mb-6 pb-4 border-b border-gray-200">
                <span className="inline-block text-[10px] font-mono font-bold tracking-widest uppercase mb-2 text-primary bg-primary/5 px-2 py-1">
                  {group.status}
                </span>
                <h3 className="font-syne text-xl font-bold text-foreground">
                  {group.category}
                </h3>
              </div>
              
              {group.description && (
                <p className="text-sm font-inter text-muted mb-4 font-light leading-relaxed">
                  {group.description}
                </p>
              )}

              <ul className="flex flex-col gap-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="font-inter text-base text-foreground font-medium flex items-start gap-2">
                    <span className="text-primary/40 mt-1">&rarr;</span>
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
