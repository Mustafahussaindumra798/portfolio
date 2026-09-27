'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Command } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'AI Lab', href: '#ailab' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="group flex items-center gap-3 relative z-50"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-foreground text-background font-syne font-bold text-sm tracking-tighter">
                MH
              </div>
              <span className="font-inter font-semibold text-sm tracking-tight text-foreground hidden sm:block">
                Mustafa Hussain
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-xs font-medium text-muted hover:text-foreground transition-colors uppercase tracking-wider font-mono"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="w-px h-4 bg-gray-200 ml-2" />
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
                  className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-xs font-mono text-muted hover:text-foreground hover:border-gray-300 transition-colors"
                >
                  <Command className="w-3 h-3" />
                  <span>K</span>
                </button>
                <a
                  href="/resume"
                  className="text-xs font-semibold text-foreground border border-gray-200 px-4 py-2 hover:bg-gray-50 transition-colors"
                >
                  Resume
                </a>
                <button
                  onClick={() => document.querySelector('.group.flex.items-center.justify-center.overflow-hidden')?.dispatchEvent(new MouseEvent('click', { bubbles: true }))}
                  className="text-xs font-semibold text-white bg-foreground px-4 py-2 hover:bg-primary transition-colors"
                >
                  Ask My AI
                </button>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-6 items-start">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-syne text-3xl font-bold text-foreground hover:text-primary transition-colors uppercase tracking-tight"
                >
                  {link.name}
                </a>
              ))}
              <div className="w-12 h-px bg-gray-200 my-4" />
              <a
                href="/resume"
                className="font-inter text-lg font-semibold text-foreground mb-2"
              >
                Download Resume &rarr;
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  document.querySelector('.group.flex.items-center.justify-center.overflow-hidden')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
                }}
                className="font-inter text-lg font-semibold text-primary"
              >
                Ask My AI &rarr;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
