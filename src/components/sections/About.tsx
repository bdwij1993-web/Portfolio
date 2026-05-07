import React from 'react';
import { motion } from 'framer-motion';
import { useSiteStore } from '../../store/useSiteStore';
import { Calendar, Users, Briefcase } from 'lucide-react';

export const AboutSection = () => {
  const aboutContent = useSiteStore(state => state.content.about);

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-4">
             <div className="sticky top-32">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-6">About Us</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mb-8"></div>
                
                <div className="space-y-6">
                  <div className="glass-panel p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-4">
                      <Calendar className="text-primary-600 dark:text-primary-400 w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white pb-1">Founded</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">May 7, 2021</p>
                  </div>

                  <div className="glass-panel p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center mb-4">
                      <Briefcase className="text-accent-600 dark:text-accent-400 w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white pb-1">Core Focus</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">SaaS Consulting & Product Strategy</p>
                  </div>
                </div>
             </div>
          </div>

          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300"
            >
              {aboutContent.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-6 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
