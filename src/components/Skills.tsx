'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPandas,
  SiScikitlearn,
  SiOpenai,
  SiGit,
  SiDocker,
  SiVercel
} from 'react-icons/si';
import { Brain, Code, Monitor, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    icon: <Code className="w-5 h-5" />,
    skills: [
      { name: 'Python', icon: <SiPython />, color: '#3776AB' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    ],
  },
  {
    category: 'Web Development',
    icon: <Monitor className="w-5 h-5" />,
    skills: [
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
      { name: 'React', icon: <SiReact />, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
      { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
    ],
  },
  {
    category: 'AI & Data Processing',
    icon: <Brain className="w-5 h-5" />,
    skills: [
      { name: 'Machine Learning', icon: <Brain />, color: '#8B5CF6' },
      { name: 'Pandas', icon: <SiPandas />, color: '#150458' },
      { name: 'Scikit-Learn', icon: <SiScikitlearn />, color: '#F7931E' },
      { name: 'OpenAI API', icon: <SiOpenai />, color: '#412991' },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      { name: 'Git', icon: <SiGit />, color: '#F05032' },
      { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
      { name: 'Vercel', icon: <SiVercel />, color: '#000000' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          subtitle="// My Expertise"
          title="Technical Arsenal."
          description="A curated toolkit of languages, frameworks, and libraries I use to build scalable applications."
        />

        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--primary)] shadow-sm">
                  {group.icon}
                </div>
                <h3 className="font-syne text-xl font-bold text-[var(--foreground)] tracking-tight">
                  {group.category}
                </h3>
                <div className="h-px flex-1 bg-[var(--card-border)]" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: groupIndex * 0.05 + skillIndex * 0.03,
                    }}
                    viewport={{ once: true }}
                    className="group relative flex flex-col items-center justify-center p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--primary)] transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                  >
                    <div 
                      className="relative w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-[var(--section-bg)] group-hover:bg-[var(--primary)]/5 transition-colors duration-300"
                    >
                      <div 
                        className="text-3xl transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors tracking-tight text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
