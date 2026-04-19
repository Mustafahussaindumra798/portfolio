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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-30px' }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-2xl glass overflow-hidden transition-all duration-300 ${service.borderColor} hover:shadow-[0_0_40px_rgba(0,212,255,0.06)]`}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative p-7">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-syne text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-5 h-px w-0 group-hover:w-full bg-gradient-to-r from-primary/50 to-transparent transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
