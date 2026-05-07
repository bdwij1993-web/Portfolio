import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import logo from '../../assets/Logos.png';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-1">
            <img src={logo} alt="Innovish Logo" className="h-8 md:h-10 w-auto mb-4" />
            <p className="text-sm text-slate-400 mb-6">
              Helping global organizations transform the future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              
            </div>
          </div>

          

          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">SaaS Product Strategy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">API-First Architecture</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Enterprise Workflow</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">UI/UX Transformation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-400" />
                <a href="mailto:innovishllp@gmail.com" className="hover:text-white transition-colors">innovishllp@gmail.com</a>
              </li>
              <li>
                <p className="text-slate-400">Serving clients globally across US, Europe & India</p>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Innovish LLP. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
