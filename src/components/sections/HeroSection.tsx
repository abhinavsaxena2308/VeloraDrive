import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── Car Images for the vertical carousel ─────────────────────────────────────
const CAR_IMAGES = [
  {
    name: 'Porsche 911',
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    label: 'Sports',
  },
  {
    name: 'Lamborghini',
    url: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?auto=format&fit=crop&q=80&w=800',
    label: 'Supercar',
  },
  {
    name: 'Mercedes S-Class',
    url: 'https://images.unsplash.com/photo-1555529731-4c947233002b?auto=format&fit=crop&q=80&w=800',
    label: 'Luxury',
  },
  {
    name: 'Audi RS7',
    url: 'https://images.unsplash.com/photo-1606152424101-ad2f914550ef?auto=format&fit=crop&q=80&w=800',
    label: 'Performance',
  },
  {
    name: 'Range Rover',
    url: 'https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&q=80&w=800',
    label: 'SUV',
  },
  {
    name: 'BMW M4',
    url: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&q=80&w=800',
    label: 'GT',
  },
];

const COLUMN_1 = [...CAR_IMAGES, ...CAR_IMAGES];
const COLUMN_2 = [...CAR_IMAGES].reverse().concat([...CAR_IMAGES].reverse());

// ─── Vertical Carousel ────────────────────────────────────────────────────────
const VerticalCarousel = ({
  images,
  duration = 32,
}: {
  images: typeof CAR_IMAGES;
  duration?: number;
}) => (
  <div className="relative h-full overflow-hidden w-full">
    <motion.div
      className="flex flex-col gap-4"
      animate={{ y: ['0%', '-50%'] }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
      style={{ willChange: 'transform' }}
    >
      {images.map((car, i) => (
        <div
          key={i}
          className="aspect-[3/4] w-full rounded-2xl overflow-hidden relative group flex-shrink-0"
        >
          <img
            src={car.url}
            alt={car.name}
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          {/* Car label */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-cta block mb-0.5">
              {car.label}
            </span>
            <span className="text-white font-semibold text-sm">{car.name}</span>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
);

// ─── Stat Item ────────────────────────────────────────────────────────────────
const StatItem = ({
  val,
  label,
  delay,
}: {
  val: string;
  label: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="text-center"
  >
    <span className="block text-2xl lg:text-3xl font-heading font-bold text-white italic leading-none mb-1">
      {val}
    </span>
    <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-semibold">
      {label}
    </span>
  </motion.div>
);

// ─── Trust Badge ──────────────────────────────────────────────────────────────
const TrustBadge = ({
  icon: Icon,
  label,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex items-center gap-2"
  >
    <Icon size={14} className="text-cta flex-shrink-0" />
    <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
      {label}
    </span>
  </motion.div>
);

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen bg-deep-black flex overflow-hidden">

      {/* ── Background ambient blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-cta/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[5%] w-[35%] h-[50%] bg-blue-600/6 rounded-full blur-[120px]" />
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/*  LEFT CONTENT  — 50% wide on desktop        */}
      {/* ═══════════════════════════════════════════ */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 pt-24 lg:pt-0">

        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 mb-8 self-start"
        >
          <span className="w-6 h-[1.5px] bg-cta" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-cta">
            Premium Self Drive
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-heading font-extrabold text-white leading-[0.92] tracking-tighter italic mb-6"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
        >
          Drive Luxury
          <br />
          <span className="text-gradient">Beyond Limits.</span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-white/55 text-base lg:text-lg font-light leading-relaxed max-w-md mb-10"
        >
          Rent world-class supercars across India. Seamless booking,
          unmatched comfort, and automotive excellence — all at your fingertips.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <Link to="/cars" className="btn-primary group">
            Explore Fleet
            <ArrowRight
              size={16}
              className="ml-1 group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
          <Link to="/pricing" className="btn-outline">
            View Pricing
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-10 mb-10 pb-10 border-b border-white/5"
        >
          <StatItem val="500+" label="Premium Cars" delay={0.65} />
          <div className="w-px h-8 bg-white/10" />
          <StatItem val="50+" label="Cities" delay={0.75} />
          <div className="w-px h-8 bg-white/10" />
          <StatItem val="10K+" label="Happy Clients" delay={0.85} />
        </motion.div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-6">
          <TrustBadge icon={Shield} label="Fully Insured" delay={0.9} />
          <TrustBadge icon={Zap} label="Instant Booking" delay={1.0} />
          <TrustBadge icon={Star} label="5-Star Rated" delay={1.1} />
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/*  RIGHT SIDE — dual infinite carousels       */}
      {/* ═══════════════════════════════════════════ */}
      <div className="hidden lg:block lg:w-1/2 relative">

        {/* Left-side bleed gradient */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-deep-black to-transparent z-10 pointer-events-none" />
        {/* Top gradient */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-deep-black to-transparent z-10 pointer-events-none" />
        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-deep-black to-transparent z-10 pointer-events-none" />

        {/* Two columns */}
        <div className="absolute inset-0 flex gap-4 px-6 py-12 overflow-hidden">
          <div className="flex-1 h-full">
            <VerticalCarousel images={COLUMN_1} duration={35} />
          </div>
          <div className="flex-1 h-full mt-16">
            <VerticalCarousel images={COLUMN_2} duration={45} />
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 hidden lg:flex"
      >
        <span className="text-[8px] uppercase tracking-[0.4em] text-white/25 font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-white/25" />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
