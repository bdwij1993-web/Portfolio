import React from 'react';
import { motion } from 'framer-motion';
import { useSiteStore } from '../../store/useSiteStore';

export const VisionSection = () => {
  const visionContent = useSiteStore(state => state.content.vision);

  return (
    <section id="vision" className="py-32 relative overflow-hidden bg-primary-900 text-white flex items-center justify-center">
      
      {/* Cinematic Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-800 via-primary-900 to-slate-950"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="uppercase tracking-[0.3em] text-accent-400 text-sm font-bold mb-8 block">Our Vision</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-heading leading-tight tracking-wide">
            "{visionContent.statement}"
          </h2>
        </motion.div>
      </div>

    </section>
  );
};
