import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SectionHeader from '../components/shared/SectionHeader';
import { ShieldCheck, Award, Zap, Users, Gem, Sparkles } from 'lucide-react';

const values = [
  { icon: Gem, title: 'EXCLUSIVITY', desc: 'Access to limited edition models and bespoke specifications found nowhere else.' },
  { icon: ShieldCheck, title: 'INTEGRITY', desc: 'Transparent pricing and honest service are the bedrock of our operations.' },
  { icon: Sparkles, title: 'PASSION', desc: 'We are car people. Our fleet is curated with technical expertise and love.' },
];

const standards = [
  { icon: Award, label: 'Concierge Delivery', desc: 'Doorstep handover with full technical briefing.' },
  { icon: Users, label: 'Dedicated Support', desc: '24/7 personal assistant for your entire trip.' },
  { icon: Zap, label: 'Instant Booking', desc: 'Confirm your drive in seconds, not hours.' },
];

const About: React.FC = () => (
  <div className="page-container">
    <Helmet>
      <title>About Velora Drive | The Legacy of Luxury</title>
      <meta name="description" content="Learn about the visionaries behind Velora Drive. Our commitment to excellence, our elite fleet standards, and the future of luxury mobility." />
    </Helmet>
    <div className="container mx-auto px-6 md:px-10">
      {/* Hero Section */}
      <div className="mb-24 lg:mb-32">
        <SectionHeader 
          eyebrow="The Legacy" 
          title="BEYOND" 
          highlight="ORDINARY" 
          description="Velora Drive is more than a rental service. It is a portal to the world's most evocative driving experiences."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold italic text-primary leading-tight">
              A commitment to <span className="text-cta">Uncompromising Luxury.</span>
            </h2>
            <div className="space-y-6 text-text-muted text-base md:text-lg font-light leading-relaxed">
              <p>
                Founded in 2024, Velora Drive emerged from a singular vision: to democratize the supercar experience without sacrificing the boutique service of a private collection.
              </p>
              <p>
                Every vehicle in our fleet is hand-selected by technical experts, ensuring that from the moment you press the start button, you are connected to a machine of peak performance and pristine condition.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 pt-10 border-t border-border">
              <div className="stat-card">
                <span className="stat-value">2024</span>
                <span className="stat-label">Inception</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">2.4K+</span>
                <span className="stat-label">Clients Served</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl group"
          >
            <img src="/src/assets/car images/1.jpg" alt="Velora Experience" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <p className="text-white text-sm font-medium italic">"Luxury is not a price point. It is a standard of care."</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* The Velora Standard (Bento-style) */}
      <div className="mb-32">
        <SectionHeader eyebrow="Service" title="THE VELORA" highlight="STANDARD" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {standards.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:border-cta/20"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-cta mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <s.icon size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold italic mb-3 text-primary">{s.label}</h3>
              <p className="text-text-muted text-sm font-light leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="section-padding bg-slate-50/50 rounded-3xl border border-border px-8 md:px-16 mb-20">
        <SectionHeader eyebrow="Principles" title="WHAT WE" highlight="UPHOLD" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {values.map((v, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }} 
              className="space-y-4"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-8 h-8 rounded-full bg-cta/10 flex items-center justify-center text-cta">
                  <v.icon size={16} />
                </div>
                <h3 className="text-xl font-heading font-bold italic tracking-wider text-primary">{v.title}</h3>
              </div>
              <p className="text-text-muted text-sm font-light leading-relaxed pl-12">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default About;
