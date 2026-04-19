'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'AI Chatbot Builder',
  'Problem Solver',
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const { theme } = useTheme();

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentRole.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);

          if (charIndex + 1 === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentRole.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);

          if (charIndex <= 1) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
            setCharIndex(0);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  // Particle network canvas
  const drawParticles = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      const isDark = theme === 'dark';
      const particleColor = isDark ? 'rgba(0, 212, 255,' : 'rgba(0, 150, 200,';
      const lineColor = isDark ? 'rgba(0, 212, 255,' : 'rgba(0, 150, 200,';

      interface Particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
      }

      const particles: Particle[] = [];
      const count = Math.min(Math.floor((width * height) / 12000), 100);

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 0.5,
        });
      }

      let mouseX = -1000;
      let mouseY = -1000;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = ctx.canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
      };

      const handleMouseLeave = () => {
        mouseX = -1000;
        mouseY = -1000;
      };

      ctx.canvas.addEventListener('mousemove', handleMouseMove);
      ctx.canvas.addEventListener('mouseleave', handleMouseLeave);

      let animId: number;

      const animate = () => {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          // Mouse interaction
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) / 150;
            p.vx -= (dx / dist) * force * 0.02;
            p.vy -= (dy / dist) * force * 0.02;
          }

          // Damping
          p.vx *= 0.999;
          p.vy *= 0.999;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${particleColor} 0.6)`;
          ctx.fill();
        });

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `${lineColor} ${0.15 * (1 - distance / 120)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }

        // Draw mouse connections
        if (mouseX > 0 && mouseY > 0) {
          particles.forEach((p) => {
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 200) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(mouseX, mouseY);
              ctx.strokeStyle = `${lineColor} ${0.2 * (1 - dist / 200)})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          });
        }

        animId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        cancelAnimationFrame(animId);
        ctx.canvas.removeEventListener('mousemove', handleMouseMove);
        ctx.canvas.removeEventListener('mouseleave', handleMouseLeave);
      };
    },
    [theme]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const cleanup = drawParticles(ctx, canvas.width, canvas.height);

    return () => {
      cleanup();
      window.removeEventListener('resize', resize);
    };
  }, [drawParticles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'auto' }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid lg:grid-cols-[1fr,0.8fr] gap-12 items-center">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-mono text-primary mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-syne text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6"
            >
              Hi, I&apos;m{' '}
              <span className="text-gradient">Mustafa</span>
              <br />
              <span className="text-gradient">Hussain</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="font-mono text-lg md:text-xl text-[var(--muted)]">{'>'}</span>
              <span className="font-mono text-lg md:text-xl text-primary">
                {displayText}
              </span>
              <span className="font-mono text-lg md:text-xl text-primary cursor-blink">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[var(--muted)] text-base md:text-lg max-w-xl leading-relaxed mb-8"
            >
              BSc Software Engineering student passionate about building smart web
              experiences. I turn complex problems into elegant, user-friendly solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-cyan-400 text-dark-900 font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300"
              >
                <Eye className="w-4 h-4" />
                View My Work
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/30 text-primary font-semibold text-sm hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Right Column — Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-[60px] animate-pulse" />
              <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-2 border-primary/20 shadow-[0_0_60px_rgba(0,212,255,0.15)]">
                <div className="w-full h-full bg-gradient-to-br from-dark-700 to-dark-900 flex items-center justify-center">
                  <span className="font-syne text-7xl font-bold text-gradient">MH</span>
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-lg glass text-xs font-mono text-primary"
              >
                Next.js
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-lg glass text-xs font-mono text-accent-300"
              >
                TypeScript
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -right-8 px-3 py-1.5 rounded-lg glass text-xs font-mono text-green-400"
              >
                React
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-[var(--muted)]"
        >
          <span className="font-mono text-xs tracking-wider">SCROLL</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
