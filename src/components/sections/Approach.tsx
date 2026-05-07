import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Discover & Design",
    desc: "Audit your market position, revenue model, and product gaps. Align on what success looks like before any work begins."
  },
  {
    id: "02",
    title: "Architect & Prioritise",
    desc: "Design the product and AI-powered tech stack. Build a ruthlessly prioritised roadmap tied directly to growth outcomes."
  },
  {
    id: "03",
    title: "Build & Ship",
    desc: "Embedded delivery — embedded in your team, owning sprints end-to-end. Fast cycles, real accountability, no handoff lag."
  },
  {
    id: "04",
    title: "Measure & Scale",
    desc: "Track activation, retention, and revenue signals. Iterate fast on what data confirms — and cut what it doesn't."
  }
];

export const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4">Our Approach</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Methodical execution that bridges the gap between vision and reality.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow relative z-10 mt-8 lg:mt-0">
                  <div className="absolute -top-6 lg:-top-12 left-6 lg:left-1/2 lg:-translate-x-1/2 w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-lg border-4 border-white dark:border-slate-900 shadow-sm z-20">
                    {step.id}
                  </div>
                  
                  <div className="pt-6 lg:pt-8 text-center">
                    <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
