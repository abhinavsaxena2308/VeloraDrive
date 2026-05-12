import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import BookingWidget from './BookingWidget';
import TrustBadges from '../shared/TrustBadges';
import heroBg from '../../assets/hero-bg.png';

// ─── Carousel Code (commented out) ───────────────────────────────────────────
/*
const CAR_IMAGES = [
  { name: 'Porsche 911', url: '/src/assets/car images/1.jpg' },
  { name: 'Lamborghini', url: '/src/assets/car images/7.jpg' },
  { name: 'Mercedes S', url: '/src/assets/car images/2.jpg' },
  { name: 'Audi RS7', url: '/src/assets/car images/6.jpg' },
  { name: 'Range Rover', url: '/src/assets/car images/3.jpg' },
  { name: 'BMW M4', url: '/src/assets/car images/4.jpg' },
];

const COLUMN_1 = [...CAR_IMAGES, ...CAR_IMAGES];
const COLUMN_2 = [...CAR_IMAGES].reverse().concat([...CAR_IMAGES].reverse());

const VerticalCarousel = ({ images, duration = 35, reverse = false }: { images: typeof CAR_IMAGES; duration?: number; reverse?: boolean }) => (
  <div className="relative h-full overflow-hidden w-full">
    <motion.div
      className="flex flex-col gap-4"
      animate={{ y: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
      style={{ willChange: 'transform' }}
    >
      {images.map((car, i) => (
        <div key={i} className="aspect-[3/4] w-full rounded-2xl overflow-hidden relative group flex-shrink-0 border border-primary/5">
          <img
            src={car.url}
            alt={car.name}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-white font-bold text-xs uppercase tracking-widest">{car.name}</span>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
);
*/

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex overflow-hidden ">

      {/* ─── Full-bleed Background Image ─── */}
      <div className="absolute inset-0 z-0 bg-background">
        <img
          src={heroBg}
          alt="VeloraDrive Hero"
          className="absolute inset-0 w-full h-full object-cover object-[75%_center] md:object-[right_30%]"
        />
        {/* Left-side gradient — provides contrast for the text */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-background/70 to-transparent md:from-background/95 md:via-background/70 md:to-transparent" />
        {/* Subtle white top veil for mobile readability and "white shadow" glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent" />
      </div>

      {/* ═══ LEFT CONTENT — constrained to left 55% so car on right is fully visible ═══ */}
      <div className="relative z-10 w-full lg:w-[52%] flex flex-col justify-start md:justify-center px-6 md:px-12 lg:px-16 xl:px-24 pt-24 md:pt-0 pb-12 lg:pt-0 lg:pb-0 h-full">
        
        {/* Readability backdrop for mobile — subtle white glow behind text area */}
        <div className="absolute top-0 left-0 w-full h-[70%] lg:hidden bg-white/20 backdrop-blur-[1px] pointer-events-none z-[-1] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-4 md:mb-6 self-start"
        >
          <span className="w-6 h-[1.5px] bg-primary opacity-60" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary">
            Premium Self Drive
          </span>
        </motion.div>
...
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-extrabold leading-[0.92] tracking-tighter italic mb-4 md:mb-5 text-primary drop-shadow-[0_2px_15px_rgba(255,255,255,0.6)]"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Rent Premium Cars
          <br />
          <span className="text-gradient">Across Delhi.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-text-muted text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-md mb-6 md:mb-8 drop-shadow-[0_1px_5px_rgba(255,255,255,0.8)]"
        >
          Self-drive luxury cars with instant booking, seamless experiences,
          and doorstep delivery. Drive beyond ordinary.
        </motion.p>

        {/* Booking Widget */}
        <BookingWidget />

        {/* Trust badges */}
        <div className="mt-8 drop-shadow-[0_1px_10px_rgba(255,255,255,0.8)]">
          <TrustBadges count={4} />
        </div>
      </div>

      {/* ═══ RIGHT SIDE — Carousel (commented out) ═══ */}
      {/*
      <div className="hidden lg:block lg:w-[45%] relative">
        <div className="absolute inset-0 flex gap-4 px-6 py-0 overflow-hidden">
          <div className="flex-1 h-full">
            <VerticalCarousel images={COLUMN_1} duration={40} />
          </div>
          <div className="flex-1 h-full">
            <VerticalCarousel images={COLUMN_2} duration={50} reverse={true} />
          </div>
        </div>
      </div>
      */}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 z-10 hidden lg:flex"
      >
        <span className="text-[8px] uppercase tracking-[0.4em] text-primary/30 font-semibold">Scroll</span>
        <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={14} className="text-primary/30" />
        </motion.div>
      </motion.div>

      {/* ═══ CLOUDY TRANSITION — BOTTOM ═══ */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-[15]">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
