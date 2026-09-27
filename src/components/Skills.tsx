'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, FlaskConical } from 'lucide-react';

const skillsData = [
  {
    category: 'CURRENT ENGINEERING SKILLS',
    status: 'Confident',
    icon: CheckCircle2,
    skills: [
      { name: 'Python', desc: 'Core language for logic, backend, and data tasks.' },
      { name: 'C++', desc: 'Strong foundation in memory management and structures.' },
      { name: 'Java', desc: 'Enterprise patterns and complex architectures.' },
      { name: 'Object-Oriented Programming', desc: 'Clean, modular, and reusable code design.' },
      { name: 'NumPy', desc: 'Numerical computations and matrix operations.' },
      { name: 'HTML & CSS', desc: 'Semantic structure and modern styling.' },
      { name: 'JavaScript & TypeScript', desc: 'Dynamic interfaces and type-safe logic.' },
      { name: 'Git & GitHub', desc: 'Version control and team collaboration.' },
      { name: 'Vercel & Deployment', desc: 'CI/CD and modern edge hosting.' },
      { name: 'APIs', desc: 'RESTful integrations and data fetching.' },
      { name: 'AI Application Development', desc: 'Integrating LLMs into practical tools.' },
    ]
  },
  {
    category: 'CURRENTLY LEARNING / EXPLORING',
    status: 'Learning',
    icon: FlaskConical,
    skills: [
      { name: 'Pandas', desc: 'Data manipulation and analysis.' },
      { name: 'Matplotlib & Seaborn', desc: 'Data visualization and charting.' },
      { name: 'scikit-learn', desc: 'Traditional machine learning algorithms.' },
      { name: 'Machine Learning', desc: 'Core ML concepts and model training.' },
      { name: 'Deep Learning', desc: 'Neural networks and deep architectures.' },
      { name: 'PyTorch', desc: 'Deep learning framework for research and production.' },
      { name: 'AI Agents', desc: 'Autonomous problem-solving systems.' },
      { name: 'RAG', desc: 'Retrieval-Augmented Generation architectures.' },
      { name: 'LLM/API Integration', desc: 'Advanced prompt engineering and AI tool calling.' },
    ]
  }
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-sm font-medium text-primary">04</span>
          <div className="h-px w-12 bg-primary/20" />
          <h2 className="font-syne text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase">Technical Arsenal</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {skillsData.map((group, groupIdx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: groupIdx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                <div className="mb-8 pb-4 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="font-syne text-lg md:text-xl font-bold text-foreground">
                    {group.category}
                  </h3>
                  <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full">
                    <Icon className={`w-3.5 h-3.5 ${groupIdx === 0 ? 'text-green-500' : 'text-primary'}`} />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted">
                      {group.status}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="relative group/skill"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className={`px-4 py-2 border transition-colors cursor-default ${
                        hoveredSkill === skill.name 
                          ? 'bg-foreground text-background border-foreground' 
                          : 'bg-white text-foreground border-gray-200 hover:border-gray-400'
                      }`}>
                        <span className="font-inter text-sm font-medium">{skill.name}</span>
                      </div>
                      
                      {/* Tooltip */}
                      <AnimatePresence>
                        {hoveredSkill === skill.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.15 }}
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-foreground text-background text-xs font-inter font-light shadow-xl z-50 pointer-events-none"
                          >
                            <div className="font-bold mb-1">{skill.name}</div>
                            <div className="text-gray-300">{skill.desc}</div>
                            {/* Little triangle */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
