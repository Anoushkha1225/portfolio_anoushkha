import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Calendar, MapPin, ExternalLink } from "lucide-react";
import React from "react";

export default function ExperiencesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const academics = [
    {
      title: "B. Tech CSE-AIML",
      company: "CMR Technical Campus (CMRTC), Hyderabad",
      location: "Currently pursuing 4th Year",
      period: "2022 - 2026",
      description: "Specialized in Artificial Intelligence and Machine Learning within Computer Science Engineering. Focused on neural networks, deep learning frameworks, and practical AI applications.",
      type: "education",
      color: "lavender"
    }
  ];

  const extraCurriculars = [
    {
      title: "Social Media Head – Lexis Club, CMRTC",
      description: "Planned and executed digital content strategies to boost the club's visibility. Managed content calendars, engaging visuals, and interactive campaigns to promote events and drive audience engagement across media platforms.",
      icon: Award,
      color: "mint"
    },
    {
      title: "Volunteer – Technical Events, CMRTC",
      description: "Actively participated in organizing and supporting various tech events and college programs. Helped with coordination, logistics, and smooth execution of activities.",
      icon: ExternalLink,
      color: "baby-blue"
    },
    {
      title: "Top 5 Finalist – 24-Hour Hackathon, Vijayawada (Jan 2025)",
      description: "Collaborated with a team to design and develop an AI-powered chatbot to address a real-world problem statement on AI based health assistant. Our solution was shortlisted among the top 5 finalists for its innovation and usability.",
      icon: Award,
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
    <section id="academics" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-space font-bold text-4xl md:text-5xl mb-4 text-gradient">
            Academics & Extra-Curriculars
          </h2>
          <p className="text-gray-400 text-lg">
            My educational journey and activities
          </p>
        </motion.div>

        {/* Academics Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-space font-semibold text-2xl mb-8 text-mint"
          >
            🎓 Academics
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {academics.map((exp, index) => (
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

        {/* Extra-Curriculars Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-space font-semibold text-2xl mb-8 text-lavender"
          >
            🌟 Extra-Curricular Activities
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-1 gap-6"
          >
            {extraCurriculars.map((achievement, index) => (
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