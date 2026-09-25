'use client';

import { motion } from 'framer-motion';

const expertiseAreas = [
  {
    number: '01',
    title: 'Full-Stack Development',
    description: 'Architecting robust, scalable web applications using modern JavaScript/TypeScript ecosystems. Focusing on high-performance frontends and secure, efficient backend services.',
    tech: 'React, Next.js, Node.js, TypeScript, Tailwind CSS'
  },
  {
    number: '02',
    title: 'Python Development',
    description: 'Developing data-intensive applications, automation scripts, and backend systems. Building resilient microservices and complex analytical tools.',
    tech: 'Python, FastAPI, Django, Pandas, Data Engineering'
  },
  {
    number: '03',
    title: 'AI & API Integration',
    description: 'Integrating Large Language Models and intelligent capabilities into existing products. Designing smart features that elevate user experience and operational efficiency.',
    tech: 'OpenAI API, Machine Learning, Scikit-Learn, REST APIs'
  },
  {
    number: '04',
    title: 'Digital Product Strategy',
    description: 'Guiding technical product lifecycles from conception to deployment. Translating business requirements into technical architecture and actionable engineering plans.',
    tech: 'System Architecture, Technical Leadership, Agile'
  }
];

export default function Services() {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-sm font-medium text-primary">04</span>
              <div className="h-px w-12 bg-primary/20" />
              <h2 className="font-syne text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase">Expertise</h2>
            </div>
            <h3 className="font-syne text-3xl md:text-5xl font-bold text-foreground max-w-2xl leading-[1.1] tracking-tight">
              Technical capabilities focused on product delivery.
            </h3>
          </div>
        </div>

        <div className="flex flex-col border-t border-gray-200">
          {expertiseAreas.map((area, index) => (
            <motion.div 
              key={area.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-1 md:grid-cols-[100px,1fr,1fr] lg:grid-cols-[150px,1.5fr,2fr] gap-6 md:gap-12 py-10 md:py-16 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-500"
            >
              {/* Number */}
              <div className="font-mono text-xl text-muted font-light px-4 md:px-0 group-hover:text-primary transition-colors">
                {area.number}
              </div>

              {/* Title & Tech */}
              <div className="px-4 md:px-0">
                <h4 className="font-syne text-2xl font-bold text-foreground mb-4">{area.title}</h4>
                <div className="font-mono text-xs text-primary font-medium tracking-wide uppercase">
                  {area.tech}
                </div>
              </div>

              {/* Description */}
              <div className="px-4 md:px-0 flex items-center">
                <p className="text-muted text-base md:text-lg leading-relaxed font-inter font-light">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
