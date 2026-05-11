import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cars } from '../../data/cars';
import SectionHeader from '../shared/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const featured = cars.slice(0, 4);

const FleetShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
      const sections = gsap.utils.toArray<HTMLElement>('.fleet-slide');
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => '+=' + (containerRef.current?.offsetWidth || 0),
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-deep-black border-t border-white/[0.04]">
      <div className="container mx-auto px-6 md:px-10 pt-24 lg:pt-32">
        <SectionHeader eyebrow="Featured" title="ELITE" highlight="SELECTION" description="Swipe through our most requested masterpieces." />
      </div>
      <div ref={containerRef} className="h-screen flex overflow-hidden">
        {featured.map((car, i) => (
          <div key={car.id} className="fleet-slide min-w-full h-full flex items-center justify-center px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-6xl">
              <div className="relative group">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden">
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="absolute -top-8 -left-8 text-[160px] font-heading font-black text-white/[0.02] pointer-events-none select-none leading-none">
                  0{i + 1}
                </div>
              </div>
              <div>
                <span className="badge-cta mb-6 inline-block">{car.type}</span>
                <h3 className="text-4xl md:text-6xl font-heading font-bold mb-6 italic">{car.name}</h3>
                <div className="flex gap-10 mb-8 pb-8 border-b border-white/[0.06]">
                  <div>
                    <span className="block text-white/40 text-[10px] uppercase tracking-widest mb-1">Daily Rate</span>
                    <span className="text-2xl font-bold text-white">₹{car.price.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="block text-white/40 text-[10px] uppercase tracking-widest mb-1">Rating</span>
                    <span className="text-2xl font-bold text-white flex items-center gap-2"><Star size={16} className="text-cta fill-cta" /> {car.rating}</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link to={`/cars/${car.id}`} className="btn-primary flex-1">Book Now</Link>
                  <Link to={`/cars/${car.id}`} className="btn-outline flex-1">Details</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FleetShowcase;
