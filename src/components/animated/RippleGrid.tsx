import React, { useEffect, useRef } from 'react';

interface RippleGridProps {
  opacity?: number;
  gridColor?: string;
  className?: string;
}

export const RippleGrid: React.FC<RippleGridProps> = ({
  opacity = 0.5,
  gridColor = 'rgba(255, 255, 255, 0.1)',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const ripplesRef = useRef<Array<{
    x: number;
    y: number;
    radius: number;
    maxRadius: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 50;
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.globalAlpha = opacity;

      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawRipples = () => {
      ripplesRef.current.forEach((ripple, index) => {
        ctx.globalAlpha = ripple.opacity;
        ctx.strokeStyle = 'rgba(147, 51, 234, 0.6)'; // Purple ripple
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();

        ripple.radius += 2;
        ripple.opacity -= 0.02;

        if (ripple.radius >= ripple.maxRadius || ripple.opacity <= 0) {
          ripplesRef.current.splice(index, 1);
        }
      });
    };

    const animate = () => {
      drawGrid();
      drawRipples();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.95) { // Only create ripples occasionally
        ripplesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          radius: 0,
          maxRadius: 100,
          opacity: 0.6
        });
      }
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [opacity, gridColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};