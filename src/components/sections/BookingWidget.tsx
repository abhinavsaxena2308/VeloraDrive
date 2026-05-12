import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search } from 'lucide-react';

const BookingWidget: React.FC = () => {
  const [location, setLocation] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="w-full"
    >
      <div className="flex items-center gap-2 bg-white/70 border border-white/60 rounded-full p-1 shadow-[0_12px_35px_rgba(139,93,51,0.08)] backdrop-blur-2xl">
        
        {/* Location Section */}
        <div className="flex items-center gap-2.5 flex-1 pl-4">
          <MapPin size={16} className="text-cta shrink-0" />
          <input
            type="text"
            placeholder="Enter city or location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-transparent text-[13px] font-medium text-text placeholder:text-text-muted/40 outline-none w-full"
          />
        </div>

        {/* Search Button (Reduced Height) */}
        <button
          className="
            h-[36px] md:h-[42px]
            px-4 md:px-6
            rounded-full
            bg-gradient-to-r from-[#E1913A] to-[#D6842D]
            hover:shadow-[0_8px_20px_rgba(225,145,58,0.2)]
            text-white
            transition-all
            duration-500
            flex
            items-center
            justify-center
            gap-2
            active:scale-[0.97]
            cursor-pointer
            group
          "
        >
          <Search size={14} className="group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-[9px] font-black uppercase tracking-[0.2em] pt-0.5">Search</span>
        </button>
      </div>
    </motion.div>
  );
};

export default BookingWidget;