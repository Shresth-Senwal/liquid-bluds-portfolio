import React, { useEffect, useRef } from 'react';

interface SplashCursorProps {
  className?: string;
}

export const SplashCursor: React.FC<SplashCursorProps> = ({ className = '' }) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseDown = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    };

    const handleMouseUp = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference ${className}`}
      style={{
        background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 70%, transparent 100%)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.1s ease-out',
      }}
    />
  );
};