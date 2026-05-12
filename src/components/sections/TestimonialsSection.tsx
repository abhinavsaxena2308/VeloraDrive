import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import SectionHeader from '../shared/SectionHeader';

const testimonials = [
  { name: 'Arjun Mehta', role: 'Business Executive', text: 'Velora Drive made my Delhi-Jaipur trip unforgettable. The Range Rover was immaculate and doorstep delivery saved me so much time.', rating: 5, city: 'Delhi NCR' },
  { name: 'Priya Sharma', role: 'Content Creator', text: 'The booking process is incredibly smooth — I had a Porsche 911 at my hotel within 30 minutes. Professional and pristine.', rating: 5, city: 'Mumbai' },
  { name: 'Rahul Verma', role: 'Startup Founder', text: 'We use Velora for corporate client pickups. The Mercedes fleet is always showroom condition. Highly recommend monthly plans.', rating: 5, city: 'Bangalore' },
  { name: 'Neha Gupta', role: 'Wedding Planner', text: 'Booked a Lamborghini for a wedding — the couple was thrilled. Velora handled everything perfectly. Five stars!', rating: 5, city: 'Jaipur' },
  { name: 'Karan Singh', role: 'Weekend Explorer', text: 'I rent a Thar every other weekend for hill station trips. Great prices, reliable cars, and 24/7 support works.', rating: 4, city: 'Chandigarh' },
];

const TestimonialsSection: React.FC = () => (
  <section className="section-padding bg-background overflow-hidden">
    <div className="container mx-auto px-6 md:px-10">
      <SectionHeader eyebrow="Testimonials" title="WHAT OUR" highlight="DRIVERS SAY" description="Real experiences from verified renters across India." align="center" />
      <Swiper modules={[Autoplay]} spaceBetween={24} slidesPerView={1} autoplay={{ delay: 4000, disableOnInteraction: false }} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="pb-4">
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8 h-full flex flex-col">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (<Star key={j} size={14} className="text-cta fill-cta" />))}
              </div>
              <p className="text-text-muted text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
              <div className="flex items-center justify-between border-t border-border pt-5">
                <div>
                  <span className="block text-primary font-semibold text-sm">{t.name}</span>
                  <span className="text-[10px] text-text-muted/60 uppercase tracking-wider">{t.role}</span>
                </div>
                <span className="badge-neutral">{t.city}</span>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default TestimonialsSection;
