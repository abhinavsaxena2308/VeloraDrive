import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/shared/SectionHeader';

const values = [
  { title: 'EXCLUSIVITY', desc: 'Access to limited edition models and bespoke specifications found nowhere else.' },
  { title: 'INTEGRITY', desc: 'Transparent pricing and honest service are the bedrock of our operations.' },
  { title: 'PASSION', desc: 'We are car people. Our fleet is curated with technical expertise and love.' },
];

const About: React.FC = () => (
  <div className="page-container">
    <div className="container mx-auto px-6 md:px-10">
      {/* Hero */}
      <SectionHeader eyebrow="Our Story" title="DRIVING" highlight="EXCELLENCE" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          <p className="text-primary text-xl font-light leading-relaxed italic font-heading">
            "Founded in 2024, Velora Drive has quickly become the premier destination for automotive enthusiasts seeking the ultimate luxury rental experience."
          </p>
          <p className="text-text-muted text-base leading-relaxed font-light">
            Our mission is to bridge the gap between dream and reality, providing access to the world's most exclusive vehicles with a level of service that exceeds every expectation. We believe a car is not just transportation — it's a vessel for memories and a statement of identity.
          </p>
          <div className="grid grid-cols-2 gap-10 pt-6 border-t border-border">
            <div className="stat-card"><span className="stat-value">2024</span><span className="stat-label">Year Founded</span></div>
            <div className="stat-card"><span className="stat-value">2.4K+</span><span className="stat-label">Happy Clients</span></div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="aspect-[4/5] rounded-2xl overflow-hidden relative">
          <img src="/src/assets/car images/13.jpg" alt="Luxury car" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-cta/10 to-transparent" />
        </motion.div>
      </div>

      {/* Values */}
      <div className="section-padding border-t border-border">
        <SectionHeader eyebrow="Values" title="WHAT WE" highlight="STAND FOR" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="space-y-4 group">
              <div className="w-10 h-1 bg-primary/10 group-hover:bg-cta transition-colors duration-500" />
              <h3 className="text-2xl font-heading font-bold italic tracking-widest text-primary">{v.title}</h3>
              <p className="text-text-muted text-sm font-light leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default About;
