import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function BeliefsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const beliefs = [
    {
      emoji: "🤖",
      title: "AI should enhance, not replace",
      description: "Technology should amplify human capabilities",
      color: "lavender"
    },
    {
      emoji: "🧭",
      title: "Curiosity > Expertise",
      description: "Questions drive innovation more than answers",
      color: "mint"
    },
    {
      emoji: "✨",
      title: "Simplicity is powerful",
      description: "Complex problems need elegant solutions",
      color: "baby-blue"
    },
    {
      emoji: "🌟",
      title: "Discovery is nonlinear",
      description: "The best insights come from unexpected paths",
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
    <section id="beliefs" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-space font-bold text-4xl md:text-5xl mb-4 text-gradient">
            Product Beliefs
          </h2>
          <p className="text-gray-400 text-lg">
            Core principles that guide my work
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {beliefs.map((belief, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white/5 backdrop-blur-custom rounded-2xl p-6 border border-white/10 hover:border-${belief.color}/50 transition-all duration-300 text-center group`}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="text-4xl mb-4"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {belief.emoji}
              </motion.div>
              <h3 className={`font-space font-semibold text-lg ${belief.color} mb-2`}>
                {belief.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {belief.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
