'use client';

import { motion } from 'framer-motion';

const activeProjects = [
  {
    title: 'AI Engineering Roadmap',
    description: 'Deep diving into Machine Learning fundamentals and neural network architectures using PyTorch and scikit-learn.',
    status: 'Learning',
  },
  {
    title: 'Restro AI',
    description: 'Scaling the frontend architecture for an AI-integrated restaurant management platform.',
    status: 'Building',
  },
  {
    title: 'CloudExify Products',
    description: 'Architecting internal tools and exploring new AI application opportunities for local businesses.',
    status: 'Exploring',
  }
];

export default function CurrentlyBuilding() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Learning': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Building': return 'bg-green-100 text-green-700 border-green-200';
      case 'Exploring': return 'bg-amber-100 text-amber-700 border-amber-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section className="py-24 bg-section-bg border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-sm font-medium text-primary mb-4 block">11 &middot; ACTIVE WORK</span>
          <h2 className="font-syne text-3xl md:text-4xl font-bold tracking-tight text-foreground uppercase mb-6">
            Currently Building
          </h2>
          <p className="text-muted text-base max-w-2xl font-inter font-light">
            A transparent look at what occupies my time right now across engineering, learning, and business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {activeProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-gray-200 p-8 hover:border-foreground transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="mb-6">
                  <span className={`px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest border rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="font-syne text-xl font-bold text-foreground mb-4">{project.title}</h3>
                <p className="font-inter text-sm text-muted leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
