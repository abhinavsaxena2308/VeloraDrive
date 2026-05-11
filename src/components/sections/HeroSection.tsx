import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThreeScene from '../three/ThreeScene';

const CAR_IMAGES = [
  { name: 'Porsche 911', color: 'text-cta', bg: 'bg-cta/10' },
  { name: 'Lamborghini', color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
  { name: 'Mercedes S', color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { name: 'Audi RS7', color: 'text-red-500', bg: 'bg-red-500/10' },
  { name: 'Range Rover', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { name: 'BMW M4', color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

// Duplicate for infinite scroll
const COLUMN_1 = [...CAR_IMAGES, ...CAR_IMAGES];
const COLUMN_2 = [...CAR_IMAGES, ...CAR_IMAGES].reverse();

const VerticalCarousel = ({ images, reverse = false }: { images: typeof CAR_IMAGES, reverse?: boolean }) => {
  return (
    <div className="relative h-full overflow-hidden w-full px-2">
      <motion.div
        className="flex flex-col gap-6"
        animate={{
          y: reverse ? ['-50%', '0%'] : ['0%', '-50%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ willChange: 'transform' }}
      >
        {images.map((car, i) => (
          <div
            key={i}
            className="aspect-[3/4] w-full rounded-3xl overflow-hidden glass-card border border-white/5 relative group cursor-pointer"
          >
            <div className={`absolute inset-0 ${car.bg} transition-colors duration-500 group-hover:bg-opacity-20`}></div>
            <div className="absolute inset-0 flex items-center justify-center italic text-white/5 text-4xl font-heading group-hover:scale-110 transition-transform duration-700">
              {car.name}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span className={`text-xs font-bold uppercase tracking-[0.2em] ${car.color}`}>{car.name}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-deep-black flex flex-col lg:flex-row overflow-hidden pt-20 lg:pt-0">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ThreeScene />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cta/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* LEFT SIDE - 45% */}
      <div className="w-full lg:w-[45%] flex items-center px-6 md:px-12 lg:px-24 py-20 relative z-10">
        <div className="max-w-xl hero-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cta shadow-[0_0_10px_#DC2626]"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary">Premium Self Drive Experience</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-heading font-extrabold text-white mb-8 leading-[0.9] tracking-tighter italic"
          >
            DRIVE LUXURY <br />
            <span className="text-gradient">BEYOND LIMITS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-secondary text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg"
          >
            Rent premium cars across India with seamless booking, luxury comfort, 
            and unmatched performance. Experience the future of automotive excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6 mb-16"
          >
            <Link to="/cars" className="btn-primary min-w-[180px] group">
              Explore Fleet <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/pricing" className="btn-outline min-w-[180px]">
              Book Now
            </Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-3 gap-8 p-6 glass-card border-white/5 bg-white/[0.02]"
          >
            {[
              { label: 'Cars', val: '500+' },
              { label: 'Cities', val: '50+' },
              { label: 'Customers', val: '10K+' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <span className="block text-2xl font-bold text-white font-heading italic">{stat.val}</span>
                <span className="text-[9px] uppercase tracking-widest text-secondary font-black">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* RIGHT SIDE - 55% */}
      <div className="w-full lg:w-[55%] relative h-[600px] lg:h-screen">
        <div className="absolute inset-0 flex gap-4 px-4 overflow-hidden mask-radial">
          <div className="flex-1 h-full">
            <VerticalCarousel images={COLUMN_1} />
          </div>
          <div className="flex-1 h-full pt-20">
            <VerticalCarousel images={COLUMN_2} reverse />
          </div>
        </div>
        
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-transparent to-transparent z-10 w-40 pointer-events-none"></div>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep-black to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Floating CTA / Booking */}
      <div className="absolute bottom-10 right-10 z-20 hidden xl:block">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass-card p-6 border-cta/30 bg-cta/10 backdrop-blur-3xl group flex items-center gap-6"
        >
          <div className="w-12 h-12 rounded-full bg-cta flex items-center justify-center text-white shadow-glow group-hover:rotate-12 transition-transform">
            <Zap size={24} />
          </div>
          <div className="text-left">
            <span className="block text-[10px] uppercase tracking-widest font-black text-cta mb-1">Instant Reservation</span>
            <span className="block text-white font-bold text-sm">Experience the Speed</span>
          </div>
          <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            <Play size={16} fill="currentColor" />
          </div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
