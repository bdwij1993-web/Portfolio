import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { TrendingUp, Clock, Shuffle, Zap, Users, Database } from 'lucide-react';

const stats = [
  { value: 30, suffix: '%', label: "Increased platform engagement adoption", icon: <TrendingUp className="w-5 h-5 text-green-500" /> },
  { value: 25, suffix: '%', label: "Reduced time-to-distribution", icon: <Clock className="w-5 h-5 text-blue-500" /> },
  { value: 80, suffix: '%', label: "Reduced manual operational workflows", icon: <Zap className="w-5 h-5 text-yellow-500" /> },
  { value: 70, suffix: '%', label: "Increased client platform usage", icon: <Users className="w-5 h-5 text-purple-500" /> },
];

const AnimatedCounter = ({ value, suffix }: { value: number, suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
          setCount(Math.min(end, Math.ceil((elapsedTime / duration) * end)));
          requestAnimationFrame(updateCounter);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(updateCounter);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold font-heading">
      {count}{suffix}
    </span>
  );
}

export const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900 to-transparent"></div>
         <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent-900 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Impact We've Delivered</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl">
            We measure success not just by features shipped, but by measurable business momentum and operational velocity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl"
            >
              <div className="mb-4 bg-slate-800/80 w-10 h-10 rounded-lg flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary-900/20 border border-primary-500/20 p-6 flex items-start gap-4 rounded-2xl"
          >
            <div className="mt-1 bg-primary-500/20 p-2 rounded-lg text-primary-400">
               <Shuffle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Multi-channel Content Distribution</h4>
              <p className="text-sm text-slate-400">Enabled seamless data flow including Bloomberg integrations, enhancing reach and market presence.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-accent-900/20 border border-accent-500/20 p-6 flex items-start gap-4 rounded-2xl"
          >
            <div className="mt-1 bg-accent-500/20 p-2 rounded-lg text-accent-400">
               <Database className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Dynamic Real-time Data Systems</h4>
              <p className="text-sm text-slate-400">Built resilient infrastructure capable of processing and serving live enterprise data seamlessly.</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
