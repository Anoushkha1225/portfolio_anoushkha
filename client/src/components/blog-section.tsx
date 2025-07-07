import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Bell } from "lucide-react";

export default function BlogSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-space font-bold text-4xl md:text-5xl mb-4 text-gradient">
            Blog & Notes
          </h2>
          <p className="text-gray-400 text-lg">
            Thoughts on AI, experiments, and random musings
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-custom rounded-2xl p-12 border border-white/10 text-center"
          >
            <motion.div
              className="text-6xl mb-6"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📝
            </motion.div>
            <h3 className="font-space font-semibold text-2xl mb-4 text-lavender">
              Coming Soon
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              I'm working on sharing my thoughts about AI ethics, cool experiments, 
              and the occasional shower thought about neural networks.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lavender/20 text-lavender px-6 py-3 rounded-full font-space font-semibold hover:bg-lavender hover:text-black transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <Bell className="w-4 h-4" />
              <span>Get Notified</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
