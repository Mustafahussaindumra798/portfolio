'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const certificates = [
  {
    title: "Google Prompting Essentials",
    issuer: "Google / Coursera",
    date: "Sep 18, 2026",
    image: "/certificates/google-prompting-essentials.png",
    credentialUrl: "https://coursera.org/verify/specialization/M86E9U51LM35"
  },
  {
    title: "Start Writing Prompts like a Pro",
    issuer: "Google / Coursera",
    date: "Aug 10, 2026",
    image: "/certificates/google-prompts-pro.png",
    credentialUrl: "https://coursera.org/verify/WGPHKTMT95IJ"
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan / Coursera",
    date: "Jul 31, 2026",
    image: "/certificates/python-michigan.png",
    credentialUrl: "https://coursera.org/verify/15ULSDEPLPSJ"
  },
  {
    title: "Web Development Internship and Training Program (8 Weeks)",
    issuer: "Arch Technologies",
    date: "May 2026",
    image: "/certificates/arch-technologies.png",
    credentialUrl: ""
  },
  {
    title: "HACKDATA V1 - Certificate of Participation",
    issuer: "Google Developer Groups (COMSATS University Wah)",
    date: "2026",
    image: "/certificates/hackdata.jpg",
    credentialUrl: ""
  }
];

export default function Certificates() {
  if (certificates.length === 0) return null;

  return (
    <section id="certificates" className="py-24 md:py-32 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-sm font-medium text-primary">06</span>
              <div className="h-px w-12 bg-primary/20" />
              <h2 className="font-syne text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase">Certifications & Learning</h2>
            </div>
            <h3 className="font-syne text-3xl md:text-4xl font-bold text-foreground max-w-2xl leading-[1.2] tracking-tight">
              Verified credentials and continuous education.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col"
            >
              <div className="w-full aspect-[4/3] bg-section-bg border border-gray-200 mb-6 relative overflow-hidden flex items-center justify-center">
                {cert.image ? (
                  <Image src={cert.image} alt={cert.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <div className="text-muted font-mono text-sm uppercase tracking-widest px-4 text-center">
                    Certificate Image
                  </div>
                )}
              </div>
              
              <h4 className="font-syne text-lg font-bold text-foreground mb-2 leading-tight">
                {cert.title}
              </h4>
              
              <div className="flex items-center justify-between mt-auto pt-4">
                <div className="flex flex-col">
                  <span className="text-sm font-inter text-foreground font-medium">{cert.issuer}</span>
                  <span className="text-xs font-mono text-muted uppercase tracking-wider mt-1">{cert.date}</span>
                </div>
                
                {cert.credentialUrl && cert.credentialUrl !== "#" && (
                  <a 
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-foreground hover:bg-foreground hover:text-white transition-colors"
                    aria-label="Verify Certificate"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
