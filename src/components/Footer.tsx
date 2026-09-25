'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://wa.me/923400488902', label: 'WhatsApp' },
  { icon: Mail, href: 'mailto:mustafahussaindumra798@gmail.com', label: 'Email' },
];

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Credentials', href: '#credentials' },
  { name: 'CloudExify', href: '#cloudexify' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 border-t border-primary/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-20">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <motion.a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleClick('#home'); }}
              className="inline-flex items-center gap-2 mb-6 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--foreground)] flex items-center justify-center">
                <span className="font-syne text-2xl font-bold text-[var(--background)]">M</span>
              </div>
              <span className="font-syne text-2xl font-bold tracking-tighter">Hussain</span>
            </motion.a>
            <p className="text-[var(--muted)] text-sm leading-relaxed max-w-sm mb-8">
              Python Developer & AI/ML Engineering Enthusiast. Building practical software, intelligent applications, and scalable digital products.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300 shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-syne text-lg font-bold mb-8 relative">
              Navigation
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                    className="group flex items-center gap-2 text-[var(--muted)] hover:text-primary transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-syne text-lg font-bold mb-8 relative">
              Contact
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-6">
              <li>
                <p className="text-xs font-mono text-primary uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:mustafahussaindumra798@gmail.com" className="text-[var(--muted)] hover:text-primary transition-colors">
                  mustafahussaindumra798@gmail.com
                </a>
              </li>
              <li>
                <p className="text-xs font-mono text-primary uppercase tracking-widest mb-1">Location</p>
                <p className="text-[var(--muted)]">Pakistan</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-primary/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[var(--muted)] font-medium">
            © {new Date().getFullYear()} Mustafa Hussain. Python Developer & AI Enthusiast.
          </p>
          <div className="flex gap-8 text-sm text-[var(--muted)]">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
