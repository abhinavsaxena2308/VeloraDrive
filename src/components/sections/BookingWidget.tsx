import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search } from 'lucide-react';

const BookingWidget: React.FC = () => {
  const [location, setLocation] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="w-full max-w-4xl"
    >
      {/* Simple Search Bar */}
      <div className="flex items-center gap-2 bg-white/95 border border-white/40 rounded-[22px] p-2 shadow-[0_15px_35px_rgba(0,0,0,0.1)] backdrop-blur-xl">

        {/* Location Input */}
        <div className="flex items-center gap-2 flex-1 px-4 h-[50px] md:h-[60px] rounded-[18px] bg-[#FAF7F2] border border-[#E5D8C8]">
          <MapPin size={18} className="text-[#B88650] shrink-0" />

          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-[9px] uppercase tracking-[0.15em] text-[#C08B54] font-semibold leading-none mb-1">
              Location
            </span>

            <input
              type="text"
              placeholder="Where to?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent text-[14px] text-[#6E5338] placeholder:text-[#B7A28B] outline-none w-full"
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          className="
            w-[50px] md:w-[60px]
            h-[50px] md:h-[60px]
            rounded-[18px]
            bg-[#E1913A]
            hover:bg-[#d6842d]
            text-white
            transition-all
            duration-300
            flex
            items-center
            justify-center
            shrink-0
            shadow-[0_8px_20px_rgba(225,145,58,0.2)]
            active:scale-95
          "
        >
          <Search size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default BookingWidget;