'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from './SectionHeader';
import { Maximize2, X, FileBadge } from 'lucide-react';

const credentials = [
  {
    title: 'Letter of Recommendation',
    issuer: 'Arch Technologies',
    date: 'May 30, 2026',
    image: '/certificates/arch-tech-recommendation.png',
    category: 'Experience',
  },
  {
    title: 'Web Development Internship',
    issuer: 'Arch Technologies',
    date: 'April 2026 - May 2026',
    image: '/certificates/arch-tech-internship.png',
    category: 'Experience',
  },
  {
    title: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'University of Michigan',
    date: 'July 31, 2026',
    image: '/certificates/umich-python.png',
    category: 'Certification',
  },
  {
    title: 'Start Writing Prompts like a Pro',
    issuer: 'Google',
    date: 'August 10, 2026',
    image: '/certificates/google-prompts.png',
    category: 'Certification',
  },
  {
    title: 'HackData V1 - Certificate of Participation',
    issuer: 'GDG CUI Wah',
    date: '2026',
    image: '/certificates/hackdata-participation.jpg',
    category: 'Hackathon',
  },
];

export default function Credentials() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="credentials" className="section-padding relative">
      <div className="absolute inset-0 bg-[var(--section-bg)]/30" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          subtitle="// Verifiable Achievements"
          title="Credentials & Certifications."
          description="Official recognition of my skills, continuous learning, and professional experiences."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {credentials.map((cred, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div 
                className="relative aspect-[4/3] w-full overflow-hidden bg-white/5 cursor-pointer"
                onClick={() => setSelectedImage(cred.image)}
              >
                <Image
                  src={cred.image}
                  alt={cred.title}
                  fill
                  className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between border-t border-[var(--card-border)]">
                <div>
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <h3 className="font-bold text-foreground line-clamp-2">
                      {cred.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mb-1">
                    <FileBadge className="w-4 h-4" />
                    {cred.issuer}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-[var(--muted)]">{cred.date}</span>
                  <span className="px-2 py-1 bg-foreground/5 text-[var(--muted)] text-[10px] uppercase tracking-wider rounded-md">
                    {cred.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for full screen image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-5xl aspect-[4/3] max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Credential"
                fill
                className="object-contain"
                quality={100}
                unoptimized
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
