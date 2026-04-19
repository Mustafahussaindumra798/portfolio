'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiWordpress,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
} from 'react-icons/si';
import { Bot, Globe } from 'lucide-react';
import { FaJava } from 'react-icons/fa';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Java', icon: <FaJava className="w-5 h-5" /> },
      { name: 'C++', icon: <SiCplusplus className="w-5 h-5" /> },
      { name: 'Python', icon: <SiPython className="w-5 h-5" /> },
      { name: 'JavaScript', icon: <SiJavascript className="w-5 h-5" /> },
      { name: 'TypeScript', icon: <SiTypescript className="w-5 h-5" /> },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', icon: <SiReact className="w-5 h-5" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="w-5 h-5" /> },
      { name: 'HTML5', icon: <SiHtml5 className="w-5 h-5" /> },
      { name: 'CSS3', icon: <SiCss3 className="w-5 h-5" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-5 h-5" /> },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs className="w-5 h-5" /> },
      { name: 'Express.js', icon: <SiExpress className="w-5 h-5" /> },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MySQL', icon: <SiMysql className="w-5 h-5" /> },
      { name: 'MongoDB', icon: <SiMongodb className="w-5 h-5" /> },
      { name: 'Supabase', icon: <SiSupabase className="w-5 h-5" /> },
    ],
  },
  {
    category: 'CMS / Tools',
    skills: [
      { name: 'WordPress', icon: <SiWordpress className="w-5 h-5" /> },
      { name: 'Git', icon: <SiGit className="w-5 h-5" /> },
      { name: 'GitHub', icon: <SiGithub className="w-5 h-5" /> },
      { name: 'VS Code', icon: <SiVisualstudiocode className="w-5 h-5" /> },
    ],
  },
  {
    category: 'AI / Other',
    skills: [
      { name: 'AI Chatbots', icon: <Bot className="w-5 h-5" /> },
      { name: 'REST APIs', icon: <Globe className="w-5 h-5" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          subtitle="// My Skills"
          title="Technologies I Work With"
          description="A curated toolkit of languages, frameworks, and tools I use to bring ideas to life."
        />

        <div className="space-y-10">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true, margin: '-30px' }}
            >
              <h3 className="font-mono text-sm text-[var(--muted)] tracking-wider uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-primary/40" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: groupIndex * 0.05 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                    }}
                    className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass border border-transparent hover:border-primary/30 transition-all duration-300 cursor-default hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]"
                  >
                    <span className="text-[var(--muted)] group-hover:text-primary transition-colors duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium">{skill.name}</span>
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
