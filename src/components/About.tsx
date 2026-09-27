'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const dimensions = [
  {
    id: 'build',
    title: 'BUILD',
    headline: 'Building real applications.',
    content: 'I build websites, AI-powered applications, and digital products using Python, JavaScript, and modern web technologies. I focus on deploying robust, scalable products that solve actual problems.',
  },
  {
    id: 'learn',
    title: 'LEARN',
    headline: 'Continuous progression toward AI Engineering.',
    content: 'Currently a Software Engineering student at COMSATS University Islamabad (Wah Campus). I am systematically learning Machine Learning, Deep Learning, and AI architectures to transition from application developer to AI Engineer.',
  },
  {
    id: 'operate',
    title: 'OPERATE',
    headline: 'Business operations and leadership.',
    content: 'As Co-Founder & COO at CloudExify, I oversee business operations, product lifecycles, and team coordination. I have practical leadership experience serving as a Site Supervisor for internship programs.',
  },
  {
    id: 'grow',
    title: 'GROW',
    headline: 'Marketing and digital presence.',
    content: 'I expand beyond code by working with marketing strategies, lead generation, and social media management to ensure the products we build actually reach and resonate with users.',
  }
];

export default function About() {
  const [activeDimension, setActiveDimension] = useState(dimensions[0].id);

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-sm font-medium text-primary">01</span>
          <div className="h-px w-12 bg-primary/20" />
          <h2 className="font-syne text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase">About</h2>
        </div>

        <div className="grid lg:grid-cols-[0.8fr,1fr] gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-syne text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.2] tracking-tight mb-8">
              More Than Just Code.
            </h3>
            
            <div className="relative w-full aspect-[4/5] bg-section-bg border border-gray-100 overflow-hidden shadow-sm">
              <Image 
                src="/profile.jpg" 
                alt="Mustafa Hussain" 
                fill 
                className="object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <div className="flex flex-wrap gap-4 mb-12">
              {dimensions.map((dim) => (
                <button
                  key={dim.id}
                  onClick={() => setActiveDimension(dim.id)}
                  className={`font-mono text-xs sm:text-sm font-bold tracking-widest px-4 py-2 border transition-all duration-300 ${
                    activeDimension === dim.id 
                      ? 'bg-foreground text-background border-foreground' 
                      : 'bg-transparent text-muted border-gray-200 hover:border-foreground hover:text-foreground'
                  }`}
                >
                  {dim.title}
                </button>
              ))}
            </div>

            <div className="min-h-[200px] relative">
              <AnimatePresence mode="wait">
                {dimensions.map((dim) => {
                  if (dim.id !== activeDimension) return null;
                  return (
                    <motion.div
                      key={dim.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <h4 className="font-syne text-2xl md:text-3xl font-bold text-foreground mb-6">
                        {dim.headline}
                      </h4>
                      <p className="text-muted text-base md:text-lg leading-relaxed font-inter font-light">
                        {dim.content}
                      </p>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
