import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Gauge, Zap, Fuel, Users, Settings2, ArrowLeft, Shield, Check } from 'lucide-react';
import { getCarById, cars } from '../data/cars';
import CarCard from '../components/ui/CarCard';

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const car = getCarById(Number(id));

  if (!car) {
    return (
      <div className="page-container flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold italic mb-4">Car Not Found</h1>
          <Link to="/cars" className="btn-primary">Back to Fleet</Link>
        </div>
      </div>
    );
  }

  const related = cars.filter(c => c.type === car.type && c.id !== car.id).slice(0, 3);
  const specIcons = [Gauge, Zap, Gauge, Fuel, Users, Settings2];

  const allSpecs = [
    ...car.specs,
    { label: 'Fuel Type', value: car.fuel },
    { label: 'Seats', value: `${car.seats} Seats` },
    { label: 'Transmission', value: car.transmission },
  ];

  return (
    <div className="page-container">
      <div className="container mx-auto px-6 md:px-10">
        {/* Back link */}
        <Link to="/cars" className="inline-flex items-center gap-2 text-text-muted hover:text-cta transition-colors mb-10 group text-[10px] uppercase tracking-[0.2em] font-semibold cursor-pointer">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Fleet
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left — Image & Details */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="aspect-video rounded-2xl overflow-hidden mb-10">
              <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
            </motion.div>

            {/* Title block */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
              <div>
                <h1 className="text-4xl md:text-6xl font-heading font-bold italic mb-3 text-primary">{car.name}</h1>
                <div className="flex items-center gap-4">
                  <span className="badge-cta">{car.type}</span>
                  <div className="flex items-center gap-1.5">
                    <Star size={14} className="text-cta fill-cta" />
                    <span className="text-primary font-semibold text-sm">{car.rating}</span>
                    <span className="text-text-muted/60 text-sm">({car.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-text-muted text-lg font-light leading-relaxed mb-12 max-w-3xl">{car.description}</p>

            {/* Specs */}
            <h2 className="text-xl font-heading font-bold mb-8 italic uppercase">Technical <span className="text-cta">Specifications</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {allSpecs.map((spec, i) => {
                const Icon = specIcons[i % specIcons.length];
                return (
                  <div key={i} className="glass-card p-6 flex flex-col items-center text-center group hover:border-cta/20">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-cta mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-text-muted/60 font-semibold mb-1">{spec.label}</span>
                    <span className="text-primary font-bold">{spec.value}</span>
                  </div>
                );
              })}
            </div>

            {/* Features */}
            <h2 className="text-xl font-heading font-bold mb-6 italic uppercase">Key <span className="text-cta">Features</span></h2>
            <div className="grid grid-cols-2 gap-3 mb-12">
              {car.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 py-3 px-4 rounded-xl bg-slate-50 border border-border">
                  <div className="w-5 h-5 rounded-full bg-cta/10 flex items-center justify-center text-cta flex-shrink-0">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm text-text-muted">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Sticky Booking Card */}
          <div className="lg:col-span-1">
            <div className="glass-card p-8 sticky top-28 border-cta/10">
              <div className="flex justify-between items-center mb-8 pb-8 border-b border-border">
                <div>
                  <span className="text-3xl font-bold text-primary">₹{car.price.toLocaleString()}</span>
                  <span className="block text-[9px] uppercase tracking-widest text-text-muted/60 font-semibold mt-1">per day</span>
                </div>
                <div className="w-12 h-12 bg-cta/10 rounded-xl flex items-center justify-center text-cta">
                  <Shield size={24} />
                </div>
              </div>

              <div className="space-y-5 mb-8">
                <div>
                  <label htmlFor="detail-city" className="input-label">Pick-up Location</label>
                  <select id="detail-city" className="input-field cursor-pointer">
                    <option>Delhi NCR</option><option>Mumbai</option><option>Bangalore</option><option>Hyderabad</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="detail-pickup" className="input-label">Pick-up</label>
                    <input id="detail-pickup" type="date" className="input-field cursor-pointer" />
                  </div>
                  <div>
                    <label htmlFor="detail-return" className="input-label">Return</label>
                    <input id="detail-return" type="date" className="input-field cursor-pointer" />
                  </div>
                </div>
              </div>

              <button className="btn-primary w-full py-4 mb-6">Reserve This Machine</button>

              <div className="space-y-3">
                {['Free cancellation up to 24h', 'No hidden charges', 'Doorstep delivery included'].map((t, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[11px] text-text-muted/60">
                    <div className="w-4 h-4 rounded-full bg-cta/10 flex items-center justify-center text-cta flex-shrink-0">
                      <Check size={8} strokeWidth={3} />
                    </div>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Cars */}
        {related.length > 0 && (
          <div className="mt-20 pt-16 border-t border-border">
            <h2 className="text-2xl font-heading font-bold italic mb-10 uppercase">Similar <span className="text-cta">Vehicles</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((c, i) => <CarCard key={c.id} car={c} index={i} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDetails;
