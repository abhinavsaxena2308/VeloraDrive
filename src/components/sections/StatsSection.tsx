import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';

const stats = [
  { val: '2,400+', label: 'Successful Rentals' },
  { val: '4.9/5', label: 'Average Rating' },
  { val: '12+', label: 'Cities Across India' },
  { val: '50+', label: 'Luxury Models' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="section-padding bg-matte-black border-y border-white/[0.04]">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`stat-card ${
                i < stats.length - 1 ? 'lg:border-r lg:border-white/[0.06]' : ''
              }`}
            >
              <span className="stat-value">{stat.val}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
