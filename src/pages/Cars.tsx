import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Zap, Clock, Smartphone, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cars: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'SUV', 'Sedan', 'Luxury', 'Sports', 'Electric'];
  
  const cars = [
    { id: 1, name: 'Porsche 911 GT3', type: 'Sports', price: 450, rating: 4.9, image: 'P911' },
    { id: 2, name: 'BMW M4 Competition', type: 'Sports', price: 380, rating: 4.8, image: 'BM4' },
    { id: 3, name: 'Range Rover SV', type: 'SUV', price: 550, rating: 4.9, image: 'RRSV' },
    { id: 4, name: 'Tesla Model S Plaid', type: 'Electric', price: 350, rating: 4.7, image: 'TMS' },
    { id: 5, name: 'Mercedes S-Class', type: 'Luxury', price: 500, rating: 5.0, image: 'MS' },
    { id: 6, name: 'Audi RS Q8', type: 'SUV', price: 420, rating: 4.8, image: 'ARQ8' },
  ];

  const filteredCars = activeCategory === 'All' 
    ? cars 
    : cars.filter(car => car.type === activeCategory);

  return (
    <div className="pt-32 pb-20 bg-deep-black min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-8xl font-heading font-bold mb-6 italic">OUR <span className="text-cta">FLEET</span></h1>
          <p className="text-secondary max-w-2xl text-lg font-light">
            Meticulously curated selection of the world's most exclusive vehicles. 
            From track-ready monsters to executive suites on wheels.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16 items-center justify-between bg-white/5 p-6 rounded-3xl border border-white/5 backdrop-blur-xl">
          <div className="flex gap-4 overflow-x-auto pb-4 lg:pb-0 no-scrollbar w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat 
                    ? 'bg-cta border-cta text-white shadow-glow' 
                    : 'bg-white/5 border-white/10 text-secondary hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex gap-4 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={16} />
              <input
                type="text"
                placeholder="Search your car..."
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-6 py-3 text-xs focus:outline-none focus:border-cta transition-colors text-white"
              />
            </div>
            <button className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:border-white/30 transition-all">
              <Filter size={16} /> Sort <ChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-matte-black group-hover:scale-110 transition-transform duration-700"></div>
                {/* Car Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 text-white/10 italic text-6xl font-heading">
                  {car.image}
                </div>
                <div className="absolute top-6 right-6 bg-cta text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-[0.2em]">
                  {car.type}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-heading font-bold mb-2 italic">{car.name}</h3>
                    <div className="flex items-center gap-1 text-cta text-xs">
                      <Star size={12} fill="currentColor" />
                      <span className="text-secondary ml-2 font-medium">({car.rating})</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-white">${car.price}</span>
                    <span className="text-secondary text-[10px] uppercase tracking-widest block font-bold">/ Day</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-10">
                  {[
                    { icon: Zap, label: 'Turbo' },
                    { icon: Clock, label: 'Auto' },
                    { icon: Smartphone, label: 'Smart' }
                  ].map((feat, i) => (
                    <div key={i} className="text-center p-3 rounded-2xl bg-white/5 border border-white/5 group-hover:border-cta/20 transition-colors">
                      <feat.icon size={18} className="mx-auto mb-2 text-cta" />
                      <span className="text-[9px] text-secondary uppercase font-bold tracking-widest">{feat.label}</span>
                    </div>
                  ))}
                </div>

                <Link to={`/cars/${car.id}`} className="btn-primary w-full">
                  Reserve Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="mt-24 flex justify-center gap-4">
          <button className="w-14 h-14 rounded-2xl bg-cta text-white font-bold shadow-glow">1</button>
          <button className="w-14 h-14 rounded-2xl border border-white/10 text-secondary hover:border-cta transition-colors font-bold">2</button>
          <button className="w-14 h-14 rounded-2xl border border-white/10 text-secondary hover:border-cta transition-colors font-bold">3</button>
        </div>
      </div>
    </div>
  );
};

export default Cars;
