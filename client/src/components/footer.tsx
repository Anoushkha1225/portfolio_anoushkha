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
          Fueled by curiosity, learning AI with every line of code 🤖💻
        </motion.p>
      </div>
    </footer>
  );
}
