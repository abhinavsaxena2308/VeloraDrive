import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-deep-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h1 className="text-5xl md:text-8xl font-heading font-bold mb-10 italic uppercase tracking-tight">OUR <span className="text-cta">STORY</span></h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-secondary text-2xl font-light leading-relaxed italic">
                "Founded in 2024, Velora Drive has quickly become the premier destination for 
                automotive enthusiasts seeking the ultimate luxury rental experience."
              </p>
              <p className="text-secondary text-lg leading-relaxed font-light">
                Our mission is to bridge the gap between dream and reality, providing 
                access to the world's most exclusive vehicles with a level of service 
                that exceeds every expectation. We believe that a car is not just a tool for 
                transportation, but a vessel for memories and a statement of identity.
              </p>
              
              <div className="grid grid-cols-2 gap-12 pt-8 border-t border-white/5">
                <div>
                  <span className="block text-5xl font-heading font-bold text-white mb-2 italic">2024</span>
                  <span className="text-secondary uppercase tracking-[0.3em] text-[10px] font-bold">Year Founded</span>
                </div>
                <div>
                  <span className="block text-5xl font-heading font-bold text-white mb-2 italic">1.2K+</span>
                  <span className="text-secondary uppercase tracking-[0.3em] text-[10px] font-bold">Happy Clients</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card aspect-[4/5] flex items-center justify-center italic text-white/5 text-6xl font-heading relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cta/10 to-transparent"></div>
              OUR LEGACY
            </motion.div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="section-padding border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "EXCLUSIVITY", desc: "Access to limited edition models and bespoke specifications found nowhere else." },
              { title: "INTEGRITY", desc: "Transparent pricing and honest service are the bedrock of our operations." },
              { title: "PASSION", desc: "We are car people. Our fleet is curated with technical expertise and love." }
            ].map((item, i) => (
              <div key={i} className="space-y-6 group">
                <div className="w-12 h-1 bg-white/10 group-hover:bg-cta transition-colors duration-500"></div>
                <h3 className="text-3xl font-heading font-bold italic tracking-widest">{item.title}</h3>
                <p className="text-secondary text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
