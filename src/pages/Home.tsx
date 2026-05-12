import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import BentoFeatures from '../components/sections/BentoFeatures';
import FleetShowcase from '../components/sections/FleetShowcase';
import StatsSection from '../components/sections/StatsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-background overflow-x-hidden">
      <HeroSection />
      <BentoFeatures />
      <FleetShowcase />
      <StatsSection />
      <TestimonialsSection />

      {/* Final CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6 md:px-10">
          <div className="glass-card p-12 md:p-20 text-center overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_var(--color-primary)_0%,_transparent_70%)] opacity-[0.04]" />
            <h2 className="text-4xl md:text-7xl font-heading font-bold mb-8 italic leading-[0.95] relative z-10">
              THE ROAD IS YOURS.
              <br />
              <span className="text-gradient">TAKE COMMAND.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link to="/signup" className="btn-primary min-w-[180px]">Get Started</Link>
              <Link to="/contact" className="btn-outline min-w-[180px]">Contact Concierge</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
