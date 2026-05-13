import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Car as CarIcon } from 'lucide-react';
import type { Car } from '../../data/cars';

interface CarCardProps {
  car: Car;
  index?: number;
}

const CarCard: React.FC<CarCardProps> = ({ car, index = 0 }) => {
  // Extracting brand from name (assuming first word is brand)
  const [brand, ...modelParts] = car.name.split(' ');
  const model = modelParts.join(' ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group flex flex-col"
    >
      {/* Car Image Area */}
      <div className="relative h-60 p-6 flex items-center justify-center bg-slate-50/50">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        {!car.available && (
          <div className="absolute top-4 right-4 bg-red-500 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
            Unavailable
          </div>
        )}
      </div>

      {/* Details Area */}
      <div className="p-8 pt-2">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cta/10 flex items-center justify-center">
              <CarIcon size={20} className="text-cta" />
            </div>
            <span className="text-primary font-bold text-lg tracking-tight">{brand}</span>
          </div>
          <span className="text-primary font-heading font-bold italic text-xl">{model}</span>
        </div>

        <div className="flex items-center justify-between border-t border-slate-50 pt-6">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-text-muted/40 font-bold mb-1">Starting From</span>
            <span className="text-xl font-bold text-primary">₹{car.price.toLocaleString()} <span className="text-xs text-text-muted font-normal">/day</span></span>
          </div>
          
          <Link 
            to={`/cars/${car.id}`} 
            className="flex items-center gap-2 text-primary hover:text-cta transition-colors text-sm font-bold uppercase tracking-wider group/link cursor-pointer"
          >
            <span>View Details</span>
            <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;


