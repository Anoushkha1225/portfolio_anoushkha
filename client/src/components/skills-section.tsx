import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SkillsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      emoji: "🧠",
      title: "AI & Machine Learning",
      skills: [
        "Machine Learning",
        "Prompt Engineering", 
        "AI Ethics & Applications"
      ],
      color: "lavender"
    },
    {
      emoji: "💻",
      title: "Programming Languages",
      skills: [
        "Python",
        "Java"
      ],
      color: "mint"
    },
    {
      emoji: "⚙️",
      title: "Tools & Platforms",
      skills: [
        "Git & GitHub",
        "Google Colab",
        "Jupyter Notebook"
      ],
      color: "baby-blue"
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
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-space font-bold text-4xl md:text-5xl mb-4 text-gradient">
            Skills
          </h2>
          <p className="text-gray-400 text-lg">
            Technical expertise and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white/5 backdrop-blur-custom rounded-2xl p-6 border border-white/10 hover:border-${category.color}/50 transition-all duration-300`}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-center mb-6">
                <motion.div
                  className="text-4xl mb-4"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {category.emoji}
                </motion.div>
                <h3 className={`font-space font-semibold text-xl ${category.color} mb-4`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="bg-white/5 rounded-lg p-3 text-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + skillIndex * 0.1 }}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}