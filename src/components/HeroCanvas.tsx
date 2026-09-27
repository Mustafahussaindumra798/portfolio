'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const nodes = [
  { id: 'center', label: 'MUSTAFA', x: 50, y: 50, radius: 40, isCenter: true },
  { id: 'python', label: 'Python', x: 20, y: 30, radius: 25 },
  { id: 'ai', label: 'AI', x: 80, y: 25, radius: 25 },
  { id: 'web', label: 'Web', x: 15, y: 70, radius: 25 },
  { id: 'products', label: 'Products', x: 85, y: 75, radius: 25 },
  { id: 'cloudexify', label: 'CloudExify', x: 50, y: 85, radius: 30 },
  { id: 'apis', label: 'APIs', x: 50, y: 15, radius: 25 },
];

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePos({ x, y });
    };

    const node = containerRef.current;
    if (node) {
      node.addEventListener('mousemove', handleMouseMove);
      node.addEventListener('mouseenter', () => setIsHovering(true));
      node.addEventListener('mouseleave', () => setIsHovering(false));
    }

    return () => {
      if (node) {
        node.removeEventListener('mousemove', handleMouseMove);
        node.removeEventListener('mouseenter', () => setIsHovering(true));
        node.removeEventListener('mouseleave', () => setIsHovering(false));
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[500px] md:h-[600px] bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#f8fafc_0%,transparent_100%)]" />
      
      {/* Draw connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {nodes.map((node, i) => {
          if (node.isCenter) return null;
          const center = nodes.find(n => n.isCenter);
          if (!center) return null;
          
          return (
            <motion.line
              key={`line-${node.id}`}
              x1={`${center.x}%`}
              y1={`${center.y}%`}
              x2={`${node.x}%`}
              y2={`${node.y}%`}
              stroke="rgba(0,0,0,0.05)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 + i * 0.1, ease: "easeOut" }}
            />
          );
        })}
      </svg>

      {/* Draw nodes */}
      {nodes.map((node, i) => {
        const isCenter = node.isCenter;
        
        // Calculate parallax offset based on mouse position
        const offsetX = isHovering ? (mousePos.x - 0.5) * (isCenter ? 10 : 30) * (node.x > 50 ? 1 : -1) : 0;
        const offsetY = isHovering ? (mousePos.y - 0.5) * (isCenter ? 10 : 30) * (node.y > 50 ? 1 : -1) : 0;

        return (
          <motion.div
            key={node.id}
            className={`absolute flex items-center justify-center rounded-full transition-transform duration-700 ease-out`}
            style={{
              left: `calc(${node.x}% - ${node.radius}px)`,
              top: `calc(${node.y}% - ${node.radius}px)`,
              width: node.radius * 2,
              height: node.radius * 2,
              transform: `translate(${offsetX}px, ${offsetY}px)`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.1, type: "spring", stiffness: 100 }}
          >
            {isCenter ? (
              <div className="w-full h-full rounded-full bg-foreground text-background flex items-center justify-center shadow-lg relative z-10">
                <span className="font-syne font-bold text-sm tracking-widest">{node.label}</span>
              </div>
            ) : (
              <div className="w-full h-full rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm text-foreground hover:border-primary hover:text-primary transition-colors cursor-default">
                <span className="font-mono text-[10px] font-medium tracking-wider">{node.label}</span>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
