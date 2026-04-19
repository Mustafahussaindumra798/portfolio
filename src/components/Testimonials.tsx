'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'TechVentures Inc.',
    content:
      'Mustafa delivered an outstanding e-commerce platform that exceeded our expectations. His attention to detail and problem-solving skills are remarkable. The site loads blazingly fast and conversions have increased by 40%.',
    rating: 5,
    avatar: 'SM',
  },
  {
    name: 'Ahmed Khan',
    role: 'Founder',
    company: 'EduStart Pakistan',
    content:
      'Working with Mustafa was a fantastic experience. He built our student management system with incredible precision and the AI chatbot integration has reduced our support tickets by 60%. Highly recommended!',
    rating: 5,
    avatar: 'AK',
  },
  {
    name: 'Emily Chen',
    role: 'Marketing Director',
    company: 'GrowthLab Digital',
    content:
      'Mustafa redesigned our WordPress site and the results were phenomenal. Page speed improved by 3x, and the modern design has significantly boosted our brand perception. A true professional.',
    rating: 5,
    avatar: 'EC',
  },
  {
    name: 'David Rodriguez',
    role: 'CTO',
    company: 'InnoApps Solutions',
    content:
      'I\'ve worked with many developers, and Mustafa stands out for his clean code and proactive communication. He delivered our project management tool ahead of schedule and the codebase is impeccably maintained.',
    rating: 5,
    avatar: 'DR',
  },
  {
    name: 'Fatima Zahra',
    role: 'Business Owner',
    company: 'Zahra Boutique',
    content:
      'Mustafa created a beautiful, functional website for my boutique that perfectly captures our brand identity. The custom chatbot he built handles customer inquiries 24/7. Absolutely love the result!',
    rating: 5,
    avatar: 'FZ',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => {
      const next = prev + dir;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="absolute inset-0 bg-[var(--section-bg)]/50" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          subtitle="// Testimonials"
          title="What Clients Say"
          description="Don't just take my word for it — hear from people I've worked with."
        />

        <div className="max-w-3xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative min-h-[320px] md:min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <div className="rounded-2xl glass p-8 md:p-10 relative overflow-hidden">
                  {/* Quote icon */}
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: testimonials[current].rating }).map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>

                  {/* Content */}
                  <p className="text-foreground text-base md:text-lg leading-relaxed mb-8 italic">
                    &ldquo;{testimonials[current].content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-syne font-bold text-sm">
                      {testimonials[current].avatar}
                    </div>
                    <div>
                      <h4 className="font-syne font-semibold">
                        {testimonials[current].name}
                      </h4>
                      <p className="text-sm text-[var(--muted)]">
                        {testimonials[current].role},{' '}
                        {testimonials[current].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(-1)}
              className="p-2 rounded-xl glass hover:border-primary/30 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 bg-primary'
                      : 'bg-[var(--muted)]/30 hover:bg-[var(--muted)]/60'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(1)}
              className="p-2 rounded-xl glass hover:border-primary/30 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
