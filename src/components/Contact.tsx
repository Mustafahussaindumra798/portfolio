'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formMessage, setFormMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const subject = String(data.get('subject') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const mailto = `mailto:coo@cloudexify.site?subject=${encodeURIComponent(subject || `Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    setFormMessage('Your email app should open with your message ready to send. If it does not, email coo@cloudexify.site directly.');
    window.location.href = mailto;
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-sm font-medium text-primary">08</span>
              <div className="h-px w-12 bg-primary/20" />
              <h2 className="font-syne text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase">Contact</h2>
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight"
            >
              Have an idea worth building?
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted text-lg leading-relaxed font-inter font-light mb-12 max-w-md"
            >
              I am currently open to new opportunities and technical collaborations. Let&apos;s build something exceptional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 0.3, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-xs font-mono font-semibold text-primary uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:coo@cloudexify.site" className="font-syne text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors">
                  coo@cloudexify.site
                </a>
              </div>
              <div className="mt-4">
                <p className="text-xs font-mono font-semibold text-primary uppercase tracking-widest mb-2">Social</p>
                <div className="flex flex-col gap-2">
                  <a href="https://www.linkedin.com/in/mustafa-hussain-a29977356/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground font-medium transition-colors">LinkedIn</a>
                  <a href="https://github.com/Mustafahussaindumra798" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground font-medium transition-colors">GitHub</a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 0.3, 0.3, 1] }}
            className="w-full max-w-md lg:ml-auto"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="relative">
                <input type="text" id="name" name="name" autoComplete="name" required maxLength={100}
                  className="peer w-full bg-transparent border-b border-gray-300 py-3 text-foreground font-inter focus:outline-none focus:border-foreground transition-colors placeholder-transparent"
                  placeholder="Name" aria-label="Name" />
                <label htmlFor="name" className="absolute left-0 top-3 text-muted text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-foreground peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs cursor-text">Name</label>
              </div>

              <div className="relative">
                <input type="email" id="email" name="email" autoComplete="email" required maxLength={254}
                  className="peer w-full bg-transparent border-b border-gray-300 py-3 text-foreground font-inter focus:outline-none focus:border-foreground transition-colors placeholder-transparent"
                  placeholder="Email" aria-label="Email" />
                <label htmlFor="email" className="absolute left-0 top-3 text-muted text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-foreground peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs cursor-text">Email</label>
              </div>

              <div className="relative">
                <input type="text" id="subject" name="subject" maxLength={150}
                  className="peer w-full bg-transparent border-b border-gray-300 py-3 text-foreground font-inter focus:outline-none focus:border-foreground transition-colors placeholder-transparent"
                  placeholder="Subject" aria-label="Subject" />
                <label htmlFor="subject" className="absolute left-0 top-3 text-muted text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-foreground peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs cursor-text">Subject (optional)</label>
              </div>

              <div className="relative mt-2">
                <textarea id="message" name="message" rows={4} required maxLength={5000}
                  className="peer w-full bg-transparent border-b border-gray-300 py-3 text-foreground font-inter focus:outline-none focus:border-foreground transition-colors placeholder-transparent resize-none"
                  placeholder="Message" aria-label="Message" />
                <label htmlFor="message" className="absolute left-0 top-3 text-muted text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-foreground peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs cursor-text">Message</label>
              </div>

              <button type="submit" className="group flex items-center justify-between w-full mt-4 py-4 border-b border-foreground text-foreground font-syne font-bold text-lg hover:text-primary hover:border-primary transition-colors">
                <span>Open Email to Send</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p role="status" aria-live="polite" className="text-sm text-muted">{formMessage}</p>
              <p className="text-xs text-muted">This form opens your email app; it does not send messages directly from this website.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
