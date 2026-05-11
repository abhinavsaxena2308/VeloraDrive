import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Car, Search, ChevronDown } from 'lucide-react';
import { cities } from '../../data/cars';

const BookingWidget: React.FC = () => {
  const [pickupCity, setPickupCity] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [carType, setCarType] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-full"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-green-500/80 font-semibold">
            Cars Available Now
          </span>
        </div>
      </div>

      {/* Booking Form */}
      <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">

          {/* Pickup City */}
          <div className="relative">
            <label htmlFor="pickup-city" className="input-label">
              Pickup City
            </label>
            <div className="relative">
              <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25" />
              <select
                id="pickup-city"
                value={pickupCity}
                onChange={(e) => setPickupCity(e.target.value)}
                className="input-field pl-10 pr-8 appearance-none cursor-pointer"
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
            </div>
          </div>

          {/* Pickup Date */}
          <div>
            <label htmlFor="pickup-date" className="input-label">
              Pickup Date
            </label>
            <div className="relative">
              <Calendar size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25" />
              <input
                id="pickup-date"
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="input-field pl-10 cursor-pointer"
              />
            </div>
          </div>

          {/* Return Date */}
          <div>
            <label htmlFor="return-date" className="input-label">
              Return Date
            </label>
            <div className="relative">
              <Calendar size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25" />
              <input
                id="return-date"
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="input-field pl-10 cursor-pointer"
              />
            </div>
          </div>

          {/* Car Type */}
          <div>
            <label htmlFor="car-type" className="input-label">
              Car Type
            </label>
            <div className="relative">
              <Car size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25" />
              <select
                id="car-type"
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
                className="input-field pl-10 pr-8 appearance-none cursor-pointer"
              >
                <option value="">All Types</option>
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Sports">Sports</option>
                <option value="Luxury">Luxury</option>
                <option value="Electric">Electric</option>
                <option value="Hatchback">Hatchback</option>
              </select>
              <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button className="btn-primary w-full py-4 text-[11px] group">
          <Search size={16} className="group-hover:scale-110 transition-transform" />
          Search Available Cars
        </button>
      </div>
    </motion.div>
  );
};

export default BookingWidget;
