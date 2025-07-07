import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CursorTrail from "@/components/cursor-trail";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import GoalsSection from "@/components/goals-section";
import FunFactsSection from "@/components/fun-facts-section";
import ExperiencesSection from "@/components/experiences-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import EasterEgg from "@/components/easter-egg";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen gradient-bg text-white overflow-x-hidden">
      <CursorTrail />
      <Navigation />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
        <GoalsSection />
        <SkillsSection />
        <ProjectsSection />
        <FunFactsSection />
        <ExperiencesSection />
        <ContactSection />
      </motion.main>
      
      <Footer />
      <EasterEgg />
    </div>
  );
}
