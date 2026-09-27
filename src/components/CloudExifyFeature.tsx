'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Lightbulb, Users, Package, Briefcase, TrendingUp } from 'lucide-react';

const funnel = [
  { id: 'idea', icon: Lightbulb, label: 'IDEA', desc: 'Identifying market gaps.' },
  { id: 'team', icon: Users, label: 'TEAM', desc: 'Building engineering talent.' },
  { id: 'products', icon: Package, label: 'PRODUCTS', desc: 'Developing AI tools.' },
  { id: 'clients', icon: Briefcase, label: 'CLIENTS', desc: 'Marketing & lead generation.' },
  { id: 'growth', icon: TrendingUp, label: 'GROWTH', desc: 'Scaling operations.' },
];

export default function CloudExifyFeature() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 lg:gap-24">
          
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-sm font-medium text-white/50">06</span>
                <div className="h-px w-12 bg-white/20" />
                <h2 className="font-syne text-xl md:text-2xl font-bold tracking-tight uppercase">Entrepreneurship</h2>
              </div>
              
              <h3 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
                Building CloudExify.
              </h3>
              
              <div className="font-mono text-sm tracking-widest uppercase text-primary mb-8 font-semibold">
                Co-Founder & COO
              </div>
              
              <p className="text-white/70 text-base md:text-lg leading-relaxed font-inter font-light mb-6">
                At CloudExify, I combine technical development with business operations. My responsibilities span Product Development, Operations, Marketing, Lead Generation, and Social Media Management.
              </p>
              
              <p className="text-white/70 text-base md:text-lg leading-relaxed font-inter font-light mb-10">
                It is an entrepreneurial environment where we build solutions and ensure they successfully reach clients, teaching me the entire lifecycle of a digital product.
              </p>
              
              <a 
                href="#"
                className="group inline-flex items-center gap-2 font-inter text-sm font-semibold text-white hover:text-primary transition-colors"
              >
                Visit CloudExify
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 flex items-center justify-center"
          >
            <div className="w-full max-w-sm flex flex-col gap-0 relative">
              {/* Connecting line */}
              <div className="absolute left-8 md:left-[3.25rem] top-8 bottom-8 w-px bg-white/20" />

              {funnel.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="flex items-center gap-6 py-4 relative group"
                  >
                    <div className="w-16 h-16 shrink-0 rounded-full bg-foreground border border-white/20 flex items-center justify-center relative z-10 group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-syne font-bold text-lg text-white mb-1 tracking-wide">{item.label}</h4>
                      <p className="font-inter font-light text-sm text-white/50">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
