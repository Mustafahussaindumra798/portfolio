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
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiWordpress,
  SiGit,
  SiGithub,

} from 'react-icons/si';
import { Bot, Globe, Code2 } from 'lucide-react';
import { FaJava } from 'react-icons/fa';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Java', icon: <FaJava />, color: '#007396' },
      { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
      { name: 'Python', icon: <SiPython />, color: '#3776AB' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', icon: <SiReact />, color: '#61DAFB' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
      { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <SiCss />, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
      { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'Supabase', icon: <SiSupabase />, color: '#3ECF8E' },
    ],
  },
  {
    category: 'CMS / Tools',
    skills: [
      { name: 'WordPress', icon: <SiWordpress />, color: '#21759B' },
      { name: 'Git', icon: <SiGit />, color: '#F05032' },
      { name: 'GitHub', icon: <SiGithub />, color: '#181717' },
      { name: 'VS Code', icon: <Code2 />, color: '#007ACC' },
    ],
  },
  {
    category: 'AI / Other',
    skills: [
      { name: 'AI Chatbots', icon: <Bot />, color: '#FF5733' },
      { name: 'REST APIs', icon: <Globe />, color: '#00D4FF' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 w-1/3 h-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          subtitle="// My Skills"
          title="Technologies I Master"
          description="A professional toolkit of languages, frameworks, and tools used to build high-performance digital products."
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
                <h3 className="font-syne text-xl font-bold text-foreground/80 tracking-tight">
                  {group.category}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: groupIndex * 0.05 + skillIndex * 0.03,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -5,
                      boxShadow: `0 10px 30px -10px ${skill.color}40`,
                    }}
                    className="group relative flex flex-col items-center justify-center p-6 rounded-2xl glass border border-transparent hover:border-primary/20 transition-all duration-300 cursor-default"
                  >
                    <div 
                      className="relative w-16 h-16 mb-4 flex items-center justify-center rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors duration-500 shadow-inner"
                    >
                      <div 
                        className="text-4xl transition-transform duration-500 group-hover:scale-110 relative z-10"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      {/* Glow effect */}
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                    <span className="text-sm font-bold text-foreground/70 group-hover:text-foreground transition-colors tracking-tight">
                      {skill.name}
                    </span>
                    
                    {/* Subtle background glow on hover */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"
                      style={{ backgroundColor: skill.color }}
                    />
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
