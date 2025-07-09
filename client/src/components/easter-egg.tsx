import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EasterEgg() {
  const [floatingCheese, setFloatingCheese] = useState<number[]>([]);

  const handleCheeseClick = () => {
    const newCheese = Date.now();
    setFloatingCheese(prev => [...prev, newCheese]);
    
    // Remove cheese after animation
    setTimeout(() => {
      setFloatingCheese(prev => prev.filter(id => id !== newCheese));
    }, 2000);
  };

  return (
    <>
      <motion.div
        className="fixed bottom-5 right-5 text-4xl cursor-pointer z-50"
        onClick={handleCheeseClick}
        animate={{
          y: [0, -5, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{
          scale: 1.2,
          filter: "drop-shadow(0 0 10px hsl(25, 100%, 94%))"
        }}
        whileTap={{ scale: 0.9 }}
      >
        🧀
      </motion.div>

      <AnimatePresence>
        {floatingCheese.map((id) => (
          <motion.div
            key={id}
            className="fixed bottom-5 right-5 text-4xl pointer-events-none z-40"
            initial={{ opacity: 1, scale: 1, y: 0 }}
            animate={{
              opacity: 0,
              scale: 0.5,
              y: -100,
              x: Math.random() * 100 - 50
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            🧀
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
