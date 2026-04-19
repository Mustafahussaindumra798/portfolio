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
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[var(--card-border)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block mb-4">
              <span className="font-syne text-2xl font-bold">
                <span className="text-primary">M</span>H
              </span>
            </a>
            <p className="text-[var(--muted)] text-sm leading-relaxed max-w-xs">
              Building modern web experiences with clean code and creative design.
              Let&apos;s create something extraordinary together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-syne font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  className="text-sm text-[var(--muted)] hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-syne font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[var(--muted)] hover:text-primary hover:border-primary/30 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--card-border)] mb-6" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Mustafa Hussain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
