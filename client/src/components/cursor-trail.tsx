import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      if (dotRef.current) {
        dotRef.current.style.opacity = '0.8';
      }
    };

    const handleMouseLeave = () => {
      if (dotRef.current) {
        dotRef.current.style.opacity = '0';
      }
    };

    const animateCursor = () => {
      currentX += (mouseX - currentX) * 0.2;
      currentY += (mouseY - currentY) * 0.2;
      
      if (dotRef.current) {
        dotRef.current.style.left = `${currentX - 4}px`;
        dotRef.current.style.top = `${currentY - 4}px`;
      }
      
      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <div ref={dotRef} className="cursor-trail" />;
}
