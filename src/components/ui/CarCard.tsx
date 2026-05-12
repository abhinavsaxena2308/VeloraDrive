import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Fuel, Users, Settings2 } from 'lucide-react';
import type { Car } from '../../data/cars';

interface CarCardProps {
  car: Car;
  index?: number;
}

const CarCard: React.FC<CarCardProps> = ({ car, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="glass-card overflow-hidden group flex flex-col"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-4 right-4 badge-cta">{car.type}</span>
        {!car.available && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white/80 font-bold text-sm uppercase tracking-widest">Unavailable</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-heading font-bold italic mb-1">{car.name}</h3>
            <div className="flex items-center gap-1">
              <Star size={12} className="text-cta fill-cta" />
              <span className="text-primary text-xs font-semibold">{car.rating}</span>
              <span className="text-text-muted/60 text-xs ml-1">({car.reviews})</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-primary">₹{car.price.toLocaleString()}</span>
            <span className="block text-[9px] uppercase tracking-widest text-text-muted/60 font-semibold">/ day</span>
          </div>
        </div>

        {/* Specs row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { icon: Fuel, label: car.fuel },
            { icon: Users, label: `${car.seats} Seats` },
            { icon: Settings2, label: car.transmission },
          ].map((spec, i) => (
            <div key={i} className="text-center py-2.5 rounded-xl bg-slate-50 border border-border group-hover:border-cta/10 transition-colors">
              <spec.icon size={14} className="mx-auto mb-1.5 text-cta" />
              <span className="text-[9px] text-text-muted uppercase font-semibold tracking-wider">{spec.label}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          <Link to={`/cars/${car.id}`} className="btn-outline flex-1 py-3 text-[10px]">Details</Link>
          <Link to={`/cars/${car.id}`} className="btn-primary flex-1 py-3 text-[10px]">Book Now</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
