import React from 'react';
import { useSiteStore } from '../store/useSiteStore';
import { Pencil, Settings, Type, Palette, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export const Admin = () => {
  const { content, updateTheme, updateContent } = useSiteStore();

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex text-slate-900 dark:text-slate-100 font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0">
         <div className="p-6 border-b border-slate-800">
           <h2 className="text-white font-bold text-lg font-heading tracking-wide">Innovish Admin</h2>
           <p className="text-xs text-slate-500 mt-1">CMS Dashboard</p>
         </div>

         <nav className="flex-1 p-4 space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-primary-600 text-white rounded-lg transition-colors">
               <Pencil className="w-4 h-4" />
               <span className="text-sm font-medium">Text Content</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg transition-colors">
               <Palette className="w-4 h-4" />
               <span className="text-sm font-medium">Theme & Colors</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg transition-colors">
               <Settings className="w-4 h-4" />
               <span className="text-sm font-medium">Site Settings</span>
            </button>
         </nav>
      </aside>

      {/* Main Area */}
      <main className="flex-1 p-8 overflow-y-auto">
         
         <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
              <h1 className="text-2xl font-bold font-heading">Content Editor</h1>
              <div className="flex bg-white dark:bg-slate-800 rounded-lg p-1 shadow-sm border border-slate-200 dark:border-slate-700">
                <button 
                  onClick={() => {
                    updateTheme('light');
                    document.documentElement.classList.remove('dark');
                  }}
                  className={`p-2 rounded-md transition-colors ${content.theme === 'light' ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white' : 'text-slate-500'}`}
                >
                  <Sun className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => {
                    updateTheme('dark');
                    document.documentElement.classList.add('dark');
                  }}
                  className={`p-2 rounded-md transition-colors ${content.theme === 'dark' ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white' : 'text-slate-500'}`}
                >
                  <Moon className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-8">
               
               {/* Hero Editor */}
               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                 <h2 className="text-lg font-bold mb-4 font-heading flex items-center gap-2"><Type className="w-4 h-4" /> Hero Section</h2>
                 <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-slate-600 dark:text-slate-400">Headline</label>
                      <input 
                        type="text" 
                        value={content.hero.headline}
                        onChange={(e) => updateContent('hero', { headline: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-slate-600 dark:text-slate-400">Subheadline</label>
                      <textarea 
                        rows={3}
                        value={content.hero.subheadline}
                        onChange={(e) => updateContent('hero', { subheadline: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none resize-none"
                      />
                    </div>
                 </div>
               </div>

               {/* About Editor */}
               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                 <h2 className="text-lg font-bold mb-4 font-heading flex items-center gap-2"><Type className="w-4 h-4" /> About Us Section</h2>
                 <div>
                    <label className="block text-sm font-medium mb-1 text-slate-600 dark:text-slate-400">Content (Paragraphs separated by blank lines)</label>
                    <textarea 
                      rows={10}
                      value={content.about.content}
                      onChange={(e) => updateContent('about', { content: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none resize-y"
                    />
                 </div>
               </div>

                {/* Vision Editor */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                 <h2 className="text-lg font-bold mb-4 font-heading flex items-center gap-2"><Type className="w-4 h-4" /> Vision Section</h2>
                 <div>
                    <label className="block text-sm font-medium mb-1 text-slate-600 dark:text-slate-400">Vision Statement</label>
                    <textarea 
                      rows={3}
                      value={content.vision.statement}
                      onChange={(e) => updateContent('vision', { statement: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none resize-none"
                    />
                 </div>
               </div>
            </div>
         </div>
         
      </main>
    </div>
  );
};
