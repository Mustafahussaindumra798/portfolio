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
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Mustafa's AI assistant. Ask me anything about his skills, experience, or projects!",
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

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    // Simulate AI response logic
    setTimeout(() => {
      let response = "I'm not sure about that. But Mustafa is a great developer! You can ask about his skills, experience, or projects.";
      
      const lowerInput = userMessage.toLowerCase();
      if (lowerInput.includes('who') || lowerInput.includes('name')) {
        response = `This is the portfolio of ${KNOWLEDGE_BASE.name}. He is a ${KNOWLEDGE_BASE.role}.`;
      } else if (lowerInput.includes('skill') || lowerInput.includes('tech') || lowerInput.includes('language')) {
        response = `Mustafa specializes in: ${KNOWLEDGE_BASE.skills}.`;
      } else if (lowerInput.includes('experience') || lowerInput.includes('work')) {
        response = `Mustafa has ${KNOWLEDGE_BASE.experience} and is currently a ${KNOWLEDGE_BASE.education}.`;
      } else if (lowerInput.includes('project')) {
        response = `He has completed ${KNOWLEDGE_BASE.projects} You can see them in the Projects section!`;
      } else if (lowerInput.includes('contact') || lowerInput.includes('hire') || lowerInput.includes('reach')) {
        response = `You can reach Mustafa via the contact section below or through WhatsApp. ${KNOWLEDGE_BASE.contact}`;
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        response = "Hello! How can I help you learn more about Mustafa today?";
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:scale-110 transition-transform duration-300"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-40 right-6 z-50 w-[350px] md:w-[400px] h-[500px] glass-strong rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-primary/20"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-primary/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-syne font-bold text-sm">Mustafa AI</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-accent/20' : 'bg-primary/20'}`}>
                      {msg.role === 'user' ? <User className="w-4 h-4 text-accent" /> : <Bot className="w-4 h-4 text-primary" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-accent/10 border border-accent/20 rounded-tr-none' 
                        : 'bg-primary/10 border border-primary/20 rounded-tl-none'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-2 items-center bg-primary/10 border border-primary/20 p-3 rounded-2xl rounded-tl-none">
                    <Loader2 className="w-4 h-4 text-primary animate-spin" />
                    <span className="text-xs font-mono text-primary">Thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-primary/10 bg-dark-900/50">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about Mustafa..."
                  className="w-full bg-dark-800/50 border border-primary/20 rounded-xl py-3 px-4 pr-12 text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary hover:text-primary-focus transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
