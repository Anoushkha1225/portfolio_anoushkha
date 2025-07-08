import { useEffect, useRef, useState } from "react";

interface ParallaxOptions {
  intensity?: number;
  range?: number;
  enabled?: boolean;
}

export function useParallax(options: ParallaxOptions = {}) {
  const { intensity = 20, range = 100, enabled = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / range;
      const deltaY = (e.clientY - centerY) / range;
      
      const x = Math.max(-1, Math.min(1, deltaX)) * intensity;
      const y = Math.max(-1, Math.min(1, deltaY)) * intensity;
      
      setTransform({ x, y });
    };

    const handleMouseLeave = () => {
      setTransform({ x: 0, y: 0 });
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [intensity, range, enabled]);

  return {
    ref: ref,
    style: {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
  };
}