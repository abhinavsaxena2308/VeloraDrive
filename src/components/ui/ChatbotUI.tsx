import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

const ChatbotUI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Velora AI. How can I help you find your dream car today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isBot: false }]);
    setInput('');

    // Mock bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "I'm looking into our fleet for you. Would you like to see our latest Sports collection?", 
        isBot: true 
      }]);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-28 right-8 w-14 h-14 bg-cta rounded-full flex items-center justify-center text-white shadow-lg z-[999] hover:bg-primary transition-colors shadow-cta/30"
      >
        <MessageSquare size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-48 right-8 w-80 md:w-96 glass-card overflow-hidden z-[1000] shadow-2xl flex flex-col h-[500px] border-cta/10"
          >
            {/* Header */}
            <div className="p-4 bg-cta flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Velora AI</h4>
                  <span className="text-[10px] uppercase tracking-widest opacity-70">Online</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-[11px] leading-relaxed ${
                    msg.isBot 
                      ? 'bg-slate-50 border border-border text-text-muted' 
                      : 'bg-cta text-white'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 border-t border-border flex gap-2 bg-white">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-slate-50 border border-border rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-cta text-primary"
              />
              <button type="submit" className="w-10 h-10 bg-cta rounded-xl flex items-center justify-center text-white shrink-0 hover:bg-primary transition-colors">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotUI;
