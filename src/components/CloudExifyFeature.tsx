'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

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
                <span className="font-mono text-sm font-medium text-white/50">07</span>
                <div className="h-px w-12 bg-white/20" />
                <h2 className="font-syne text-xl md:text-2xl font-bold tracking-tight uppercase">Product Leadership</h2>
              </div>
              
              <h3 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
                Building With CloudExify.
              </h3>
              
              <div className="font-mono text-sm tracking-widest uppercase text-primary mb-8 font-semibold">
                Co-Founder & COO
              </div>
              
              <p className="text-white/70 text-lg leading-relaxed font-inter font-light mb-10">
                At CloudExify, I drive the technical vision and operational execution. 
                My focus is on transforming complex infrastructure and cloud challenges into seamless, 
                scalable software products that empower modern businesses to operate with unparalleled efficiency.
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
            className="w-full md:w-1/2"
          >
            {/* Minimalist Abstract Representation of CloudExify Product */}
            <div className="w-full aspect-square border border-white/10 bg-white/5 relative overflow-hidden flex items-center justify-center p-8 lg:p-12">
              <div className="w-full h-full border border-white/10 relative flex flex-col">
                <div className="h-12 border-b border-white/10 flex items-center px-6 gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <div className="flex-1 p-6 flex gap-6">
                  <div className="w-1/3 h-full border border-white/10 bg-white/5" />
                  <div className="flex-1 flex flex-col gap-6">
                    <div className="h-1/2 border border-white/10 bg-white/5" />
                    <div className="h-1/2 border border-white/10 bg-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
