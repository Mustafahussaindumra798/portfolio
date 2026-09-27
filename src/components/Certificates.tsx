'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, ZoomIn } from 'lucide-react';
import Image from 'next/image';

const certificates = [
  {
    title: 'Google Prompting Essentials',
    issuer: 'Google',
    date: '2024',
    image: '/certificates/google-prompting-essentials.png',
    verifyUrl: 'https://coursera.org/verify/...'
  },
  {
    title: 'Python for Everybody',
    issuer: 'University of Michigan',
    date: '2024',
    image: '/certificates/python-michigan.png',
    verifyUrl: 'https://coursera.org/verify/...'
  },
  {
    title: 'Architecting with Google Compute Engine',
    issuer: 'Google Cloud',
    date: '2024',
    image: '/certificates/arch-technologies.png',
    verifyUrl: 'https://coursera.org/verify/...'
  },
  {
    title: 'HackData',
    issuer: 'Hackathon',
    date: '2024',
    image: '/certificates/hackdata.jpg',
    verifyUrl: '#'
  }
];

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col items-center text-center mb-24">
          <span className="font-mono text-sm font-medium text-primary mb-4 block">08 &middot; CREDENTIALS</span>
          <h2 className="font-syne text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground uppercase">
            Certifications.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-section-bg border border-gray-100 hover:border-gray-300 transition-colors flex flex-col overflow-hidden group"
            >
              <div 
                onClick={() => setSelectedImage(cert.image)}
                className="w-full aspect-[4/3] relative bg-gray-50 border-b border-gray-100 cursor-pointer overflow-hidden"
              >
                <Image 
                  src={cert.image} 
                  alt={cert.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                  {cert.issuer}
                </span>
                <h3 className="font-syne font-bold text-foreground mb-4 leading-snug">
                  {cert.title}
                </h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-mono text-xs text-muted">{cert.date}</span>
                  {cert.verifyUrl !== '#' && (
                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors">
                      Verify <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-12 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-[1.414/1] bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage} 
                alt="Certificate" 
                fill 
                className="object-contain" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
