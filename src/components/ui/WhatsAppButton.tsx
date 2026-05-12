import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 w-16 h-16 bg-cta rounded-full flex items-center justify-center text-white shadow-lg z-[999] hover:bg-[#B3651F] transition-colors shadow-cta/30"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-bounce">
        1
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
