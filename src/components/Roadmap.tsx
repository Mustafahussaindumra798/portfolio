'use client';

import { motion } from 'framer-motion';

const timelineNodes = [
  { id: 'foundations', title: 'Programming Foundations', status: 'completed' },
  { id: 'cpp', title: 'C++', status: 'completed' },
  { id: 'java', title: 'Object-Oriented Programming with Java', status: 'completed' },
  { id: 'python', title: 'Python', status: 'completed' },
  { id: 'numpy', title: 'NumPy', status: 'completed' },
  { id: 'aiapp', title: 'AI Application Development', status: 'current' },
  { id: 'roadmap', title: 'AI Engineering Roadmap', status: 'future' },
  { id: 'ml', title: 'Machine Learning', status: 'future' },
  { id: 'dl', title: 'Deep Learning', status: 'future' },
  { id: 'advanced', title: 'Advanced AI Engineering', status: 'future' },
];

export default function Roadmap() {
  return (
    <section className="py-24 bg-section-bg border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-sm font-medium text-primary mb-4 block">02 &middot; ENGINEERING JOURNEY</span>
            <h2 className="font-syne text-3xl md:text-4xl font-semibold text-foreground leading-[1.3] tracking-tight">
              The Path to AI Engineering.
            </h2>
          </motion.div>
        </div>

        <div className="relative border-l border-gray-200 ml-4 md:ml-8 pl-8 py-4">
          {timelineNodes.map((node, i) => (
            <motion.div 
              key={node.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              className="mb-8 last:mb-0 relative group"
            >
              {/* Timeline dot */}
              <div 
                className={`absolute -left-[37px] top-1.5 w-3 h-3 rounded-full transition-colors duration-300 ${
                  node.status === 'completed' ? 'bg-foreground' : 
                  node.status === 'current' ? 'bg-primary ring-4 ring-primary/20' : 
                  'bg-white border-2 border-gray-300'
                }`}
              />
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <span className={`font-mono text-[10px] font-bold uppercase tracking-widest w-24 shrink-0 ${
                  node.status === 'completed' ? 'text-gray-400' :
                  node.status === 'current' ? 'text-primary' :
                  'text-gray-300'
                }`}>
                  {node.status}
                </span>
                <span className={`font-inter text-base md:text-lg font-medium transition-colors ${
                  node.status === 'completed' ? 'text-foreground' :
                  node.status === 'current' ? 'text-primary font-bold' :
                  'text-muted'
                }`}>
                  {node.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
