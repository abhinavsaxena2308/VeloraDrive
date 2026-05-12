import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
  className = '',
}) => {
  return (
    <div className={`mb-16 lg:mb-20 ${align === 'center' ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`inline-flex items-center gap-3 mb-6 ${align === 'center' ? 'justify-center' : ''}`}
        >
          <span className="w-6 h-[1.5px] bg-cta" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-cta">
            {eyebrow}
          </span>
          <span className="w-6 h-[1.5px] bg-cta" />
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold italic uppercase tracking-tighter leading-[0.95]"
      >
        {title}{' '}
        {highlight && <span className="text-cta">{highlight}</span>}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-text-muted text-base lg:text-lg font-light leading-relaxed mt-6 ${
            align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
