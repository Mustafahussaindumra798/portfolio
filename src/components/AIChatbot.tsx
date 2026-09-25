'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { useChat } from 'ai/react';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: 'initial',
        role: 'assistant',
        content: "Hi! I'm Mustafa's AI assistant. How can I help you learn more about his work today?",
      },
    ],
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

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
              {isLoading && messages[messages.length - 1]?.role === 'user' && (
                <div className="flex justify-start">
                  <div className="flex gap-3 items-center bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-700 shadow-xl">
                    <Loader2 className="w-4 h-4 text-primary animate-spin" />
                    <span className="text-xs font-bold text-primary tracking-widest uppercase">Thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-6 bg-white dark:bg-slate-800 border-t border-primary/5">
              <div className="relative group">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask me something..."
                  className="w-full bg-slate-100 dark:bg-slate-900 border-2 border-transparent focus:border-primary/30 rounded-2xl py-4 px-5 pr-14 text-sm font-medium focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-primary hover:text-accent transition-colors disabled:opacity-50"
                >
                  <Send className="w-6 h-6" />
                </button>
              </div>
              <p className="mt-3 text-[10px] text-center text-slate-400 font-bold uppercase tracking-tighter">Powered by Mustafa&apos;s Custom AI Engine</p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
