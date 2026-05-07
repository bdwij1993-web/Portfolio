import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/Hero';
import { AboutSection } from '../components/sections/About';
import { ServicesSection } from '../components/sections/Services';
import { ApproachSection } from '../components/sections/Approach';
import { ImpactSection } from '../components/sections/Impact';
import { CollaborationSection } from '../components/sections/Collaboration';
import { VisionSection } from '../components/sections/Vision';
import { CTASection } from '../components/sections/CTA';
import { ContactSection } from '../components/sections/Contact';
import { LiveChat } from '../components/chat/LiveChat';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ApproachSection />
        <ImpactSection />
        <CollaborationSection />
        <VisionSection />
        <CTASection />
        <ContactSection />
      </main>

      <Footer />
      
      {/* Live Chat Assistant wrapper included here */}
      <LiveChat />

      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-24 right-6 z-40"
          >
            <button
              onClick={scrollToTop}
              className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
