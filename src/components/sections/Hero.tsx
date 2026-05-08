import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { useSiteStore } from '../../store/useSiteStore';
import { ArrowRight, BarChart3, Globe, Zap } from 'lucide-react';

export const HeroSection = () => {
  const heroContent = useSiteStore(state => state.content.hero);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary-200/40 dark:bg-primary-900/20 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob"></div>
        <div className="absolute top-40 left-10 w-[400px] h-[400px] bg-accent-200/40 dark:bg-accent-900/20 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-1/2 w-[600px] h-[600px] bg-cyan-200/40 dark:bg-cyan-900/20 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-slate-900 dark:text-white leading-tight">
              {heroContent.headline.split(',').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}{i !== arr.length - 1 ? ',' : ''}
                  <br />
                </React.Fragment>
              ))}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl">
              {heroContent.subheadline}
            </p>

            {/* Quick Stats */}
            
          </motion.div>

          {/* Right Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              {/* Central Circle */}
              <div className="absolute inset-0 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center">
                 <div className="w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-primary-500 to-accent-400 opacity-10 animate-pulse"></div>
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[5%] glass-panel rounded-xl p-4 w-48 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/50 rounded-lg text-primary-600 dark:text-primary-400">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-semibold dark:text-white">Analytics</p>
                </div>
                <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full w-full mb-2"><div className="h-full bg-primary-500 rounded-full w-[70%]"></div></div>
                <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full w-full"><div className="h-full bg-accent-400 rounded-full w-[40%]"></div></div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[20%] right-[0%] glass-panel rounded-xl p-4 w-52 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-accent-100 dark:bg-accent-900/50 rounded-lg text-accent-600 dark:text-accent-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold dark:text-white">Agile Execution</p>
                    <p className="text-xs text-green-500">Accelerate GTM</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -12, 0] }} 
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[40%] text-center left-1/2 -ml-24 glass-panel rounded-xl p-5 w-48 shadow-xl border-t-4 border-t-primary-500"
              >
                 <Globe className="w-8 h-8 mx-auto text-primary-500 mb-2" />
                 <p className="text-lg font-bold dark:text-white">Global Reach</p>
                 <p className="text-xs text-slate-500">US, EU, India</p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
