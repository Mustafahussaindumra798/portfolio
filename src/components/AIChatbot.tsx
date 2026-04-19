'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const KNOWLEDGE_BASE = {
  name: 'Mustafa Hussain',
  role: 'Software Engineer & Full Stack Developer',
  experience: '1 year of professional experience',
  skills: 'React, Next.js, TypeScript, Node.js, Python, Java, C++, AI Chatbots, WordPress',
  location: 'Based in Pakistan',
  education: 'BSc Software Engineering student',
  contact: 'Available via the contact form on this website or WhatsApp.',
  projects: 'I have completed 8+ projects including portfolio websites, AI systems, and full-stack applications.',
  goals: 'Passionate about building intelligent AI solutions and smart web experiences.',
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Mustafa's AI assistant. How can I help you learn more about his work today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    // Simulate AI response logic
    setTimeout(() => {
      let response = "That's a great question! Mustafa specializes in building intelligent systems like me. You can check his Projects section for more details.";
      
      const lowerInput = userMessage.toLowerCase();
      if (lowerInput.includes('who') || lowerInput.includes('name')) {
        response = `This is the official portfolio of ${KNOWLEDGE_BASE.name}. He is a ${KNOWLEDGE_BASE.role} based in Pakistan.`;
      } else if (lowerInput.includes('skill') || lowerInput.includes('tech') || lowerInput.includes('language')) {
        response = `Mustafa's technical arsenal includes: ${KNOWLEDGE_BASE.skills}. He masters both frontend and backend.`;
      } else if (lowerInput.includes('experience') || lowerInput.includes('work')) {
        response = `Mustafa has ${KNOWLEDGE_BASE.experience} and is currently a ${KNOWLEDGE_BASE.education}. He has delivered 8+ high-quality projects.`;
      } else if (lowerInput.includes('project')) {
        response = `He has built ${KNOWLEDGE_BASE.projects} including EduConnect and ShopSphere. Explore the 'Featured Work' section to see them live!`;
      } else if (lowerInput.includes('contact') || lowerInput.includes('hire') || lowerInput.includes('reach')) {
        response = `You can hire Mustafa by clicking the 'Hire Me' button in the navbar, or reach out via WhatsApp/Email. ${KNOWLEDGE_BASE.contact}`;
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        response = "Hello! I'm here to help. What would you like to know about Mustafa's professional background?";
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Toggle Button & Tooltip */}
      <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-4">
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white dark:bg-slate-800 px-4 py-2 rounded-2xl shadow-2xl border border-primary/20 text-xs font-bold text-primary flex items-center gap-2 whitespace-nowrap"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Chat with Mustafa&apos;s AI
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => { setIsOpen(!isOpen); setShowTooltip(false); }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-primary to-accent text-white shadow-[0_10px_30px_-5px_rgba(14,165,233,0.5)] flex items-center justify-center overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X className="w-7 h-7" />
              </motion.div>
            ) : (
              <motion.div key="msg" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                <Bot className="w-8 h-8" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            className="fixed bottom-44 right-6 z-50 w-[380px] md:w-[420px] h-[550px] bg-white dark:bg-slate-900 rounded-[32px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col border border-primary/10"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-primary to-accent border-b border-white/10 flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-syne font-bold text-white text-lg">Mustafa Hussain AI</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-white/80 uppercase tracking-widest font-bold">Intelligent Agent</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white relative z-10 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth bg-slate-50/50 dark:bg-slate-900/50"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center shadow-lg ${msg.role === 'user' ? 'bg-accent text-white' : 'bg-primary text-white'}`}>
                      {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm font-medium leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-accent text-white rounded-tr-none shadow-xl shadow-accent/20' 
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-tl-none shadow-xl border border-slate-100 dark:border-slate-700'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-3 items-center bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-700 shadow-xl">
                    <Loader2 className="w-4 h-4 text-primary animate-spin" />
                    <span className="text-xs font-bold text-primary tracking-widest uppercase">Thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white dark:bg-slate-800 border-t border-primary/5">
              <div className="relative group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me something..."
                  className="w-full bg-slate-100 dark:bg-slate-900 border-2 border-transparent focus:border-primary/30 rounded-2xl py-4 px-5 pr-14 text-sm font-medium focus:outline-none transition-all"
                />
                <button
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-primary hover:text-accent transition-colors"
                >
                  <Send className="w-6 h-6" />
                </button>
              </div>
              <p className="mt-3 text-[10px] text-center text-slate-400 font-bold uppercase tracking-tighter">Powered by Mustafa&apos;s Custom AI Engine</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
