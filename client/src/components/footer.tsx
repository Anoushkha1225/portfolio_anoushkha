import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 font-space"
        >
          Made with ❤️ and lots of curiosity by{" "}
          <motion.span 
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: "linear-gradient(90deg, hsl(248, 53%, 58%), hsl(195, 53%, 79%), hsl(120, 60%, 70%), hsl(248, 53%, 58%))",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            ANV Anoushkha Lathikaa
          </motion.span>
        </motion.p>
      </div>
    </footer>
  );
}
