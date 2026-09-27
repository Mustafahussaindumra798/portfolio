'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Home, User, Code2, FolderKanban, FlaskConical, Briefcase, Mail, FileText, Github, ChevronRight } from 'lucide-react';

const commands = [
  { id: 'home', title: 'Home', icon: Home, href: '#' },
  { id: 'about', title: 'About', icon: User, href: '#about' },
  { id: 'skills', title: 'Skills', icon: Code2, href: '#skills' },
  { id: 'projects', title: 'Projects', icon: FolderKanban, href: '#projects' },
  { id: 'ailab', title: 'AI Lab', icon: FlaskConical, href: '#ailab' },
  { id: 'experience', title: 'Experience', icon: Briefcase, href: '#experience' },
  { id: 'contact', title: 'Contact', icon: Mail, href: '#contact' },
  { id: 'github', title: 'GitHub', icon: Github, href: 'https://github.com/Mustafahussaindumra798', external: true },
  { id: 'resume', title: 'Resume', icon: FileText, href: '/resume' },
];

export default function CommandCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setSearch('');
      setActiveIndex(0);
    }
  }, [isOpen]);

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [search]);

  const executeCommand = (cmd: typeof commands[0]) => {
    setIsOpen(false);
    if (cmd.external) {
      window.open(cmd.href, '_blank');
    } else if (cmd.href.startsWith('#')) {
      const element = document.querySelector(cmd.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.location.href = cmd.href;
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter' && filteredCommands.length > 0) {
        e.preventDefault();
        executeCommand(filteredCommands[activeIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, activeIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100]"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-0 flex items-start justify-center pt-[15vh] z-[101] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-xl bg-white border border-gray-200 shadow-2xl overflow-hidden pointer-events-auto"
            >
              <div className="flex items-center px-4 py-4 border-b border-gray-100">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  ref={inputRef}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent text-foreground placeholder:text-gray-400 focus:outline-none font-inter"
                />
                <div className="flex items-center gap-1 text-[10px] font-mono text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  ESC
                </div>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {filteredCommands.length === 0 ? (
                  <div className="py-12 text-center text-sm text-gray-500 font-inter">
                    No results found.
                  </div>
                ) : (
                  <div className="flex flex-col gap-1">
                    {filteredCommands.map((cmd, index) => {
                      const Icon = cmd.icon;
                      const isActive = index === activeIndex;
                      
                      return (
                        <button
                          key={cmd.id}
                          onClick={() => executeCommand(cmd)}
                          onMouseEnter={() => setActiveIndex(index)}
                          className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${
                            isActive ? 'bg-primary text-white' : 'text-foreground hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                            <span className="font-medium font-inter text-sm">{cmd.title}</span>
                          </div>
                          <ChevronRight className={`w-4 h-4 ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="px-4 py-2 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-500">MUSTAFA COMMAND CENTER</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-gray-400 flex items-center gap-1">
                    <span className="bg-gray-200 px-1 py-0.5 rounded">↑</span>
                    <span className="bg-gray-200 px-1 py-0.5 rounded">↓</span> to navigate
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 flex items-center gap-1 ml-2">
                    <span className="bg-gray-200 px-1 py-0.5 rounded">↵</span> to select
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
