import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, Clock } from 'lucide-react';

const badges = [
  { icon: Shield, label: 'Fully Insured' },
  { icon: Zap, label: 'Instant Booking' },
  { icon: Star, label: '5-Star Rated' },
  { icon: Clock, label: '24/7 Support' },
];

interface TrustBadgesProps {
  count?: number;
  className?: string;
}

const TrustBadges: React.FC<TrustBadgesProps> = ({ count = 4, className = '' }) => {
  const items = badges.slice(0, count);

  return (
    <div className={`flex flex-wrap gap-6 ${className}`}>
      {items.map((badge, i) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
          className="flex items-center gap-2"
        >
          <badge.icon size={14} className="text-cta flex-shrink-0" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold">
            {badge.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default TrustBadges;
