import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Car, Headphones } from 'lucide-react';
import BookingWidget from './BookingWidget';
import heroBg from '../../assets/hero-bg.png';
import heroMobileBg from '../../assets/hero-mobile-bg.png';

const FEATURES = [
  { icon: Car, label: 'Premium Fleet', desc: 'Well maintained luxury cars' },
  { icon: Shield, label: 'Safe & Secure', desc: 'Your safety is our priority' },
  { icon: Headphones, label: '24/7 Support', desc: 'We are here for you' },
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#FAF7F2] overflow-hidden flex flex-col pt-32 md:pt-20 pb-6">
      
      {/* ── Background Layer (Full Section) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Responsive Background Images */}
        <img
          src={heroMobileBg}
          alt=""
          className="block md:hidden w-full h-full object-cover object-bottom"
        />
        <img
          src={heroBg}
          alt=""
          className="hidden md:block absolute inset-x-0 top-0 w-full h-[125%] object-cover object-[right_center] lg:object-center opacity-90 -translate-y-[22%] md:-translate-y-[18%] lg:-translate-y-[22%]"
        />
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[70%] h-[70%] bg-gradient-to-bl from-[#F2B76D]/15 via-transparent to-transparent blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-cta/10 via-transparent to-transparent blur-[100px]" />
        
        {/* Bottom Readability Shadow (Darker for white text contrast) */}
        <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 md:px-10 relative z-10 flex flex-col items-center md:items-start flex-1">
        
        {/* ── Header Content ── */}
        <div className="w-full flex flex-col items-center md:items-start mt-auto md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4 md:mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-cta" />
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-black text-cta">
              Premium Self Drive
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-bold italic leading-[1] tracking-tight text-[#4A3728] mb-3 md:mb-4 drop-shadow-[0_4px_12px_rgba(255,255,255,0.3)] text-center md:text-left"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 4.2rem)' }}
          >
            Rent Premium Cars
            <br />
            Across Delhi.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#3D2B1F] text-xs md:text-base lg:text-lg font-normal leading-relaxed max-w-[90%] md:max-w-md mb-6 md:mb-8 drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)] text-center md:text-left"
          >
            Self-drive luxury cars with instant booking, seamless experiences,
            and doorstep delivery. Drive beyond ordinary.
          </motion.p>
        </div>

        {/* ── Search Bar Area ── */}
        <div className="w-full max-w-md lg:max-w-sm mt-8 md:mt-12 mb-10 md:mb-12 flex flex-col items-center md:items-start">
          {/* Availability Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-2.5 mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-emerald-600/90">
              Cars Available Now
            </span>
          </motion.div>
          
          <BookingWidget />
        </div>

        {/* ── Responsive Spacer (Mobile/Tablet Only) ── */}
        <div className="flex-1 min-h-[20px] lg:hidden" />

        {/* ── Footer Features ── */}
        <div className="w-full mt-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-3 gap-1 md:gap-3 w-full pt-4"
          >
            {FEATURES.map((f, i) => (
              <div key={i} className="flex flex-col items-center px-1 relative group">
                {/* Icon Circle (Orange BG, White Icon) */}
                <div className="w-6 h-6 md:w-9 md:h-9 rounded-full bg-cta flex items-center justify-center text-white mb-1.5 md:mb-2 transition-all duration-300 group-hover:scale-110 shadow-[0_5px_15px_rgba(225,145,58,0.2)]">
                  <f.icon size={11} className="md:w-4 md:h-4" />
                </div>

                {/* Text Content (White Text Globally) */}
                <h3 className="text-[8px] md:text-[11px] font-bold text-white uppercase tracking-wider text-center mb-0.5 drop-shadow-sm">
                  {f.label}
                </h3>
                <p className="text-[7px] md:text-[9px] text-white/80 font-medium text-center leading-tight max-w-[80px] md:max-w-none drop-shadow-sm">
                  {f.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
