import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function GoalsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const goals = [
    "Build an impactful AI product",
    "Work with a team solving real-world problems", 
    "Contribute to open-source ML tools"
  ];

  const currentInterests = [
    {
      emoji: "🧠",
      text: "Neural Networks"
    },
    {
      emoji: "🌀", 
      text: "Generative AI & Prompt Engineering"
    },
    {
      emoji: "📊",
      text: "Building Smart AI Dashboards"
    },
    {
      emoji: "🧪",
      text: "Experimenting with Real-World Datasets"
    },
    {
      emoji: "🎮",
      text: "Finding parallels between games and tech"
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
    <section id="goals" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Goals Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-custom rounded-2xl p-8 border border-white/10"
          >
            <div className="text-center mb-8">
              <h3 className="font-space font-bold text-3xl mb-4">
                <span className="text-gradient">What I'm Aiming For</span> 🎯
              </h3>
              <p className="text-gray-400">
                Goals & Dreams
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="w-2 h-2 rounded-full bg-lavender mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 leading-relaxed">{goal}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Currently Into Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-custom rounded-2xl p-8 border border-white/10"
          >
            <div className="text-center mb-8">
              <h3 className="font-space font-bold text-3xl mb-4">
                <span className="text-gradient">🎧 Currently Into</span>
              </h3>
              <p className="text-gray-400">
                What's capturing my curiosity right now
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {currentInterests.map((interest, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.span
                    className="text-2xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {interest.emoji}
                  </motion.span>
                  <span className="text-gray-300 font-medium">{interest.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}