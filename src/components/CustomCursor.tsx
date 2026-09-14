import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export type CursorType = 'default' | 'pointer' | 'case-study' | 'drag' | 'service' | 'text';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [cursorText, setCursorText] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  // Position state with lerp damping
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Detect touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Element detection for cursor type
      const targetElement = e.target as HTMLElement | null;
      if (!targetElement) return;

      const cursorEl = targetElement.closest('[data-cursor]') as HTMLElement | null;
      const cursorCustomText = targetElement.closest('[data-cursor-text]') as HTMLElement | null;

      if (cursorCustomText) {
        setCursorText(cursorCustomText.getAttribute('data-cursor-text') || '');
      } else {
        setCursorText('');
      }

      if (cursorEl) {
        const type = cursorEl.getAttribute('data-cursor') as CursorType;
        setCursorType(type || 'pointer');
      } else if (targetElement.closest('button, a, [role="button"], input, select, textarea, .btn-pill, .social-pill')) {
        setCursorType('pointer');
      } else if (targetElement.closest('.case-study-card, [data-case-study]')) {
        setCursorType('case-study');
        setCursorText('VIEW');
      } else if (targetElement.closest('.testimonial-slider, .drag-area')) {
        setCursorType('drag');
        setCursorText('DRAG');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth animation loop using requestAnimationFrame
    let animationFrameId: number;
    const render = () => {
      // Lerp ring towards target with 0.15 factor for smooth gliding
      pos.current.x += (target.current.x - pos.current.x) * 0.16;
      pos.current.y += (target.current.y - pos.current.y) * 0.16;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div className={`custom-cursor-container ${isVisible ? 'visible' : ''}`}>
      {/* Inner precise dot */}
      <div 
        ref={dotRef} 
        className={`cursor-dot cursor-${cursorType}`} 
      />

      {/* Smooth trailing outer ring / badge */}
      <div 
        ref={ringRef} 
        className={`cursor-ring cursor-${cursorType}`}
      >
        <span ref={textRef} className="cursor-text">
          {cursorText}
        </span>
      </div>
    </div>
  );
};
