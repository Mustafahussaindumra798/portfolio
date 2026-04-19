'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useTheme } from './ThemeProvider';

export default function BackgroundAI() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  const draw = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const isDark = theme === 'dark';
    const primaryColor = isDark ? 'rgba(56, 189, 248,' : 'rgba(14, 165, 233,';
    const accentColor = isDark ? 'rgba(99, 102, 241,' : 'rgba(79, 70, 229,';

    interface Point {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      pulse: number;
      pulseDir: number;
      label?: string;
    }

    const points: Point[] = [];
    const count = Math.min(Math.floor((width * height) / 12000), 100);
    const labels = ['AI', 'INTELLIGENCE', 'NEURAL', 'LOGIC', 'MUSTAFA', '0101', 'CORE', 'BRAIN'];

    for (let i = 0; i < count; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 3 + 1,
        pulse: Math.random(),
        pulseDir: 0.01 + Math.random() * 0.02,
        label: Math.random() > 0.9 ? labels[Math.floor(Math.random() * labels.length)] : undefined,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw glowing background glow nodes
      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        p.pulse += p.pulseDir;
        if (p.pulse > 1 || p.pulse < 0) p.pulseDir *= -1;

        // Interaction
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 250) {
          const force = (250 - dist) / 250;
          p.x -= (dx / dist) * force * 2;
          p.y -= (dy / dist) * force * 2;
        }

        const alpha = 0.15 + p.pulse * 0.4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1.5 + p.pulse), 0, Math.PI * 2);
        ctx.fillStyle = `${primaryColor} ${alpha * 0.6})`;
        ctx.fill();

        if (p.label) {
          ctx.font = 'bold 12px font-syne';
          ctx.fillStyle = `${primaryColor} ${alpha + 0.3})`;
          ctx.fillText(p.label, p.x + 12, p.y + 6);
          
          // Outer glow for labeled nodes
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
          ctx.fillStyle = `${primaryColor} 0.05)`;
          ctx.fill();
        }
      });

      // Connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.25;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = i % 3 === 0 ? `${accentColor} ${alpha})` : `${primaryColor} ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Animated pulses on lines
            if (dist < 100 && Math.random() > 0.97) {
              const pos = (Date.now() % 2000) / 2000;
              const px = points[i].x + (points[j].x - points[i].x) * pos;
              const py = points[i].y + (points[j].y - points[i].y) * pos;
              ctx.beginPath();
              ctx.arc(px, py, 2, 0, Math.PI * 2);
              ctx.fillStyle = isDark ? '#fff' : `${primaryColor} 1)`;
              ctx.fill();
            }
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);

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
    const cleanup = draw(ctx, canvas.width, canvas.height);

    return () => {
      window.removeEventListener('resize', resize);
      cleanup();
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      style={{ filter: 'blur(0.5px)' }}
    />
  );
}
