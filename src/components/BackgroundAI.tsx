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
    const count = Math.min(Math.floor((width * height) / 15000), 80);
    const labels = ['AI', 'DATA', 'NEURAL', 'LOGIC', 'MUSTAFA', '01', 'CORE'];

    for (let i = 0; i < count; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
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
        if (dist < 200) {
          const force = (200 - dist) / 200;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }

        const alpha = 0.1 + p.pulse * 0.3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 + p.pulse * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `${primaryColor} ${alpha})`;
        ctx.fill();

        if (p.label) {
          ctx.font = '600 10px Inter';
          ctx.fillStyle = `${primaryColor} ${alpha + 0.2})`;
          ctx.fillText(p.label, p.x + 8, p.y + 4);
        }
      });

      // Connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.15;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = i % 2 === 0 ? `${primaryColor} ${alpha})` : `${accentColor} ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();

            // Data flow animation
            if (dist < 80 && Math.random() > 0.98) {
              const flowX = points[i].x + (points[j].x - points[i].x) * Math.random();
              const flowY = points[i].y + (points[j].y - points[i].y) * Math.random();
              ctx.beginPath();
              ctx.arc(flowX, flowY, 1, 0, Math.PI * 2);
              ctx.fillStyle = isDark ? '#fff' : '#0ea5e9';
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
