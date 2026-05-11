import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Zap, Clock, Shield, Users, Fuel, Gauge, ArrowLeft } from 'lucide-react';

const CarDetails: React.FC = () => {
  useParams<{ id: string }>();

  // Mock data for a single car
  const car = {
    id: 1,
    name: 'Porsche 911 GT3',
    type: 'Sports',
    price: 450,
    rating: 4.9,
    reviews: 124,
    description: 'The Porsche 911 GT3 is a high-performance homologation model of the Porsche 911 sports car. It is a line of high-performance models, which began with the 911 Carrera RS in 1973.',
    specs: [
      { label: '0-100 km/h', value: '3.4s', icon: Gauge },
      { label: 'Power', value: '502 HP', icon: Zap },
      { label: 'Top Speed', value: '318 km/h', icon: Gauge },
      { label: 'Fuel Type', value: 'Premium', icon: Fuel },
      { label: 'Seats', value: '2 Seats', icon: Users },
      { label: 'Transmission', value: 'Automatic', icon: Clock },
    ]
  };

  return (
    <div className="pt-40 pb-20 bg-deep-black min-h-screen">
      <div className="container mx-auto px-6">
        <Link to="/cars" className="flex items-center gap-2 text-secondary hover:text-cta transition-colors mb-12 group uppercase tracking-[0.2em] text-[10px] font-bold">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Fleet
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column: Image & Details */}
          <div className="lg:col-span-2">
            <div className="glass-card aspect-video mb-16 flex items-center justify-center italic text-white/5 text-8xl font-heading">
              {car.name}
            </div>

            <div className="mb-16">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
                <div>
                  <h1 className="text-5xl md:text-7xl mb-4 font-heading font-bold italic">{car.name}</h1>
                  <div className="flex items-center gap-4">
                    <span className="bg-cta text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-[0.2em]">
                      {car.type}
                    </span>
                    <div className="flex items-center gap-1 text-cta">
                      <Star size={16} fill="currentColor" />
                      <span className="text-white font-bold text-sm ml-1">{car.rating}</span>
                      <span className="text-secondary text-sm ml-1">({car.reviews} Reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-secondary text-xl font-light leading-relaxed max-w-3xl">
                {car.description}
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-heading font-bold mb-10 italic">TECHNICAL <span className="text-cta">SPECIFICATIONS</span></h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {car.specs.map((spec, index) => (
                  <div key={index} className="glass-card p-8 flex flex-col items-center text-center group hover:border-cta/20 transition-colors">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-cta mb-6 group-hover:scale-110 transition-transform">
                      <spec.icon size={28} />
                    </div>
                    <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-bold mb-2">{spec.label}</span>
                    <span className="text-white font-bold text-lg">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Card */}
          <div className="lg:col-span-1">
            <div className="glass-card p-10 sticky top-32 border-cta/10 shadow-2xl">
              <div className="flex justify-between items-center mb-10 pb-10 border-b border-white/5">
                <div>
                  <span className="text-5xl font-bold text-white">${car.price}</span>
                  <span className="text-secondary text-[10px] uppercase tracking-widest block font-bold mt-1">per day</span>
                </div>
                <div className="w-14 h-14 bg-cta/10 rounded-2xl flex items-center justify-center text-cta">
                  <Shield size={28} />
                </div>
              </div>

              <div className="space-y-8 mb-12">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-secondary font-black">Pick-up Location</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm text-white focus:outline-none focus:border-cta transition-colors">
                    <option>Delhi NCR</option>
                    <option>Mumbai</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest text-secondary font-black">Pick-up</label>
                    <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-xs text-white focus:outline-none focus:border-cta" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest text-secondary font-black">Return</label>
                    <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-xs text-white focus:outline-none focus:border-cta" />
                  </div>
                </div>
              </div>

              <button className="btn-primary w-full py-5 mb-8">
                Reserve This Machine
              </button>
              
              <div className="space-y-5">
                {[
                  'Free cancellation up to 24h',
                  'No hidden service charges',
                  'Concierge delivery included'
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-[11px] text-secondary font-medium">
                    <div className="w-5 h-5 rounded-full bg-cta/10 flex items-center justify-center text-cta">
                      <Check size={10} />
                    </div>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Check = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default CarDetails;
