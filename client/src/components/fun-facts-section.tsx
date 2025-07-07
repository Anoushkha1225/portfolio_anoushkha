import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FunFactsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const facts = [
    {
      emoji: "🎮",
      title: "Currently Playing",
      content: "Genshin Impact & Stardew Valley",
      color: "mint"
    },
    {
      emoji: "📚",
      title: "Currently Reading",
      content: "\"The Alignment Problem\" by Brian Christian",
      color: "baby-blue"
    },
    {
      emoji: "🧠",
      title: "Into",
      content: "Retro tech, pixel art, notebooks",
      color: "light-peach"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

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
            Fun Facts
          </h2>
          <p className="text-gray-400 text-lg">
            A peek into my world beyond code
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white/5 backdrop-blur-custom rounded-2xl p-6 border border-white/10 hover:border-${fact.color}/50 transition-all duration-300 group`}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <motion.span
                  className="text-3xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {fact.emoji}
                </motion.span>
                <h3 className={`font-space font-semibold text-lg ${fact.color}`}>
                  {fact.title}
                </h3>
              </div>
              <p className="text-gray-300">
                {fact.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
