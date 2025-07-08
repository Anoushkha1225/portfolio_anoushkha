import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Star } from "lucide-react";
import { useGithubProjects } from "../hooks/use-github-projects";
import { useParallax } from "../hooks/use-parallax";

export default function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { data: githubProjects, isLoading } = useGithubProjects();
  const featuredParallax = useParallax({ intensity: 12, range: 180 });

  const projectOrder = [
    "Deepfake Detection",
    "RecallAI", 
    "FakeNewsDetection",
    "Appointment-booking-system",
    "weatherapp",
    "RPS"
  ];

  const featuredProject = {
    title: "Deepfake Detection",
    description: "Built a deep learning model using LSTM to detect face-swapped videos with high accuracy.",
    tags: ["#LSTM", "#DeepLearning", "#Python"],
    featured: true,
    link: "#",
    color: "lavender"
  };

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
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-space font-bold text-4xl md:text-5xl mb-4 text-gradient">
            Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Things I've built and experiments I've conducted
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Featured Project */}
          <motion.div
            ref={featuredParallax.ref}
            style={featuredParallax.style}
            variants={itemVariants}
            className="project-card bg-white/5 backdrop-blur-custom rounded-2xl p-6 border border-white/10 hover:border-lavender/50 lg:col-span-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-space font-semibold text-xl text-lavender">
                {featuredProject.title}
              </h3>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-mint fill-mint" />
                <span className="text-mint text-sm">Featured</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 text-lg">
              {featuredProject.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {featuredProject.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-lavender/20 text-lavender px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-light-peach hover:text-white transition-colors flex items-center space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>View Code</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-baby-blue hover:text-white transition-colors flex items-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </motion.button>
            </div>
          </motion.div>

          {/* GitHub Projects */}
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="project-card bg-white/5 backdrop-blur-custom rounded-2xl p-6 border border-white/10 animate-pulse"
              >
                <div className="h-6 bg-white/10 rounded mb-4"></div>
                <div className="h-4 bg-white/10 rounded mb-2"></div>
                <div className="h-4 bg-white/10 rounded mb-4 w-3/4"></div>
                <div className="flex space-x-2">
                  <div className="h-6 w-16 bg-white/10 rounded-full"></div>
                  <div className="h-6 w-20 bg-white/10 rounded-full"></div>
                </div>
              </motion.div>
            ))
          ) : (
            githubProjects?.filter(project => 
              projectOrder.slice(1).includes(project.name) // Exclude "Deepfake Detection" as it's featured
            ).sort((a, b) => {
              const aIndex = projectOrder.indexOf(a.name);
              const bIndex = projectOrder.indexOf(b.name);
              return aIndex - bIndex;
            }).map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="project-card bg-white/5 backdrop-blur-custom rounded-2xl p-6 border border-white/10 hover:border-mint/50"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-space font-semibold text-xl text-mint">
                    {project.name}
                  </h3>
                  <Github className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description || "No description available"}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.language && (
                    <span className="bg-mint/20 text-mint px-3 py-1 rounded-full text-sm">
                      {project.language}
                    </span>
                  )}
                  {project.topics?.slice(0, 2).map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="bg-baby-blue/20 text-baby-blue px-3 py-1 rounded-full text-sm"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="text-light-peach hover:text-white transition-colors flex items-center space-x-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                    {project.has_pages && (
                      <motion.a
                        href={`https://anoushkha1225.github.io/${project.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="text-baby-blue hover:text-white transition-colors flex items-center space-x-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </motion.a>
                    )}
                  </div>
                  {project.stargazers_count > 0 && (
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">{project.stargazers_count}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Anoushkha1225"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-block border-2 border-lavender text-lavender px-8 py-3 rounded-full font-space font-semibold hover:bg-lavender hover:text-black transition-all duration-300"
          >
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
