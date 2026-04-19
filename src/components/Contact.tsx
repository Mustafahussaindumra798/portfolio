'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Send, Mail, MapPin, MessageCircle, Phone, Loader2, CheckCircle, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/923400488902', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:mustafahussaindumra798@gmail.com', label: 'Email' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const mailto = `mailto:mustafahussaindumra798@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailto, '_blank');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass = "w-full px-4 py-3 rounded-xl glass text-sm bg-transparent border border-[var(--card-border)] focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-[var(--muted)]/50";

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-[var(--section-bg)]/50" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader subtitle="// Get In Touch" title="Let's Work Together" description="Have a project in mind? Let's discuss how I can help bring your ideas to life." />
        <div className="grid lg:grid-cols-[0.8fr,1fr] gap-12 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-6">
            <div>
              <h3 className="font-syne text-2xl font-bold mb-2">Let&apos;s build something amazing</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">Whether you need a website, an AI chatbot, or a custom web application, I&apos;m here to help.</p>
            </div>
            <div className="space-y-4">
              <motion.a whileHover={{ x: 5 }} href="https://wa.me/923400488902" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-xl glass hover:border-green-500/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center"><MessageCircle className="w-5 h-5 text-green-400" /></div>
                <div><p className="text-sm font-semibold">WhatsApp</p><p className="text-xs text-[var(--muted)]">Quick response via WhatsApp</p></div>
              </motion.a>
              <a href="mailto:mustafahussaindumra798@gmail.com" className="group flex items-center gap-4 p-4 rounded-xl glass hover:border-primary/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Mail className="w-5 h-5 text-primary" /></div>
                <div><p className="text-sm font-semibold">Email</p><p className="text-xs text-[var(--muted)]">mustafahussaindumra798@gmail.com</p></div>
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} required placeholder="Project Discussion" className={inputClass} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell me about your project..." className={`${inputClass} resize-none`} />
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={status === 'sending'} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-cyan-400 text-dark-900 font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all disabled:opacity-70">
                {status === 'idle' && <><Send className="w-4 h-4" />Send Message</>}
                {status === 'sending' && <><Loader2 className="w-4 h-4 animate-spin" />Sending...</>}
                {status === 'sent' && <><CheckCircle className="w-4 h-4" />Message Sent!</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
