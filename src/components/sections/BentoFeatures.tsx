import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Smartphone, Truck, ChevronRight } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const features = [
  {
    icon: Shield,
    title: 'Total Peace of Mind',
    desc: 'Comprehensive insurance and 24/7 roadside assistance included in every rental.',
    span: 'lg:col-span-2 lg:row-span-2',
    large: true,
  },
  {
    icon: Truck,
    title: 'Doorstep Delivery',
    desc: 'We bring the car to your location — home, airport, or office.',
    span: 'lg:col-span-2',
    large: false,
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    desc: 'Ready in 15 minutes.',
    span: '',
    large: false,
  },
  {
    icon: Smartphone,
    title: 'Digital Keys',
    desc: 'Unlock via app.',
    span: '',
    large: false,
  },
];

const BentoFeatures: React.FC = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        <SectionHeader
          eyebrow="Why Velora"
          title="THE VELORA"
          highlight="STANDARD"
          description="Excellence is not an option, it's our baseline. Discover the details that make every journey extraordinary."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-5 h-auto md:h-[550px]">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`glass-card p-8 lg:p-10 flex flex-col ${
                feat.large ? 'justify-end' : feat.span ? 'justify-between' : 'justify-center items-center text-center'
              } group relative overflow-hidden ${feat.span}`}
            >
              {/* Icon */}
              <div className={`${feat.large ? 'absolute top-10 left-10' : feat.span ? '' : 'mb-4'} w-12 h-12 bg-cta/10 rounded-xl flex items-center justify-center text-cta group-hover:scale-110 transition-transform duration-300`}>
                <feat.icon size={feat.large ? 24 : 20} />
              </div>

              {/* Content */}
              <div className={feat.large ? 'relative z-10' : ''}>
                <h3 className={`font-heading font-bold italic uppercase mb-2 text-primary ${
                  feat.large ? 'text-2xl lg:text-3xl' : feat.span ? 'text-xl' : 'text-sm tracking-widest'
                }`}>
                  {feat.title}
                </h3>
                <p className={`text-text-muted leading-relaxed ${feat.large ? 'text-sm max-w-sm' : 'text-xs'}`}>
                  {feat.desc}
                </p>
              </div>

              {/* Hover glow on large card */}
              {feat.large && (
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cta/[0.02] rounded-full blur-3xl group-hover:bg-cta/[0.04] transition-all duration-700" />
              )}

              {/* Arrow on wide card */}
              {feat.span === 'lg:col-span-2' && !feat.large && (
                <div className="w-10 h-10 rounded-xl bg-primary/[0.04] flex items-center justify-center group-hover:text-cta transition-colors self-end text-primary/30">
                  <ChevronRight size={18} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
