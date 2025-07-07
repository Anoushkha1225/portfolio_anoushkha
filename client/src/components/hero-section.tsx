import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import profileImage from "@assets/WhatsApp Image 2024-06-28 at 20.52.00_fa217f05_1751918333496.jpg";

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const identityPoints = [
    { emoji: '🧠', text: 'AI & ML Engineering Student', color: 'mint' },
    { emoji: '🧪', text: 'Prompt Engineering', color: 'baby-blue' },
    { emoji: '🧵', text: 'Curious Human | Notebook Hoarder', color: 'light-peach' },
    { emoji: '🎮', text: 'Gamer with a thing for tech quirks', color: 'lavender' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Profile Picture Column - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <motion.img
                src={profileImage}
                alt="Anoushkha - AI & ML Engineering Student"
                className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover glow-effect transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                animate={{ rotateY: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-lavender/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Introduction Column - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1
              className="font-space font-bold text-4xl md:text-6xl mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.6 },
                y: { duration: 0.8, delay: 0.6 },
                backgroundPosition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{
                background: "linear-gradient(90deg, hsl(248, 53%, 58%), hsl(195, 53%, 79%), hsl(120, 60%, 70%), hsl(25, 100%, 94%), hsl(248, 53%, 58%))",
                backgroundSize: "300% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Hey, I'm Anoushkha 👋
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              I explore AI, build cool things, and ask 'what if?' a lot.
            </motion.p>

            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {identityPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <span className={`text-2xl ${point.color}`}>{point.emoji}</span>
                  <span className="text-gray-300">{point.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="bg-lavender text-black px-8 py-3 rounded-full font-space font-semibold hover-glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              
              <motion.button
                className="border-2 border-mint text-mint px-8 py-3 rounded-full font-space font-semibold hover:bg-mint hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer"
          onClick={scrollToProjects}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
