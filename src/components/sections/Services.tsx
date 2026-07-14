import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Search, BarChart, Settings, Globe2, Database, Layout, Target, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "SaaS Product Strategy & 0\u21921 Platform Development",
    desc: "From concept to scalable architecture, we build resilient SaaS platforms ready for market."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "API-First Architecture & Ecosystems",
    desc: "Transform fragmented data into structured, interoperable digital assets to power APIs."
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "AI Solutions Architecture",
    desc: "Build AI-powered products with scalable architectures and seamless system integrations"
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Analytics-Driven Product Optimization",
    desc: "Leverage usage data to refine features, drive retention, and identify growth opportunities."
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Enterprise Workflow Modernization",
    desc: "Replace legacy systems tailored workflows that reduce manual overhead."
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Agile Product Delivery",
    desc: "Seamless execution across distributed teams running in US, Europe, and India."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Data Monetization & Scalability",
    desc: "Unlock new revenue streams by commercializing your enterprise data assets."
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "UI/UX Transformation",
    desc: "Modernize platforms with intuitive, accessible, and high-performance interfaces."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Discovery & Go-To-Market",
    desc: "Align product roadmaps with business strategy and market demands."
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4">What We Do</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            We provide end-to-end consulting and execution to build enterprise-grade platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-colors shadow-sm hover:shadow-xl overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/40 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
