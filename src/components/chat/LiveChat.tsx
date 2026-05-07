import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, MoreHorizontal } from 'lucide-react';

const presetFAQs = [
  { q: "What does Innovish do?", a: "Innovish is a SaaS consulting and product strategy firm. We help global organizations modernize fragmented workflows, scale API ecosystems, and build platform applications." },
  { q: "Where are you located?", a: "We operate a global delivery model collaborating seamlessly across distributed teams in the US, Europe, and India." },
  { q: "How do you handle API ecosystems?", a: "We transform fragmented data into structured, interoperable digital assets, designing API-first architectures that are highly scalable and secure." },
  { q: "Do you offer offshore delivery?", a: "Yes, we function as a fully compliant offshore delivery and consulting partner supporting enterprise SaaS initiatives." }
];

export const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'bot' | 'user', text: string}[]>([
    { role: 'bot', text: 'Hi 👋 Welcome to Innovish. How can we help you today?' }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto popup after 3 seconds of load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInputText("");
    setIsTyping(true);

    // AI/FAQ simulation logic
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let response = "Thank you for reaching out. A strategy consultant will be with you shortly. For immediate assistance, please use our contact form.";
      
      const matchedFAQ = presetFAQs.find(faq => 
        lowerText.includes(faq.q.split(' ')[1].toLowerCase()) || 
        faq.q.toLowerCase().includes(lowerText)
      );

      if (matchedFAQ) {
        response = matchedFAQ.a;
      } else if (lowerText.includes('saas') || lowerText.includes('software')) {
        response = "We specialize in SaaS product strategy and 0\u21921 platform development. Would you like to schedule a consultation about your product?";
      }

      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'bot', text: response }]);
    }, 1500);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-6 right-6 z-50 fixed-widget"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="bg-slate-900 dark:bg-primary-600 text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 group"
            >
              <MessageSquare className="w-6 h-6" />
              <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out font-medium text-sm">
                Chat with us
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 sm:w-96 w-[calc(100vw-3rem)] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl z-50 overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col"
            style={{ height: '500px', maxHeight: 'calc(100vh - 6rem)' }}
          >
            {/* Header */}
            <div className="bg-slate-900 border-b border-white/10 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                 <div>
                   <h3 className="font-bold text-sm">Innovish Assistant</h3>
                   <p className="text-xs text-slate-400">Typically replies immediately</p>
                 </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 dark:bg-slate-900/50 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[80%] rounded-2xl p-3 text-sm border shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-primary-600 text-white border-primary-700 rounded-tr-sm' 
                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 rounded-tl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-tl-sm p-4 w-16 shadow-sm">
                    <MoreHorizontal className="w-5 h-5 text-slate-400 animate-pulse" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions if only 1 message so far */}
            {messages.length === 1 && !isTyping && (
               <div className="px-4 pb-2 bg-slate-50 dark:bg-slate-900/50 flex flex-wrap gap-2">
                 {presetFAQs.slice(0, 2).map((faq, i) => (
                   <button 
                     key={i} 
                     onClick={() => handleSend(faq.q)}
                     className="text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary-500 rounded-full px-3 py-1.5 text-slate-600 dark:text-slate-300 transition-colors"
                   >
                     {faq.q}
                   </button>
                 ))}
               </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(inputText); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="bg-primary-600 hover:bg-primary-700 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white rounded-full p-2.5 transition-colors flex-shrink-0"
                >
                  <Send className="w-4 h-4 ml-[1px]" />
                </button>
              </form>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
