import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      const shapes = containerRef.current.querySelectorAll('.parallax-shape');
      shapes.forEach((shape, index) => {
        const element = shape as HTMLElement;
        const speed = 0.5 + (index * 0.2);
        const x = xPercent * 20 * speed;
        const y = yPercent * 20 * speed;
        
        element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      <motion.div
        className="parallax-shape absolute w-32 h-32 rounded-full"
        style={{
          background: 'linear-gradient(135deg, hsla(248, 53%, 58%, 0.1), hsla(248, 53%, 58%, 0.05))',
          filter: 'blur(1px)',
          top: '10%',
          left: '10%',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="parallax-shape absolute w-20 h-20 rounded-full"
        style={{
          background: 'linear-gradient(135deg, hsla(120, 60%, 70%, 0.1), hsla(120, 60%, 70%, 0.05))',
          filter: 'blur(1px)',
          top: '60%',
          right: '15%',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      <motion.div
        className="parallax-shape absolute w-24 h-24"
        style={{
          background: 'linear-gradient(135deg, hsla(195, 53%, 79%, 0.1), hsla(195, 53%, 79%, 0.05))',
          filter: 'blur(1px)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          bottom: '20%',
          left: '20%',
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="parallax-shape absolute w-16 h-16"
        style={{
          background: 'linear-gradient(135deg, hsla(25, 100%, 94%, 0.1), hsla(25, 100%, 94%, 0.05))',
          filter: 'blur(1px)',
          clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
          top: '80%',
          right: '30%',
        }}
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}