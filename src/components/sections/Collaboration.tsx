import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const partners = [
  "GlobalSource Partners",
  "Water Tower Research",
  "Tier1 Financial Solutions",
  "Singletrack",
  "Netguru"
];

export const CollaborationSection = () => {
  return (
    <section id="collaboration" className="py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      
      {/* Decorative Network Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4">Global Collaboration</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Innovish has contributed to initiatives and platform ecosystems associated with global organizations
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Node */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-16 relative z-20"
          >
            <div className="bg-white dark:bg-slate-900 border-2 border-primary-500 shadow-[0_0_40px_-10px_rgba(15,139,240,0.4)] rounded-2xl p-6 px-10 text-center relative pointer-events-auto hover:scale-105 transition-transform duration-300">
              <Building2 className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">GlobalSource Direct</h3>
            </div>
          </motion.div>

          {/* Connection SVG Lines */}
          <div className="absolute top-16 left-0 w-full h-[60%] z-10 pointer-events-none hidden md:block">
             <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 300">
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.2 }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  d="M500 0 L150 150" stroke="currentColor" strokeWidth="2" fill="none" className="text-slate-400 dark:text-slate-600" 
                />
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.2 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  d="M500 0 L325 150" stroke="currentColor" strokeWidth="2" fill="none" className="text-slate-400 dark:text-slate-600" 
                />
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.2 }}
                  transition={{ duration: 1.5, delay: 0.4 }}
                  d="M500 0 L500 150" stroke="currentColor" strokeWidth="2" fill="none" className="text-slate-400 dark:text-slate-600" 
                />
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.2 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  d="M500 0 L675 150" stroke="currentColor" strokeWidth="2" fill="none" className="text-slate-400 dark:text-slate-600" 
                />
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.2 }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                  d="M500 0 L850 150" stroke="currentColor" strokeWidth="2" fill="none" className="text-slate-400 dark:text-slate-600" 
                />
             </svg>
          </div>

          {/* Child Nodes */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative z-20">
             {partners.map((partner, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                 className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-default"
               >
                 <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{partner}</span>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};
