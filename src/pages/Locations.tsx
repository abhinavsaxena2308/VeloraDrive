import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const Locations: React.FC = () => {
  const cities = [
    { name: 'Delhi', cars: 124, image: 'https://images.unsplash.com/photo-1587474260584-1f20d42b624a?auto=format&fit=crop&q=80&w=800' },
    { name: 'Mumbai', cars: 98, image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=800' },
    { name: 'Bangalore', cars: 76, image: 'https://images.unsplash.com/photo-1596761361400-e353c274f2ee?auto=format&fit=crop&q=80&w=800' },
    { name: 'Gurgaon', cars: 45, image: 'https://images.unsplash.com/photo-1618037041793-19597799f2df?auto=format&fit=crop&q=80&w=800' },
    { name: 'Noida', cars: 32, image: 'https://images.unsplash.com/photo-1594220202927-463e260909c3?auto=format&fit=crop&q=80&w=800' },
    { name: 'Chandigarh', cars: 28, image: 'https://images.unsplash.com/photo-1622300022231-64906f0e086f?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl mb-4">OUR <span className="text-primary">LOCATIONS</span></h1>
          <p className="text-secondary max-w-2xl text-lg">
            Find Velora Drive in the most prominent hubs. We provide seamless 
            pick-up and drop-off services across all major cities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={city.image} 
                alt={city.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{city.name}</h3>
                  <div className="flex items-center gap-2 text-secondary text-sm">
                    <Car size={16} className="text-primary" />
                    <span>{city.cars} Cars Available</span>
                  </div>
                </div>
                <Link to="/cars" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-glow translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <ChevronRight size={24} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map UI Mockup */}
        <div className="glass-card p-12 text-center">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 text-primary shadow-glow">
            <MapPin size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-6">Can't find your city?</h2>
          <p className="text-secondary max-w-xl mx-auto mb-10">
            We are rapidly expanding our network. If you need a luxury vehicle in a 
            location not listed here, contact our concierge team and we'll arrange 
            a custom delivery for you.
          </p>
          <button className="btn-primary">
            Request Custom Delivery
          </button>
        </div>
      </div>
    </div>
  );
};

export default Locations;
