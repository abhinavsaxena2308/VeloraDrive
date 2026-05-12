import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingWidget from './BookingWidget';
import TrustBadges from '../shared/TrustBadges';

// ─── Car Images for the vertical carousel ─────────────────────────────────────
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

// ─── Vertical Carousel ────────────────────────────────────────────────────────
// ─── Vertical Carousel ────────────────────────────────────────────────────────
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

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-background flex overflow-hidden">

      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-accent/[0.05] rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[5%] w-[35%] h-[50%] bg-cta/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* ═══ LEFT CONTENT — 55% ═══ */}
      <div className="relative z-10 w-full lg:w-[55%] flex flex-col justify-center px-6 md:px-10 lg:px-16 xl:px-20 pt-14 pb-12 lg:pt-0 lg:pb-0">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-6 self-start"
        >
          <span className="w-6 h-[1.5px] bg-cta" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-cta">
            Premium Self Drive
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-extrabold text-primary leading-[0.92] tracking-tighter italic mb-5"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
        >
          Rent Premium Cars
          <br />
          <span className="text-gradient">Across India.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-text-muted text-base lg:text-lg font-light leading-relaxed max-w-lg mb-8"
        >
          Self-drive luxury cars with instant booking, seamless experiences,
          and doorstep delivery. Drive beyond ordinary.
        </motion.p>

        {/* Booking Widget — THE MOST IMPORTANT ELEMENT */}
        <BookingWidget />

        {/* Trust badges */}
        <div className="mt-8">
          <TrustBadges count={4} />
        </div>
      </div>

      {/* ═══ RIGHT SIDE — Dual Carousels ═══ */}
      <div className="hidden lg:block lg:w-[45%] relative">
        {/* Two carousel columns */}
        <div className="absolute inset-0 flex gap-4 px-6 py-0 overflow-hidden">
          <div className="flex-1 h-full">
            <VerticalCarousel images={COLUMN_1} duration={40} />
          </div>
          <div className="flex-1 h-full">
            <VerticalCarousel images={COLUMN_2} duration={50} reverse={true} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 z-10 hidden lg:flex"
      >
        <span className="text-[8px] uppercase tracking-[0.4em] text-primary/20 font-semibold">Scroll</span>
        <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={14} className="text-primary/20" />
        </motion.div>
      </motion.div>
      {/* ═══ CLOUDY TRANSITION — BOTTOM ═══ */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-[15]">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-background via-background/95 to-transparent" />
        {/* Subtle cloudy blobs */}
        <div className="absolute bottom-[-10%] left-[10%] w-[40%] h-[80%] bg-accent/[0.12] rounded-full blur-[100px]" />
        <div className="absolute bottom-[-15%] right-[5%] w-[50%] h-[100%] bg-cta/[0.08] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[40%] w-[30%] h-[60%] bg-white/40 rounded-full blur-[80px]" />
      </div>
    </section>
  );
};

export default HeroSection;
