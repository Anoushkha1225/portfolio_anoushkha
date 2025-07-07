import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Calendar, MapPin, ExternalLink } from "lucide-react";

export default function ExperiencesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: "AI & ML Engineering Student",
      company: "University",
      location: "Computer Science Department",
      period: "2023 - Present",
      description: "Focused on machine learning algorithms, neural networks, and deep learning frameworks. Working on projects involving LSTM networks and transformer architectures.",
      type: "education",
      color: "lavender"
    },
    {
      title: "Machine Learning Research",
      company: "Academic Project",
      location: "University Lab",
      period: "2024",
      description: "Developed deepfake detection system using LSTM neural networks. Achieved high accuracy in identifying manipulated video content.",
      type: "research",
      color: "mint"
    },
    {
      title: "Open Source Contributor",
      company: "GitHub Community",
      location: "Remote",
      period: "2023 - Present",
      description: "Contributing to various AI and ML projects on GitHub. Building tools and experiments in Python, focusing on practical applications of neural networks.",
      type: "contribution",
      color: "baby-blue"
    }
  ];

  const achievements = [
    {
      title: "Deepfake Detection Model",
      description: "Built and trained LSTM-based neural network achieving 92% accuracy in video authenticity detection",
      icon: Award,
      color: "light-peach"
    },
    {
      title: "Research Publication",
      description: "Co-authored paper on 'Advanced Techniques in Video Manipulation Detection' (In Progress)",
      icon: ExternalLink,
      color: "lavender"
    },
    {
      title: "GitHub Projects",
      description: "Maintained 10+ repositories with focus on AI/ML implementations and educational resources",
      icon: ExternalLink,
      color: "mint"
    },
    {
      title: "Technical Leadership",
      description: "Led study group of 15+ students exploring advanced machine learning concepts and practical applications",
      icon: Award,
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
    <section id="experiences" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-space font-bold text-4xl md:text-5xl mb-4 text-gradient">
            Experiences & Achievements
          </h2>
          <p className="text-gray-400 text-lg">
            My journey in AI & ML engineering
          </p>
        </motion.div>

        {/* Experiences Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-space font-semibold text-2xl mb-8 text-mint"
          >
            Professional Experience
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-custom rounded-2xl p-6 border border-white/10 hover:border-mint/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h4 className={`font-space font-semibold text-xl ${exp.color} mb-1`}>
                      {exp.title}
                    </h4>
                    <p className="text-gray-300 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col lg:items-end text-gray-400 text-sm mt-2 lg:mt-0">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-space font-semibold text-2xl mb-8 text-lavender"
          >
            Key Achievements
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-white/5 backdrop-blur-custom rounded-2xl p-6 border border-white/10 hover:border-${achievement.color}/50 transition-all duration-300`}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full bg-${achievement.color}/20`}>
                    <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-space font-semibold text-lg ${achievement.color} mb-2`}>
                      {achievement.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}