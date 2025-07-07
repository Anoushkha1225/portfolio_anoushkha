import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function LoadingSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const dotVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="loading" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* Title with loading dots */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <motion.h2 
              className="font-space font-bold text-4xl md:text-5xl text-gradient"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Still Loading
            </motion.h2>
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-lavender rounded-full"
                  variants={dotVariants}
                  animate="animate"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-custom rounded-2xl p-8 border border-white/10 
                       hover:border-mint/30 transition-all duration-300 mb-6"
          >
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed mb-4"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              That's me — a curious work-in-progress 🧠✨
            </motion.p>
            
            <p className="text-gray-400 mb-4">
              Currently running on caffeine, AI docs, and endless "what ifs?"
            </p>
            
            <p className="text-gray-300 mb-6">
              I might be a fresher, but I've got big ideas, fast fingers, and a soft spot for weird tech experiments.
            </p>
            
            <motion.div 
              className="text-mint font-medium"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              🚀 Next up? More learning. More building.
              <br />
              And hopefully... more cheese 🧀 (or a cool internship 👀)
            </motion.div>
          </motion.div>

          {/* Glitch effect text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-sm text-gray-500 italic"
          >
            <motion.span
              animate={{
                opacity: [1, 0.5, 1],
                textShadow: [
                  "0 0 0px transparent",
                  "2px 0 0px hsl(248, 53%, 58%), -2px 0 0px hsl(195, 53%, 79%)",
                  "0 0 0px transparent"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ✨ compiling personality...
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}