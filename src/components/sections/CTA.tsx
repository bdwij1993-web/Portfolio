import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { useSiteStore } from '../../store/useSiteStore';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  const ctaContent = useSiteStore(state => state.content.cta);

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-slate-800 dark:to-slate-900 border border-primary-200 dark:border-slate-700 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          
          {/* Subtle decorations */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-accent-400/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-primary-500/20 blur-3xl"></div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">
              {ctaContent.headline}
            </h2>
            
            <div className="prose prose-lg dark:prose-invert mx-auto text-slate-600 dark:text-slate-300 mb-10 max-w-3xl">
              {ctaContent.body.split('\n\n').map((p, i) => (
                <p key={i} className="mb-4">{p}</p>
              ))}
            </div>

            <Button 
               size="lg" 
               className="text-lg rounded-full px-8 shadow-xl shadow-primary-500/25"
               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}
            >
               Schedule A Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
