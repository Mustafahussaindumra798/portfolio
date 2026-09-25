'use client';

import { motion } from 'framer-motion';
import { Rocket, Server, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import SectionHeader from './SectionHeader';

const features = [
  {
    icon: Server,
    title: 'Scalable Infrastructure',
    description: 'We build robust architectures that grow with your business, ensuring high performance under load.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Design',
    description: 'Implementing industry best practices to keep enterprise data and applications safe.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'Managing technical teams to deliver solutions precisely aligned with client objectives.',
  },
];

export default function CloudExifyFeature() {
  return (
    <section id="cloudexify" className="section-padding relative overflow-hidden bg-[var(--section-bg)]">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-sm mb-6 border border-primary/20">
              <Rocket className="w-4 h-4" />
              <span>Building Beyond Individual Projects</span>
            </div>
            
            <h2 className="font-syne text-4xl md:text-5xl font-bold mb-6">
              Empowering Digital Growth at <span className="text-gradient">CloudExify</span>
            </h2>
            
            <p className="text-[var(--muted)] text-lg leading-relaxed mb-8 max-w-xl">
              As Co-Founder and COO, I lead technical operations and strategic direction for CloudExify. 
              We transform complex business challenges into elegant, scalable digital solutions. 
              From intelligent web platforms to enterprise architecture, our team delivers excellence.
            </p>

            <a
              href="https://cloudexify.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded-xl hover:bg-foreground/90 transition-colors"
            >
              Visit CloudExify 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right Column: Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 relative">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`bg-[var(--card-bg)] border border-[var(--card-border)] p-6 rounded-2xl backdrop-blur-sm hover:border-primary/30 transition-colors ${
                  index === 2 ? 'sm:col-span-2 sm:w-1/2 sm:justify-self-center' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
