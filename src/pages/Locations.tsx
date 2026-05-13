import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader';

const locations = [
  { city: 'Delhi NCR', cars: 45, image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=600', active: true },
  { city: 'Mumbai', cars: 38, image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=600', active: true },
  { city: 'Bangalore', cars: 32, image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=600', active: true },
  { city: 'Hyderabad', cars: 25, image: 'https://images.unsplash.com/photo-1572883454114-efb8ff4bfd60?auto=format&fit=crop&q=80&w=600', active: true },
  { city: 'Chennai', cars: 20, image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=600', active: true },
  { city: 'Pune', cars: 22, image: 'https://images.unsplash.com/photo-1625046508019-da69b107eac1?auto=format&fit=crop&q=80&w=600', active: true },
  { city: 'Jaipur', cars: 18, image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=600', active: true },
  { city: 'Goa', cars: 15, image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=600', active: true },
  { city: 'Chandigarh', cars: 12, image: 'https://images.unsplash.com/photo-1590766940554-634ac1098f42?auto=format&fit=crop&q=80&w=600', active: true },
  { city: 'Kolkata', cars: 0, image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80&w=600', active: false },
  { city: 'Ahmedabad', cars: 0, image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=600', active: false },
  { city: 'Lucknow', cars: 0, image: 'https://images.unsplash.com/photo-1584806749948-697891c67821?auto=format&fit=crop&q=80&w=600', active: false },
];

const Locations: React.FC = () => (
  <div className="page-container">
    <div className="container mx-auto px-6 md:px-10">
      <SectionHeader eyebrow="Locations" title="CITIES WE" highlight="SERVE" description="Pick up your dream car from any of our locations across India." align="center" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((loc, i) => (
          <motion.div key={loc.city} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className={`glass-card overflow-hidden group relative ${!loc.active ? 'opacity-50' : ''}`}>
            <div className="h-44 overflow-hidden relative">
              <img src={loc.image} alt={loc.city} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              {!loc.active && (
                <div className="absolute top-4 right-4 badge-neutral">Coming Soon</div>
              )}
            </div>
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-cta" />
                <span className="font-heading font-bold italic text-lg text-primary">{loc.city}</span>
              </div>
              {loc.active && (
                <span className="text-[10px] uppercase tracking-wider text-text-muted/60 font-semibold">{loc.cars} cars</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Locations;