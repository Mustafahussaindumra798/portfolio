'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import {
  Monitor,
  Bot,
  Globe,
  Server,
  Database,
  Palette,
} from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Full Stack Web Development',
    description:
      'End-to-end web application development using React, Next.js, and Node.js. From concept to deployment, I build scalable, performant applications.',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'hover:border-cyan-500/30',
  },
  {
    icon: Bot,
    title: 'AI Chatbot Development',
    description:
      'Custom AI-powered chatbots for businesses using OpenAI API and modern NLP techniques. Automate customer support and enhance engagement.',
    gradient: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'hover:border-purple-500/30',
  },
  {
    icon: Globe,
    title: 'WordPress Website Design',
    description:
      'Professional WordPress websites with custom themes, plugins, and optimized performance. Perfect for businesses and bloggers.',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'hover:border-blue-500/30',
  },
  {
    icon: Server,
    title: 'Backend API Development',
    description:
      'Robust RESTful APIs built with Node.js and Express.js. Secure, well-documented, and designed for scalability.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'hover:border-emerald-500/30',
  },
  {
    icon: Database,
    title: 'Database Design & Integration',
    description:
      'Efficient database architectures using MySQL, MongoDB, and Supabase. Optimized queries and seamless data management solutions.',
    gradient: 'from-orange-500/20 to-amber-500/20',
    borderColor: 'hover:border-orange-500/30',
  },
  {
    icon: Palette,
    title: 'UI/UX Implementation',
    description:
      'Pixel-perfect implementation of modern UI designs with responsive layouts, smooth animations, and accessibility best practices.',
    gradient: 'from-rose-500/20 to-red-500/20',
    borderColor: 'hover:border-rose-500/30',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          subtitle="// What I Offer"
          title="My Services"
          description="Professional solutions tailored to bring your digital vision to life."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -12 }}
              className={`group relative rounded-[32px] glass p-8 overflow-hidden transition-all duration-500 ${service.borderColor} hover:shadow-[0_20px_50px_rgba(0,212,255,0.12)] border border-primary/5`}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-syne text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More link */}
                <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span>Explore Service</span>
                  <div className="w-8 h-px bg-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
