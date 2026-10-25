'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import Image from 'next/image';

const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;

const certificates = [
  {
    title: 'Google Prompting Essentials',
    issuer: 'Google',
    image: '/certificates/google-prompting-essentials.png',
  },
  {
    title: 'Programming for Everybody: Getting Started with Python',
    issuer: 'University of Michigan / Coursera',
    image: '/certificates/python-michigan.png',
  },
  {
    title: 'HACKDATAV1',
    issuer: 'GDG Comsats Wah / COMSATS Wah Hackathon',
    image: '/certificates/hackdata.jpg',
  },
];

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificates)[number] | null>(null);

  return (
    <section id="certificates" className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Learning & achievements</p>
          <h2 className="font-syne text-3xl font-bold sm:text-4xl">Certificates & Recognition</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">
            A few milestones from my learning journey and university activities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.button
              key={certificate.title}
              type="button"
              onClick={() => setSelectedCertificate(certificate)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] text-left shadow-sm transition-shadow hover:shadow-lg"
              aria-label={`View certificate: ${certificate.title}`}
            >
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-white p-3">
                <Image
                  src={assetPath(certificate.image)}
                  alt={certificate.title}
                  width={640}
                  height={440}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span className="absolute right-3 top-3 rounded-full bg-black/65 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{certificate.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{certificate.issuer}</p>
                <p className="mt-4 text-xs font-semibold text-primary">Click to view certificate</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={selectedCertificate.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl rounded-2xl bg-white p-3 shadow-2xl sm:p-5"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/70 p-2 text-white transition hover:bg-black"
                aria-label="Close certificate preview"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative flex max-h-[78vh] min-h-56 items-center justify-center">
                <Image
                  src={assetPath(selectedCertificate.image)}
                  alt={selectedCertificate.title}
                  width={1400}
                  height={1000}
                  className="max-h-[78vh] w-full object-contain"
                />
              </div>
              <div className="px-2 pb-1 pt-3 text-center">
                <h3 className="font-semibold text-gray-900">{selectedCertificate.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{selectedCertificate.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
